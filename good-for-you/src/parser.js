function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function applyEffects(target, effects) {
  Object.entries(effects).forEach(([key, value]) => {
    target[key] = clamp((target[key] || 0) + value);
  });
}

function parseWish(wish, keywordRules) {
  const score = {
    academic: 42,
    self: 44,
    bond: 50,
    pressure: 42,
    tags: []
  };

  keywordRules.forEach(rule => {
    if (rule.words.some(word => wish.includes(word))) {
      applyEffects(score, rule.effects);
      score.tags.push(...rule.tags);
    }
  });

  if (wish.length >= 28) {
    applyEffects(score, { pressure: 7, bond: -3 });
    score.tags.push("话很多的爱");
  }

  if (/希望|可以|愿意|喜欢/.test(wish)) {
    applyEffects(score, { bond: 3 });
  }

  if (!score.tags.length) {
    score.tags.push("朴素期待");
  }

  score.tags = [...new Set(score.tags)];
  return score;
}

export { applyEffects, clamp, parseWish };
