export const ruleData = {
  '3': {
    'rule1': {
      title: '斗地主',
      sections: [
        {
          type: 'title',
          content: '发牌与确定庄家'
        },
        {
          type: 'text',
          content: '将一副扑克牌进行洗牌打乱后，给每名玩家发放17张牌作为手牌，并留3张未亮明的牌作为底牌。'
        },
        {
          type: 'text',
          content: '玩家收到牌后，按顺序在“0分”至“3分”间只能以分值递增式选择一个分值叫牌作为底分，或者选择“0分”进行弃权。由叫牌分值最大者作为庄家（“地主”），其余两名玩家则自动确认为防守方（“农民”）。若三名玩家均选择“0分”弃权则重新发牌。'
        },
        {
          type: 'text',
          content: '确定庄家后，防守方可选择是否对庄家进行底分加倍，庄家之后也可选择是否再加倍。最终加倍结果为本轮对局底分。'
        },

        {
          type: 'title',
          content: '出牌'
        },
        {
          type: 'text',
          content: '叫牌结束后进入出牌阶段，庄家为第一个出牌人在允许牌型下进行出牌，另外两家须按照相同牌型，相同张数选择盖牌，也可出炸弹或火箭两种特殊牌型进行盖牌。下一家的出牌必须大于上一家出牌或选择过牌。出牌完成一圈后，以后每圈由上圈出牌最大的玩家继承出牌主动权，出牌牌型可改变但须为允许的牌型。'
        },
        {
          type: 'text',
          content: '任何玩家手牌减少至2张和1张时须提醒其他玩家自身还剩多少手牌。庄家或防守方中任意一人的手牌出尽时，则视为该阵营获胜，然后结束对局。'
        },
        {
          type: 'text',
          content: '三人斗地主允许的牌型和规则如下表：'
        },

        // list example
        // {
        //   type: 'title',
        //   content: '叫分规则'
        // },
        // {
        //   type: 'list',
        //   items: [
        //     '玩家收到牌后，按顺序在"0分"至"3分"间只能以分值递增式选择一个分值叫牌作为底分，或者选择"0分"进行弃权。',
        //     '由叫牌分值最大者作为庄家（"地主"），其余两名玩家则自动确认为防守方（"农民"）。',
        //     '若三名玩家均选择"0分"弃权则重新发牌。'
        //   ]
        // },

        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '若无大牌可压制上家所出的牌型或选择不出时，称为过牌']
            },
            {
              type: 'normal',
              data: ['单牌', ['../../static/pokers/2C.png'], '最大：大王', '大小顺序：大王（红Joker）＞小王（黑Joker）＞2＞A＞K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3，不分花色']
            },
            {
              type: 'normal',
              data: ['对子', ['../../static/pokers/2C.png', '../../static/pokers/2D.png'], '最大：大王', '两张点数相同的牌']
            }
          ]
        },

        {
          type: 'title',
          content: '特殊情形'
        },
        {
          type: 'text',
          content: '若在一轮对局中庄家牌张全出，且防守方未出一张，则称为春天。结算分值时得分翻倍。'
        },
        {
          type: 'text',
          content: '若庄家首此出一手牌后（可单张，可组合），防守方将牌连续出完且期间庄家再未出牌，则称为反春，结算分值时得分翻倍。'
        },

        {
          type: 'title',
          content: '分值结算'
        },
        {
          type: 'text',
          content: '每轮对局结束后，防守人的得分为庄家所叫分值×胜负系数×加倍系数。庄家得分为两名防守人得分之和的相反数。'
        },
        {
          type: 'text',
          content: '胜负系数为1或-1，当防守方获胜时为1，当防守方失败时为-1。加倍系数为2^(该轮对局的火箭数+炸弹数+春天/反春数+防守人加倍次数+庄家再加倍次数)。'
        },
        {
          type: 'text',
          content: '*注：若某一防守人选择对庄家加倍，则计分时只有对庄家加倍的防守人得分翻倍，另一防守人如果未加倍则仍按照一倍计算。若两个防守人都对庄家加倍，庄家选择再加倍时，对两防守人都有效，否则只对选择加倍的防守人有效。'
        },
        
        // {
        //   type: 'image',
        //   url: '../../static/pokers/2C.png',
        //   caption: '示例图'
        // }
      ]
    },
    'rule2': {
      title: '干瞪眼',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
    'rule3': {
      title: '三人掼蛋',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    }
  },
  '4': {
    'rule4': {
      title: '掼蛋',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
    'rule5': {
      title: '升级',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
    'rule6': {
      title: '四人斗地主',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
    'rule7': {
      title: '山东升级',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    }
  },
  '5': {
    'rule8': {
      title: '保皇',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
  },
  '6': {
    'rule9': {
      title: '够级',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
    'rule10': {
      title: '兰里拖拉机',
      sections: [
        {
          type: 'title',
          content: ''
        },
        {
          type: 'text',
          content: ''
        },
        {
          type: 'table',
          headers: ['牌型', '例子', '最长或最大情况', '说明'],
          rows: [
            {
              type: 'no-img',
              data: ['过牌', '—', '—', '—']
            },
            {
              type: 'normal',
              data: ['单牌', '../../static/pokers/2C.png', '—', '—']
            },
          ]
        },
      ]
    },
  }
};