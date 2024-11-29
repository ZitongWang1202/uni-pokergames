export const rule1 = {
    title: '斗地主',
    sections: [
        {
            type: 'text',
            content: '本章着重介绍三人一副牌的斗地主规则。'
        },
        {
            type: 'title',
            content: '发牌与确定庄家'
        },
        {
            type: 'text',
            content: '将**一副扑克牌**进行洗牌打乱后，给每名玩家发放 17 张牌作为手牌，并留 3 张未亮明的牌作为底牌。'
        },
        {
            type: 'text',
            content: '玩家摸完牌后，按顺序在“0分”至“3分”间选择一个作为底分（选择“0分”即弃权）。叫牌分值最大者为庄家（“地主”），其余两名玩家则为防守方（“农民”）。若三名玩家均选择“0分”弃权，则重新发牌。'
        },
        {
            type: 'text',
            content: '确定庄家后，防守方可选择是否对庄家的底分加倍，庄家之后也可选择是否再加倍。最终加倍结果为本轮对局底分。'
        },

        {
            type: 'title',
            content: '出牌'
        },
        {
            type: 'text',
            content: '庄家为第一个出牌人在允许牌型下进行出牌，另外两家须按照相同牌型和张数选择盖牌，也可出炸弹或火箭两种特殊牌型进行盖牌。'
        },
        {
            type: 'text',
            content: '下一家的出牌必须大于上一家出牌或选择过牌。出牌完成一圈后，以后每圈由上圈出牌最大的玩家继承出牌权。'
        },
        {
            type: 'text',
            content: '任何玩家手牌减少至** 2 张及以下**时须提醒其他玩家自身还剩多少手牌。庄家或防守方中任意一人的手牌出尽时，则视为该阵营获胜。'
        },
        {
            type: 'text',
            content: '三人斗地主允许的牌型和规则如下表：'
        },

        {
            type: 'table',
            headers: ['牌型', '例子', '最长或最大情况', '说明'],
            rows: [
                {
                    type: 'no-img',
                    data: ['过牌', '—', '—', ['• 若无大牌可压制上家所出的牌型或选择不出时，称为过牌']]
                },
                {
                    type: 'normal',
                    data: ['单牌', [
                        {
                            imgs: ['../../static/pokers/5C.png'],
                            text: '5单牌'
                        }
                    ], '最大：大王', ['• 大小顺序：大王＞小王＞2＞A＞K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3，不分花色']]
                },
                {
                    type: 'normal',
                    data: ['对子', [
                        {
                            imgs: ['../../static/pokers/KC.png', '../../static/pokers/KD.png'],
                            text: '对K'
                        }
                    ], '最大：对2', [
                            '• 大小顺序同单牌'
                        ]]
                },
                {
                    type: 'normal',
                    data: ['连对', [
                        {
                            imgs: [
                                '../../static/pokers/3C.png',
                                '../../static/pokers/3D.png',
                                '../../static/pokers/4S.png',
                                '../../static/pokers/4D.png',
                                '../../static/pokers/5C.png',
                                '../../static/pokers/5H.png'
                            ],
                            text: '334455三连对'
                        }
                    ], '最大：到AA的连对', [
                            '• 3 对及以上连续对子，不包含 2 和大小王',
                            '• 只有牌型与张数均相同时才能以最大对子比较大小，不分花色',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['顺子', [
                        {
                            imgs: [
                                '../../static/pokers/4C.png',
                                '../../static/pokers/5D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/8H.png',
                            ],
                            text: '45678顺子'
                        }
                    ], '最大：到A的顺子', [
                            '• 5张及以上连续单牌，不包含2和大小王',
                            '• 只有牌型与张数均相同时才能以最大牌张点数比较大小，不分花色',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['三张/三条', [
                        {
                            imgs: [
                                '../../static/pokers/8D.png',
                                '../../static/pokers/8C.png',
                                '../../static/pokers/8H.png'
                            ],
                            text: '888三条'
                        }
                    ], '最大：222', [
                            '• 三张点数相同的牌',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['三带', [
                        {
                            imgs: [
                                '../../static/pokers/JC.png',
                                '../../static/pokers/JD.png',
                                '../../static/pokers/JS.png',
                                '../../static/pokers/4D.png',
                            ],
                            text: 'JJJ+4三带一'
                        },
                        {
                            imgs: [
                                '../../static/pokers/JC.png',
                                '../../static/pokers/JD.png',
                                '../../static/pokers/JS.png',
                                '../../static/pokers/4C.png',
                                '../../static/pokers/4D.png',
                            ],
                            text: 'JJJ+44三带对'
                        }
                    ], '最大：222带单牌/对子', [
                            '• 三张带一张单牌形成三带一，或带一个对子形成三带二',
                            '• 只有牌型与张数均相同时才能按其中三张比较大小。不分花色，带牌不影响大小',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['飞机', [
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7H.png'
                            ],
                            text: '666777飞机'
                        }
                    ], '最大：到AAA的飞机', [
                            '• 2个及以上连续的三张构成飞机，不包含2和大小王',
                            '• 只有牌型与张数均相同时才能按其中最大的三张比较大小',

                        ]]
                },
                {
                    type: 'normal',
                    data: ['飞机带翅膀', [
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7H.png',
                                '../../static/pokers/3C.png',
                                '../../static/pokers/8H.png',
                            ],
                            text: '666777+38飞机带单牌'
                        },
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7H.png',
                                '../../static/pokers/AD.png',
                                '../../static/pokers/AH.png',
                            ],
                            text: '666777+AA飞机带单牌（相同单牌）'
                        },
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7H.png',
                                '../../static/pokers/3C.png',
                                '../../static/pokers/3H.png',
                                '../../static/pokers/QC.png',
                                '../../static/pokers/QS.png',
                            ],
                            text: '666777+33QQ飞机带对子'
                        }
                    ], '最大：到AAA的飞机', [
                            '• 可带与其长度相同数量点数不同的单牌或者对子形成飞机带翅膀，所带牌中不包含双王、炸弹以及与飞机连续的三张',
                            '• 只有牌型与张数均相同时才能按其中最大的三张比较大小。不分花色，带牌不影响大小',

                        ]]
                },
                {
                    type: 'normal',
                    data: ['四带二', [
                        {
                            imgs: [
                                '../../static/pokers/9C.png',
                                '../../static/pokers/9D.png',
                                '../../static/pokers/9S.png',
                                '../../static/pokers/9H.png',
                                '../../static/pokers/3C.png',
                                '../../static/pokers/KH.png',
                            ],
                            text: '9999+3K四带二（带单牌）'
                        },
                        {
                            imgs: [
                                '../../static/pokers/9C.png',
                                '../../static/pokers/9D.png',
                                '../../static/pokers/9S.png',
                                '../../static/pokers/9H.png',
                                '../../static/pokers/3C.png',
                                '../../static/pokers/3H.png',
                                '../../static/pokers/KC.png',
                                '../../static/pokers/KH.png',
                            ],
                            text: '9999+33KK四带二（带对子）'
                        }
                    ], '最大：2222带单牌/对子', [
                            '• 四张相同点数的牌带两张单牌或两个对子，带对子牌不包括王炸和炸弹',
                            '• 只有牌型与张数均相同时才能按其中炸弹比较大小。带牌不影响大小',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['炸弹/四条', [
                        {
                            imgs: [
                                '../../static/pokers/5C.png',
                                '../../static/pokers/5D.png',
                                '../../static/pokers/5S.png',
                                '../../static/pokers/5H.png',
                            ],
                            text: '5555炸弹'
                        }
                    ], '最大：2222', [
                            '• 特殊牌型，打出后得分翻倍',
                            '• 大小顺序按牌点比较大小'
                        ]]
                },
                {
                    type: 'normal',
                    data: ['双王/王炸/火箭', [
                        {
                            imgs: [
                                '../../static/pokers/JK-Red.png',
                                '../../static/pokers/JK-Black.png',
                            ],
                            text: '王炸'
                        }
                    ], '为唯一牌型', [
                            '• 特殊牌型，打出后得分翻倍。',
                            '• 游戏内最大牌型'
                        ]]
                },
            ]
        },

        {
            type: 'title',
            content: '特殊情形',
            isScoring: true
        },
        {
            type: 'text',
            content: '若在一轮对局中庄家牌张全出，且**防守方未出一张**，则称为**春天**。结算分值时得分翻倍。',
            isScoring: true
        },
        {
            type: 'text',
            content: '若庄家出**一手牌**后，防守方将牌连续出完且期间庄家再未出牌，则称为**反春**，结算分值时得分翻倍。',
            isScoring: true
        },

        {
            type: 'title',
            content: '分值结算',
            isScoring: true
        },
        {
            type: 'text',
            content: '每轮对局结束后，防守人的得分为**庄家所叫分值 × 胜负系数 × 加倍系数**。庄家得分为两名防守人得分之和的相反数。',
            isScoring: true
        },
        {
            type: 'text',
            content: '胜负系数为 1 或 -1，当防守方获胜时为 1，当防守方失败时为 -1。加倍系数为：',
            isScoring: true
        },
        {
            type: 'text',
            content: '2 ^ (该轮对局的火箭数 + 炸弹数 + 春天/反春数 + 防守人加倍次数 + 庄家加倍次数)。',
            isScoring: true
        },
        {
            type: 'text',
            content: '*注：若某一防守人选择对庄家加倍，则计分时只有对庄家加倍的防守人得分翻倍，另一防守人如果未加倍则仍按照一倍计算。若两个防守人都对庄家加倍，庄家选择再加倍时，对两防守人都有效，否则只对选择加倍的防守人有效。',
            isScoring: true
        },

        {
            type: 'reference',
            content: '维基百科编者. 鬥地主[G/OL]. 维基百科, 2024(20241011)[2024-10-11]. https://zh.wikipedia.org/w/index.php?title=%E9%AC%A5%E5%9C%B0%E4%B8%BB&oldid=84545591.'
        }
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
};