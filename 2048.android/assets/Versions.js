/*COLOR = [cc.c3b(255, 255, 255),
 cc.c3b(60, 68, 204), cc.c3b(153, 0, 85), cc.c3b(64, 224, 208),
 cc.c3b(100, 85, 39), cc.c3b(75, 34, 255), cc.c3b(58, 68, 104),
 cc.c3b(7, 0, 234), cc.c3b(153, 45, 85), cc.c3b(15, 254, 36), cc.c3b(78, 2, 34),
 cc.c3b(255, 125, 64), cc.c3b(237, 145, 33)
 ];*/

COLOR = [cc.c3b(255, 255, 255),
    cc.c3b(238, 246, 246), cc.c3b(172, 141, 173), cc.c3b(255, 237, 196),
    cc.c3b(242, 197, 170), cc.c3b(191, 164, 157), cc.c3b(125, 125, 106),
    cc.c3b(247, 240, 145), cc.c3b(221, 204, 163), cc.c3b(251, 96, 191), cc.c3b(254, 128, 128),
    cc.c3b(211, 84, 113), cc.c3b(63, 130, 211),

    //other
    cc.c3b(100, 85, 39), cc.c3b(75, 34, 255), cc.c3b(58, 68, 104),
    cc.c3b(7, 0, 234), cc.c3b(153, 45, 85), cc.c3b(15, 254, 36), cc.c3b(78, 2, 34),
    cc.c3b(255, 125, 64), cc.c3b(237, 145, 33)
];
SCORES = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

//TWOS = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
TWOS = [" ", "商", "周", "秦", "汉", "唐", "宋", "元", "明", "清", "民国", "天朝"];


VERSIONS = [
    {
        num: 1,
        name: "2048原版",
        type: "number",
        labelFontSize: 50,
        array: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
    },
    {
        num: 2,
        name: "历史版",
        type: "string",
        labelFontSize: 50,
        array: [" ", "商", "周", "秦", "汉", "唐", "宋", "元", "明", "清", "民国", "天朝"]
    },
    {
        num: 3,
        name: "后宫版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "宫女", "答应", "常在", "贵人", "嫔", "妃", "贵妃", "皇贵妃", "皇后", "皇太后", "太皇太后"]
    },
    {
        num: 4,
        name: "军旅版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "小兵", "班长", "排长", "连长", "营长", "团长", "旅长", "师长", "军长", "司令", "军委主席"]
    },
    {
        num: 5,
        name: "学历版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "幼儿", "小学", "中学", "高中", "专科", "本科", "研究", "硕士", "博士", "博士后", "院士"]
    },
    {
        num: 6,
        name: "金庸版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "令狐冲", "杨过", "郭靖", "虚竹", "风清扬", "张三丰", "东方不败", "逍遥老祖", "独孤求败", "扫地神僧", "达摩老祖"]
    },
    {
        num: 7,
        name: "生肖版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪", "龙"]
    },
    {
        num: 8,
        name: "星座版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "魔羯座", "水瓶座", "双鱼座"]
    },
    {
        num: 9,
        name: "甲乙丙版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
    },
    {
        num: 10,
        name: "豪车版",
        type: "string",
        labelFontSize: 40,
        array: [" ", "大众", "奔驰", "悍马", "法拉利", "奥迪", "宝马", "兰博基尼", "凯迪拉克", "世爵"]
    }
];