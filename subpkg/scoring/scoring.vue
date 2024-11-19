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
              <text @click="startEdit(index)">{{ player.name }}</text>
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

    <!-- 计数器 -->
    <view class="cell counter-container" v-if="scoringRules.counters">
      <view v-for="(counter, idx) in scoringRules.counters" :key="idx" class="counter-item"
        :class="{ 'even-row': idx % 2 === 0 }">
        <text class="counter-name">{{ counter.name }}</text>
        <!-- 布尔类型计数器 -->
        <view v-if="counter.type === 'boolean'" class="boolean-counter" :class="{ active: counterValues[idx] }"
          @tap="toggleCounter(idx)">
          {{ counterValues[idx] ? '是' : '否' }}
        </view>
        <!-- 数值类型计数器 -->
        <view v-else class="number-counter">
          <text class="counter-btn" @tap="updateCounter(idx, -1)">-</text>
          <text class="counter-value">{{ counterValues[idx] }}</text>
          <text class="counter-btn" @tap="updateCounter(idx, 1)">+</text>
        </view>
      </view>
    </view>


    <!-- 在计数器后添加规则说明部分 -->
    <view class="rules-section" v-if="scoringRules.sections">
      <view v-for="(section, index) in scoringSections" :key="index" class="rule-item">
        <view v-if="section.type === 'title'" class="rule-title">{{ section.content }}</view>
        <view v-else-if="section.type === 'text'" class="rule-content">{{ section.content }}</view>
      </view>
    </view>

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
      scoringRules: '',
      editingIndex: -1,
      counterValues: [],
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
      for (let i = 0; i < this.type; i++) {
        this.addPlayer();
      }
      this.initCounters();
      this.scoringSections = this.scoringRules.sections?.filter(section => section.isScoring) || [];
    },

    initCounters() {
      this.counterValues = this.scoringRules.counters.map(counter =>
        counter.type === 'boolean' ? false : 0
      );
    },

    toggleCounter(index) {
      this.$set(this.counterValues, index, !this.counterValues[index]);
    },

    updateCounter(index, delta) {
      const newValue = Math.max(0, (this.counterValues[index] || 0) + delta);
      this.$set(this.counterValues, index, newValue);
    },
  },

  onLoad(options) {
    this.type = options.type
    this.ruleId = options.ruleId;
    if (ruleData[this.type] && ruleData[this.type].scoring) {
      this.scoringRules = ruleData[this.type].scoring.content
    }
    this.initData();
  }
}
</script>

<style lang="scss">
.scoring-container {
  padding: 20rpx;

  .table {
    width: 100%;
    height: calc(100vh - 200rpx); // 留出底部按钮的空间
    border: 1px solid #ddd;
    overflow: auto;

    .table-header,
    .table-row {
      display: flex;
      border-bottom: 1px solid #ddd;
      // 解决scroll-view中向右滚动border渲染不全的问题
      min-width: 100%;
      width: fit-content;


      .cell,
      .header-cell {
        flex: 1;
        padding: 20rpx;
        text-align: center;
        border-right: 1px solid #ddd;
        min-width: 120rpx; // 每列的最小宽度

        input {
          width: 100%;
          text-align: center;
        }
      }

      .header-cell {
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

      // 第一列固定宽度，不参与flex布局
      .round-col {
        width: 150rpx;
        flex: none;
      }
    }

    .table-header {
      background-color: #f5f5f5;
      position: sticky;
      top: 0;
      z-index: 1;

      .delete-player {
        color: #ff4444;
        position: absolute;
        right: 10rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .total-row {
      background-color: #f8f8f8;
      font-weight: bold;
    }
  }
}

.button-group {
  padding: 20rpx 0;
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

.counter-row {
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
  
  .counter-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10rpx;
    
    .counter-item {
      width: 50%;
      display: flex;
      align-items: center;
      padding: 10rpx;
      box-sizing: border-box;
      
      &.even-row {
        border-right: 1px solid #eee;
      }
      
      .counter-name {
        flex: 1;
        padding-right: 10rpx;
      }
      
      .boolean-counter {
        width: 80rpx;
        height: 50rpx;
        line-height: 50rpx;
        text-align: center;
        background-color: #ddd;
        border-radius: 25rpx;
        
        &.active {
          background-color: #007AFF;
          color: white;
        }
      }
      
      .number-counter {
        display: flex;
        align-items: center;
        
        .counter-btn {
          width: 50rpx;
          height: 50rpx;
          line-height: 50rpx;
          text-align: center;
          background-color: #007AFF;
          color: white;
          border-radius: 25rpx;
        }
        
        .counter-value {
          width: 60rpx;
          text-align: center;
        }
      }
    }
  }
}
</style>