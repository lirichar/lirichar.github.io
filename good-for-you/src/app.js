import {
  applyEffects,
  buildRun,
  clamp,
  describeChild,
  describeRouteLine,
  getChoice,
  getEndingCount,
  makeSeed,
  pickEnding,
  weightedEvent
} from "./engine.js";
import { getCollection, saveEnding } from "./storage.js";
import { makeShareText, updateUrl } from "./share.js";

const dom = {
  introScreen: document.querySelector("#introScreen"),
  playScreen: document.querySelector("#playScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  startForm: document.querySelector("#startForm"),
  wishInput: document.querySelector("#wishInput"),
  seedInput: document.querySelector("#seedInput"),
  modeSelect: document.querySelector("#modeSelect"),
  rollSeedButton: document.querySelector("#rollSeedButton"),
  restartButton: document.querySelector("#restartButton"),
  resultRestartButton: document.querySelector("#resultRestartButton"),
  seedBadge: document.querySelector("#seedBadge"),
  resultSeedBadge: document.querySelector("#resultSeedBadge"),
  parentType: document.querySelector("#parentType"),
  childType: document.querySelector("#childType"),
  tagLine: document.querySelector("#tagLine"),
  routeLine: document.querySelector("#routeLine"),
  collectionValue: document.querySelector("#collectionValue"),
  academicBar: document.querySelector("#academicBar"),
  selfBar: document.querySelector("#selfBar"),
  bondBar: document.querySelector("#bondBar"),
  pressureBar: document.querySelector("#pressureBar"),
  academicValue: document.querySelector("#academicValue"),
  selfValue: document.querySelector("#selfValue"),
  bondValue: document.querySelector("#bondValue"),
  pressureValue: document.querySelector("#pressureValue"),
  stageIndex: document.querySelector("#stageIndex"),
  stageAge: document.querySelector("#stageAge"),
  eventTitle: document.querySelector("#eventTitle"),
  eventRoute: document.querySelector("#eventRoute"),
  eventBody: document.querySelector("#eventBody"),
  wishEcho: document.querySelector("#wishEcho"),
  choices: document.querySelector("#choices"),
  timeline: document.querySelector("#timeline"),
  ticketLabel: document.querySelector("#ticketLabel"),
  endingTitle: document.querySelector("#endingTitle"),
  endingText: document.querySelector("#endingText"),
  reflectionText: document.querySelector("#reflectionText"),
  resultParent: document.querySelector("#resultParent"),
  childLine: document.querySelector("#childLine"),
  commentHook: document.querySelector("#commentHook"),
  shareText: document.querySelector("#shareText"),
  copyButton: document.querySelector("#copyButton"),
  sameWishButton: document.querySelector("#sameWishButton"),
  reviewButton: document.querySelector("#reviewButton")
};

let state = null;

function show(screen) {
  [dom.introScreen, dom.playScreen, dom.resultScreen].forEach(item => item.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function setMeter(name, value) {
  dom[`${name}Value`].textContent = String(clamp(value));
  dom[`${name}Bar`].style.width = `${clamp(value)}%`;
}

function updateDossier() {
  dom.seedBadge.textContent = `种子 ${state.seed}`;
  dom.parentType.textContent = state.parent;
  dom.childType.textContent = describeChild(state.score);
  dom.tagLine.textContent = state.score.tags.join(" / ");
  dom.routeLine.textContent = describeRouteLine(state.score.tags);
  setMeter("academic", state.score.academic);
  setMeter("self", state.score.self);
  setMeter("bond", state.score.bond);
  setMeter("pressure", state.score.pressure);
}

function renderTimeline() {
  dom.timeline.replaceChildren();
  state.records.forEach(record => {
    const item = document.createElement("li");
    const age = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h4");
    const text = document.createElement("p");
    age.className = "age";
    title.className = "event-title";
    text.className = "event-body";
    age.textContent = record.age;
    title.textContent = record.title;
    text.textContent = `${record.routeTag ? `由“${record.routeTag}”触发。` : "通用成长事件。"}${record.body} 你的回应：${record.choice}。${record.response}`;
    body.append(title, text);
    item.append(age, body);
    dom.timeline.append(item);
  });
}

function describeEffects(effects) {
  const names = { academic: "学业", self: "自我", bond: "亲密", pressure: "压力" };
  return Object.entries(effects)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${names[key]}${value > 0 ? "+" : ""}${value}`)
    .join(" / ");
}

function renderStage() {
  updateDossier();
  renderTimeline();

  const plan = state.planned[state.step];
  if (!plan) {
    finishRun();
    return;
  }

  if (!plan.event) {
    plan.event = weightedEvent(plan.stage, state.score, state.random, state.records);
  }

  const { stage, event } = plan;
  dom.stageIndex.textContent = `阶段 ${state.step + 1} / ${state.planned.length}`;
  dom.stageAge.textContent = `${stage.age} · ${stage.name}`;
  dom.eventTitle.textContent = event.title;
  dom.eventRoute.textContent = event.routeTag ? `由你的“${event.routeTag}”期待触发` : "通用成长事件";
  dom.eventBody.textContent = event.body;
  dom.wishEcho.textContent = event.routeTag
    ? `你最初说：“${state.wish}” 这一年，它具体变成了“${event.routeTag}”路线里的一个岔口。`
    : `你最初说：“${state.wish}” 这句话在这一年和随机种子一起，变成了另一种声音。`;

  dom.choices.replaceChildren();
  event.choices.forEach(choiceId => {
    const choice = getChoice(stage, choiceId);
    const button = document.createElement("button");
    const title = document.createElement("strong");
    const text = document.createElement("span");
    const hint = document.createElement("small");
    button.className = "choice";
    button.type = "button";
    title.textContent = choice.label;
    text.textContent = choice.text;
    hint.textContent = describeEffects(choice.effects);
    button.append(title, text, hint);
    button.addEventListener("click", () => chooseResponse(choiceId));
    dom.choices.append(button);
  });
}

function chooseResponse(choiceId) {
  const plan = state.planned[state.step];
  const choice = getChoice(plan.stage, choiceId);
  applyEffects(state.score, plan.event.base);
  applyEffects(state.score, choice.effects);
  state.records.push({
    age: plan.stage.age,
    title: plan.event.title,
    body: plan.event.body,
    routeTag: plan.event.routeTag || "",
    choice: choice.label,
    response: choice.text
  });
  state.step += 1;
  renderStage();
}

function finishRun() {
  state.ending = pickEnding(state.score);
  saveEnding(state.ending.id);
  renderResult();
  show(dom.resultScreen);
}

function makeReflection() {
  if (state.score.pressure >= 76) return "这一局里，爱最常被翻译成压力。你得到了一些结果，也让孩子学会了避开一些话题。";
  if (state.score.bond >= 72) return "这一局里，你没有每次都做对，但你留下了可以回来的地方。";
  if (state.score.self >= 70) return "这一局里，孩子长出了很强的自己。你需要面对的不是失败，而是不再完全由你命名的成功。";
  return "这一局里，没有哪一步单独决定人生。真正改变路线的，是那些重复出现的小反应。";
}

function renderResult() {
  updateUrl(state);
  dom.resultSeedBadge.textContent = `种子 ${state.seed}`;
  dom.ticketLabel.textContent = state.ending.label;
  dom.endingTitle.textContent = state.ending.title;
  dom.endingText.textContent = state.ending.text;
  dom.reflectionText.textContent = makeReflection();
  dom.resultParent.textContent = `${state.parent}。${state.score.tags.join(" / ")}。`;
  dom.childLine.textContent = state.ending.child;
  dom.commentHook.textContent = state.ending.hook;
  dom.collectionValue.textContent = `已收集 ${getCollection().length} / ${getEndingCount()} 个结局。`;
  dom.shareText.value = makeShareText(state);
}

function startRun() {
  const wish = dom.wishInput.value.trim() || "我希望你以后过得比我好。";
  const seed = (dom.seedInput.value.trim() || makeSeed()).toUpperCase();
  const mode = dom.modeSelect.value;
  dom.seedInput.value = seed;
  state = buildRun(wish, seed, mode);
  updateUrl(state);
  show(dom.playScreen);
  renderStage();
}

function restart() {
  state = null;
  history.replaceState(null, "", location.pathname);
  show(dom.introScreen);
  dom.wishInput.focus();
}

dom.rollSeedButton.addEventListener("click", () => {
  dom.seedInput.value = makeSeed();
});

dom.startForm.addEventListener("submit", event => {
  event.preventDefault();
  startRun();
});

dom.restartButton.addEventListener("click", restart);
dom.resultRestartButton.addEventListener("click", restart);

dom.sameWishButton.addEventListener("click", () => {
  const wish = state?.wish || dom.wishInput.value.trim();
  dom.wishInput.value = wish;
  dom.seedInput.value = makeSeed();
  show(dom.introScreen);
  startRun();
});

dom.reviewButton.addEventListener("click", () => {
  show(dom.playScreen);
  updateDossier();
  renderTimeline();
  dom.stageIndex.textContent = "档案回看";
  dom.stageAge.textContent = state.ending.title;
  dom.eventTitle.textContent = state.ending.label;
  dom.eventRoute.textContent = "最终结果";
  dom.eventBody.textContent = state.ending.text;
  dom.wishEcho.textContent = "这一局已经结束。你可以回看每一步，也可以用同一句话再来一次。";
  dom.choices.replaceChildren();
});

dom.copyButton.addEventListener("click", async () => {
  dom.shareText.select();
  try {
    await navigator.clipboard.writeText(dom.shareText.value);
    dom.copyButton.textContent = "已复制";
    setTimeout(() => {
      dom.copyButton.textContent = "复制";
    }, 1200);
  } catch {
    document.execCommand("copy");
  }
});

dom.seedInput.value = makeSeed();

const bootParams = new URLSearchParams(location.search);
const bootWish = bootParams.get("wish");
const bootSeed = bootParams.get("seed");
const bootMode = bootParams.get("mode");

if (bootWish) {
  dom.wishInput.value = bootWish;
  dom.seedInput.value = (bootSeed || makeSeed()).toUpperCase();
  if (bootMode === "quick" || bootMode === "standard") dom.modeSelect.value = bootMode;
  startRun();
}

export { startRun };
