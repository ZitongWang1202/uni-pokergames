<template>

  <view>
    <!-- 添加滚动标语 -->
    <view class="notice-bar">
      <view class="notice-content">
        <text>提倡文明娱乐，禁止赌博活动</text>
        <text class="spacer">　　　　</text>
        <text>提倡文明娱乐，禁止赌博活动</text>
      </view>
    </view>

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
          @click="navigateToScoring(item)">
          {{ item.name }}
        </view>
      </view>
    </view>

    <!-- 添加悬浮按钮 -->
    <view class="floating-circle-button" @click="navigateToEmptyScoring">
      <text>空白\n模板</text>
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
    navigateToScoring(item) {
      uni.navigateTo({
        url: `/subpkg/scoring/scoring?type=${item.type}&ruleId=${item.ruleId}`
      });
    },
    navigateToEmptyScoring() {
      uni.navigateTo({
        url: `/subpkg/scoring/scoring?type=&ruleId=`
      });
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  width: 100%;
  height: calc(100vh - 60rpx);
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

// 悬浮按钮样式
.floating-circle-button {
  position: fixed;
  right: 40rpx;
  bottom: 140rpx;
  width: 160rpx;
  height: 160rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4CAF50;
  color: #fff;
  border-radius: 50%;  // 保持圆形
  font-size: 32rpx;  // 与页面右侧文字大小一致
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.2);
  z-index: 999;
  
  text {
    text-align: center;
    line-height: 1.2;  // 调整行高
    white-space: pre-wrap;  // 保持换行符
  }

  &:active {
    opacity: 0.8;
  }
}

// 添加滚动标语样式
.notice-bar {
  width: 100%;
  height: 60rpx;
  background-color: #FFF7E6;
  overflow: hidden;
  position: relative;
  
  .notice-content {
    position: absolute;
    white-space: nowrap;
    animation: scrollText 20s linear infinite;
    color: #FA541C;
    line-height: 60rpx;
    font-size: 28rpx;
    
    .spacer {
      display: inline-block;
    }
  }
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
