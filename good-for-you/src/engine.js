import content from "../data/packs.js";
import { applyEffects, clamp, parseWish } from "./parser.js";

function hashString(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRandom(seed) {
  let stateValue = hashString(seed) || 1;
  return () => {
    stateValue += 0x6d2b79f5;
    let value = stateValue;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSeed() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function describeParent(score) {
  if (score.tags.includes("名校执念")) return "升学雷达型父母";
  if (score.tags.includes("服从期待")) return "秩序维护型父母";
  if (score.tags.includes("温柔托底")) return "安全基地型父母";
  if (score.tags.includes("阶层跃迁")) return "逆袭项目型父母";
  if (score.tags.includes("补偿人生")) return "补偿人生型父母";
  if (score.tags.includes("天赋下注")) return "天赋下注型父母";
  if (score.tags.includes("家产路径")) return "家业交接型父母";
  if (score.tags.includes("鸡娃内卷")) return "家长群卷王型父母";
  if (score.tags.includes("松弛感")) return "努力学习松弛型父母";
  if (score.tags.includes("情绪价值")) return "高共情陪伴型父母";
  if (score.tags.includes("DeepSeek陪跑")) return "大模型陪跑型父母";
  if (score.tags.includes("具身智能")) return "未来赛道押注型父母";
  if (score.tags.includes("AI托管")) return "算法托管型父母";
  if (score.tags.includes("小孩哥小孩姐")) return "神童热搜型父母";
  if (score.tags.includes("去班味")) return "反班味预防型父母";
  if (score.tags.includes("丝瓜汤家庭")) return "为你好压迫型父母";
  if (score.tags.includes("数字游民")) return "反工位游牧型父母";
  if (score.tags.includes("谷子经济")) return "爱好消费观察型父母";
  if (score.tags.includes("赛博对账")) return "人生账本型父母";
  if (score.tags.includes("活人感")) return "活人感守护型父母";
  if (score.tags.includes("浪浪山小妖怪")) return "出山焦虑型父母";
  if (score.tags.includes("助我破鼎")) return "爽文逆袭型父母";
  if (score.tags.includes("基础不基础")) return "基础审判型父母";
  if (score.tags.includes("邪修成长")) return "野路子放养型父母";
  if (score.tags.includes("主理人家庭")) return "个人品牌型父母";
  if (score.tags.includes("预制人生")) return "模板人生型父母";
  if (score.tags.includes("来财许愿")) return "搞钱许愿型父母";
  if (score.tags.includes("赛博邪修")) return "赛博邪修型父母";
  if (score.tags.includes("人机共学")) return "人机共学型父母";
  return "把爱说成任务的父母";
}

function describeChild(score) {
  if (score.self >= 64 && score.pressure < 50) return "好奇、敢试、不太服管";
  if (score.academic >= 64 && score.self < 45) return "擅长考试，也擅长隐藏自己";
  if (score.bond >= 64) return "愿意沟通，但需要被认真听见";
  if (score.pressure >= 66) return "敏感、用力、容易把爱听成命令";
  return "普通、摇摆、正在长出自己";
}

function weightedEvent(stage, score, random, records = []) {
  const usedTitles = new Set(records.map(record => record.title));
  const stageKeys = [stage.id, ...(stage.routeKeys || [])];
  const corePool = content.stages
    .filter(coreStage => stageKeys.includes(coreStage.id))
    .flatMap(coreStage => coreStage.events);
  const rawRoutePool = score.tags.flatMap(tag =>
    stageKeys.flatMap(key =>
      (content.routeEvents[tag]?.[key] || []).map(event => ({ ...event, routeTag: tag }))
    )
  );
  const routePool = rawRoutePool.filter(event => !usedTitles.has(event.title));
  let pool = stage.events.concat(corePool, routePool).filter(event => !usedTitles.has(event.title));

  if (!pool.length) {
    pool = stage.events.concat(corePool, rawRoutePool);
  }

  if (routePool.length && random() < 0.72) {
    return routePool[Math.floor(random() * routePool.length)];
  }

  const weighted = [];
  pool.forEach(event => {
    let weight = 3;
    event.tags.forEach(tag => {
      if (score.tags.includes(tag)) weight += routePool.includes(event) ? 14 : 5;
    });
    if (routePool.includes(event)) weight += 8;
    if (score.pressure >= 68 && /排名|重点|离家|退场|撒谎/.test(event.title)) weight += 3;
    if (score.self >= 62 && /秘密|兴趣|小摊|入场券|退赛/.test(event.title)) weight += 3;
    if (score.bond >= 62 && /故事|作文|和解|空房间/.test(event.title)) weight += 3;
    for (let index = 0; index < weight; index += 1) weighted.push(event);
  });
  return weighted[Math.floor(random() * weighted.length)];
}

function buildRun(wish, seed, mode) {
  const random = createRandom(`${wish}|${seed}`);
  const score = parseWish(wish, content.keywordRules);
  applyEffects(score, {
    academic: Math.floor(random() * 17) - 7,
    self: Math.floor(random() * 17) - 8,
    bond: Math.floor(random() * 17) - 8,
    pressure: Math.floor(random() * 15) - 5
  });

  const selectedStages = mode === "quick" ? content.stages : content.detailedStages;
  const planned = selectedStages.map(stage => ({ stage, event: null }));

  return {
    wish,
    seed,
    mode,
    random,
    score,
    parent: describeParent(score),
    child: describeChild(score),
    planned,
    step: 0,
    records: [],
    ending: null
  };
}

function getChoice(stage, choiceId) {
  const base = content.responseTypes[choiceId];
  const copyKey = [stage.id, ...(stage.routeKeys || [])].find(key => content.stageResponseCopy[key]?.[choiceId]);
  const copy = content.stageResponseCopy[copyKey]?.[choiceId];
  return {
    id: choiceId,
    label: copy?.[0] || base.label,
    text: copy?.[1] || base.text,
    effects: base.effects
  };
}

function pickEnding(score) {
  score.tags = [...new Set(score.tags)];
  const defaultEnding = content.endings.find(ending => ending.id === "unnamed");
  const matches = content.endings.filter(ending => ending.id !== "unnamed" && ending.condition(score));
  return matches[matches.length - 1] || defaultEnding;
}

function describeRouteLine(tags) {
  const active = tags.filter(tag => content.routeEvents[tag]);
  if (!active.length) return "普通家庭日常线";
  if (active.length === 1) return `${active[0]}路线`;
  return `${active.slice(0, 2).join(" + ")}混合路线`;
}

function getEndingCount() {
  return content.endings.length;
}

export {
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
};
