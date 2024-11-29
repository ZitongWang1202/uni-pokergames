export const rule6 = {
    title: '四人斗地主',
    sections: [
        {
            type: 'text',
            content: '本章着重介绍**四人两副牌**的斗地主规则。'
        },
        {
            type: 'title',
            content: '与三人斗地主的区别'
        },
        {
            type: 'text',
            content: '四人斗地主需要使用**两幅**扑克牌，牌型规则相较于三人斗地主有一定改动：'
        },
        {
            type: 'list',
            items: [
                '**地主**为 1 人，**农民**为 3 人',
                '初始发牌每人 25 张，底牌为 8 张',
                '无三张带单牌的牌型',
                '火箭变成四张王，一对王则变成对子',
                '炸弹大小优先根据长度进行比较'
            ]
        },
        {
            type: 'text',
            content: '若在一轮对局中庄家牌张全出，且防守方未出一张，则称为春天。结算分值时得分翻倍。',
            isScoring: true,
            show: false
        },
        {
            type: 'text',
            content: '若庄家首此出一手牌后（可单张，可组合），防守方将牌连续出完且期间庄家再未出牌，则称为反春，结算分值时得分翻倍。',
            isScoring: true,
            show: false
        },

        {
            type: 'title',
            content: '分值结算',
            isScoring: true,
            show: false
        },
        {
            type: 'text',
            content: '每轮对局结束后，防守人的得分为**庄家所叫分值 × 胜负系数 × 加倍系数**。庄家得分为两名防守人得分之和的相反数。',
            isScoring: true,
            show: false
        },
        {
            type: 'text',
            content: '胜负系数为 1 或 -1，当防守方获胜时为 1，当防守方失败时为 -1。加倍系数为：',
            isScoring: true,
            show: false
        },
        {
            type: 'text',
            content: '2 ^ (该轮对局的火箭数 + 炸弹数 + 春天/反春数 + 防守人加倍次数 + 庄家加倍次数)。',
            isScoring: true,
            show: false
        },
        {
            type: 'text',
            content: '*注：若某一防守人选择对庄家加倍，则计分时只有对庄家加倍的防守人得分翻倍，另一防守人如果未加倍则仍按照一倍计算。若两个防守人都对庄家加倍，庄家选择再加倍时，对两防守人都有效，否则只对选择加倍的防守人有效。',
            isScoring: true,
            show: false
        },
    ],
    counters: [
        {
            name: "春天",
            type: "boolean",
            value: false
        },
        {
            name: "反春",
            type: "boolean",
            value: false
        },
        {
            name: "炸弹",
            type: "count",
            value: 0
        },
        {
            name: "火箭",
            type: "count",
            value: 0
        },
    ],
}
