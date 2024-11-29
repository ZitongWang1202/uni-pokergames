<template>
  <view class="scoring-container">
    <scroll-view class="table-container" scroll-x scroll-y>
      <!-- 为了解决scroll-view中flex不生效，新增一层view -->

      <view class="table">
        <!-- 表头 -->
        <view class="table-header">
          <view class="header-cell round-col">轮次</view>
          <view v-for="(player, index) in players" :key="player.id" class="header-cell">
            <template v-if="editingIndex !== index">
              <text @click="startEdit(index)">
                {{ player.name }}
                <text v-if="player.isFirst" class="first-player-flag">🚩</text>
              </text>
              <text class="delete-player" @click.stop="confirmDeletePlayer(index)">×</text>
            </template>
            <input v-else class="name-input" v-model="players[index].name" @blur="finishEdit" @confirm="finishEdit"
              focus />
          </view>
        </view>

        <!-- 分数行 -->
        <view v-for="(_, rowIndex) in scores" :key="rowIndex" class="table-row">
          <view class="cell round-col" @click="showRowOptions(rowIndex)">第{{ rowIndex + 1 }}轮</view>
          <view v-for="(_, colIndex) in players" :key="colIndex" class="cell">
            <input type="number" v-model="scores[rowIndex][colIndex]" @input="calculateTotal" />
          </view>
        </view>

        <!-- 总分行 -->
        <view class="table-row total-row">
          <view class="cell round-col">总分</view>
          <view v-for="(total, index) in totalScores" :key="index" class="cell">
            {{ total }}
          </view>
        </view>
      </view>
    </scroll-view>

      
    <!-- 计数器和规则区域 -->
    <view class="counters-and-rules">
      <!-- 计数器 先手 RESET -->
      <view class="counters-grid">
        <!-- 计数器 -->
        <view v-for="(counter, index) in scoringRules.counters" :key="index" class="counter-item">
          <text>{{ counter.name }}</text>
          <template v-if="counter.type === 'boolean'">
            <switch :checked="counter.value" @change="onCounterChange(index, $event)" />
          </template>
          <template v-else-if="counter.type === 'count'">
            <view class="counter-controls">
              <button @click="decrementCounter(index)">-</button>
              <text>{{ counter.value }}</text>
              <button @click="incrementCounter(index)">+</button>
            </view>
          </template>
          <template v-else-if="counter.type === '2^count'">
            <view class="counter-controls">
              <text>{{ counter.value }}</text>
              <button @click="increment2TimesCounter(index)">x2</button>
            </view>
          </template>
        </view>
        <view class="counter-item" v-if="scoringRules.counter && scoringRules.counter.length">
          <text>重置计数</text>
          <view class="counter-controls">
            <button @click="resetAllCounters">Reset</button>
          </view>
        </view>
        <view class="counter-item">
          <text>决定先手</text>
          <view class="counter-controls">
            <button @click="rollFirstPlayer">Roll</button>
          </view>
        </view>
      </view>


      <view class="scoring-rules" v-if="scoringRules.content && scoringRules.content.length">
        <block v-for="(section, index) in scoringRules.content" :key="index">
          <template v-if="section.isScoring === true">
            <view class="rule-title" v-if="section.type === 'title'">{{ section.content }}</view>
            <view class="rule-text" v-if="section.type === 'text'">
              <template v-for="(part, pIndex) in parseBoldText(section.content)" :key="pIndex">
                <text :class="{ 'bold': part.bold }">{{ part.text }}</text>
              </template>
            </view>
            <view class="rule-list" v-if="section.type === 'list'">
              <view v-for="(item, i) in section.items" :key="i" class="list-item">
                • <template v-for="(part, pIndex) in parseBoldText(item)" :key="pIndex">
                  <text :class="{ 'bold': part.bold }">{{ part.text }}</text>
                </template>
              </view>
            </view>
          </template>
        </block>
      </view>
    </view>

    <view class="bottom-space"></view>
    

    <!-- 按钮组 -->
    <view class="button-group">
      <button class="btn add-player-btn" @click="addPlayer" :disabled="players.length >= maxPlayers">
        添加玩家
      </button>
      <button class="btn" @click="addRow">添加一行</button>
      <button class="btn" @click="addThreeRows">添加三行</button>
    </view>
  </view>
