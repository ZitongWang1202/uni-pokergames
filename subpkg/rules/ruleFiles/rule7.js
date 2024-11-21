export const rule7 = {
    title: '山东升级',
    sections: [
        {
            type: 'text',
            content: '本章着重介绍山东地区一带流行的四人两副牌的升级规则。'
        },

        {
            type: 'title',
            content: '大小'
        },
        {
            type: 'text',
            content: '相较于四人两副牌升级，山东升级中2，3，5为常主，以打10为例，主牌单张大小顺序为：'
        },
        {
            type: 'text',
            content: '4<6<7<8<9<J<Q<K<A<副2<主2<副3<主3<副5<主5<副10<主10<小王<大王'
        },

        {
            type: 'title',
            content: '抓牌与亮主'
        },
        {
            type: 'text',
            content: '抓牌时，每人抓26张，留4张作为底牌。'
        },
        {
            type: 'text',
            content: '亮主时，构成一王一对（♠99小王）的可以亮牌，先亮牌的定主。若后来有人一对王一对（♣44大王大王），则可以抢夺定主权。若后来有人一王加连对（♦6677大王），可以粘牌，把领先定主的三张牌拿走，回一个大于A的主和两个副牌。四张底牌，由定主庄家的对门，或者定主闲家的下一位扣底。'
        },
        {
            type: 'text',
            content: '亮主时除大王小王之外的牌需牌面朝下，直到庄家扣完底后再翻开。庄家由于不知道亮主花色，有可能将主牌扣入底牌中，增添了运气成分。'
        },
        {
            type: 'text',
            content: '如果闲家在摸牌阶段不亮主，且庄家亮主失败，则闲家升3级，上台打闲家级别并开始亮主。'
        },
        {
            type: 'text',
            content: '山东升级中的特殊牌型如下：'
        },

        {
            type: 'table',
            headers: ['牌型', '例子', '最长或最大情况', '说明'],
            rows: [
                {
                    type: 'normal',
                    data: ['闪/震（咕噜）', [
                        {
                            imgs: [
                                '../../static/pokers/2H.png',
                                '../../static/pokers/2C.png',
                                '../../static/pokers/2S.png',
                                '../../static/pokers/2D.png',
                            ],
                            text: '2222闪'
                        },
                        {
                            imgs: [
                                '../../static/pokers/7H.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7C.png',
                                '../../static/pokers/7S.png',
                                '../../static/pokers/7D.png',
                                '../../static/pokers/7D.png',
                            ],
                            text: '777777震（7为级牌）'
                        }
                    ], '-', [
                        '• 花色互不相同的四张主牌为闪',
                        '• 花色互不相同的四张主牌加上相同数字的更多张为震',
                        '• 部分规则规定四个王算闪',
                    ]]
                },
                {
                    type: 'normal',
                    data: ['雨（顺子）', [
                        {
                            imgs: [
                                '../../static/pokers/6C.png', 
                                '../../static/pokers/7C.png',
                                '../../static/pokers/8C.png',
                                '../../static/pokers/9C.png',
                                '../../static/pokers/10C.png',
                            ],
                            text: '678910雨'
                        },
                        {
                            imgs: [
                                '../../static/pokers/6C.png', 
                                '../../static/pokers/7C.png',
                                '../../static/pokers/8C.png',
                                '../../static/pokers/9C.png',
                                '../../static/pokers/9C.png',
                                '../../static/pokers/10C.png',
                                '../../static/pokers/JC.png',
                                '../../static/pokers/JC.png',
                                '../../static/pokers/QC.png',
                            ],
                            text: '6789910JJQ雨'
                        }
                    ], '-', [
                            '• 花色相同，连续五张以上的牌型',
                            '• 与拖拉机不同，雨中的牌必须数字连续，最大到A',
                            '• 如果雨中的牌有两张，则可以一起带上，如第二个例子',
                            '• 部分规则规定副牌可以带主牌形成副牌的顺子，例如带上2，3，5或级牌的顺子',
                        ]]
                },
            ]
        },

        {
            type: 'title',
            content: '跟牌'
        },
        {
            type: 'text',
            content: '单张的跟牌规则同两人四副牌的升级规则。除甩牌以外两张及以上的牌型，跟牌时需要注意，如果没有同类型牌型，则在跟单张时必须跟出该花色最大的单张，垫牌则无此规则。'
        },
        {
            type: 'text',
            content: '特殊牌型的跟牌优先级如下：'
        },
        {
            type: 'text',
            content: '领出闪/震：闪/震/顺子>连对>对子>对子+最大单张>最大单张>垫牌'
        },
        {
            type: 'text',
            content: '毙牌时主牌牌型也必须完全匹配领出者的牌型。'
        },

        {
            type: 'title',
            content: '抠底',
            isScoring: true
        },
        {
            type: 'text',
            content: '特殊牌型的抠底倍数如下表：',
            isScoring: true
        },
        {
            type: 'list',
            items: [
                '闪/震：4倍',
                '顺子：5倍',
            ],
            isScoring: true
        },
    ]
}
