// Core content pack generated from the original prototype data.
// Keep this module data-only: no DOM access and no browser side effects.
const keywordRules = [
  { words: ["清华", "北大", "名校", "985", "211", "第一", "重点"], effects: { academic: 22, pressure: 20, bond: -8, self: -4 }, tags: ["名校执念"] },
  { words: ["听话", "乖", "懂事", "别让我操心", "省心"], effects: { pressure: 18, self: -16, bond: -7 }, tags: ["服从期待"] },
  { words: ["快乐", "健康", "自由", "喜欢", "幸福"], effects: { pressure: -12, self: 18, bond: 14 }, tags: ["温柔托底"] },
  { words: ["赚钱", "出人头地", "有钱", "成功", "人上人"], effects: { pressure: 14, academic: 5, self: 8 }, tags: ["阶层跃迁"] },
  { words: ["别像我", "辛苦", "稳定", "体面", "铁饭碗"], effects: { pressure: 13, academic: 8, bond: -3 }, tags: ["补偿人生"] },
  { words: ["艺术", "画画", "音乐", "写作", "跳舞", "表演"], effects: { pressure: -2, self: 19, academic: -5 }, tags: ["天赋下注"] },
  { words: ["继承", "公司", "家业", "生意", "店"], effects: { pressure: 6, academic: -3, self: 11, bond: -2 }, tags: ["家产路径"] },
  { words: ["恋爱", "结婚", "有人爱", "被爱"], effects: { pressure: -7, self: 8, bond: 9 }, tags: ["关系想象"] },
  { words: ["不能输", "必须", "一定", "不许", "只能"], effects: { pressure: 16, bond: -8, self: -8 }, tags: ["控制语气"] },
  { words: ["卷", "鸡娃", "别人家", "赢在起跑线"], effects: { academic: 12, pressure: 18, self: -8, bond: -6 }, tags: ["鸡娃内卷"] },
  { words: ["松弛", "松弛感", "别太累", "慢慢来"], effects: { pressure: -14, self: 12, bond: 10 }, tags: ["松弛感"] },
  { words: ["情绪价值", "被看见", "陪伴", "共情"], effects: { pressure: -8, self: 10, bond: 16 }, tags: ["情绪价值"] },
  { words: ["AI", "人工智能", "编程", "机器人", "算法"], effects: { academic: 8, self: 8, pressure: 5 }, tags: ["AI托管"] },
  { words: ["小孩哥", "小孩姐", "天才", "神童"], effects: { academic: 10, self: 8, pressure: 10 }, tags: ["小孩哥小孩姐"] },
  { words: ["躺平", "别上班", "班味", "牛马"], effects: { academic: -4, self: 10, pressure: -6, bond: 2 }, tags: ["去班味"] },
  { words: ["都是为了你好", "为你好", "听妈妈的", "听爸爸的"], effects: { pressure: 12, self: -10, bond: -8 }, tags: ["丝瓜汤家庭"] },
  { words: ["DeepSeek", "深度求索", "大模型", "智能体", "Agent"], effects: { academic: 8, self: 7, pressure: 6 }, tags: ["DeepSeek陪跑"] },
  { words: ["具身智能", "人形机器人", "机器人手机", "机器人"], effects: { academic: 7, self: 8, pressure: 5 }, tags: ["具身智能"] },
  { words: ["数字游民", "远程", "自由职业", "到处生活"], effects: { academic: -4, self: 14, pressure: -8, bond: 3 }, tags: ["数字游民"] },
  { words: ["谷子", "周边", "痛包", "二次元", "买谷"], effects: { academic: -3, self: 12, pressure: 2, bond: -1 }, tags: ["谷子经济"] },
  { words: ["赛博对账", "记账", "算账", "规划"], effects: { academic: 4, pressure: 7, self: -2 }, tags: ["赛博对账"] },
  { words: ["活人感", "像个人", "别像机器", "有生命力"], effects: { pressure: -10, self: 15, bond: 8 }, tags: ["活人感"] },
  { words: ["浪浪山", "小妖怪", "走出浪浪山"], effects: { self: 10, pressure: 4, academic: -2 }, tags: ["浪浪山小妖怪"] },
  { words: ["助我破鼎", "破鼎", "逆天改命"], effects: { academic: 9, self: 9, pressure: 10 }, tags: ["助我破鼎"] },
  { words: ["基础不基础", "基础", "不基础"], effects: { pressure: 6, self: 4, bond: -2 }, tags: ["基础不基础"] },
  { words: ["邪修", "野路子", "偏门", "弯道超车"], effects: { academic: -4, self: 16, pressure: 3 }, tags: ["邪修成长"] },
  { words: ["主理人", "品牌", "个人IP", "账号"], effects: { academic: -2, self: 14, pressure: 5 }, tags: ["主理人家庭"] },
  { words: ["预制", "预制人生", "安排好", "模板"], effects: { academic: 5, pressure: 11, self: -11, bond: -4 }, tags: ["预制人生"] },
  { words: ["来财", "发财", "暴富", "搞钱"], effects: { academic: 2, self: 9, pressure: 9 }, tags: ["来财许愿"] }
];

const responseTypes = {
  press: {
    label: "继续加码",
    text: "你把这件事重新放回成绩、规矩和未来风险里。话听起来很负责，也很难让人喘气。",
    effects: { academic: 6, pressure: 9, self: -4, bond: -5 }
  },
  explain: {
    label: "讲清道理",
    text: "你试着把自己的担心说明白。孩子未必完全接受，但至少知道你不是只想赢。",
    effects: { academic: 3, pressure: 3, self: 1, bond: 1 }
  },
  listen: {
    label: "先听孩子说",
    text: "你忍住了立刻纠正的冲动。问题没有马上解决，但孩子多说了两句真话。",
    effects: { academic: -1, pressure: -6, self: 6, bond: 8 }
  },
  bargain: {
    label: "交换条件",
    text: "你们把人生谈成了一张临时合同。它有用，但也让爱变得更像绩效。",
    effects: { academic: 5, pressure: 5, self: -1, bond: -2 }
  },
  protect: {
    label: "替孩子挡一下",
    text: "你没有把所有外部评价都转交给孩子。那一刻，家像一个能退回来的地方。",
    effects: { academic: -2, pressure: -7, self: 4, bond: 7 }
  },
  handover: {
    label: "把选择交出去",
    text: "你把决定权递给孩子，也把不确定性一起递了出去。你们都需要练习。",
    effects: { academic: -3, pressure: -4, self: 10, bond: 3 }
  }
};

const stageResponseCopy = {
  birth: {
    press: ["把时间表排满", "你告诉自己，越早开始，孩子以后越少吃苦。于是周末也被安排成了成长计划。"],
    explain: ["解释你的担心", "你蹲下来讲为什么要试一试。孩子听不全懂，但听见了你没有只是在命令。"],
    listen: ["陪孩子慢一点", "你把那句“快点”咽了回去。孩子磨蹭了很久，也终于把自己的小世界展示给你。"],
    bargain: ["用奖励换配合", "你拿贴纸、零食和表扬换来一次配合。事情完成了，也多了一点交易的味道。"],
    protect: ["挡掉一次比较", "你没有顺着亲戚的话往下比，只说每个孩子有自己的时间。饭桌忽然安静了一秒。"],
    handover: ["让孩子自己试", "你允许孩子用笨办法试一次。结果不漂亮，但那是孩子第一次拥有办法。"]
  },
  school: {
    press: ["盯紧入学起跑线", "你把这次表现当成起跑线。孩子学会了看你的脸色，判断自己今天算不算争气。"],
    explain: ["把规则讲清楚", "你告诉孩子学校为什么有规则，也承认规则不等于全部。孩子至少知道可以问为什么。"],
    listen: ["问他害怕什么", "你没有急着把哭声按回去，而是问了一句：你最怕哪一件事？"],
    bargain: ["约定上完再谈", "你们约好先坚持一段时间再决定。这个办法有效，也让兴趣有了试用期。"],
    protect: ["不把目光转交给他", "你替孩子接住校门口那些目光，没有把尴尬变成责备。"],
    handover: ["让他选一个班", "你没有决定所有安排，只让孩子从几个选项里挑一个。选择很小，但属于他。"]
  },
  interest: {
    press: ["把喜欢变成赛道", "你开始计算课时、证书和比赛含金量。喜欢还在，只是旁边多了计分板。"],
    explain: ["谈投入和代价", "你把钱、时间和机会都摊开讲。孩子第一次知道，支持也有现实成本。"],
    listen: ["问喜欢哪一部分", "你没有只问要不要继续，而是问：你喜欢的是赢，还是做这件事本身？"],
    bargain: ["成绩达标就继续", "你把兴趣和成绩绑在一起。孩子保住了机会，也学会了用表现换自由。"],
    protect: ["先护住兴趣", "你没有急着让外面的评价定义天赋。那件事暂时还只是喜欢。"],
    handover: ["让孩子做计划", "你把课程、预算和时间表交给孩子。那不是放任，而是一次小规模负责。"]
  },
  ranking: {
    press: ["立刻分析排名", "你打开表格，把每一分都拆成问题。孩子坐在旁边，像一份需要修正的报告。"],
    explain: ["说明你为什么急", "你承认自己急，也说出你害怕孩子以后没得选。话很重，但没有伪装成冷静。"],
    listen: ["先问今天怎么了", "你把手机扣下，问孩子这一天是怎么过的。排名还在，但晚饭终于不像审讯。"],
    bargain: ["订下一轮目标", "你们约了下次名次和奖励。目标清楚了，家里的空气也紧了一点。"],
    protect: ["不在饭桌审判", "你决定不让一条短信毁掉一顿饭。孩子没有因此变优秀，但松了一口气。"],
    handover: ["让他处理一次", "你让孩子自己决定要不要找老师、怎么改计划。你在旁边，但没有抢过方向盘。"]
  },
  teen: {
    press: ["把问题压回正轨", "你提醒孩子现在不是分心的时候。那句话很熟悉，也把门又关上了一点。"],
    explain: ["认真谈边界", "你没有装作自己完全开明，而是把担心、底线和信任摆在同一张桌上。"],
    listen: ["先不审问", "你没有追问细节，也没有立刻定性。孩子停了很久，终于说了一句真话。"],
    bargain: ["用成绩换空间", "你允许一点自由，但要求成绩不能掉。孩子得到了空间，也得到了新的监控。"],
    protect: ["替他保留体面", "你没有把事情闹到所有人都知道。青春期最脆的那点体面被保住了。"],
    handover: ["让他承担后果", "你把选择和后果一起交出去。孩子第一次发现，自由不是没人管。"]
  },
  exam: {
    press: ["全家进入倒计时", "你把家里调成备考模式。每个人都很小心，连关门声都像会影响命运。"],
    explain: ["摊开志愿分歧", "你们把城市、专业、分数和害怕都摆出来。没有马上和解，但不再只剩吵。"],
    listen: ["问他真正想去哪里", "你听完那个不稳妥的答案，没有立刻否定。孩子第一次敢把地图摊开。"],
    bargain: ["分数优先，之后再说", "你们把一切推到考后。这个办法撑过了眼前，也欠下了之后要谈的账。"],
    protect: ["把外界噪音关小", "你少转发了几篇焦虑文章，也少问了一次别人家孩子。家里终于能睡觉。"],
    handover: ["让他填第一志愿", "你把第一志愿的笔递过去。手松开的那一刻，你比孩子还紧张。"]
  },
  after: {
    press: ["先问结果够不够好", "你第一反应还是确认它能不能被别人认可。孩子的表情短暂地停了一下。"],
    explain: ["承认自己还不适应", "你说你需要一点时间理解这条路。至少这一次，你没有把不理解说成反对。"],
    listen: ["让孩子先说未来", "你没有急着发表意见，只让孩子把接下来的打算讲完。那张入场券慢慢有了形状。"],
    bargain: ["约定一个试错期限", "你们给这条路设了一个期限。它不完全浪漫，但为未知留出了一点空间。"],
    protect: ["不急着发朋友圈", "你没有马上把结果包装成可展示的样子。孩子终于不用在那天负责你的体面。"],
    handover: ["把人生还给他", "你说：这是你的人生，你先走，我会学着跟上。话说出口时，你自己也有点陌生。"]
  }
};

