<template>
  <view class="text">
    如果您有希望分享的游戏规则，请发送邮件至：
    <text @tap="sendEmail">1234567890@qq.com</text>
  </view>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      // 使用uni.showActionSheet让用户选择是否发送邮件
      uni.showActionSheet({
        itemList: ['发送邮件'],
        success: () => {
          // 打开系统默认邮件客户端
          window.location.href = 'mailto:1234567890@qq.com'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.text {
  margin: 20rpx 20rpx;
  line-height: 1.6;
  text {
    color: #007AFF;  // 添加链接样式的蓝色
    text-decoration: underline;  // 添加下划线
  }
}
</style>
