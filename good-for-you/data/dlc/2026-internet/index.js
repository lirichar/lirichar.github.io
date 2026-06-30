const internet2026Pack = {
  id: "2026-internet",
  name: "2026互联网热梗包",
  version: "0.1.0",
  enabledByDefault: true,
  keywordRules: [
    { words: ["邪修AI", "AI邪修", "赛博养娃"], effects: { academic: 4, self: 12, pressure: 4, bond: -2 }, tags: ["赛博邪修"] },
    { words: ["机器人同学", "机器人朋友", "人机共学"], effects: { academic: 5, self: 7, pressure: 3 }, tags: ["人机共学"] }
  ],
  routeEvents: {
    赛博邪修: {
      interest: [
        { title: "AI 邪修小课", body: "孩子没有按教程来，而是把三个工具拼在一起解决问题。你说这不正规，他说这叫工作流。", tags: ["赛博邪修"], base: { academic: -2, self: 13, pressure: 3 }, choices: ["press", "explain", "handover"] }
      ],
      after: [
        { title: "赛博邪修简历", body: "简历里没有漂亮证书，却有一串能跑起来的小项目。它们不标准，但都是真的。", tags: ["赛博邪修"], base: { academic: -3, self: 14, pressure: 2 }, choices: ["press", "explain", "handover"] }
      ]
    },
    人机共学: {
      school: [
        { title: "机器人同学", body: "班里来了一个教学机器人。孩子发现它不会嘲笑错误，但也不会真的懂尴尬。", tags: ["人机共学"], base: { academic: 5, self: 4, bond: -2 }, choices: ["press", "explain", "listen"] }
      ],
      teen: [
        { title: "人机小组作业", body: "孩子和智能体一起完成小组作业。成果很好，只是人类同学之间更不知道怎么合作了。", tags: ["人机共学"], base: { academic: 7, pressure: 4, bond: -4 }, choices: ["press", "protect", "listen"] }
      ]
    }
  },
  endings: [
    { id: "cyber_wildcraft", label: "另一张入场券", title: "赛博邪修成道", condition: s => s.tags.includes("赛博邪修") && s.self >= 68, text: "孩子把工具、野路子和判断力拼成一套自己的方法。它不太像教育成果，却很像未来。", child: "我不是乱来，我是在把路搭出来。", hook: "赛博邪修线：不标准，但能跑。" },
    { id: "human_machine_classmate", label: "大学录取通知书", title: "人机共学班", condition: s => s.tags.includes("人机共学") && s.academic >= 58, text: "孩子进入一个人与智能体共同学习的项目。你不知道它会通向哪里，但旧教室已经装不下这条路。", child: "我想学会和机器合作，也别忘了怎么和人合作。", hook: "人机共学线，未来味太冲了。" }
  ]
};

export default internet2026Pack;