const stages = [
  {
    id: "birth",
    age: "0-3岁",
    name: "出生",
    events: [
      { title: "第一张报名表", body: "你把期待写进早教班报名表。孩子还不会说话，已经拥有了第一张时间表。", tags: ["名校执念", "补偿人生"], base: { academic: 4, pressure: 5, bond: -2 }, choices: ["press", "explain", "protect"] },
      { title: "睡前故事", body: "孩子要求你把同一本故事再读一遍。你忽然发现，重复也可以不是低效。", tags: ["温柔托底"], base: { self: 4, bond: 6, pressure: -2 }, choices: ["listen", "explain", "press"] },
      { title: "亲戚饭桌", body: "亲戚开始比较谁先会背诗。孩子听不懂内容，但记住了大人说话的语气。", tags: ["控制语气", "名校执念"], base: { pressure: 7, bond: -4 }, choices: ["press", "protect", "explain"] },
      { title: "玩具被收走", body: "你觉得玩太久会耽误正事。孩子第一次学会把喜欢藏到你看不见的地方。", tags: ["服从期待"], base: { self: -5, pressure: 5, bond: -3 }, choices: ["press", "bargain", "listen"] }
    ]
  },
  {
    id: "school",
    age: "6岁",
    name: "入学",
    events: [
      { title: "入学面试", body: "孩子背出了准备好的答案，却在被问到喜欢什么时停住了。", tags: ["名校执念"], base: { academic: 7, pressure: 6, self: -5 }, choices: ["press", "explain", "listen"] },
      { title: "第一次反抗", body: "孩子说不想去兴趣班。你们僵持了十分钟，空气里都是没说出口的委屈。", tags: ["天赋下注", "服从期待"], base: { self: 5, pressure: 3, bond: -2 }, choices: ["press", "bargain", "handover"] },
      { title: "奖状墙", body: "第一张奖状被贴在客厅最显眼的位置，家里多了一种可被展示的高兴。", tags: ["阶层跃迁", "名校执念"], base: { academic: 7, pressure: 4 }, choices: ["press", "explain", "protect"] },
      { title: "校门口哭声", body: "孩子在校门口不肯进去。你看见老师、家长和迟到铃声一起望向你。", tags: ["温柔托底"], base: { pressure: 4, bond: -1 }, choices: ["press", "listen", "protect"] }
    ]
  },
  {
    id: "interest",
    age: "9岁",
    name: "兴趣",
    events: [
      { title: "兴趣班升级", body: "老师说孩子有天赋，也说最好加课。你分不清这是机会，还是另一种账单。", tags: ["天赋下注"], base: { self: 7, pressure: 5, academic: -2 }, choices: ["press", "bargain", "handover"] },
      { title: "作文获奖", body: "孩子写了一篇关于家的作文。你读到最后，发现自己在里面像天气一样出现。", tags: ["温柔托底", "补偿人生"], base: { self: 6, bond: 4 }, choices: ["listen", "explain", "press"] },
      { title: "同桌风波", body: "孩子被同桌说成只会告状。你想立刻找老师，又怕事情被你处理得更大。", tags: ["服从期待"], base: { pressure: 3, bond: -2 }, choices: ["protect", "explain", "listen"] },
      { title: "小摊计划", body: "孩子把旧玩具标上价格，认真设计了一个周末小摊。你第一次看见不属于课本的计算。", tags: ["阶层跃迁", "家产路径"], base: { self: 8, academic: -2, pressure: -1 }, choices: ["press", "explain", "handover"] }
    ]
  },
  {
    id: "ranking",
    age: "12岁",
    name: "小升初",
    events: [
      { title: "排名短信", body: "成绩排名发到手机上，你比孩子先知道结果。晚饭安静得像考场。", tags: ["名校执念", "控制语气"], base: { academic: 5, pressure: 10, bond: -7 }, choices: ["press", "explain", "listen"] },
      { title: "秘密账号", body: "孩子开始在网上写一些你看不懂的东西。那里没有家长群，也没有正确答案。", tags: ["温柔托底", "天赋下注"], base: { self: 9, bond: -3 }, choices: ["press", "listen", "handover"] },
      { title: "竞赛退场", body: "孩子在赛前说肚子疼。你看得出来那不是身体的问题，但你也不知道该不该拆穿。", tags: ["补偿人生", "名校执念"], base: { academic: -3, pressure: 8, self: -2 }, choices: ["press", "protect", "listen"] },
      { title: "家业暑假", body: "孩子在店里帮忙一个暑假，学会了看客人脸色，也学会了不把辛苦挂在嘴上。", tags: ["家产路径"], base: { self: 7, academic: -4, pressure: 3 }, choices: ["press", "explain", "handover"] }
    ]
  },
  {
    id: "teen",
    age: "15岁",
    name: "青春期",
    events: [
      { title: "重点班门口", body: "你在门口等到很晚。孩子出来时没有看你，先看了看天。", tags: ["名校执念"], base: { academic: 9, pressure: 9, bond: -8 }, choices: ["press", "explain", "listen"] },
      { title: "早恋传闻", body: "班主任打来电话。你第一次意识到，孩子的人生里已经有你不在场的部分。", tags: ["关系想象"], base: { self: 7, pressure: 5, bond: -5 }, choices: ["press", "explain", "listen"] },
      { title: "退赛申请", body: "孩子放弃一次很有希望的比赛，理由是：我不想所有喜欢都变成任务。", tags: ["天赋下注"], base: { self: 11, academic: -4, bond: 2 }, choices: ["press", "bargain", "handover"] },
      { title: "第一次撒谎", body: "你发现孩子撒了谎。真正刺痛你的不是事情本身，而是孩子觉得不能告诉你。", tags: ["服从期待", "控制语气"], base: { pressure: 6, bond: -8, self: 3 }, choices: ["press", "explain", "listen"] }
    ]
  },
  {
    id: "exam",
    age: "18岁",
    name: "高考",
    events: [
      { title: "最后一百天", body: "家里的声音都变轻了。每个人都说为了孩子，其实每个人都在害怕。", tags: ["名校执念", "补偿人生"], base: { academic: 10, pressure: 11, bond: -4 }, choices: ["press", "protect", "listen"] },
      { title: "志愿表", body: "你们盯着同一张志愿表，却像在看两张不同的人生地图。", tags: ["稳定", "家产路径"], base: { pressure: 7, bond: -3 }, choices: ["press", "explain", "handover"] },
      { title: "离家一周", body: "孩子消失在朋友家的沙发上。回来时没有道歉，只说想活得像自己。", tags: ["控制语气", "服从期待"], base: { self: 14, academic: -10, pressure: 7, bond: -10 }, choices: ["press", "listen", "protect"] },
      { title: "深夜和解", body: "凌晨两点，你们把话说破。没有谁赢，但第二天早餐多了一只煎蛋。", tags: ["温柔托底", "关系想象"], base: { bond: 15, pressure: -8, self: 4 }, choices: ["listen", "explain", "protect"] }
    ]
  },
  {
    id: "after",
    age: "高考后",
    name: "入口",
    events: [
      { title: "通知书快递", body: "快递员站在门口，你比孩子先听见敲门声。那张纸轻得不像十八年的重量。", tags: ["名校执念", "温柔托底"], base: { academic: 7, pressure: -2 }, choices: ["press", "explain", "listen"] },
      { title: "另一张入场券", body: "它不是大学录取通知书，而是一张合同、门票、营业执照或车票。你一时不知道该不该祝贺。", tags: ["天赋下注", "阶层跃迁", "家产路径"], base: { self: 9, academic: -4 }, choices: ["press", "explain", "handover"] },
      { title: "空房间", body: "孩子离开后，房间忽然变得很整齐。你第一次发现，吵闹也曾经是一种亲密。", tags: ["补偿人生", "关系想象"], base: { bond: 4, pressure: -3 }, choices: ["listen", "protect", "explain"] },
      { title: "朋友圈草稿", body: "你写了又删，删了又写。最后发现最难公开的不是结果，而是你真实的心情。", tags: ["名校执念", "阶层跃迁"], base: { pressure: 2, bond: 1 }, choices: ["press", "explain", "listen"] }
    ]
  }
];

function phase(id, age, name, routeKeys, title, body, tags, base, choices) {
  return {
    id,
    age,
    name,
    routeKeys,
    events: [{ title, body, tags, base, choices }]
  };
}

