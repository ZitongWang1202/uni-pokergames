export const rule4 = {
    title: '掼蛋',
    sections: [
        {
            type: 'text',
            content: '本章着重介绍四人两副牌的掼蛋规则。'
        },

        {
            type: 'title',
            content: '发牌与确定阵营'
        },
        {
            type: 'text',
            content: '掼蛋使用**两副扑克牌**。四位玩家按序抓完，每人 27 张。四人中相对的两人为一方，而上家和下家为对方。'
        },
        {
            type: 'text',
            content: '玩家按顺序出牌。与斗地主等玩法类似，以更大的牌型压制前手牌，直至其余玩家放弃不出，称为**一圈牌**。'
        },
        {
            type: 'text',
            content: '从开始抓牌至完全出完各自手牌的过程称为**一副牌** 。按照出完顺序的先后，位次称为**上游**、**二游**、**三游**和**下游**。'
        },
        
        {
            type: 'title',
            content: '贡牌与先出'
        },
        {
            type: 'text',
            content: '从第二副牌开始，下游方需要给上游方**进贡**最大的牌，而上游方需要还给下游方一张点数在 **2 至 10** 之间的牌。'
        },
        {
            type: 'text',
            content: '如果上副牌打出**双下游**（一方两人分别为三游和下游），那么此方两人各需上贡自己手中最大的牌，这两张牌中较大的给上游，较小的给二游，并对应还牌。如果上贡牌点数相同，则按顺时针方向进贡。'
        },
        {
            type: 'text',
            content: '还牌结束后的第一圈由下游先出牌。若双下游，则由进贡较大的一家先出牌。若进贡牌点数相同，则由得还贡较小的一家先出牌。若还贡牌点数相同，则先摸牌的下游方先出牌。'
        },
        {
            type: 'text',
            content: '若两个大王均被进贡的一人或两人抓到，则跳过进贡步骤，称为**抗贡**，首圈由上游先出牌。'
        },
        {
            type: 'text',
            content: '特殊：红心级牌（见出牌一节）不能用于上贡。'
        },

        {
            type: 'title',
            content: '出牌'
        },
        {
            type: 'text',
            content: '一圈牌中，领出者可出任意牌型中的一种，各家逆时针顺序依次用更大的牌点接牌，或放弃不出。如果三家均不出，则此圈结束，由最后出牌的一家领出下一圈。'
        },
        {
            type: 'text',
            content: '如果一方打出了手中所有的牌，并且对手方均不接牌，则为对家领出牌，称为**接风**。'
        },
        {
            type: 'text',
            content: '牌点由小到大排列为：'
        },
        {
            type: 'text',
            content: '2至10 < J < Q < K < A < 级牌 < 小王 < 大王'
        },
        {
            type: 'text',
            content: '红心花色的级牌是掼蛋最为特殊的一张牌，可以充当任意牌点的花色牌（除大小王）搭配使用，称为**逢人配**。'
        },
        {
            type: 'text',
            content: '掼蛋中除了炸弹外，牌型均不超过六张。允许的牌型和规则如下表：'
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
                    ], '最大：大王', ['牌点由小到大排列为，2至10，J，Q，K，A，级牌，小王，大王。']]
                },
                {
                    type: 'normal',
                    data: ['对子', [
                        {
                            imgs: ['../../static/pokers/KC.png', '../../static/pokers/KD.png'],
                            text: '对K'
                        }
                    ], '最大：对大王', [
                            '• 任意两张牌点相同的牌，包括对大王或对小王',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['三连对', [
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
                    ], '最大：QQKKAA', [
                            '• 三对牌点相邻的对子',
                            '• 可以出从小到大AA2233到QQKKAA的任意三连对',
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
                    ], '最大：10JQKA', [
                            '• 五张牌点相邻的牌',
                            '• 可以出从小到大A2345到10JQKA的任意顺子',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['三同张', [
                        {
                            imgs: [
                                '../../static/pokers/8D.png',
                                '../../static/pokers/8C.png',
                                '../../static/pokers/8H.png'
                            ],
                            text: '888三同张'
                        }
                    ], '最大：222', [
                            '• 三张点数相同的牌',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['三带二', [
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
                    ], '最大：222+对子', [
                            '• 三同张加一个对子',
                            '• 三带二只比较三同张的大小'
                        ]]
                },
                {
                    type: 'normal',
                    data: ['二连三', [
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7H.png'
                            ],
                            text: '666777二连三'
                        }
                    ], '最大：KKKAAA', [
                            '• 两套牌点相同的相邻三同张',
                            '• 可以出从小到大AAA222到KKKAAA的任意二连三',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['炸弹', [
                        {
                            imgs: [
                                '../../static/pokers/6C.png',
                                '../../static/pokers/6D.png',
                                '../../static/pokers/6S.png',
                                '../../static/pokers/6D.png',
                            ],
                            text: '6666炸弹'
                        },
                    ], '最大：22222222', [
                            '• 四张或四张以上牌点相同的牌',
                            '• 炸弹张数多者为大，若张数相同，牌点最大的为大',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['同花顺', [
                        {
                            imgs: [
                                '../../static/pokers/7C.png',
                                '../../static/pokers/8C.png',
                                '../../static/pokers/9C.png',
                                '../../static/pokers/10C.png',
                                '../../static/pokers/JC.png',
                            ],
                            text: '9999+3K四带二（带单牌）'
                        },
                    ], '最大：10JQKA同花顺', [
                            '• 五张花色相同的顺子',
                            '• 同花顺以点数大者为大，同花顺可以压五张及以下的炸弹，但六张及以上的炸弹比同花顺更大',
                        ]]
                },
                {
                    type: 'normal',
                    data: ['王炸', [
                        {
                            imgs: [
                                '../../static/pokers/JK-Red.png',
                                '../../static/pokers/JK-Black.png',
                            ],
                            text: '王炸'
                        }
                    ], '为唯一牌型', [
                            '• 王炸大过所有牌型',
                        ]]
                },
            ]
        },
        
        {
            type: 'title',
            content: '报牌',
        },
        {
            type: 'text',
            content: '当一家在某圈一手牌后，手中剩余牌数小于或等于 **10** ，应立即声明自己还剩几张牌。',
        },

        {
            type: 'title',
            content: '升级及胜负',
            isScoring: true
        },
        {
            type: 'text',
            content: '升级是取得整局胜利的必要条件。升级规则如下：',
            isScoring: true
        },
        {
            type: 'text',
            content: '牌局开始的第一副两方级数为均为 2 ，即 2 为主牌，大于其他花色牌，红心 2 为逢人配。',
            isScoring: true
        },
        {
            type: 'text',
            content: '一副牌中一方中一家获得上游，若该方对家均为下游，升 3 级（若本局级数为 2 ，下局则为 5 ）。同伴三游升 2 级，同伴末游升 1 级。下一副牌赢家的级数作为级牌。',
            isScoring: true
        },
        {
            type: 'text',
            content: 'A 级必打，即如果升级超过 A 级的仍然为 A 级。',
            isScoring: true
        },
        {
            type: 'text',
            content: '一局比赛中，先打过 A 级的一方胜。从 A 级胜利必须己方两家为上游、二游或上游、三游。',
            isScoring: true
        },
        {
            type: 'text',
            content: '*注：不同地方规则中过 A 级的标准有所不同。有不能下游的，有必须一二游的，还有的规则中如果 A 级一方连续三副牌均不过，则冲关失败，该方退回 2 级。',
            isScoring: true
        },
        {
            type: 'reference',
            content: '维基百科编者. 掼蛋[G/OL]. 维基百科, 2024(20240830)[2024-08-30]. https://zh.wikipedia.org/w/index.php?title=%E6%8E%BC%E8%9B%8B&oldid=84021816.'
        }
    ],  
    counters: [],      
}
