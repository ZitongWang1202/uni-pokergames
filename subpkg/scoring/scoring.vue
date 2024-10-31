<template>
  <view class="scoring-container">
    <!-- 表格部分 -->
    <scroll-view class="table-container" scroll-y="true">
      <view class="table">
        <!-- 表头 -->
        <view class="table-header">
          <view class="header-cell round-col">轮次</view>
          <view class="header-cell" v-for="(player, index) in players" :key="index">
            {{ player.name }}
            <text class="delete-player" @click="deletePlayer(index)">x</text>
          </view>
          <view class="add-player-cell" @click="addPlayer">
            <text class="add-icon">+</text>
          </view>
        </view>

        <!-- 表格内容 -->
        <view class="table-row" v-for="(row, rowIndex) in scores" :key="rowIndex">
          <view class="cell round-col">
            第{{ rowIndex + 1 }}轮
          </view>
          <view class="cell" v-for="(score, colIndex) in row" :key="colIndex">
            <input type="number" v-model="score[rowIndex][colIndex]" @input="calculateTotal" />
          </view>
          <view class="cell" v-if="players.length < maxPlayers"></view>
        </view>

        <!-- 总分行 -->
        <view class="table-row total-row">
          <view class="cell round-col">总分</view>
          <view class="cell" v-for="(total, index) in totalScores" :key="index">
            {{ total }}
          </view>
          <view class="cell" v-if="players.length < maxPlayers"></view>
        </view>
      </view>
    </scroll-view>

    <!-- 添加轮次按钮 -->
    <view class="button-group">
      <button class="btn" @click="addRow">添加一行</button>
      <button class="btn" @click="addFiveRows">添加五行</button>
    </view>

    <!-- 对应规则 -->
    <view class="scoring-rules">
      <view class="rules-title">计分规则</view>
      <view class="rules-content">{{ scoringRules }}</view>
    </view>
  </view>
</template>

<script>
import { ruleData } from '@/subpkg/rules/ruleData.js'

export default {
  data() {
    return {
      players: [],
      scores: [],
      maxPlayers: 6,
      currentPlayerCount: 0, // 当前玩家数量
      scoringRules: '',
      type: '' // 游戏类型（3人、4人等）
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
    addPlayer() {
      if (this.players.length < this.maxPlayers) {
        // 添加新玩家
        const newPlayerNum = this.players.length + 1;
        this.players.push({
          id: newPlayerNum,
          name: `玩家${newPlayerNum}`
        });

        // 为每一行添加新玩家的分数列
        if (this.scores.length === 0) {
          // 如果还没有行，先添加一行
          this.scores.push(new Array(1).fill(''));
        } else {
          // 为每一行添加一个新的空分数
          this.scores.forEach(row => row.push(''));
        }
      } else {
        uni.showToast({
          title: `最多只能添加${this.maxPlayers}个玩家`,
          icon: 'none'
        });
      }
    },
    deletePlayer(index) {
      if (this.players.length > 0) {
        this.players.splice(index, 1);
        // 删除每一行对应玩家的分数
        this.scores.forEach(row => row.splice(index, 1));
      }
    },
    addRow() {
      // 添加新行时，确保有足够的列
      const newRow = new Array(this.players.length || 1).fill('');
      this.scores.push(newRow);
    },
    addFiveRows() {
      for (let i = 0; i < 5; i++) {
        this.addRow()
      }
    },
    calculateTotal() {
      // 触发重新计算总分
    }
  },
  onLoad(options) {
    this.type = options.type
    // 从规则数据中获取计分规则
    if (ruleData[this.type] && ruleData[this.type].scoring) {
      this.scoringRules = ruleData[this.type].scoring.content
    }
    // 初始化第一个玩家和第一行
    this.addPlayer();
    if (this.scores.length === 0) {
      this.addRow();
    }
  }
}
</script>

<style lang="scss">
.scoring-container {

  .table-container {
    height: 60vh;
    border: 1px solid #ddd;
    // border-radius: 10px;
    // box-sizing: border-box;

    .table {
      width: 100%;

      .table-header,
      .table-row {
        display: flex;
        border-bottom: 1px solid #ddd;

        .cell,
        .header-cell {
          flex: 1;
          // padding: 20rpx;
          text-align: center;
          border-right: 1px solid #ddd;

          input {
            width: 100%;
            text-align: center;
          }
        }

        .round-col {
          width: 150rpx;
          flex: none;
        }
      }

      .table-header {
        background-color: #f5f5f5;
        position: sticky;
        top: 0;

        .delete-player {
          margin-left: 10rpx;
          color: #ff4444;
        }

        .add-player-cell {
          width: 100rpx;
          flex: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007AFF;
        }
      }

      .total-row {
        background-color: #f8f8f8;
        font-weight: bold;
      }
    }
  }

  .button-group {
    margin: 20rpx 0;
    display: flex;
    justify-content: space-around;

    .btn {
      padding: 20rpx 40rpx;
      background-color: #007AFF;
      color: white;
      border-radius: 10rpx;
    }
  }

  .scoring-rules {
    margin-top: 20rpx;
    padding: 20rpx;
    background-color: #f5f5f5;
    border-radius: 10rpx;

    .rules-title {
      font-weight: bold;
      margin-bottom: 10rpx;
    }
  }
}
</style>