const detailedStages = [
  phase("birth_season", "0岁", "出生季", ["birth"], "出生证明", "孩子第一次被写进证件。姓名、体重、时间都很确定，只有未来还空着。", ["温柔托底", "补偿人生"], { bond: 4, pressure: 2 }, ["listen", "explain", "protect"]),
  phase("age1_spring", "1岁上半年", "学步", ["birth"], "摇摇晃晃的路", "孩子扶着沙发走了三步。你们鼓掌的声音很大，大到他摔倒时也先看你的表情。", ["温柔托底"], { self: 3, bond: 4, pressure: 1 }, ["listen", "protect", "press"]),
  phase("age2_autumn", "2岁下半年", "语言爆发", ["birth"], "第一个不要", "孩子学会说不要。这个词很小，却是人生里第一枚边界。", ["服从期待", "活人感"], { self: 5, pressure: 2, bond: -1 }, ["press", "explain", "listen"]),
  phase("kindergarten_s1", "小班上学期", "入园", ["birth", "school"], "幼儿园门口", "孩子抓着你的衣角不放。老师说很正常，你却觉得这像一场提前到来的分离。", ["温柔托底"], { pressure: 3, bond: 2 }, ["press", "listen", "protect"]),
  phase("kindergarten_w1", "小班寒假", "第一次寒假", ["birth", "school"], "寒假作息表", "你试着给假期排表，贴在冰箱上。孩子最喜欢的部分，是表格旁边那张歪掉的贴纸。", ["预制人生", "松弛感"], { academic: 2, pressure: 3, self: -1 }, ["press", "explain", "handover"]),
  phase("kindergarten_s2", "小班下学期", "集体生活", ["school"], "被抢走的玩具", "孩子说玩具被抢了。你想教他赢，也想教他别太计较。", ["服从期待", "情绪价值"], { self: 3, pressure: 2, bond: -1 }, ["press", "explain", "listen"]),
  phase("kindergarten_m1", "中班上学期", "兴趣露头", ["interest"], "画得不像", "孩子画了一只不像猫的猫。你差点纠正，后来发现它有自己的表情。", ["天赋下注", "活人感"], { self: 5, academic: -1, bond: 3 }, ["press", "listen", "handover"]),
  phase("kindergarten_summer", "中班暑假", "暑假班", ["interest"], "暑假兴趣菜单", "游泳、英语、画画、机器人，暑假像一张菜单。孩子只问：能不能有一天什么都不点？", ["鸡娃内卷", "松弛感"], { academic: 3, pressure: 5, self: -2 }, ["press", "protect", "listen"]),
  phase("kindergarten_m2", "中班下学期", "同伴", ["school"], "最好的朋友换人了", "孩子说最好的朋友今天不和自己玩了。你第一次发现，小孩的关系也会失恋。", ["关系想象", "情绪价值"], { self: 3, bond: 2, pressure: 2 }, ["listen", "explain", "protect"]),
  phase("kindergarten_l1", "大班上学期", "幼小衔接", ["school"], "拼音预习", "家长群开始讨论拼音和口算。你原本不急，直到有人发了三页练习。", ["鸡娃内卷", "名校执念"], { academic: 5, pressure: 6, self: -2 }, ["press", "explain", "protect"]),
  phase("kindergarten_w2", "大班寒假", "幼小衔接寒假", ["school", "ranking"], "入学准备包", "书包、铅笔、姓名贴都准备好了。孩子问：上小学以后还能午睡吗？", ["预制人生", "服从期待"], { academic: 3, pressure: 4, bond: -1 }, ["press", "explain", "listen"]),
  phase("kindergarten_l2", "大班下学期", "毕业", ["school"], "幼儿园毕业照", "孩子站在第一排笑得很用力。你知道这不是结束，只是下一场比较的入口。", ["名校执念", "温柔托底"], { pressure: 3, bond: 2 }, ["press", "protect", "listen"]),
  phase("p1_s1", "一年级上学期", "入学", ["school"], "第一张课程表", "课程表贴上墙，家里的时间开始跟学校走。孩子学会了上课，也学会了等下课。", ["服从期待"], { academic: 4, pressure: 4, self: -1 }, ["press", "explain", "listen"]),
  phase("p1_w", "一年级寒假", "识字寒假", ["school", "interest"], "亲子阅读打卡", "打卡软件提醒你连续第七天阅读。孩子问：不打卡还算读过吗？", ["鸡娃内卷", "情绪价值"], { academic: 4, pressure: 5, bond: -1 }, ["press", "protect", "listen"]),
  phase("p1_s2", "一年级下学期", "适应", ["school"], "橡皮擦失踪案", "孩子的橡皮又丢了。你想讲责任心，也想起自己小时候也丢过很多东西。", ["活人感"], { academic: 1, pressure: 2, self: 2 }, ["press", "explain", "listen"]),
  phase("p2_summer", "二年级暑假", "第一个长暑假", ["interest"], "暑假作业最后三天", "作业本在最后三天突然长出重量。你们一起补，像共同参与一场小型灾难。", ["松弛感", "预制人生"], { academic: 3, pressure: 6, bond: -1 }, ["press", "bargain", "protect"]),
  phase("p2_s2", "二年级下学期", "小干部", ["school"], "值日班长", "孩子当上值日班长，认真到像在管理一个微型公司。你骄傲，也怕他太早有班味。", ["去班味", "小孩哥小孩姐"], { academic: 3, self: 3, pressure: 3 }, ["press", "protect", "listen"]),
  phase("p3_s1", "三年级上学期", "分数出现", ["ranking"], "第一次明显退步", "分数第一次变得刺眼。孩子看着卷子，像看见一个不被喜欢的自己。", ["名校执念", "情绪价值"], { academic: -2, pressure: 6, bond: -2 }, ["press", "explain", "listen"]),
  phase("p3_w", "三年级寒假", "补课入口", ["ranking"], "寒假班试听", "你说只是试听，孩子却听出这可能不是一次。教室里的暖气很足，空气还是很紧。", ["鸡娃内卷", "补偿人生"], { academic: 5, pressure: 7, self: -2 }, ["press", "protect", "listen"]),
  phase("p3_s2", "三年级下学期", "兴趣分叉", ["interest"], "社团报名", "孩子在社团表上犹豫很久。你想推荐更有用的，他想选更好玩的。", ["天赋下注", "基础不基础"], { self: 5, pressure: 2 }, ["press", "explain", "handover"]),
  phase("p4_summer", "四年级暑假", "夏令营", ["interest"], "第一次离家营", "孩子拖着箱子进营地，没有回头。你突然明白，成长有时就是不回头。", ["温柔托底", "数字游民"], { self: 6, bond: 1, pressure: -1 }, ["press", "protect", "listen"]),
  phase("p4_s2", "四年级下学期", "小团体", ["school", "teen"], "被排除的一天", "孩子说今天没人等自己一起走。你想立刻解决，却发现有些孤独只能陪着穿过去。", ["关系想象", "情绪价值"], { pressure: 4, self: 3, bond: -1 }, ["protect", "explain", "listen"]),
  phase("p5_s1", "五年级上学期", "小升初预热", ["ranking"], "家长会暗流", "老师没有明说升学压力，但每个家长都听懂了。你也听懂了。", ["名校执念", "鸡娃内卷"], { academic: 5, pressure: 7, bond: -2 }, ["press", "protect", "listen"]),
  phase("p5_w", "五年级寒假", "证书寒假", ["ranking", "interest"], "证书盘点", "你把孩子拿过的奖状数了一遍。数量不少，却没有一张写着孩子最近开不开心。", ["赛博对账", "名校执念"], { academic: 4, pressure: 6, self: -3 }, ["press", "explain", "listen"]),
  phase("p5_s2", "五年级下学期", "隐私出现", ["ranking", "teen"], "日记本抽屉", "抽屉上了锁。你有点受伤，又隐约知道那把锁不是突然出现的。", ["控制语气", "情绪价值"], { self: 5, bond: -4, pressure: 3 }, ["press", "explain", "listen"]),
  phase("p6_s1", "六年级上学期", "冲刺", ["ranking"], "倒计时贴纸", "距离升学考试还有多少天，被写在墙上。日子变得很清楚，人却有点模糊。", ["鸡娃内卷", "名校执念"], { academic: 6, pressure: 8, self: -3 }, ["press", "protect", "listen"]),
  phase("p6_w", "六年级寒假", "择校寒假", ["ranking"], "择校表格", "学校、距离、费用、成绩线被填进表格。孩子坐在旁边，像被你们一起填进去。", ["赛博对账", "补偿人生"], { academic: 5, pressure: 7, bond: -3 }, ["press", "explain", "handover"]),
  phase("p6_s2", "六年级下学期", "小学毕业", ["ranking"], "毕业留言册", "同学写下以后常联系。你知道有些人会散，有些东西也会散。", ["温柔托底"], { pressure: -1, bond: 3, self: 3 }, ["listen", "protect", "explain"]),
  phase("middle_summer", "小升初暑假", "升学暑假", ["ranking", "teen"], "新学校群", "新学校群里开始报身高、成绩和特长。孩子还没入学，已经被重新排序了一次。", ["名校执念", "鸡娃内卷"], { academic: 4, pressure: 7, self: -2 }, ["press", "protect", "listen"]),
  phase("m1_s1", "初一上学期", "新秩序", ["teen"], "第一次月考", "初中的第一次月考让孩子发现，过去的擅长不一定能带到新地图。", ["名校执念"], { academic: 2, pressure: 6, self: -2 }, ["press", "explain", "listen"]),
  phase("m1_w", "初一寒假", "青春期前夜", ["teen"], "手机使用协议", "你们签了一份手机使用协议。白纸黑字很清楚，真正难的是信任怎么写。", ["控制语气", "AI托管"], { pressure: 5, bond: -3, self: 2 }, ["press", "explain", "handover"]),
  phase("m1_s2", "初一下学期", "朋友", ["teen"], "聊天置顶", "孩子手机里有了置顶的人。你没有名字，却能感觉到自己的位置在变化。", ["关系想象"], { self: 5, bond: -3, pressure: 2 }, ["press", "explain", "listen"]),
  phase("m2_summer", "初二暑假", "分水岭暑假", ["teen", "interest"], "暑假突然长高", "孩子身体变化很快，情绪也像换了天气系统。你们都还没学会新的相处距离。", ["活人感", "关系想象"], { self: 6, pressure: 3, bond: -2 }, ["press", "protect", "listen"]),
  phase("m2_s1", "初二上学期", "分化", ["teen", "ranking"], "成绩分层", "班里开始分层，朋友之间也开始分层。孩子第一次问：我是不是就这样了？", ["补偿人生", "名校执念"], { academic: 3, pressure: 8, self: -3 }, ["press", "explain", "listen"]),
  phase("m2_w", "初二寒假", "沉默寒假", ["teen"], "房门里的假期", "寒假里孩子大部分时间都在房间。你们隔着一扇门，各自假装没事。", ["丝瓜汤家庭", "控制语气"], { self: 4, pressure: 5, bond: -6 }, ["press", "explain", "listen"]),
  phase("m2_s2", "初二下学期", "反抗", ["teen"], "第一次摔门", "门砰地一声关上。你很生气，也终于听见那些小声的不满有多大。", ["服从期待", "控制语气"], { self: 7, pressure: 6, bond: -7 }, ["press", "explain", "listen"]),
  phase("m3_s1", "初三上学期", "中考倒计时", ["exam", "ranking"], "中考誓师", "操场上口号很响。孩子跟着喊，声音却像从很远的地方传来。", ["助我破鼎", "鸡娃内卷"], { academic: 7, pressure: 10, self: -2 }, ["press", "protect", "listen"]),
  phase("m3_w", "初三寒假", "最后寒假", ["exam"], "错题堆成山", "寒假没有完全像寒假。错题本摊开，像一座必须翻过去的山。", ["名校执念", "助我破鼎"], { academic: 7, pressure: 10, bond: -2 }, ["press", "protect", "listen"]),
  phase("m3_s2", "初三下学期", "中考", ["exam"], "中考考场", "孩子走进考场时没有回头。你站在校门外，忽然发现自己什么也做不了。", ["补偿人生", "温柔托底"], { academic: 5, pressure: 6, bond: 1 }, ["press", "protect", "listen"]),
  phase("high_summer", "中考后暑假", "高中入口", ["after", "teen"], "分数线公布", "分数线出来那天，群里有人欢呼，有人沉默。孩子看着屏幕，像看一张新的身份证。", ["名校执念", "松弛感"], { academic: 4, pressure: 4, self: 2 }, ["press", "explain", "listen"]),
  phase("h1_s1", "高一上学期", "新高中", ["teen", "ranking"], "重点班边缘", "孩子坐在重点班后排。前面的人跑得很快，后面的人不敢停。", ["名校执念", "鸡娃内卷"], { academic: 4, pressure: 8, self: -2 }, ["press", "protect", "listen"]),
  phase("h1_w", "高一寒假", "第一次高中寒假", ["teen", "interest"], "选科预热", "物化生、史地政、就业、兴趣，所有词都挤进一个寒假。孩子说头疼。", ["赛博对账", "基础不基础"], { academic: 4, pressure: 7, self: -1 }, ["press", "explain", "handover"]),
  phase("h1_s2", "高一下学期", "选科", ["teen", "exam"], "选科表", "孩子想选的和你认为稳的并不一样。那张表第一次像一份亲子关系测试。", ["基础不基础", "补偿人生"], { academic: 3, pressure: 6, bond: -3 }, ["press", "explain", "handover"]),
  phase("h2_summer", "高二暑假", "长暑假", ["interest", "teen"], "短暂喘气", "孩子有几天没有学习。你看着他发呆，差点提醒时间宝贵，又忍住了。", ["松弛感", "活人感"], { pressure: -6, self: 6, bond: 4 }, ["press", "protect", "listen"]),
  phase("h2_s1", "高二上学期", "高压常态", ["exam", "teen"], "周测麻木", "周测多到孩子已经不太记得哪次考了什么。你们也开始把焦虑过成日常。", ["鸡娃内卷", "预制人生"], { academic: 5, pressure: 9, self: -3 }, ["press", "protect", "listen"]),
  phase("h2_w", "高二寒假", "志愿前夜", ["exam", "after"], "专业短视频", "你们刷了很多专业介绍短视频。每个都说自己有未来，每个未来都像广告。", ["AI托管", "赛博对账"], { academic: 3, pressure: 6, self: 1 }, ["press", "explain", "handover"]),
  phase("h2_s2", "高二下学期", "排名定型", ["exam"], "省排名预测", "排名、位次、等效分把人变成坐标。孩子问：我除了坐标还有什么？", ["名校执念", "活人感"], { academic: 6, pressure: 10, self: -4 }, ["press", "protect", "listen"]),
  phase("h3_summer", "高三前暑假", "准高三", ["exam"], "准高三启动", "暑假刚开始，准高三已经开始。孩子说这像提前服役。", ["鸡娃内卷", "助我破鼎"], { academic: 7, pressure: 10, bond: -2 }, ["press", "protect", "listen"]),
  phase("h3_s1", "高三上学期", "一轮复习", ["exam"], "一轮复习", "知识点被重新扫过一遍。孩子发现有些漏洞像家里的旧裂缝，一直都在。", ["补偿人生", "名校执念"], { academic: 8, pressure: 9, self: -2 }, ["press", "explain", "listen"]),
  phase("h3_w", "高三寒假", "最后寒假", ["exam"], "除夕错题", "烟花在窗外响，孩子在屋里改错题。你说辛苦这一阵，孩子没有接话。", ["丝瓜汤家庭", "鸡娃内卷"], { academic: 7, pressure: 12, bond: -5 }, ["press", "protect", "listen"]),
  phase("h3_s2", "高三下学期", "高考", ["exam"], "最后一张准考证", "准考证被放进透明文件袋。那张纸很轻，整个家却一起屏住了呼吸。", ["名校执念", "温柔托底"], { academic: 8, pressure: 8, bond: 1 }, ["press", "protect", "listen"]),
  phase("after_exam", "高考后", "空白期", ["after"], "突然不用学习", "高考后的第一天，孩子醒来后不知道该做什么。自由突然大到有点吓人。", ["活人感", "松弛感"], { pressure: -8, self: 5, bond: 2 }, ["listen", "protect", "handover"]),
  phase("volunteer", "志愿填报", "选择", ["after"], "志愿系统开放", "系统开放那一刻，十八年的期待挤进几个下拉框。", ["赛博对账", "基础不基础"], { academic: 3, pressure: 7, self: 1 }, ["press", "explain", "handover"]),
  phase("admission", "录取后", "入场券", ["after"], "快递短信", "录取快递发来短信。你们等的不只是纸，还有这一路到底算什么。", ["名校执念", "温柔托底"], { pressure: -2, bond: 3 }, ["press", "explain", "listen"])
];

