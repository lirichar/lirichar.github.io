import { buildRun, getChoice, weightedEvent, applyEffects, pickEnding } from "../src/engine.js";

function play(wish, seed, mode = "standard") {
  const state = buildRun(wish, seed, mode);
  while (state.step < state.planned.length) {
    const plan = state.planned[state.step];
    plan.event = weightedEvent(plan.stage, state.score, state.random, state.records);
    const choiceId = plan.event.choices[state.step % plan.event.choices.length];
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
  }
  state.ending = pickEnding(state.score);
  return state;
}

const runs = [
  play("我希望你考上清华北大，别像我一样辛苦。", "SMOKE1"),
  play("我希望你有松弛感，慢慢来。", "SMOKE2"),
  play("我希望你学DeepSeek和AI智能体，跟上时代。", "SMOKE3")
];

for (const run of runs) {
  if (run.records.length !== run.planned.length) {
    throw new Error(`record count mismatch for ${run.seed}`);
  }
  if (!run.ending?.title) {
    throw new Error(`missing ending for ${run.seed}`);
  }
}

console.log(JSON.stringify(runs.map(run => ({
  seed: run.seed,
  stages: run.records.length,
  ending: run.ending.title,
  uniqueEvents: new Set(run.records.map(record => record.title)).size
})), null, 2));
