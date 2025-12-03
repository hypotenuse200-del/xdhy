import { Platform, QuizQuestion, CaseStudy, SlangTerm, TitleCase, SensoryWord, StyleTransformation } from './types';

export const TEAM_NAME = "轻舟已过万重山小组";
export const TEAM_MEMBERS = ["张鑫哲", "汪佳锦", "唐颖"];

// --- 1. Quiz Data (Expanded to 10) ---
export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    word: "首当其冲",
    sentence: "在这次互联网裁员潮中，运营部门首当其冲，不仅没有被裁，反而获得了嘉奖。",
    isCorrect: false,
    explanation: "【硬伤解析】“首当其冲”比喻最先受到攻击或遭受灾难。它是一个纯贬义/负面语境词。决不能用于“首先受到奖励”或“冲在前面”的积极语境。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 2,
    word: "空穴来风",
    sentence: "关于某明星的绯闻纯属空穴来风，大家不要相信。",
    isCorrect: false,
    explanation: "【古今异义】原义是有孔洞便会招致风吹，比喻流言蜚语乘隙而入（即事出有因）。但在现代媒体高频误用下，常被当作“完全没有根据”。作为专业编辑，建议使用“捕风捉影”或“无中生有”来避免歧义。",
    options: [{ label: "正确", value: false }, { label: "有争议", value: true }]
  },
  {
    id: 3,
    word: "感同身受",
    sentence: "作为旁观者，虽然我没有经历过，但我对你的痛苦感同身受。",
    isCorrect: false,
    explanation: "【程度误用】原指感激的心情如同亲身受到对方的恩惠一样。现多指虽未亲身经历，但感受就同亲身经历一样。但在极严谨语境下，人很难完全对他人的痛苦“感同身受”，建议用“深表同情”或“能够共情”。",
    options: [{ label: "正确", value: false }, { label: "值得商榷", value: true }]
  },
  {
    id: 4,
    word: "曾几何时",
    sentence: "曾几何时，我们展望未来；现在，我们回顾过去。",
    isCorrect: false,
    explanation: "【时间误区】“曾几何时”意为“没过多久”，指时间过去不长。常被错误地用来形容“很久以前”或“曾经”。如果想表达很久以前，请直接用“曾经”或“昔日”。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 5,
    word: "上下其手",
    sentence: "他在工作中上下其手，把各个部门协调得井井有条。",
    isCorrect: false,
    explanation: "【褒贬误用】“上下其手”比喻玩弄手法，串通作弊，暗中舞弊。这是一个绝对的贬义词！绝不能用来形容一个人“能力强”或“多面手”。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 6,
    word: "差强人意",
    sentence: "中国男足的表现差强人意，让球迷们彻底失望了。",
    isCorrect: false,
    explanation: "【反向误用】“差强人意”的意思是：大体上还能让人满意。它是一个偏褒义或中性的词！如果想表达“让人失望”，应该说“不尽如人意”。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 7,
    word: "不忍卒读",
    sentence: "这篇小学生作文错别字连篇，简直不忍卒读。",
    isCorrect: false,
    explanation: "【对象误用】“不忍卒读”意思是不忍心读完，形容文章内容悲惨动人。绝对不能用来形容文章写得烂！形容烂可以用“不堪入目”或“难以卒读”。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 8,
    word: "七月流火",
    sentence: "七月流火，烈日当空，大家要注意防暑。",
    isCorrect: false,
    explanation: "【常识错误】出自《诗经》，指农历七月，天气转凉，大火星（心宿二）向西向下流去。这个词是形容天气转凉的，不是形容天热的！",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 9,
    word: "美轮美奂",
    sentence: "这场晚会的灯光秀美轮美奂，令人陶醉。",
    isCorrect: false,
    explanation: "【对象局限】“美轮美奂”只能用来形容房屋高大华美。“轮”是高大，“奂”是众多。不能用来形容表演、风景或灯光。建议用“精彩绝伦”或“美不胜收”。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  },
  {
    id: 10,
    word: "登堂入室",
    sentence: "小偷趁主人不在，登堂入室把家里洗劫一空。",
    isCorrect: false,
    explanation: "【望文生义】比喻学问或技能从浅到深，达到很高的水平。它是褒义词，指一种境界！不能用来指“进入屋子”，更不能用于小偷。",
    options: [{ label: "正确", value: false }, { label: "错误", value: true }]
  }
];

