<template>
  <view>
    <view class="container">
      <!-- 左边部分，Flex 布局 -->
      <view class="left">
        <view class="number-of-player">三人游戏</view>
        <view class="number-of-player">四人游戏</view>
        <view class="number-of-player">五人游戏</view>
        <view class="number-of-player">六人游戏</view>
      </view>
    
      <!-- 右边部分，Grid 布局 -->
      <view class="right">
        <view class="grid-item">Long Rectangle 1</view>
        <view class="grid-item">Square 2</view>
        <view class="grid-item">Square 3</view>
        <view class="grid-item">Square 4</view>
        <view class="grid-item">Square 5</view>
        <view class="grid-item">Square 6</view>
        <view class="grid-item">Square 7</view>
        <view class="grid-item">Square 8</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .container {
    display: flex;
    width: 100%;
    // height: 100vh;
    flex-direction: row;
  }

  .left {
    width: 100px;
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
  }
  
.right {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);    // 3列等宽
}

.grid-item {
  background-color: #fff;
  border: 1px solid #ddd;
  min-height: 100px;  // 设置最小高度确保格子形状
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item:first-child {
  grid-column: 1 / 3;  // 从第1列开始，到第3列结束（占2格）
}
</style>