const detailedEventPacks = {
  birth: [
    { title: "发育曲线", body: "曲线图上一个小点偏离了平均线。你盯着它很久，像盯着命运第一次偏航。", tags: ["赛博对账", "预制人生"], base: { pressure: 4, bond: -1 }, choices: ["press", "explain", "protect"] },
    { title: "第一次被比较", body: "同龄孩子已经会说更多词了。你嘴上说不急，心里却悄悄刷新了很多育儿帖。", tags: ["鸡娃内卷", "补偿人生"], base: { pressure: 5, self: -2 }, choices: ["press", "protect", "listen"] },
    { title: "乱七八糟的客厅", body: "玩具铺满地面。它不像一个整洁的家，却像一个孩子真的生活过的地方。", tags: ["活人感", "松弛感"], base: { pressure: -3, self: 4, bond: 4 }, choices: ["listen", "protect", "explain"] }
  ],
  school: [
    { title: "老师的一句反馈", body: "老师说孩子最近有点走神。你把这句话带回家，它在饭桌上变成了很长的影子。", tags: ["服从期待", "情绪价值"], base: { pressure: 4, bond: -2 }, choices: ["press", "explain", "listen"] },
    { title: "家长群深夜消息", body: "晚上十一点，家长群还在讨论资料。你放下手机，又忍不住重新拿起来。", tags: ["鸡娃内卷", "名校执念"], base: { academic: 4, pressure: 6, self: -2 }, choices: ["press", "protect", "listen"] },
    { title: "校服太大", body: "校服袖子长出一截。孩子说没关系，反正以后会长大。你忽然被这句话安慰了一下。", tags: ["温柔托底", "活人感"], base: { pressure: -2, bond: 4, self: 2 }, choices: ["listen", "protect", "explain"] }
  ],
  interest: [
    { title: "三分钟热度", body: "孩子说不想继续了。你不确定这是放弃，还是兴趣第一次表达自己的边界。", tags: ["天赋下注", "基础不基础"], base: { self: 5, pressure: 4, academic: -2 }, choices: ["press", "bargain", "listen"] },
    { title: "作品被点赞", body: "一个陌生人的点赞让孩子高兴了很久。你发现外界评价也能长成新的赛道。", tags: ["主理人家庭", "谷子经济"], base: { self: 7, pressure: 3 }, choices: ["press", "explain", "handover"] },
    { title: "没有用的喜欢", body: "孩子喜欢的东西看起来没什么用。你差点这么说，幸好停住了半句。", tags: ["去班味", "活人感"], base: { academic: -2, pressure: -3, self: 7, bond: 3 }, choices: ["listen", "protect", "handover"] }
  ],
  ranking: [
    { title: "排名截图", body: "排名截图被保存进相册。它方便复盘，也方便在失眠时反复点开。", tags: ["名校执念", "赛博对账"], base: { academic: 4, pressure: 7, bond: -3 }, choices: ["press", "explain", "listen"] },
    { title: "同学突然领先", body: "一个原本差不多的同学突然冲到前面。孩子没说什么，你却听见比较开始加速。", tags: ["鸡娃内卷"], base: { academic: 3, pressure: 6, self: -2 }, choices: ["press", "protect", "listen"] },
    { title: "错题本空白页", body: "错题本翻到一页空白。孩子说今天不想写了。空白有时也是一种求救。", tags: ["情绪价值", "松弛感"], base: { academic: -2, pressure: -5, bond: 5 }, choices: ["press", "protect", "listen"] }
  ],
  teen: [
    { title: "突然换头像", body: "孩子换了一个你看不懂的头像。你问什么意思，他说你不用懂。", tags: ["谷子经济", "关系想象"], base: { self: 6, bond: -2, pressure: 2 }, choices: ["press", "explain", "listen"] },
    { title: "朋友圈三天可见", body: "你发现孩子朋友圈三天可见。那不是技术设置，而是一种亲子距离。", tags: ["控制语气", "丝瓜汤家庭"], base: { self: 5, pressure: 3, bond: -6 }, choices: ["press", "explain", "listen"] },
    { title: "深夜还在线", body: "凌晨一点，孩子的聊天状态还亮着。你想敲门，又怕敲开的不是门，是战争。", tags: ["关系想象", "情绪价值"], base: { pressure: 5, bond: -2, self: 4 }, choices: ["press", "protect", "listen"] }
  ],
  exam: [
    { title: "模拟考波动", body: "模拟考成绩忽上忽下。每一次波动都像天气预报，决定家里这周能不能晴。", tags: ["名校执念", "鸡娃内卷"], base: { academic: 5, pressure: 9, bond: -3 }, choices: ["press", "protect", "listen"] },
    { title: "志愿预测软件", body: "软件给出一串概率。孩子问：如果我不是概率呢？你一时不知道怎么答。", tags: ["AI托管", "赛博对账"], base: { academic: 4, pressure: 6, self: -1 }, choices: ["press", "explain", "handover"] },
    { title: "考前沉默", body: "离考试越近，孩子话越少。你们都想鼓劲，却怕每个字都多余。", tags: ["补偿人生", "情绪价值"], base: { pressure: 7, bond: -2 }, choices: ["press", "protect", "listen"] }
  ],
  after: [
    { title: "亲戚问分数", body: "亲戚的第一句话还是分数。孩子笑了一下，你听出那不是开心，是熟练。", tags: ["名校执念", "丝瓜汤家庭"], base: { pressure: 4, bond: -3 }, choices: ["press", "protect", "listen"] },
    { title: "第一次自己订票", body: "孩子第一次自己订票去另一个城市。你没有参与，却反复检查天气。", tags: ["数字游民", "浪浪山小妖怪"], base: { self: 8, pressure: -1, bond: 2 }, choices: ["press", "explain", "handover"] },
    { title: "账号简介更新", body: "孩子改了账号简介。短短一行字，比志愿表更像他给自己的录取通知书。", tags: ["主理人家庭", "活人感"], base: { self: 8, pressure: -2 }, choices: ["listen", "explain", "handover"] }
  ]
};

const calendarEventPacks = {
  winter: [
    { title: "年夜饭问题", body: "年夜饭桌上，有人问成绩，有人问特长，有人问未来。孩子夹菜的动作慢了下来。", tags: ["丝瓜汤家庭", "名校执念"], base: { pressure: 5, bond: -4 }, choices: ["press", "protect", "listen"] },
    { title: "寒假余额不足", body: "寒假还剩三天，计划完成了一半。你们都假装还有很多时间。", tags: ["预制人生", "松弛感"], base: { academic: 2, pressure: 5, self: -1 }, choices: ["press", "bargain", "protect"] }
  ],
  summer: [
    { title: "暑假第一天", body: "暑假第一天，孩子睡到很晚。你看了三次时间，终于没有叫醒。", tags: ["松弛感", "活人感"], base: { pressure: -5, self: 5, bond: 3 }, choices: ["press", "protect", "listen"] },
    { title: "夏令营宣传页", body: "宣传页上每个孩子都笑得像未来精英。你看着价格，孩子看着照片里的草地。", tags: ["鸡娃内卷", "数字游民"], base: { academic: 3, pressure: 5, self: 1 }, choices: ["press", "explain", "handover"] }
  ],
  transition: [
    { title: "新群昵称", body: "新的班级群要求改昵称。学校、班级、姓名被排得整齐，像重新上架。", tags: ["预制人生", "服从期待"], base: { pressure: 3, self: -2 }, choices: ["press", "explain", "listen"] },
    { title: "旧书清理", body: "旧课本被捆起来。孩子摸了摸封面，像在告别一个已经不属于自己的版本。", tags: ["活人感", "补偿人生"], base: { pressure: -1, self: 4, bond: 2 }, choices: ["listen", "protect", "explain"] }
  ]
};

detailedStages.forEach(stage => {
  stage.routeKeys.forEach(key => {
    if (detailedEventPacks[key]) {
      stage.events.push(...detailedEventPacks[key]);
    }
  });

  if (stage.id.includes("_w")) stage.events.push(...calendarEventPacks.winter);
  if (stage.id.includes("summer")) stage.events.push(...calendarEventPacks.summer);
  if (/middle_summer|high_summer|volunteer|admission/.test(stage.id)) {
    stage.events.push(...calendarEventPacks.transition);
  }
});