// --- 2. Platform Case Studies (Added Bilibili & WeChat) ---
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'xhs',
    platform: Platform.XIAOHONGSHU,
    title: "小红书：情绪与审美的共谋",
    description: "去中心化的种草社区。核心逻辑是“有用+好看”。文案需要提供情绪价值（Vibe）或实用干货（Tips）。",
    keywords: ["沉浸式", "氛围感", "本命", "通透", "有效护肤"],
    example: "家人们谁懂啊！这只口红真的太显白了，涂上就是富家千金，黄皮直接闭眼冲！☕️✨ #口红试色 #显白",
    analysis: "1. **称呼策略**：用'姐妹/家人们'打破隔阂。2. **形容词升级**：不说'好看'，说'显白/富家千金感'（具象化）。3. **行动指令**：'闭眼冲'比'推荐购买'更有煽动性。",
    proTips: ["多用Emoji增加视觉间隙", "标题要包含具体痛点（如：黄皮/学生党）", "图片要有生活感，不要太像硬广"]
  },
  {
    id: 'dy',
    platform: Platform.DOUYIN,
    title: "抖音：黄金三秒与完播率",
    description: "算法驱动的流量池。文案是视频的脚本，必须在3秒内留住用户，并引导互动。",
    keywords: ["别划走", "结局反转", "这谁顶得住", "建议收藏"],
    example: "千万别划走！这可能是你今年看过最扎心的真相！只有1%的人知道如何...👇（视频结尾：评论区告诉我你的想法）",
    analysis: "1. **悬念前置**（Hook）：'别划走'对抗手指惯性。2. **数据夸张**：'1%'引发好奇心。3. **引导互动**：互动率直接决定视频能否进入下一个流量池。",
    proTips: ["文案要配合BGM卡点", "关键信息分段展示", "利用评论区置顶补充信息"]
  },
  {
    id: 'wb',
    platform: Platform.WEIBO,
    title: "微博：公共广场的观点博弈",
    description: "舆论发酵场。文案强调话题性（Hashtag）和观点输出。适合新闻跟进、娱乐吃瓜和垂直领域的深度探讨。",
    keywords: ["#热搜#", "吃瓜", "实锤", "无论如何", "有一说一"],
    example: "#某某事件# 有一说一，虽然[观点A]...但是[观点B]... 作为一个普通网友，我觉得... [吃瓜]",
    analysis: "1. **蹭热点**：必须带Hashtag。2. **逻辑表达**：微博用户更倾向于阅读有逻辑的短评，而非纯情绪宣泄。3. **表情包护体**：'吃瓜/狗头'是保命符，表示“友军”或“反讽”。",
    proTips: ["善用九宫格图片", "长文要分段并加粗重点", "语气要客观中带有个性"]
  },
  {
    id: 'bilibili',
    platform: Platform.BILIBILI,
    title: "B站：硬核与共鸣的二次元引力",
    description: "Z世代的精神家园。内容偏向中长视频，重视内容的“含金量”和“梗浓度”。用户极其反感明显的恰饭（广告）。",
    keywords: ["全程高能", "下次一定", "梦幻联动", "要素察觉", "省流"],
    example: "【高能预警】建议佩戴耳机！关于那个男人的真相，P2有彩蛋，空降坐标03:21... 弹幕护体！",
    analysis: "1. **弹幕互动**：文案要预埋槽点，引导用户发弹幕（如'空降'）。2. **黑话体系**：熟练运用'白嫖'、'投币'等社区语言。3. **硬核科普**：标题通常很长，带具体的信息增量。",
    proTips: ["不要当标题党，B站用户会反噬", "评论区置顶要有人设感", "视频封面（封面党）比标题更重要"]
  },
  {
    id: 'wechat',
    platform: Platform.WECHAT,
    title: "公众号：深度阅读的最后堡垒",
    description: "私域流量的核心。适合深度长文、逻辑复盘和情感共鸣。用户粘性高，但打开率日益降低。",
    keywords: ["底层逻辑", "复盘", "长期主义", "认知升级", "深度好文"],
    example: "关于行业寒冬，我连夜复盘了100个案例，发现了这3个底层逻辑...（内附思维导图）",
    analysis: "1. **价值承诺**：标题必须展示“获得感”（如思维导图、底层逻辑）。2. **金句加粗**：文中必须有适合截图发朋友圈的金句。3. **排版审美**：舒适的留白和配色是专业度的体现。",
    proTips: ["标题要在13-20字之间", "开头前100字决定跳出率", "文末引导“在看”比“点赞”更重要"]
  }
];