</template>

<script>
import { ruleData } from '@/subpkg/rules/ruleData.js'

export default {
  data() {
    return {
      players: [],
      scores: [[]],
      maxPlayers: 6,
      type: '',
      ruleId: '',
      scoringRules: {
        content: [],
        counters: []
      },
      editingIndex: -1,
    };
  },
  computed: {
    totalScores() {
      return this.players.map((_, playerIndex) => {
        return this.scores.reduce((sum, row) => {
          return sum + (Number(row[playerIndex]) || 0)
        }, 0)
      })
    }
  },
  methods: {
    startEdit(index) {
      this.editingIndex = index
    },

    finishEdit() {
      this.editingIndex = -1
    },

    onCounterChange(index, event) {
      this.scoringRules.counters[index].value = event.detail.value;
    },

    incrementCounter(index) {
      this.scoringRules.counters[index].value++;
    },

    decrementCounter(index) {
      if (this.scoringRules.counters[index].value > 0) {
        this.scoringRules.counters[index].value--;
      }
    },

    increment2TimesCounter(index) {
      if (this.scoringRules.counters[index].value < 9999) {
        this.scoringRules.counters[index].value *= 2;
      }
    },

    resetAllCounters() {
      this.scoringRules.counters.forEach(counter => {
        if (counter.type === 'boolean') {
          counter.value = false;
        } else if (counter.type === 'count') {
          counter.value = 0;
        } else if (counter.type === '2^count') {
          counter.value = 1;
        }
      });
    },

    rollFirstPlayer() {
      this.players.forEach(player => player.isFirst = false);
      const randomIndex = Math.floor(Math.random() * this.players.length);
      this.players[randomIndex].isFirst = true;

      uni.showToast({
          title: `${this.players[randomIndex].name}先手`,
          icon: 'none'
        });
    },

    addPlayer() {
      if (this.players.length < this.maxPlayers) {
        const newPlayerNum = this.players.length + 1;
        this.players.push({
          id: newPlayerNum,
          name: `玩家${newPlayerNum}`
        });

        // 对应的分数列
        if (this.scores.length === 0) {
          this.scores.push(new Array(this.players.length).fill(''));
        } else {
          this.scores.forEach(row => {
            while (row.length < this.players.length) {
              row.push('');
            }
          });
        }
      } else {
        uni.showToast({
          title: `最多只能添加${this.maxPlayers}个玩家`,
          icon: 'none'
        });
      }
    },

    confirmDeletePlayer(index) {
      uni.showModal({
        content: '确定要删除该玩家吗？',
        success: (res) => {
          if (res.confirm) {
            this.deletePlayer(index)
          }
        }
      });
    },

    deletePlayer(index) {
      if (this.players.length > 0) {
        this.players.splice(index, 1);
        // 删除分数
        this.scores.forEach(row => row.splice(index, 1));
      }
    },

    addRow() {
      const newRow = new Array(Math.max(1, this.players.length)).fill('');
      this.scores.push(newRow);
    },

    showRowOptions(rowIndex) {
      uni.showActionSheet({
        itemList: ['删除'],
        itemColor: '#ff4444',
        success: (res) => {
          if (res.tapIndex === 0) {
            this.confirmDeleteRow(rowIndex)
          }
        }
      })
    },

    confirmDeleteRow(rowIndex) {
      this.scores.splice(rowIndex, 1);
    },

    addThreeRows() {
      for (let i = 0; i < 3; i++) {
        this.addRow()
      }
    },

    initData() {
      // 确保至少有一行数据
      if (this.scores.length === 0) {
        this.scores.push([]);
      }
      // 添加对应游戏人数的玩家
      if (this.type) {
        for (let i = 0; i < this.type; i++) {
          this.addPlayer();
        }
      } else {
        this.addPlayer();
      }

      const gameRule = ruleData[this.type][this.ruleId];
      if (gameRule) {
        this.scoringRules = {
          content: gameRule.sections || [],
          counters: gameRule.counters || []
        };
      }
    },

    parseBoldText(text) {
      const parts = [];
      const regex = /\*\*(.*?)\*\*/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            text: text.substring(lastIndex, match.index),
            bold: false
          });
        }
        parts.push({
          text: match[1],
          bold: true
        });
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < text.length) {
        parts.push({
          text: text.substring(lastIndex),
          bold: false
        });
      }
      return parts;
    }
  },

  onLoad(options) {
    this.type = options.type;
    this.ruleId = options.ruleId;
    this.initData();
  }
}
</script>

