function updateUrl(state) {
  const params = new URLSearchParams({
    wish: state.wish,
    seed: state.seed,
    mode: state.mode
  });
  history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
}

function makeShareText(state) {
  return [
    `我在《我都是为了你好》里输入：${state.wish}`,
    `系统判定我是：${state.parent}`,
    `孩子走向：${state.ending.title}`,
    `种子：${state.seed}`,
    location.href,
    state.ending.hook
  ].join("\n");
}

export { makeShareText, updateUrl };