// --- 3. Slang History (Updated with Context Guide) ---
export const SLANG_HISTORY: SlangTerm[] = [
  { 
    year: "2019", term: "我太难了", meaning: "生活压力大/自嘲", usage: "社畜的自嘲", lifecycleStage: "Outdated", advice: "已进入春晚小品词库，年轻人慎用。",
    goodExample: "（复古反讽）老板发了200块红包，我太难了。", 
    badExample: "（严肃汇报）项目进度受阻，我太难了。"
  },
  { 
    year: "2020", term: "凡尔赛", meaning: "低调炫耀", usage: "老公非要送我粉钻，颜色好土。", lifecycleStage: "Peak", advice: "已沉淀为形容词，可作为常态化表达。",
    goodExample: "这波操作有点凡尔赛了。", 
    badExample: "我今天想吃凡尔赛文学。（词性误用）"
  },
  { 
    year: "2021", term: "YYDS", meaning: "永远的神/最高级赞美", usage: "周杰伦 yyds", lifecycleStage: "Peak", advice: "虽然烂大街，但依然是最高效的赞美。",
    goodExample: "红烧肉配大米饭真是yyds！", 
    badExample: "我们的企业文化yyds。（官方号慎用缩写）"
  },
  { 
    year: "2023", term: "显眼包", meaning: "爱出风头/丢人可爱", usage: "每个班都有一个显眼包", lifecycleStage: "Rising", advice: "褒义词！用于夸人可爱、有趣、有梗。",
    goodExample: "他真是我们公司的显眼包，年会全靠他热场。", 
    badExample: "那个抢劫犯真是个显眼包。（严禁用于负面新闻人物）"
  },
  { 
    year: "2024", term: "City不City", meaning: "洋气/城市化/刺激", usage: "这也太City了吧", lifecycleStage: "Rising", advice: "源自外国博主，带有魔性口音。适合轻松、旅游、探店场景。",
    goodExample: "穿着大棉袄在上海街头，这很City。", 
    badExample: "这份年度审计报告做得不够City。（严肃场合严禁使用）"
  },
  { 
    year: "2024", term: "脆皮大学生", meaning: "体质差/易受伤的年轻人", usage: "伸个懒腰骨折了", lifecycleStage: "Rising", advice: "群体自嘲用语，品牌方使用时需注意分寸，不要变为嘲讽。",
    goodExample: "专门为脆皮大学生准备的养生茶。", 
    badExample: "现在的脆皮大学生就是缺乏锻炼。（爹味说教，大忌）"
  },
  { 
    year: "2025", term: "淡淡人", meaning: "精神状态平稳/无欲无求", usage: "确诊为淡淡人", lifecycleStage: "Rising", advice: "一种新型社交人设，主打情绪稳定、边界感强。",
    goodExample: "做个淡淡人，天塌下来当被子盖。", 
    badExample: "你需要更有激情，不要做淡淡人。（否定用户人设，大忌）"
  }
];

// --- 4. Title Clinic Data ---
export const TITLE_CASES: TitleCase[] = [
  {
    id: 1,
    category: "美妆/好物",
    badTitle: "推荐一款很好用的身体乳",
    goodTitle: "被室友问了800遍！！这瓶身体乳是伪体香的神...",
    formula: "夸张数字 + 侧面烘托（室友问） + 垂直痛点（伪体香） + 留白",
    analysis: "原标题平淡无奇，像说明书。新标题利用了社交认证（室友问）和高频痛点词（伪体香），并刻意截断制造悬念。"
  },
  {
    id: 2,
    category: "职场/干货",
    badTitle: "如何提高工作效率",
    goodTitle: "别再傻傻加班了！3个狠招，准点下班不是梦（附模板）",
    formula: "否定现状（别再...） + 利益承诺（准点下班） + 附件诱饵",
    analysis: "原标题是教科书式的无聊。新标题直击痛点（加班），并给出了极低成本的解决方案暗示（附模板），诱惑力极大。"
  },
  {
    id: 3,
    category: "情感/生活",
    badTitle: "我和男朋友分手了",
    goodTitle: "恋爱5年，因为一碗麻辣烫，我们彻底结束了。",
    formula: "时间投入（5年） + 微小诱因（麻辣烫） + 巨大反差",
    analysis: "利用“因小失大”的逻辑反差制造巨大的好奇心缺口。读者会想：一碗麻辣烫怎么能毁掉5年感情？必须点进去看。"
  }
];

