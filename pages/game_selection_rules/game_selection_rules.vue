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
    height: 100vh;
    flex-direction: row;
  }

  .left {
    width: 100px;
    flex-shrink: 0;  // 防止左侧被压缩
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
    grid-template-rows: 100px 100px 100px;
    box-sizing: border-box;
}

.grid-item {
  line-height: 100px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


// 第一个格子占据两列且高度是宽度的一半
.grid-item:first-child {
  grid-column: span 2;
}

</style>