const routeEvents = {
  名校执念: {
    school: [
      { title: "幼升小简历", body: "你把孩子三年的证书排成一页。那张纸看起来很漂亮，只是孩子本人像被压缩成了附件。", tags: ["名校执念"], base: { academic: 8, pressure: 8, self: -5, bond: -3 }, choices: ["press", "explain", "protect"] }
    ],
    ranking: [
      { title: "奥数班分层", body: "老师说孩子适合冲高阶班。你知道那意味着更多机会，也意味着周末从此不再像周末。", tags: ["名校执念"], base: { academic: 9, pressure: 9, self: -4 }, choices: ["press", "bargain", "listen"] }
    ],
    teen: [
      { title: "竞赛名单", body: "孩子进了竞赛名单。你们都笑了，只是孩子笑的时候先看了一眼你的反应。", tags: ["名校执念"], base: { academic: 10, pressure: 8, bond: -4 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "清北估分线", body: "估分表被反复刷新。你们讨论的不是去哪里读书，而是差几分才配得上这些年。", tags: ["名校执念"], base: { academic: 9, pressure: 13, self: -5, bond: -5 }, choices: ["press", "protect", "listen"] }
    ],
    after: [
      { title: "录取横幅", body: "社区想给孩子挂一条横幅。孩子说随便，你却听出那不是同意，而是已经懒得争。", tags: ["名校执念"], base: { academic: 6, pressure: 6, self: -6, bond: -4 }, choices: ["press", "explain", "listen"] }
    ]
  },
  服从期待: {
    birth: [
      { title: "不哭才乖", body: "孩子哭得久了一点。你说不哭才乖，于是家里第一次把情绪分成了对和错。", tags: ["服从期待"], base: { pressure: 6, self: -6, bond: -3 }, choices: ["press", "listen", "protect"] }
    ],
    school: [
      { title: "老师夸懂事", body: "老师说孩子特别懂事，从不添麻烦。你很欣慰，却没问孩子有没有麻烦。", tags: ["服从期待"], base: { academic: 4, pressure: 6, self: -7, bond: -3 }, choices: ["press", "explain", "listen"] }
    ],
    ranking: [
      { title: "没说出口的委屈", body: "孩子说没事。你相信了，因为这两个字太方便，也太像你想要的答案。", tags: ["服从期待"], base: { pressure: 6, self: -5, bond: -6 }, choices: ["press", "protect", "listen"] }
    ],
    teen: [
      { title: "突然的顶嘴", body: "孩子第一次在饭桌上顶嘴。你觉得陌生，其实那句话已经在他心里排练了很多年。", tags: ["服从期待"], base: { self: 9, pressure: 8, bond: -8 }, choices: ["press", "explain", "listen"] }
    ]
  },
  温柔托底: {
    birth: [
      { title: "慢一点也可以", body: "体检表上有一项落后。你担心了一整晚，第二天却没有把担心变成催促。", tags: ["温柔托底"], base: { pressure: -5, self: 4, bond: 8 }, choices: ["listen", "protect", "explain"] }
    ],
    school: [
      { title: "不是必须第一天适应", body: "孩子说不喜欢学校。你没有立刻纠正，而是陪他把不喜欢拆成几件小事。", tags: ["温柔托底"], base: { pressure: -4, self: 5, bond: 8 }, choices: ["listen", "protect", "handover"] }
    ],
    teen: [
      { title: "可以失败的家", body: "孩子带回一张很难看的卷子。你们没有复盘到深夜，只是一起下楼买了热牛奶。", tags: ["温柔托底"], base: { academic: -3, pressure: -8, self: 5, bond: 10 }, choices: ["listen", "explain", "protect"] }
    ],
    after: [
      { title: "普通也庆祝", body: "结果不够传奇。你还是买了蛋糕，因为十八岁本身也值得被郑重对待。", tags: ["温柔托底"], base: { pressure: -6, self: 5, bond: 9 }, choices: ["listen", "protect", "handover"] }
    ]
  },
  阶层跃迁: {
    school: [
      { title: "别输在见识上", body: "你带孩子去更贵的商场和更远的展览。你说这是开眼界，其实也在训练他不要露怯。", tags: ["阶层跃迁"], base: { pressure: 7, self: 4, academic: 3 }, choices: ["press", "explain", "listen"] }
    ],
    interest: [
      { title: "第一次摆摊成功", body: "孩子卖出了几件旧玩具，比起奖状，他更兴奋地数了很久零钱。", tags: ["阶层跃迁"], base: { self: 9, academic: -2, pressure: -1 }, choices: ["press", "explain", "handover"] }
    ],
    teen: [
      { title: "兼职念头", body: "孩子说想假期去打工。你听见的不是体验生活，而是担心他太早知道钱的重量。", tags: ["阶层跃迁"], base: { self: 8, academic: -4, pressure: 4 }, choices: ["press", "bargain", "handover"] }
    ],
    after: [
      { title: "副业订单", body: "高考后的第一个订单到账。它不体面，也不稳定，但孩子第一次觉得自己能和世界交换。", tags: ["阶层跃迁"], base: { self: 11, academic: -5, pressure: -2 }, choices: ["press", "explain", "handover"] }
    ]
  },
  补偿人生: {
    birth: [
      { title: "别走我的旧路", body: "你看着婴儿床，想起自己吃过的苦。那一刻，孩子还没长大，就已经背上了你的改写版人生。", tags: ["补偿人生"], base: { academic: 4, pressure: 8, bond: -2 }, choices: ["press", "explain", "protect"] }
    ],
    ranking: [
      { title: "稳定才安心", body: "你反复说稳定最重要。孩子点头，却在草稿本角落画了一扇很远的门。", tags: ["补偿人生"], base: { academic: 5, pressure: 7, self: -3 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "体面专业", body: "你推荐的专业很稳，稳到孩子很难反驳。因为反驳它，像是在反驳你半生的经验。", tags: ["补偿人生"], base: { academic: 5, pressure: 8, self: -5, bond: -4 }, choices: ["press", "explain", "handover"] }
    ]
  },
  天赋下注: {
    interest: [
      { title: "天赋被看见", body: "老师说孩子有灵气。你激动得睡不着，也从那天开始害怕浪费这份灵气。", tags: ["天赋下注"], base: { self: 10, pressure: 6, academic: -3 }, choices: ["press", "bargain", "handover"] }
    ],
    ranking: [
      { title: "练习室和作业本", body: "练习室的灯和作业本的灯都亮着。孩子不知道该先辜负哪一个。", tags: ["天赋下注"], base: { self: 6, academic: -4, pressure: 7 }, choices: ["press", "protect", "listen"] }
    ],
    teen: [
      { title: "艺考念头", body: "孩子第一次认真提到艺考。你发现自己支持兴趣，但未必支持兴趣变成人生。", tags: ["天赋下注"], base: { self: 10, academic: -6, pressure: 5, bond: -2 }, choices: ["press", "explain", "handover"] }
    ],
    after: [
      { title: "工作室试用", body: "孩子拿到的是工作室试用，不是大学通知书。你看着那张纸，努力判断这算不算好消息。", tags: ["天赋下注"], base: { self: 12, academic: -7, pressure: -1 }, choices: ["press", "explain", "handover"] }
    ]
  },
  家产路径: {
    interest: [
      { title: "店里的一把小凳子", body: "孩子坐在店里的小凳子上写作业，听你和客人讨价还价。那也是一种早教。", tags: ["家产路径"], base: { self: 5, academic: -2, pressure: 3 }, choices: ["press", "explain", "handover"] }
    ],
    ranking: [
      { title: "暑假看店", body: "同学去夏令营，孩子在店里学会开发票。你说这是锻炼，孩子说这是没得选。", tags: ["家产路径"], base: { self: 7, academic: -5, pressure: 5, bond: -3 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "接班试用期", body: "家里给孩子留了一张位置。它看起来像退路，也像一条很早就写好的路。", tags: ["家产路径"], base: { self: 7, academic: -5, pressure: 4 }, choices: ["press", "explain", "handover"] }
    ]
  },
  关系想象: {
    school: [
      { title: "最好的朋友", body: "孩子每天都提同一个朋友。你一边高兴他有人陪，一边担心他太需要别人。", tags: ["关系想象"], base: { self: 4, bond: 3, pressure: -2 }, choices: ["listen", "explain", "protect"] }
    ],
    teen: [
      { title: "聊天记录", body: "你看见一条暧昧消息。那一秒，你很想知道全部，也很怕知道全部。", tags: ["关系想象"], base: { self: 8, pressure: 6, bond: -6 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "一起去远方", body: "孩子说想和喜欢的人去另一座城市。你听见爱情，也听见孩子想离家远一点。", tags: ["关系想象"], base: { self: 9, pressure: 3, bond: -5 }, choices: ["press", "explain", "listen"] }
    ]
  },
  控制语气: {
    school: [
      { title: "必须做到", body: "你说必须做到。孩子照做了，只是从那天起，失败不再是一件可以告诉你的事。", tags: ["控制语气"], base: { academic: 4, pressure: 9, self: -6, bond: -5 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "门被反锁", body: "孩子第一次把房门反锁。门内门外都很安静，但你们都知道有什么东西变了。", tags: ["控制语气"], base: { pressure: 8, self: 7, bond: -10 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "只能成功", body: "你说这次只能成功。孩子点头，像把最后一点退路也交了出去。", tags: ["控制语气"], base: { academic: 6, pressure: 14, self: -6, bond: -6 }, choices: ["press", "protect", "listen"] }
    ]
  },
  鸡娃内卷: {
    birth: [
      { title: "早教群打卡", body: "家长群每天晒打卡截图。你本来只是围观，后来发现不发点什么，好像孩子就少长大了一点。", tags: ["鸡娃内卷"], base: { academic: 5, pressure: 7, self: -4, bond: -2 }, choices: ["press", "explain", "protect"] }
    ],
    school: [
      { title: "家长群卷王", body: "有人把孩子的日程表发进群里。你看完沉默三分钟，然后打开了新的报名链接。", tags: ["鸡娃内卷"], base: { academic: 7, pressure: 9, self: -5, bond: -4 }, choices: ["press", "bargain", "listen"] }
    ],
    interest: [
      { title: "硬控三小时", body: "一节体验课把孩子硬控三小时。老师说专注力很好，你看见的是孩子越来越会坐着不动。", tags: ["鸡娃内卷"], base: { academic: 6, pressure: 8, self: -6 }, choices: ["press", "protect", "listen"] }
    ],
    ranking: [
      { title: "卷王同桌", body: "同桌每天刷题到凌晨。孩子说自己是不是不够努力，你第一次发现比较会自己长脚。", tags: ["鸡娃内卷"], base: { academic: 5, pressure: 10, bond: -3 }, choices: ["press", "explain", "protect"] }
    ],
    exam: [
      { title: "上岸倒计时", body: "你们把高考说成上岸，仿佛十八岁之前的人生一直在水里。孩子游得很累，也不敢喊。", tags: ["鸡娃内卷"], base: { academic: 8, pressure: 12, self: -5, bond: -5 }, choices: ["press", "protect", "listen"] }
    ]
  },
  松弛感: {
    birth: [
      { title: "拒绝精细喂养焦虑", body: "你关掉一篇又一篇育儿攻略。孩子今天多吃一口少吃一口，终于不再决定全家的心情。", tags: ["松弛感"], base: { pressure: -7, bond: 7, self: 3 }, choices: ["listen", "protect", "explain"] }
    ],
    school: [
      { title: "松弛感入学", body: "别人忙着晒书包和计划表，你只问孩子午饭好不好吃。孩子说土豆丝不错。", tags: ["松弛感"], base: { pressure: -5, self: 4, bond: 8 }, choices: ["listen", "protect", "handover"] }
    ],
    ranking: [
      { title: "考砸也能吃火锅", body: "孩子考砸了，你们照常去吃火锅。热气升起来的时候，分数第一次没有坐在主位。", tags: ["松弛感"], base: { academic: -2, pressure: -9, self: 5, bond: 9 }, choices: ["listen", "explain", "protect"] }
    ],
    after: [
      { title: "Gap Year 念头", body: "孩子说想先停一年看看世界。你脑子里警铃大作，嘴上却只问：你打算怎么养活自己？", tags: ["松弛感"], base: { academic: -6, pressure: -5, self: 12, bond: 3 }, choices: ["press", "explain", "handover"] }
    ]
  },
  情绪价值: {
    birth: [
      { title: "哭声翻译器", body: "你没有把哭声当成麻烦，而是努力分辨里面到底是困、饿，还是需要被抱一下。", tags: ["情绪价值"], base: { pressure: -4, bond: 10, self: 3 }, choices: ["listen", "protect", "explain"] }
    ],
    school: [
      { title: "夸夸小纸条", body: "孩子书包里多了一张你写的小纸条。它不能提高分数，但在某个课间救了孩子一次。", tags: ["情绪价值"], base: { pressure: -3, bond: 9, self: 5 }, choices: ["listen", "protect", "handover"] }
    ],
    teen: [
      { title: "情绪价值充值", body: "孩子深夜发来一串乱码一样的消息。你没有讲大道理，只回：我在。", tags: ["情绪价值"], base: { pressure: -7, bond: 13, self: 5 }, choices: ["listen", "protect", "explain"] }
    ],
    after: [
      { title: "活人感恢复", body: "高考后孩子开始睡到中午、发呆、乱笑。你忽然觉得，这些不像退步，更像活人感回来了。", tags: ["情绪价值"], base: { pressure: -8, self: 8, bond: 6 }, choices: ["listen", "protect", "handover"] }
    ]
  },
  AI托管: {
    school: [
      { title: "AI 口语陪练", body: "孩子每天对着平板练英语。发音变准了，你却不确定他是不是也变得更少和人说话。", tags: ["AI托管"], base: { academic: 6, pressure: 3, self: 2, bond: -3 }, choices: ["press", "explain", "listen"] }
    ],
    interest: [
      { title: "编程课体验", body: "孩子让小机器人走出迷宫。你看见未来，也看见新的赛道正在向你招手。", tags: ["AI托管"], base: { academic: 5, self: 7, pressure: 5 }, choices: ["press", "bargain", "handover"] }
    ],
    ranking: [
      { title: "错题本算法", body: "软件精准推送薄弱题型。孩子说它比你更懂自己，你一时分不清这是进步还是讽刺。", tags: ["AI托管"], base: { academic: 8, pressure: 5, bond: -5 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "赛博心理咨询", body: "孩子把心事讲给 AI。你松了一口气，又忽然意识到：至少它不会打断。", tags: ["AI托管"], base: { self: 6, pressure: -3, bond: -7 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "提示词作品集", body: "孩子用提示词做了一个作品集。亲戚问这算不算真本事，你发现自己也想问。", tags: ["AI托管"], base: { academic: -2, self: 10, pressure: 3 }, choices: ["press", "explain", "handover"] }
    ]
  },
  小孩哥小孩姐: {
    birth: [
      { title: "天才宝宝短视频", body: "孩子无意间做了件聪明事。你拍下来发出去，点赞像一阵提前到来的掌声。", tags: ["小孩哥小孩姐"], base: { academic: 5, pressure: 5, self: 3, bond: -2 }, choices: ["press", "explain", "protect"] }
    ],
    school: [
      { title: "小孩姐发言", body: "孩子在班会上说得头头是道，像个小大人。你骄傲，也有点忘了她本来可以只是小孩。", tags: ["小孩哥小孩姐"], base: { academic: 6, self: 5, pressure: 6 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "热搜式夸奖", body: "亲戚都说孩子太成熟了。孩子笑着收下，回房间后把灯关得很早。", tags: ["小孩哥小孩姐"], base: { academic: 5, pressure: 8, self: -4, bond: -3 }, choices: ["press", "protect", "listen"] }
    ],
    after: [
      { title: "神童滤镜掉落", body: "十八岁之后，孩子第一次不再显得超前。你们都需要适应：普通不是塌房。", tags: ["小孩哥小孩姐"], base: { academic: -4, pressure: -3, self: 6, bond: 2 }, choices: ["press", "explain", "listen"] }
    ]
  },
  去班味: {
    school: [
      { title: "拒绝小大人", body: "老师夸孩子像个小干部。你礼貌道谢，回家却告诉孩子：你不用这么早有班味。", tags: ["去班味"], base: { academic: -1, pressure: -5, self: 8, bond: 5 }, choices: ["listen", "protect", "handover"] }
    ],
    interest: [
      { title: "兴趣不是 KPI", body: "孩子画得很开心，但不像能获奖。你差点问有没有用，最后改成问：还想画什么？", tags: ["去班味"], base: { academic: -3, pressure: -6, self: 10, bond: 5 }, choices: ["listen", "protect", "handover"] }
    ],
    teen: [
      { title: "反内耗宣言", body: "孩子说不想把人生过成打卡表。你听着刺耳，却也知道这话不是完全没道理。", tags: ["去班味"], base: { academic: -4, pressure: -6, self: 12, bond: 2 }, choices: ["press", "explain", "handover"] }
    ],
    after: [
      { title: "无班味暑假", body: "高考后的暑假，孩子没有实习、没有证书，只认真学会了做饭和睡觉。", tags: ["去班味"], base: { academic: -5, pressure: -9, self: 10, bond: 4 }, choices: ["press", "explain", "listen"] }
    ]
  },
  丝瓜汤家庭: {
    birth: [
      { title: "第一口为你好", body: "你说这都是为了你好。孩子还听不懂，却已经在家里遇见了最难反驳的句式。", tags: ["丝瓜汤家庭"], base: { pressure: 7, self: -6, bond: -5 }, choices: ["press", "explain", "listen"] }
    ],
    school: [
      { title: "饭桌上的丝瓜汤", body: "饭桌上没人吵架，只是每句话都像在提醒孩子：你欠这个家很多理解。", tags: ["丝瓜汤家庭"], base: { pressure: 8, self: -5, bond: -7 }, choices: ["press", "protect", "listen"] }
    ],
    teen: [
      { title: "孝顺 KPI", body: "孩子被要求懂事、优秀、体谅，还要情绪稳定。你说家里不容易，孩子说自己也不容易。", tags: ["丝瓜汤家庭"], base: { pressure: 10, self: -3, bond: -9 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "全家牺牲叙事", body: "所有人都在说为你付出了多少。孩子看着志愿表，像在填写一张还款计划。", tags: ["丝瓜汤家庭"], base: { academic: 4, pressure: 13, self: -7, bond: -8 }, choices: ["press", "protect", "listen"] }
    ],
    after: [
      { title: "迟到的边界感", body: "孩子终于说：不要再用为我好来替我决定。那句话很晚，但没有缺席。", tags: ["丝瓜汤家庭"], base: { self: 12, pressure: 3, bond: -8 }, choices: ["press", "explain", "handover"] }
    ]
  },
  DeepSeek陪跑: {
    school: [
      { title: "大模型作业搭子", body: "孩子把不会的题丢给大模型。答案来得很快，你却开始担心：思考是不是也会被外包。", tags: ["DeepSeek陪跑"], base: { academic: 6, pressure: 3, self: 3, bond: -2 }, choices: ["press", "explain", "listen"] }
    ],
    ranking: [
      { title: "智能体学习计划", body: "一个智能体把错题、背诵和睡眠排成完美计划。孩子看着那张表，像看见另一个更勤奋的自己。", tags: ["DeepSeek陪跑"], base: { academic: 8, pressure: 7, self: -2 }, choices: ["press", "protect", "handover"] }
    ],
    teen: [
      { title: "Prompt 里的人设", body: "孩子开始用提示词生成自己想成为的人。你发现他对 AI 说的愿望，比对你说的更完整。", tags: ["DeepSeek陪跑"], base: { self: 8, pressure: -2, bond: -5 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "智能体申请书", body: "孩子用智能体改了三版申请材料。文本很漂亮，但你们都在想：里面还有多少是孩子自己的声音。", tags: ["DeepSeek陪跑"], base: { academic: 5, self: 5, pressure: 4 }, choices: ["press", "explain", "handover"] }
    ]
  },
  具身智能: {
    birth: [
      { title: "机器人保姆广告", body: "你刷到具身智能育儿广告。它说能陪玩、纠错、讲故事，听起来像一个不会累的家长。", tags: ["具身智能"], base: { pressure: 2, bond: -2, academic: 3 }, choices: ["press", "explain", "listen"] }
    ],
    interest: [
      { title: "机器人夏令营", body: "孩子在夏令营里给机器装上眼睛和手臂。你第一次觉得未来不是作文题，而是一张报名表。", tags: ["具身智能"], base: { academic: 6, self: 8, pressure: 5 }, choices: ["press", "bargain", "handover"] }
    ],
    teen: [
      { title: "人形机器人比赛", body: "孩子的队伍调试到凌晨。机器终于站起来时，孩子自己却差点倒下。", tags: ["具身智能"], base: { academic: 8, self: 7, pressure: 9, bond: -3 }, choices: ["press", "protect", "listen"] }
    ],
    after: [
      { title: "未来工厂入场证", body: "孩子拿到的不是录取通知书，而是一张机器人实验室实习证。亲戚听不懂，你也只听懂一半。", tags: ["具身智能"], base: { academic: 3, self: 11, pressure: 2 }, choices: ["press", "explain", "handover"] }
    ]
  },
  数字游民: {
    school: [
      { title: "地理课外包给世界", body: "孩子说想以后到处生活。你以为是童话，后来发现这代人真的会把工位搬进背包。", tags: ["数字游民"], base: { academic: -2, self: 8, pressure: -3 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "远程协作初体验", body: "孩子和陌生网友一起做项目，时差比班级座位表更重要。你担心被骗，也担心自己太落后。", tags: ["数字游民"], base: { academic: -3, self: 11, pressure: 3, bond: -1 }, choices: ["press", "protect", "handover"] }
    ],
    after: [
      { title: "一张去清迈的票", body: "孩子说想先远程接单，再去一个生活成本低的城市住三个月。你听见的是不稳定，他听见的是可能性。", tags: ["数字游民"], base: { academic: -7, self: 14, pressure: -3 }, choices: ["press", "explain", "handover"] }
    ]
  },
  谷子经济: {
    school: [
      { title: "第一枚吧唧", body: "孩子用零花钱买了第一枚吧唧，小心地装进透明袋。你不理解，但那是他第一次认真拥有一种喜欢。", tags: ["谷子经济"], base: { academic: -2, self: 7, pressure: 1, bond: -1 }, choices: ["press", "explain", "listen"] }
    ],
    interest: [
      { title: "痛包预算表", body: "孩子给痛包做预算，精确到每一枚徽章。你惊讶地发现，消费也能训练计划能力。", tags: ["谷子经济"], base: { academic: 1, self: 9, pressure: 3 }, choices: ["press", "bargain", "handover"] }
    ],
    teen: [
      { title: "谷圈社交", body: "孩子在谷圈认识了新朋友。你看不懂暗号，却看懂他终于有了一个不用解释自己的地方。", tags: ["谷子经济"], base: { self: 10, pressure: -2, bond: -2 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "同人摊位", body: "高考后，孩子申请了一个同人摊位。那张入场证不大，却写着他自己的审美和劳动。", tags: ["谷子经济"], base: { academic: -4, self: 12, pressure: 1 }, choices: ["press", "explain", "handover"] }
    ]
  },
  赛博对账: {
    birth: [
      { title: "育儿开销表", body: "你给奶粉、早教、玩具和保险做了表格。孩子还不会数数，人生已经有了第一张账单。", tags: ["赛博对账"], base: { academic: 2, pressure: 6, bond: -3 }, choices: ["press", "explain", "protect"] }
    ],
    ranking: [
      { title: "投入产出比", body: "你开始计算补课费和名次提升。爱没有消失，只是被放进了一个太冷静的公式。", tags: ["赛博对账"], base: { academic: 5, pressure: 9, self: -4, bond: -6 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "志愿性价比", body: "你们比较城市、专业、就业率和房租。孩子说这不像选大学，像在选一只基金。", tags: ["赛博对账"], base: { academic: 4, pressure: 7, self: -2, bond: -4 }, choices: ["press", "explain", "handover"] }
    ]
  },
  活人感: {
    birth: [
      { title: "允许乱七八糟", body: "孩子把饭吃得到处都是。你没有立刻擦干净，因为那一刻他不像作品，更像活人。", tags: ["活人感"], base: { pressure: -5, self: 7, bond: 6 }, choices: ["listen", "protect", "explain"] }
    ],
    teen: [
      { title: "活人感回潮", body: "孩子开始大笑、争辩、睡懒觉，也会无聊。你突然觉得，比起优秀，他先像个人更重要。", tags: ["活人感"], base: { academic: -3, pressure: -8, self: 12, bond: 6 }, choices: ["listen", "protect", "handover"] }
    ],
    after: [
      { title: "不完美照片", body: "毕业照里孩子笑得有点糊。你没有重拍，因为这张照片终于不像证件照。", tags: ["活人感"], base: { pressure: -5, self: 8, bond: 7 }, choices: ["listen", "protect", "explain"] }
    ]
  },
  浪浪山小妖怪: {
    school: [
      { title: "出山前夜", body: "孩子说班里每个人都像有一座自己的山。你以为他在讲故事，其实他在讲未来。", tags: ["浪浪山小妖怪"], base: { self: 7, pressure: 4, academic: -2 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "浪浪山路口", body: "孩子想去一个不被看好的社团。你说那有什么用，他说总要先走出这座山。", tags: ["浪浪山小妖怪"], base: { academic: -4, self: 12, pressure: 5, bond: -2 }, choices: ["press", "explain", "handover"] }
    ],
    after: [
      { title: "小妖怪的通行证", body: "孩子没有拿到最闪亮的通知书，却拿到了一张去陌生城市的实习证。他说这就是出山。", tags: ["浪浪山小妖怪"], base: { academic: -4, self: 13, pressure: 2 }, choices: ["press", "explain", "handover"] }
    ]
  },
  助我破鼎: {
    ranking: [
      { title: "破鼎誓师", body: "孩子把错题本摊开，说这次要破鼎。你热血了一秒，也担心这口鼎会不会太重。", tags: ["助我破鼎"], base: { academic: 7, self: 7, pressure: 9 }, choices: ["press", "protect", "listen"] }
    ],
    teen: [
      { title: "逆袭剧本", body: "孩子把自己写进逆袭剧本。每一次失败都被解释成铺垫，直到铺垫也开始疼。", tags: ["助我破鼎"], base: { academic: 6, self: 7, pressure: 11, bond: -3 }, choices: ["press", "explain", "listen"] }
    ],
    exam: [
      { title: "最后一鼎", body: "高考前夜，孩子说助我破鼎。你想鼓掌，又怕他把人生当成只许赢的副本。", tags: ["助我破鼎"], base: { academic: 8, pressure: 13, self: 3 }, choices: ["press", "protect", "listen"] }
    ]
  },
  基础不基础: {
    school: [
      { title: "基础不基础的铅笔盒", body: "孩子想买一个花哨铅笔盒。你脱口而出：这基础吗？说完才发现，连喜欢都被你审了一遍。", tags: ["基础不基础"], base: { pressure: 5, self: -3, bond: -2 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "基础款人生", body: "你希望孩子先走基础路线，稳一点。孩子说，基础款穿久了，也会忘记自己喜欢什么颜色。", tags: ["基础不基础"], base: { academic: 4, pressure: 7, self: -4 }, choices: ["press", "explain", "handover"] }
    ],
    after: [
      { title: "不基础的志愿", body: "孩子填了一个你听起来不基础的专业。你查了半夜，越查越发现未来没有那么基础。", tags: ["基础不基础"], base: { academic: -2, pressure: 4, self: 9 }, choices: ["press", "explain", "handover"] }
    ]
  },
  邪修成长: {
    interest: [
      { title: "野路子教程", body: "孩子没报班，跟着网上教程学会了一个奇怪技能。你说不系统，他说这叫邪修。", tags: ["邪修成长"], base: { academic: -5, self: 13, pressure: 2 }, choices: ["press", "explain", "handover"] }
    ],
    ranking: [
      { title: "偏门提分法", body: "孩子用很怪的方法背书，效果居然不错。你想纠正姿势，又怕把唯一的灵气纠正没了。", tags: ["邪修成长"], base: { academic: 5, self: 8, pressure: 3 }, choices: ["press", "protect", "handover"] }
    ],
    after: [
      { title: "邪修作品集", body: "作品集看起来不学院，却有一种野生的完整。你突然意识到，路不正规不等于没有路。", tags: ["邪修成长"], base: { academic: -4, self: 14, pressure: 1 }, choices: ["press", "explain", "handover"] }
    ]
  },
  主理人家庭: {
    interest: [
      { title: "第一个账号", body: "孩子给自己的作品开了账号。粉丝不多，但他第一次把兴趣当成一个可以经营的世界。", tags: ["主理人家庭"], base: { academic: -2, self: 10, pressure: 4 }, choices: ["press", "explain", "handover"] }
    ],
    teen: [
      { title: "个人 IP 焦虑", body: "孩子开始研究标题、封面和人设。你担心他太早营业，他说每个人都在被看见。", tags: ["主理人家庭"], base: { academic: -3, self: 10, pressure: 7 }, choices: ["press", "protect", "listen"] }
    ],
    after: [
      { title: "主理人入场", body: "孩子没有去标准公司，而是和朋友做了一个小品牌。你问五险一金，他问能不能先活下来。", tags: ["主理人家庭"], base: { academic: -5, self: 14, pressure: 6 }, choices: ["press", "explain", "handover"] }
    ]
  },
  预制人生: {
    birth: [
      { title: "预制人生模板", body: "你替孩子想好了幼儿园、小学、大学和工作。那条路很完整，完整到没有给孩子留草稿区。", tags: ["预制人生"], base: { academic: 5, pressure: 9, self: -9, bond: -4 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "模板外错误", body: "孩子做了一件计划表之外的事。你不是生气那件事，而是害怕模板从此失效。", tags: ["预制人生"], base: { pressure: 10, self: 6, bond: -8 }, choices: ["press", "explain", "listen"] }
    ],
    after: [
      { title: "拆封预制包", body: "高考后，孩子没有按你准备好的路线走。他说自己不是一份预制菜，不能只负责加热。", tags: ["预制人生"], base: { academic: -3, pressure: 5, self: 12, bond: -5 }, choices: ["press", "explain", "handover"] }
    ]
  },
  来财许愿: {
    school: [
      { title: "来财头像", body: "你给孩子换了一个来财头像，说图个好兆头。孩子问：那我是不是也要负责发财？", tags: ["来财许愿"], base: { pressure: 5, self: 3, bond: -1 }, choices: ["press", "explain", "listen"] }
    ],
    teen: [
      { title: "搞钱启蒙", body: "孩子开始认真研究怎么赚钱。你欣慰他现实，又担心他太早把世界看成报价单。", tags: ["来财许愿"], base: { academic: -2, self: 10, pressure: 6 }, choices: ["press", "explain", "handover"] }
    ],
    after: [
      { title: "第一桶小金", body: "高考后孩子赚到第一笔钱，不多，但郑重转给你一个红包。你忽然不知道该开心还是心酸。", tags: ["来财许愿"], base: { academic: -4, self: 12, pressure: 2, bond: 4 }, choices: ["press", "explain", "listen"] }
    ]
  }
};

const endings = [
  { id: "top_empty", label: "大学录取通知书", title: "名校空心人", rare: true, condition: s => s.academic >= 78 && s.self < 43, text: "通知书很漂亮，足够让朋友圈热闹三天。孩子也笑了，只是笑完以后问：接下来我该想要什么？", child: "我不是不高兴，我只是还没学会把高兴和自己连起来。", hook: "你这不是期待，是 KPI。" },
  { id: "top_close", label: "大学录取通知书", title: "名校与晚饭", condition: s => s.academic >= 74 && s.bond >= 55, text: "你们一起拆开通知书。它不是所有问题的答案，但至少没有把亲密当作代价。", child: "我知道你也害怕，但谢谢你没有把害怕全都递给我。", hook: "同样是名校线，这局居然没有散。" },
  { id: "changed_major", label: "大学录取通知书", title: "志愿被改的夏天", rare: true, condition: s => s.academic >= 65 && s.bond < 34 && s.pressure >= 68, text: "录取结果体面得无可挑剔。只是孩子从那天起，很少再主动和你谈未来。", child: "你赢了志愿表，我输掉了开口的力气。", hook: "有些父母赢得很彻底，也输得很安静。" },
  { id: "normal_college", label: "大学录取通知书", title: "普通大学入场", condition: s => s.academic >= 54, text: "学校名字不够响亮，生活却终于开始有了自己的声音。孩子把行李箱推远，也回头看了你一眼。", child: "我可能普通，但我想先把普通过成自己的。", hook: "普通不是失败，这句真的适合发群里吵一架。" },
  { id: "repeat", label: "另一张入场券", title: "复读报名表", condition: s => s.academic >= 48 && s.pressure >= 72, text: "这也是一张入场券，只是入口通向第二轮倒计时。你们都需要决定：还要不要用同一种方式再爱一年。", child: "我可以再试一次，但我不想再只剩下一次。", hook: "复读线最恐怖的不是再来一年，是照旧来一年。" },
  { id: "skill_path", label: "另一张入场券", title: "技能路线开启", condition: s => s.self >= 70 && s.academic < 65, text: "那不是大学通知书，而是一张工作室、赛场或舞台的入场券。你很难解释它体不体面，但孩子拿着它时眼睛很亮。", child: "我知道这条路不好走，但至少这次是我自己选的。", hook: "谁能跑出技能线？我想看看输入了什么。" },
  { id: "small_business", label: "另一张入场券", title: "小生意开张", condition: s => s.self >= 60 && s.pressure < 62, text: "孩子没有走你熟悉的路，而是把一次副业做成了第一份事业。你担心不稳定，也第一次被邀请当顾问。", child: "你不用马上相信我，但可以先别急着替我否定。", hook: "这个结局像不标准答案，但很有生命力。" },
  { id: "inheritance", label: "另一张入场券", title: "家业接班试用期", condition: s => s.tags.includes("家产路径") && s.self >= 50, text: "孩子接过的不是现成答案，而是一堆账、关系和被误解的特权。你们终于在同一张桌上谈辛苦。", child: "我不是只会继承，我也想知道自己能改变什么。", hook: "继承家产线不是爽文，居然有点疼。" },
  { id: "love_escape", label: "另一张入场券", title: "恋爱出走", rare: true, condition: s => s.tags.includes("关系想象") && s.bond < 38 && s.self >= 58, text: "孩子把被看见的需要交给了另一个人。你担心那不是爱，却不得不承认，家里很久没有认真看见过孩子。", child: "我不是为了气你，我只是想去一个有人先问我累不累的地方。", hook: "这个结局适合所有爱管恋爱的父母先玩一遍。" },
  { id: "dropout", label: "另一张入场券", title: "提前离场", rare: true, condition: s => s.pressure >= 82 && s.bond < 38, text: "孩子离开了学校，也离开了你安排好的叙事。你终于不用盯成绩了，却开始学习怎么发一条不会被拉黑的消息。", child: "我不是突然坏掉的，我只是终于不装没事了。", hook: "这不是坏结局，这是关系账单到期。" },
  { id: "reconcile", label: "另一张入场券", title: "亲子和解", rare: true, condition: s => s.bond >= 76, text: "结局没有特别光鲜，但你们仍然能坐在同一张桌前谈未来。对这个家来说，这已经是一张很难拿到的入场券。", child: "你不用完全懂我，但你愿意听的时候，我就还愿意回来。", hook: "谁能稳定跑出亲子和解？评论区交作业。" },
  { id: "involution_king", label: "大学录取通知书", title: "家长群卷王上岸", condition: s => s.tags.includes("鸡娃内卷") && s.academic >= 72 && s.pressure >= 72, text: "通知书到了，家长群也安静了。你终于赢过很多人，却发现孩子最想退出的，正是这场从没报名的比赛。", child: "我上岸了，但我还是想知道，岸上能不能先睡一觉。", hook: "卷王线不是爽，是累到发光。" },
  { id: "burnout_excellence", label: "大学录取通知书", title: "优秀但电量不足", rare: true, condition: s => s.academic >= 68 && s.pressure >= 80 && s.self < 52, text: "孩子履历漂亮，像一台长期满负荷运行的机器。十八岁之后，第一件想做的事不是庆祝，而是关机。", child: "我不是不努力了，我只是没电了。", hook: "这结局建议所有打卡群置顶。" },
  { id: "loose_ordinary", label: "大学录取通知书", title: "松弛感普通人", condition: s => s.tags.includes("松弛感") && s.pressure < 48 && s.bond >= 55, text: "结果不惊人，生活却没有塌。孩子带着一点普通、一点自信和一点会照顾自己的能力，走进了下一站。", child: "谢谢你没有把普通说成亏欠。", hook: "松弛感线赢在没把人养散。" },
  { id: "gap_year_ticket", label: "另一张入场券", title: "间隔年车票", rare: true, condition: s => s.tags.includes("松弛感") && s.self >= 72 && s.academic < 58, text: "那是一张去远方的车票。它不能证明孩子成功，却证明孩子开始认真为自己的选择做预算。", child: "我不是逃避，我是想先确认自己要去哪。", hook: "Gap Year 线，评论区必吵。" },
  { id: "emotion_anchor", label: "另一张入场券", title: "情绪价值补给站", condition: s => s.tags.includes("情绪价值") && s.bond >= 70, text: "孩子没有把家当成裁判席，而是当成一个能回来充电的地方。这不是世俗意义上的大捷，却很稀有。", child: "外面已经够难了，幸好家里不是第二个战场。", hook: "情绪价值线看起来不炸，但很想转给爸妈。" },
  { id: "ai_portfolio", label: "另一张入场券", title: "AI 作品集通行证", condition: s => s.tags.includes("AI托管") && s.self >= 60, text: "孩子递上的不是传统证书，而是一份由代码、提示词和奇怪项目拼成的作品集。你还没完全看懂，但有人看懂了。", child: "我不是让机器替我活，我是在学一种新的表达。", hook: "AI 线到底算作弊还是天赋？先别急着下结论。" },
  { id: "algorithm_cage", label: "大学录取通知书", title: "算法笼子", rare: true, condition: s => s.tags.includes("AI托管") && s.academic >= 66 && s.bond < 45, text: "软件记录了孩子每一道错题，却没有记录孩子什么时候开始不想说话。你得到了精准学习，也失去了一些模糊但重要的东西。", child: "它知道我错在哪，你知道我累在哪吗？", hook: "AI 托管线最像未来，也最像现在。" },
  { id: "child_star_crash", label: "另一张入场券", title: "神童滤镜碎裂", rare: true, condition: s => s.tags.includes("小孩哥小孩姐") && s.pressure >= 66 && s.self < 55, text: "孩子不再总是超前，也不再总被围观。滤镜碎掉以后，你们第一次面对一个普通但真实的人。", child: "我不想一直当那个很厉害的小孩。", hook: "小孩哥小孩姐线，塌的是大人的滤镜。" },
  { id: "ordinary_reboot", label: "大学录取通知书", title: "普通人重启", condition: s => s.tags.includes("小孩哥小孩姐") && s.pressure < 65, text: "孩子慢慢从神童故事里退出来。通知书不夸张，但他终于不用每次出场都惊艳所有人。", child: "普通一点以后，我反而像自己了。", hook: "神童线最好的结局可能是变普通。" },
  { id: "dework_life", label: "另一张入场券", title: "去班味人生", condition: s => s.tags.includes("去班味") && s.self >= 68 && s.pressure < 58, text: "孩子没有急着把自己训练成合格零件，而是先学会生活、合作、休息和拒绝。你担心他不够上进，他说这叫活着。", child: "我会努力，但我不想一出生就像上班。", hook: "去班味线，适合转发给所有小大人。" },
  { id: "silk_gourd_boundary", label: "另一张入场券", title: "丝瓜汤后的边界", rare: true, condition: s => s.tags.includes("丝瓜汤家庭") && s.self >= 56, text: "孩子没有彻底离开，但开始把“为你好”和“替你决定”分开。这个家第一次学习边界感，学得很慢，也很疼。", child: "你可以爱我，但不要用爱替我签字。", hook: "丝瓜汤线建议饭桌静音播放。" },
  { id: "filial_debt", label: "另一张入场券", title: "亲情债务重组", rare: true, condition: s => s.tags.includes("丝瓜汤家庭") && s.pressure >= 74 && s.bond < 42, text: "孩子没有拉黑你，只是把回复速度降到最低。你们之间不是没爱了，是爱被算成了账。", child: "我不想再用一辈子还一顿饭。", hook: "这结局太适合“我都是为了你好”本体。" },
  { id: "deepseek_coauthor", label: "另一张入场券", title: "大模型共同作者", condition: s => s.tags.includes("DeepSeek陪跑") && s.self >= 58, text: "孩子用大模型写计划、改作品、查资料，但最后保留下来的那一部分，仍然带着他自己的笨拙和判断。", child: "AI 可以帮我快一点，但不能替我知道我是谁。", hook: "DeepSeek 线：会用工具，别被工具用。" },
  { id: "agent_parenting", label: "大学录取通知书", title: "智能体家长会", rare: true, condition: s => s.tags.includes("DeepSeek陪跑") && s.bond < 44, text: "家长会材料、错题分析、志愿建议都很精准。只是孩子后来问：你到底看过我，还是只看过报告？", child: "它总结得很好，但我不是总结。", hook: "智能体家长会，精准但有点冷。" },
  { id: "robot_lab", label: "另一张入场券", title: "具身智能实验室", condition: s => s.tags.includes("具身智能") && s.self >= 60, text: "孩子进了机器人实验室。那里的机器会走路、会抓取、会摔倒重来，像另一种青春期。", child: "我想造会动的东西，也想知道自己要往哪里动。", hook: "具身智能线，比想象中更像养孩子。" },
  { id: "humanoid_burnout", label: "大学录取通知书", title: "人形机器人式优秀", rare: true, condition: s => s.tags.includes("具身智能") && s.pressure >= 76, text: "孩子像被调参到最优：准时、稳定、高效。可你偶尔会怀念那个会乱跑、会顶嘴、会出错的人。", child: "我不想只做一个表现良好的系统。", hook: "人形机器人式优秀，听起来就很累。" },
  { id: "digital_nomad", label: "另一张入场券", title: "数字游民登机牌", condition: s => s.tags.includes("数字游民") && s.self >= 66, text: "孩子没有立刻安定下来，而是带着电脑、作品和不太够的预算出发。你担心他漂着，他说自己在练习扎根。", child: "我不是没有归属，我只是想多试几个坐标。", hook: "数字游民线，稳定派父母慎点。" },
  { id: "goods_booth", label: "另一张入场券", title: "谷子摊位入场证", condition: s => s.tags.includes("谷子经济") && s.self >= 60, text: "孩子把喜欢变成摊位、排版、预算和社交。你还是不完全懂那些徽章，却看见他在认真经营热爱。", child: "你可以不懂我的谷，但别把我的喜欢叫浪费。", hook: "谷子线：痛包里装的不只是钱。" },
  { id: "cyber_audit", label: "大学录取通知书", title: "赛博对账成功", condition: s => s.tags.includes("赛博对账") && s.academic >= 60, text: "账本算到最后，你们确实做出了一次性价比不错的选择。只是孩子很久以后才学会，人生也有不能量化的部分。", child: "谢谢你替我算账，也请给我一点不划算的自由。", hook: "赛博对账线，理性到有点心酸。" },
  { id: "living_person", label: "另一张入场券", title: "活人感保留成功", condition: s => s.tags.includes("活人感") && s.self >= 66 && s.pressure < 58, text: "孩子没有被养成完美作品，而是保留了笑、烦、乱、慢和突然冒出来的主意。这个结局不整齐，但很像活着。", child: "我可能不够标准，但我还在。", hook: "活人感线，是我目前最想收集的结局。" },
  { id: "langlang_exit", label: "另一张入场券", title: "走出浪浪山", condition: s => s.tags.includes("浪浪山小妖怪") && s.self >= 62, text: "孩子终于走出那座熟悉的小山。外面并不全是光，但至少路不再只有一条。", child: "我不是一定要赢，我只是想看看山外面。", hook: "浪浪山线，普通人的出山也算史诗。" },
  { id: "break_cauldron", label: "大学录取通知书", title: "助我破鼎之后", rare: true, condition: s => s.tags.includes("助我破鼎") && s.academic >= 68 && s.pressure >= 70, text: "孩子真的破了鼎。掌声过后，他坐在台阶上很久，像刚从一个燃烧的故事里退出来。", child: "我赢了这一局，但我不能一直燃烧。", hook: "破鼎线爽是爽，后劲也是真的。" },
  { id: "not_basic_major", label: "大学录取通知书", title: "不基础专业录取", condition: s => s.tags.includes("基础不基础") && s.self >= 58, text: "那个专业听起来不够基础，却让孩子第一次主动查了整晚资料。你发现，不基础有时只是你还不熟。", child: "我想选一个我会醒着走进去的地方。", hook: "基础不基础线，适合所有志愿表前夜。" },
  { id: "wild_route", label: "另一张入场券", title: "邪修路线成型", condition: s => s.tags.includes("邪修成长") && s.self >= 68, text: "孩子走了一条不太正规、很难解释、但确实长出成果的路。你终于承认，系统之外也有人生。", child: "我不是不学习，我只是学习得不像你熟悉的样子。", hook: "邪修线：野路子也能开花。" },
  { id: "young_founder", label: "另一张入场券", title: "小主理人开张", condition: s => s.tags.includes("主理人家庭") && s.self >= 64, text: "孩子做了一个很小的品牌，订单不稳定，审美很固执。你担心他吃苦，他说这是自己的苦。", child: "我想主理一点东西，哪怕一开始只是主理我自己。", hook: "主理人线，五险一金派父母会皱眉。" },
  { id: "unpackaged_life", label: "另一张入场券", title: "拆封预制人生", rare: true, condition: s => s.tags.includes("预制人生") && s.self >= 55, text: "孩子把你准备好的路线拆开，重新排列。不是每一步都更好，但至少每一步终于有了本人签名。", child: "我不是预制好的，我需要自己调味。", hook: "预制人生线，最适合这个游戏本体。" },
  { id: "come_money", label: "另一张入场券", title: "来财小红包", condition: s => s.tags.includes("来财许愿") && s.self >= 58, text: "孩子真的赚到了一点钱。那不是暴富，也不是逆袭，只是他第一次知道自己能从世界那里换回些什么。", child: "我会搞钱，但我不想只剩搞钱。", hook: "来财线：发财可以，别把孩子许愿成财神。" },
  { id: "unnamed", label: "大学录取通知书", title: "未命名的人生", condition: () => true, text: "分数、志愿、家长期待都没有消失，只是孩子慢慢学会把它们放在自己的人生旁边，而不是正中央。", child: "我还不知道答案，但我想从自己的问题开始。", hook: "这个结局不炸，但后劲很长。" }
];

const corePack = {
  id: "core",
  name: "核心本体",
  version: "0.3.0",
  keywordRules,
  responseTypes,
  stageResponseCopy,
  stages,
  detailedStages,
  routeEvents,
  endings
};

export {
  keywordRules,
  responseTypes,
  stageResponseCopy,
  stages,
  detailedStages,
  routeEvents,
  endings
};

export default corePack;
