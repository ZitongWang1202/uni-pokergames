<template>

  <view>
    <view class="container">
      <!-- 左边部分，Flex 布局 -->
      <view class="left">
        <view v-for="(item, index) in playerOptions" :key="index"
          :class="['number-of-player', { active: currentIndex === index }]" 
          @click="switchPlayer(index)"
          >
          {{ item.text }}
        </view>
      </view>

      <!-- 右边部分，Grid 布局 -->
      <view class="right">
        <view v-for="(item, index) in currentGridItems" :key="index"
          :class="['grid-item', { 'span-two': index === 0 }]"
          @click="navigateToRules(item)">
          {{ item.name }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      playerOptions: [
        {
          text: '三人游戏',
          gridItems: [
            { name: '斗地主', type: '3', ruleId: 'rule1' },
            { name: '干瞪眼', type: '3', ruleId: 'rule2' },
            { name: '三人掼蛋', type: '3', ruleId: 'rule3' }
          ]
        },
        {
          text: '四人游戏',
          gridItems: [
            { name: '掼蛋', type: '4', ruleId: 'rule4' },
            { name: '升级', type: '4', ruleId: 'rule5' },
            { name: '四人斗地主', type: '4', ruleId: 'rule6' },
            { name: '山东升级', type: '4', ruleId: 'rule7' }
          ]
        },
        {
          text: '五人游戏',
          gridItems: [
            { name: '保皇', type: '5', ruleId: 'rule8' },
          ]
        },
        {
          text: '六人游戏',
          gridItems: [
            { name: '够级', type: '6', ruleId: 'rule9' },
            { name: '兰里拖拉机', type: '6', ruleId: 'rule10' },
          ]
        }
      ]
    };
  },
  computed: {
    currentGridItems() {
      return this.playerOptions[this.currentIndex].gridItems;
    }
  },
  methods: {
    switchPlayer(index) {
      this.currentIndex = index;
    },
    navigateToRules(item) {
      uni.navigateTo({
        url: `/subpkg/rules/rules?type=${item.type}&ruleId=${item.ruleId}`
      });
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
}

.left {
  width: 100px;
  flex-shrink: 0; // 防止左侧被压缩
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}

.number-of-player {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;

  &.active {
    background-color: #e0e0e0; // 选中状态的背景色
    font-weight: bold;
  }
}

.right {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3列等宽
  grid-template-rows: 100px 100px 100px;
  box-sizing: border-box;
}

.grid-item {
  line-height: 100px;
  text-align: center;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

  &.span-two {
    grid-column: span 2;
  }
}
</style>
