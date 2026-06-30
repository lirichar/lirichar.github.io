import corePack from "./core/index.js";
import internet2026Pack from "./dlc/2026-internet/index.js";

const defaultPacks = [corePack, internet2026Pack].filter(pack => pack.enabledByDefault !== false);

function mergeRouteEvents(packs) {
  const routeEvents = {};
  packs.forEach(pack => {
    Object.entries(pack.routeEvents || {}).forEach(([tag, stages]) => {
      routeEvents[tag] ||= {};
      Object.entries(stages).forEach(([stageId, events]) => {
        routeEvents[tag][stageId] ||= [];
        routeEvents[tag][stageId].push(...events);
      });
    });
  });
  return routeEvents;
}

function mergeStageResponseCopy(packs) {
  const copy = {};
  packs.forEach(pack => {
    Object.entries(pack.stageResponseCopy || {}).forEach(([stageId, choices]) => {
      copy[stageId] = { ...(copy[stageId] || {}), ...choices };
    });
  });
  return copy;
}

function mergeEndings(packs) {
  const endings = packs.flatMap(pack => pack.endings || []);
  const defaultEnding = endings.find(ending => ending.id === "unnamed");
  return endings.filter(ending => ending.id !== "unnamed").concat(defaultEnding ? [defaultEnding] : []);
}

function mergePacks(packs = defaultPacks) {
  return {
    packs,
    keywordRules: packs.flatMap(pack => pack.keywordRules || []),
    responseTypes: Object.assign({}, ...packs.map(pack => pack.responseTypes || {})),
    stageResponseCopy: mergeStageResponseCopy(packs),
    stages: packs.flatMap(pack => pack.stages || []),
    detailedStages: packs.flatMap(pack => pack.detailedStages || []),
    routeEvents: mergeRouteEvents(packs),
    endings: mergeEndings(packs)
  };
}

export { corePack, internet2026Pack, defaultPacks, mergePacks };
export default mergePacks();