<style lang="scss">
.scoring-container {
  position: relative;
  padding-bottom: 120rpx;
}

.table-container {
  width: 100%;
  overflow: auto;
}

.table {
  width: 100%;
  border: 1px solid #ddd;
  border-right: none;

  // 行样式
  %table-row-base {
    display: flex;
    border-bottom: 1px solid #ddd;
    min-width: 100%;
    width: fit-content;
  }

  // 单元格样式
  %cell-base {
    flex: 1;
    min-width: 120rpx;
    padding: 20rpx;
    text-align: center;
    border-right: 1px solid #ddd;

    &:last-child {
      border-right: 1px solid #ddd;
    }
  }

  .table-row {
    @extend %table-row-base;

    .cell {
      @extend %cell-base;

      input {
        width: 100%;
        text-align: center;
      }
    }
  }

  // 表头行
  .table-header {
    @extend %table-row-base;
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 1;

    .header-cell {
      @extend %cell-base;
      position: relative;
      height: 70rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .name-input {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 60rpx;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4rpx;
      background: #fff;
      box-sizing: border-box;
      font-size: inherit;
    }

    .delete-player {
      position: absolute;
      right: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      color: #ff4444;
    }
  }

  // 总分行
  .total-row {
    @extend %table-row-base;
    background-color: #f8f8f8;
    font-weight: bold;

    .cell {
      @extend %cell-base;
    }
  }

  // 轮次列
  .round-col {
    width: 150rpx;
    flex: none;
  }
}

.counters-and-rules {
  padding: 20rpx;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;

  .counters-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    padding-bottom: 20rpx;
  }

  .counter-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx;
    background-color: #f8f8f8;
    border-radius: 10rpx;

    .counter-controls {
      display: flex;
      align-items: center;
      gap: 20rpx;

      button {
        min-width: 60rpx;
        height: 60rpx;
        line-height: 60rpx;
        padding: 0;
        margin: 0;
        font-size: 24rpx;
      }
    }
  }

  .scoring-rules {
    border-top: 1px solid #eee;
    padding: 0 20rpx;

    .rule-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin: 20rpx 0;
    }

    .rule-text {
      font-size: 28rpx;
      color: #666;
      line-height: 1.6;
      margin: 10rpx 0;
      text-align: justify;
      white-space: pre-wrap;
    }

    .rule-list {
      margin: 20rpx 0;
      
      .list-item {
        font-size: 28rpx;
        color: #666;
        line-height: 1.6;
        margin: 10rpx 0;
        padding-left: 20rpx;
        text-align: justify;
      }

      .bold {
        font-weight: bold;
        font-size: inherit;
      }
    }
  }
}

.bottom-space {
  height: 120rpx;
  width: 100%;
}

.button-group {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20rpx;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.button-group {
  padding-top: 20rpx;
  padding-bottom: 40rpx;
  display: flex;
  justify-content: space-around;
  background-color: #fff;

  .btn {
    flex: 1;
    margin: 0 10rpx;
    padding: 20rpx 0;
    font-size: 28rpx;
    background-color: #007AFF;
    color: white;
    border-radius: 10rpx;

    &:disabled {
      background-color: #ccc;
    }
  }

  .add-player-btn {
    background-color: #4CAF50; // 使用不同的颜色区分

    &:disabled {
      background-color: #ccc;
    }
  }
}

.bold {
  font-weight: bold;
}
</style>