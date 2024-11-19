export const rule4 = {
    title: '掼蛋',
    sections: [
        {
            type: 'title',
            content: '牌张与牌手'
        },
        {
            type: 'text',
            content: '掼蛋使用两副共54*2=108张牌，称为全手牌。一桌四位玩家按序抓完，每人27张，称一手牌。与升级类似，四人中相对的两人为一方，而上家和下家为对方。'
        },
        {
            type: 'text',
            content: '玩家按顺序出牌。与争上游、斗地主等玩法类似，以更大的牌型压制前手牌，直至其余玩家放弃不出，称为一圈牌。'
        },
        {
            type: 'text',
            content: '从开始抓牌至完全出完各自手牌的过程称为一副牌，按照出完顺序的先后，称为上游、二游、三游和下游。如果一方两人分别为三游和下游，则称双下游，一般会对下一副牌的局势不利，见“贡牌”一节。'
        },
        
        {
            type: 'title',
            content: '贡牌'
        },
        {
            type: 'text',
            content: '从第二副牌开始，下游方需要给上游方牌点“进贡”最大的牌（例如王），而上游方需要还给下游方一张点数在2至10之间的牌。'
        },
        {
            type: 'text',
            content: '如果上副牌打出双下游，那么此方两人各需上贡自己手中最大的牌，这两张牌中较大的给上游，较小的给二游，并对应还牌。如果上贡牌点数相同，则按顺时针方向进贡。'
        },
        {
            type: 'text',
            content: '还牌结束后的第一圈由接受了上游牌的一方（通常是下游）先出牌。'
        },
        {
            type: 'text',
            content: '若抓到两个大王均被进贡的一人或两人抓到，则跳过进贡步骤，称为抗贡，首圈由上游先出牌。'
        },
        {
            type: 'text',
            content: '红心级牌（见牌点与牌型一节）不能在上贡之列。'
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
            content: '如果一方打出了手中所有的牌，并且上下家，即对手方均不接牌，则为对家领出牌。'
        },
        {
            type: 'text',
            content: '牌点由小到大排列为，2至10，J，Q，K，A，级牌，小王，大王。'
        },
        {
            type: 'text',
            content: '红心花色的级牌是掼蛋最为特殊的一张牌，可以充当任意牌点的花色牌（即除大小王）搭配使用，称为逢人配。'
        },
        {
            type: 'text',
            content: '掼蛋允许的牌型和规则如下表：'
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
            content: '当一家在某圈一手牌后，手中剩余牌数小于或等于10，应立即声明自己还剩几张牌。',
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
            content: '牌局开始的第一副两方级数为均为2，即2为主牌，大于其他花色牌，红心2为逢人配。',
            isScoring: true
        },
        {
            type: 'text',
            content: '一副牌中一方中一家获得上游，若该方对家均为下游，升三级，即若本局级数为2，下局则为5。同伴三游升2级，同伴末游升1级。下一副牌赢家的级数作为级牌。',
            isScoring: true
        },
        {
            type: 'text',
            content: 'A级必打，即如果升级超过A级的仍然为A级。',
            isScoring: true
        },
        {
            type: 'text',
            content: '一局比赛中，先打过A级的一方胜。从A级胜利必须己方两家为上游、二游或上游、三游。',
            isScoring: true
        },
    ]
}