// --- 5. Sensory Words ---
export const SENSORY_WORDS: SensoryWord[] = [
  { sense: 'Visual', basicWord: "很亮/很闪", advancedWord: "波光粼粼 / 细闪 / 碎钻感", context: "形容眼影或高光" },
  { sense: 'Taste', basicWord: "好吃/软", advancedWord: "糯叽叽 / 爆浆 / 空气感 / 踩屎感", context: "形容甜点或鞋底舒适度" },
  { sense: 'Sound', basicWord: "好听", advancedWord: "颗粒感 / 烟嗓 / 气泡音 / 抓耳", context: "形容声音特质" },
  { sense: 'Touch', basicWord: "舒服", advancedWord: "亲肤 / 像云朵包裹 / 撸猫感", context: "形容面料或床品" }
];

// --- 6. Style Transformation (Added PR Scenario) ---
export const STYLE_TRANSFORMATIONS: StyleTransformation[] = [
  {
    id: 'food_review',
    title: "场景：美食探店评价",
    original: "这家火锅店味道不错，服务也很好，推荐大家去。",
    variations: [
      {
        platform: Platform.XIAOHONGSHU,
        text: "🆘这是什么神仙火锅！！一口下去直接封神😭！服务员小哥哥也超贴心，全程剥虾简直不要太宠粉✨！家人们，答应我，锁死这家店好吗？！🔒🍲",
        annotations: ["神仙/封神（夸张表达）", "😭/✨（Emoji情绪浓度）", "锁死/答应我（闺蜜语气）"]
      },
      {
        platform: Platform.DOUYIN,
        text: "成都排队王终于来我们这了！🔥据说老板为了配方花了300万？😱 亲测：如果你是重口味爱好者，这家店绝对会让你尖叫！最后那个甜品一定要点...👇",
        annotations: ["排队王/300万（金钱标签）", "🔥/😱（视觉冲击）", "最后那个...（引导完播）"]
      },
      {
        platform: Platform.WECHAT,
        text: "深度测评｜排队3小时的网红火锅，真的值得吗？（附隐藏菜单）。今天我们不吹不黑，从食材、锅底、服务三个维度，为你还原最真实的体验。",
        annotations: ["深度测评（专业感）", "不吹不黑（客观人设）", "三个维度（逻辑性）"]
      }
    ]
  },
  {
    id: 'pr_apology',
    title: "场景：危机公关/道歉",
    original: "我们在最近的更新中犯了一个错误，给用户带来了不便，我们深表歉意并正在修复。",
    variations: [
      {
        platform: Platform.XIAOHONGSHU,
        text: "对不起！🧎‍♀️我们要挨打立正！这次更新确实欠考虑了，给宝子们造成了困扰，运营祭天！😭 补偿方案已在路上了，求轻喷...🥺",
        annotations: ["🧎‍♀️/🥺（示弱卖萌）", "挨打立正（态度诚恳）", "运营祭天（自黑化解愤怒）"]
      },
      {
        platform: Platform.OFFICIAL,
        text: "【致歉声明】关于V3.0版本更新异常情况的说明。经技术排查，系服务器波动所致。目前已紧急回滚版本。对于给您造成的影响，我们深感抱歉。",
        annotations: ["【致歉声明】（公文格式）", "经排查/系...所致（归因明确）", "深感抱歉（正式礼貌）"]
      },
      {
        platform: Platform.BILIBILI,
        text: "【滑跪】关于这次更新，UP主有话说... 这波确实是我的锅，大家骂得对！别取关，女装谢罪行不行？（内含抽奖补偿）",
        annotations: ["滑跪/我的锅（社区黑话）", "别取关/女装（卑微互动）", "抽奖（实际利益）"]
      }
    ]
  }
];