<template>
  <view>
    <view class="scroll-view-container">
      <!-- 左侧的滚动视图区域，之后改成固定也可以 -->
      <scroll-view class="left-scroll-view" scroll-y="true" >
        <view class="number-of-player">三人游戏</view>
        <view class="number-of-player">四人游戏</view>
        <view class="number-of-player">五人游戏</view>
        <view class="number-of-player">六人游戏</view>
      </scroll-view>
      <!-- 右侧flex布局，下面的代码目前只用于占位 -->
      <view class="right-img-box">
          <view class="right-img-item" v-for="(item2, i2) in item.product_list" :key="i2" v-if="i2 !== 0">
            <image :src="item2.image_src" mode="widthFix" :style="{width: item2.image_width + 'rpx'}"></image>
          </view>
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

</style>
