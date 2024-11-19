export const rule2 = {
    title: '干瞪眼',
    sections: [
        {
            type: 'title',
            content: '发牌与确定庄家'
        },
        {
            type: 'text',
            content: '新局开始随机决定一个玩家成为庄家，之后的局，上局的赢家成为庄家。庄家拥有当局第一轮出牌权。游戏开始后，庄家发6张牌，其余人发5张牌。剩下的牌做为底牌。'
        },
        {
            type: 'title',
            content: '出牌和拿牌'
        },
        {
            type: 'text',
            content: '按逆时钟方向出牌，拥有出牌权的玩家可以出任意符合规则的牌型，其他玩家顺序出牌，必须出符合规则的比上家大的牌型，或者选择不出。'
        },
        {
            type: 'text',
            content: '一轮牌最后出牌的玩家补一张牌，进入下一轮。如果牌抓完则每人凭手上的牌继续玩下去。第一个出完手中所有牌的玩家胜利，其余玩家失败。'
        },
        {
            type: 'text',
            content: '单张，顺子，对子，连对的牌型，必须点数正好大过一点才可以大过，干瞪眼允许的规则和其他特殊牌型如下表：'
        },
        {
            type: 'table',
            headers: ['牌型', '例子', '最长或最大情况', '说明'],
            rows: [
                {
                    type: 'no-img',
                    data: ['过牌', '—', '—', ['若无大牌可压制上家所出的牌型或选择不出时，称为过牌']]
                },
                {
                    type: 'normal',
                    data: ['单牌', [
                        {
                            imgs: ['../../static/pokers/5C.png'],
                            text: '5单牌'
                        }
                    ], '最大：2', [
                        '• 大小顺序：2＞A＞K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3，不分花色',
                        '• 必须点数正好大过一点才可以大过，例如：5只能用6大',
                        '• 特殊：2可以大过所有单张',
                        '• 单独的一个大王和小王不属于任何牌型，不可出'
                    ]]
                },
                {
                    type: 'normal',
                    data: ['对子', [
                        {
                            imgs: [
                                '../../static/pokers/KC.png', 
                                '../../static/pokers/KD.png'
                            ],
                            text: '对K'
                        }
                    ], '最大：对2', [
                        '• 必须点数正好大过一点才可以大过，例如：55只能用66大',
                        '• 特殊：22可以大过所有对子',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['连对', [
                        {
                            imgs: [
                                '../../static/pokers/4C.png', 
                                '../../static/pokers/4D.png',
                                '../../static/pokers/5C.png',
                                '../../static/pokers/5D.png'
                            ],
                            text: '4455连对'
                        }
                    ], '最大：KKAA', [
                        '• 必须点数正好大过一点才可以大过，例如：4455只能用5566大',
                        '• 特殊：2不能出现在连对中',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['顺子', [
                        {
                            imgs: [
                                '../../static/pokers/4C.png', 
                                '../../static/pokers/5D.png',
                                '../../static/pokers/6H.png'
                            ],
                            text: '456顺子'
                        }
                    ], '最大：到A的顺子', [
                        '• 三张，四张或者五张点数相连的牌',
                        '• 必须点数正好大过一点才可以大过，例如：456只能用567大',
                        '• 特殊：2不能出现在顺子中',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['炸弹', [
                        {
                            imgs: [
                                '../../static/pokers/5C.png',
                                '../../static/pokers/5D.png',
                                '../../static/pokers/5S.png',
                            ],
                            text: '555炸弹'
                        },
                        {
                            imgs: [
                                '../../static/pokers/8C.png',
                                '../../static/pokers/8D.png',
                                '../../static/pokers/8S.png',
                                '../../static/pokers/8H.png',
                            ],
                            text: '8888炸弹'
                        },
                        {
                            imgs: [
                                '../../static/pokers/JK-Red.png',
                                '../../static/pokers/JK-Black.png',
                            ],
                            text: '双王炸弹'
                        }
                    ], '最大：双王炸弹', [
                        '• 三张或四张相同点数的牌为炸弹',
                        '• 炸弹的牌型大过所有其他牌型',
                        '• 炸弹之间的比较，点数大的就可以大过，四张的炸弹大于三张的炸弹，双王炸弹最大',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['王', [
                        {
                            imgs: [
                                '../../static/pokers/3C.png',
                                '../../static/pokers/4D.png',
                                '../../static/pokers/JK-Red.png',
                            ],
                            text: '34大王转换成345'
                        },
                        {
                            imgs: [
                                '../../static/pokers/8C.png',
                                '../../static/pokers/8D.png',
                                '../../static/pokers/JK-Black.png',
                            ],
                            text: '88小王转换成888炸弹'
                        },
                    ], '-', [
                        '• 王可以和别的点数的牌一起出，任意转换成需要的点数，组成任意可出的牌型',
                        ]]
                },
            ]
        },

        {
            type: 'title',
            content: '分值结算',
            isScoring: true
        },
        {
            type: 'text',
            content: '每轮对局结束后，赢家的得分为输家所输分数之和。输家所输分数为所剩牌数*公共倍数*个人倍数',
            isScoring: true
        },
        {
            type: 'text',
            content: '公共倍数初始为1，每出一个炸弹倍数*2',
            isScoring: true
        },
        {
            type: 'text',
            content: '个人倍数初始为1，剩下的牌中每剩一个炸弹倍数*2，每剩一个王倍数*2',
            isScoring: true
        },
    ]   
}
