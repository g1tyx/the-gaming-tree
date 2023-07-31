/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    ") experience\n                            and": ") 经验\n 和",
    "A quarter of a thousand": "千分之四",
    "Build a sword trap": "建造一个剑阵陷阱",
    "Enemy": "敌人",
    "experience\n                            and": "经验\n和",
    "Get your slimes to level 1": "让你的史莱姆达到 1 级",
    "Kill 250 innocent slimes": "杀死 250 个无辜的史莱姆",
    "Kill an innocent slime": "杀死 1 只无辜的史莱姆",
    "kills": "击杀",
    "Murderer": "凶手",
    "Passive damage": "被动伤害",
    "Reapply": "重新申请",
    "Reapply your first 3 upgrades' effects": "重新应用前 3 次升级的效果",
    "Short tooltip mode": "短工具提示模式",
    "Tougher enemies": "更强硬的敌人",
    "Try refreshing the page if this is your first time": "如果这是您第一次尝试刷新页面",
    "Upgrades": "升级",
    "XP": "经验",
    "Achievement Unlocked!": "成就已解锁！",
    "Bloodthirst": "渴血",
    "Double damage": "双倍伤害",
    "Enemy kills boost experience gain": "击杀敌人可增加经验值",
    "Monsters have more health and give more experience": "怪物拥有更多生命值并提供更多经验",
    "Sharper Sword": "更锋利的剑",
    "Stronger Monsters": "更强的怪物",
    "Bloodlust": "嗜血",
    "Enemy health boosts damage": "敌人的生命值会增加伤害",
    "Passively deal 25% of your damage every second": "每秒被动造成 25% 的伤害",
    "Sword Trap": "剑阵陷阱",
    "+1.00 times": "+1.00 次",
    "Better Power": "更好的力量",
    "Book of Numbers": "数字之书",
    "Deal 50% more damage": "造成额外 50% 伤害",
    "Double experience gain": "双倍经验获得",
    "Experience boosts damage": "经验增加伤害",
    "Notebook": "笔记本",
    "Orange  slime": "橙色史莱姆",
    "Reapply first row upgrades effects": "重新应用第一行升级效果",
    "Sword of Knowledge": "知识之剑",
    "Unlock 2 new layers": "解锁 2 个新层",
    "Book of Slimes": "史莱姆之书",
    "Brain": "脑子",
    "Bronze Ingot": "青铜锭",
    "Coal": "煤炭",
    "Copper Ingot": "铜锭",
    "Copper Ore": "铜矿",
    "Crafting": "制作",
    "Danger approaches": "危险逼近",
    "Get a level": "获得一级",
    "Gold Ingot": "金锭",
    "Gold Ore": "金矿",
    "Holy Water": "圣水",
    "Inventory": "库存",
    "Iron Ingot": "铁锭",
    "Iron Ore": "铁矿石",
    "Leaf": "叶子",
    "levels": "等级",
    "Lootbag": "战利品袋子",
    "No sources": "无来源",
    "Normal Log": "普通原木",
    "Plank": "木板",
    "Pyrite Coin": "黄铁矿币",
    "Red Fabric": "红色布料",
    "Rotten Flesh": "腐肉",
    "Rusty Gear": "生锈的装备",
    "Seed": "种子",
    "Skill points:": "技能点数：",
    "Skills": "技能",
    "Slime Core": "史莱姆核心",
    "Slime Core Shard": "史莱姆核心碎片",
    "Slime Goo": "粘液",
    "Soaked Log": "浸泡过的原木",
    "Start getting items from your kills": "开始从击杀中获取物品",
    "Steel Ingot": "钢锭",
    "Sticky Trap": "粘性陷阱",
    "Stone": "石头",
    "Stone Brick": "石砖",
    "Storage Slime": "储存史莱姆",
    "Tin Ingot": "锡锭",
    "Tin Ore": "锡矿石",
    "Unlock a skill to deal more damage": "解锁技能以造成更多伤害",
    "Yellow  slime": "黄色史莱姆",
    "Another trap": "另一个陷阱",
    "Full passive": "全被动",
    "Get an item": "获得一个物品",
    "Keep all experience upgrades": "保留所有经验升级",
    "Keep killing": "继续杀戮",
    "Keep your sword trap": "保留你的剑阵陷阱",
    "Make a book of slimes": "制作一本史莱姆之书",
    "Make a sticky trap": "制作一个粘性陷阱",
    "Slime formation": "史莱姆编队",
    "Sweet loot": "甜蜜的战利品",
    "never": "从不",
    "Add 1.00 skills points to attacking": "增加 1.00 技能点到 攻击",
    "Advanced reading techniques": "高级阅读技巧",
    "Back for blood": "回来取血",
    "Gain a level": "获得 1 等级",
    "Get 10 levels of ???": "获得 10 等级 关于 ???",
    "Get 3 levels": "获得 3 点击",
    "Learned to learn": "学会了学习",
    "Level up!": "升级！",
    "Remove 1.00 skills points from attacking": "移除 1.00 点技能点从 攻击",
    "Trained attack": "训练有素的攻击",
    "Unlock a skill to get more experience": "解锁技能以获得更多经验",
    "(hardcapped) experience\n                            and": "（硬上限）经验\n和",
    ") kills": "）击杀",
    "Blue  slime": "蓝色史莱姆",
    "Brown  slime": "棕色史莱姆",
    "Calm before the storm": "暴风雨前的平静",
    "Defeat ???": "击败 ？？？",
    "Defeat the Slime King": "击败史莱姆之王",
    "Destroy ???": "摧毁 ？？？",
    "Diligent": "勤奋",
    "Fight the first boss": "与第一个Boss战斗",
    "Get 10 levels of attacking": "获得 10 攻击等级",
    "Hungry for more": "渴望更多",
    "Stonks": "猛烈攻击",
    "A bigger can": "更大的罐头",
    "Anvil": "铁砧",
    "Autonomous": "自主性",
    "Boss challenges are automatically entered and cannot be exited.": "Boss 挑战会自动进入且无法退出。",
    "bosses": "Boss",
    "Bosses": "Boss",
    "copper ore, and": "铜矿石，以及",
    "Copper Pickaxe": "铜镐",
    "Double ore health": "双倍矿石生命值",
    "Get a copper golem": "获得一个铜傀儡",
    "Get a drill": "获得一个钻头",
    "Get a filter": "获取过滤器",
    "Get a stone furnace": "获得一个石炉",
    "Get a stone tablet": "获得一块石碑",
    "Get a tin chest": "得到一个锡箱",
    "Get enough tin chests to keep Copper Drill": "获得足够的锡箱来存放铜钻",
    "Heating up": "加热",
    "In boss challenge:": "在Boss挑战中：",
    "In challenge:": "挑战中：",
    "Keep all mining upgrades": "保留所有挖矿升级",
    "Kill another thousand slimes.": "再杀死 1000 只史莱姆。",
    "Kills boost ore chances (does not apply to stone)": "击杀会增加矿石机会（不适用于石头）",
    "Mine something": "开采一些东西",
    "Mining": "采矿",
    "More stone": "更多的石头",
    "Off to never visit again": "离开不再访问",
    "Ore health boosts mining chance": "矿石生命值提高采矿几率",
    "Permanent mark": "永久标记",
    "Reward:": "奖励：",
    "Rock and stone": "岩石和石头",
    "Slime health is multiplied by 5, unlock a new layer.": "史莱姆生命值乘以 5，解锁新层。",
    "Slime King's Wrath": "史莱姆王之怒",
    "Start crafting stone items": "开始制作石制品",
    "Stay passive": "保持被动",
    "Stone Pickaxe": "石镐",
    "stone,": "石头，",
    "The helper we never got": "我们从未得到过的帮助者",
    "The Slime King has a lot of treasure, surely you can find something of use in there.": "史莱姆王有很多宝藏，你一定能在里面找到有用的东西。",
    "tin ore.": "锡矿石.",
    "Tin Pickaxe": "锡镐",
    "Your next boss will be at 1,000 goblin kills": "你的下一个 Boss 在杀死 1,000 只哥布林时出现",
    "Copper Drill": "铜钻",
    "Automatically mine the whole ore when it's full": "矿石满时自动开采全部矿石",
    "Allow crafting items with metals": "允许用金属制作物品",
    "Ore health boosts ore regeneration speed": "矿石生命值提高矿石再生速度",
    "Stone boosts damage": "石头可以提高伤害",
    "Stone Sword": "石剑",
    "Tin Anvil": "锡砧",
    "Tin boosts max ore health": "锡可提高矿石最大生命值",
    "Tin Minecart": "锡矿车",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Gray  slime": "灰色史莱姆",
    "Red  slime": "红色史莱姆",
    "Black  slime": "黑色史莱姆",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Color Levels: ": "彩色等级：",
    "Current damage: ": "当前伤害：",
    "Disable Luck: ": "禁用运气：",
    "Slime: ": "史莱姆: ",
    "Goblin: ": "哥布林: ",
    "Ent: ": "Ent: ",
    "Zombie: ": "僵尸: ",
    "Slime dropped nothing": "史莱姆什么也没掉落",
    "Fractional Chance Mode: ": "分数几率模式：",
    "Damage *": "伤害 *",
    "Global chance multiplier: ": "全局几率乘数：",
    "Chance to mine something: ": "有几率开采一些东西：",
    "Mined nothing": "什么也没开采到",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\-([\d\.]+) \/ ([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^\*([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You have (.+) achievements$/, '你有 $1 成就'],
    [/^Your (.+) storage slimes                    hold (.+) experience upgrades                    and multiply drop chances by (.+)$/, '你的 $1 个储存史莱姆拥有 $2 经验升级并将掉落几率乘以 $3'],
    [/^Your (.+) sticky traps                    divide enemy health by (.+)$/, '你的 $1 个粘性陷阱将敌人的生命值除以 $2'],
    [/^Your (.+) books of slimes                    multiply experience gain by (.+) \((.+) for slimes\)$/, '你的 $1 本史莱姆之书将经验值乘以 $2（史莱姆为 $3）'],
    [/^Reach (.+) experience points to unlock \(You have (.+) experience points\)$/, '达到 $1 经验值即可解锁（您有 $2 经验值）'],
    [/^(.+) \/ (.+) achievements$/, '$1 \/ $2 成就'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) \/s$/, '$1 \/秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) points assigned to attacking$/, '$1 点数分配到 攻击'],
    [/^\+([\d\.]+) health, \*([\d\.]+) xp$/, '\+$1 生命值, \*$2 经验值'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) experience$/, '$1 经验值'],
    [/^([\d\.,]+) kills$/, '$1 击杀'],
    [/^([\d\.,]+) items$/, '$1 物品'],
    [/^([\d\.,]+) levels$/, '$1 级'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) bosses$/, '$1 Boss'],
    [/^([\d\.,]+) stone$/, '$1 石头'],
    [/^([\d\.,]+) tin ore$/, '$1 锡矿石'],
    [/^([\d\.,]+) copper ore$/, '$1 铜矿石'],
    [/^Attacking level ([\d\.,]+)$/, '攻击等级 $1'],
    [/^Slime dropped ([\d\.,]+) slime core$/, '史莱姆掉落了 $1 史莱姆核心'],
    [/^Slime dropped ([\d\.,]+) slime goo$/, '史莱姆掉落了 $1 史莱姆粘液'],
    [/^Slime dropped ([\d\.,]+) slime goo and ([\d\.,]+) slime core$/, '史莱姆掉落了 $1 史莱姆粘液 和 $2 史莱姆核心'],
    [/^Slime dropped ([\d\.,]+) slime goo and ([\d\.,]+) slime core shard$/, '史莱姆掉落了 $1 史莱姆粘液 和 $2 史莱姆核心碎片'],
    [/^Slime dropped ([\d\.,]+) slime goo and ([\d\.,]+) slime core shard \(([\d\.,]+) times\)$/, '史莱姆掉落了 $1 史莱姆粘液 和 $2 史莱姆核心碎片 \($3 times\)'],
    [/^Slime dropped ([\d\.,]+) slime goo \(([\d\.,]+) times\)$/, '史莱姆掉落了 $1 史莱姆粘液（$2 次）'],
    [/^Slime dropped ([\d\.,]+) slime core shard$/, '史莱姆掉落了 $1 史莱姆核心碎片'],
    [/^ \(([\d\.,]+) times\)$/, '（$1 次）'],
    [/^Level ([\d\.,]+) slime$/, '$1 级史莱姆'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Mined (.+) tin ore$/, '开采了 $1 锡矿石'],
    [/^Mined (.+) stone$/, '开采了 $1 石头'],
    [/^Mined (.+) stone \(([\d\.,]+) times\)$/, '开采了 $1 石头（$2 次）'],
    [/^Mined (.+) tin ore \(([\d\.,]+) times\)$/, '开采了 $1 锡矿石（$2 次）'],
    [/^Mined (.+) copper ore \(([\d\.,]+) times\)$/, '开采了 $1 铜矿石（$2 次）'],
    [/^Mined (.+) copper ore$/, '开采了 $1 铜矿石'],
    [/^Cost: (.+) experience$/, '成本：$1 经验值'],
    [/^Cost: (.+) kills$/, '成本：$1 击杀'],
    [/^Cost: (.+) slime goo and (.+) slime core shard$/, '成本：$1 史莱姆粘液和 $2 史莱姆核心碎片'],
    [/^Cost: (.+) slime goo and (.+) slime core$/, '成本：$1 史莱姆粘液和 $2 史莱姆核心'],
    [/^Cost: (.+) copper ore$/, '成本：$1 铜矿石'],
    [/^Cost: (.+) tin ore$/, '成本：$1 锡矿石'],
    [/^Cost: (.+) stone$/, '成本：$1 石头'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Mining: (.+) \(in group\)$/, '采矿中：$1（成群）'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) experience points$/, '要求：$1 经验点数'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);