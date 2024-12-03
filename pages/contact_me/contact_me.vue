<template>
  <view class="container">
    <view class="text">
      如果您有希望分享添加的扑克游戏规则，请发送邮件至：
      <text @tap="sendEmail">zitongw961202@gmail.com</text>
    </view>

    <view class="donate-section">

      <image 
        class="donate-qr" 
        src="/static/TipCode.png"
        mode="widthFix"
        @tap="previewQR"
      />
      <view class="donate-tip">点击二维码可放大查看</view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      uni.showActionSheet({
        itemList: ['发送邮件'],
        success: () => {
          window.location.href = 'mailto:zitongw961202@gmail.com'
        }
      })
    },
    
    previewQR() {
      uni.previewImage({
        urls: ['/static/TipCode.png']
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20rpx;
}

.text {
  margin: 20rpx 20rpx;
  line-height: 1.6;
  text {
    color: #007AFF;
    text-decoration: underline;
  }
}

.donate-section {
  margin-top: 100rpx;
  text-align: center;
  
  .donate-title {
    font-size: 32rpx;
    color: #333;
    margin-bottom: 30rpx;
  }
  
  .donate-qr {
    width: 400rpx;
    height: auto;
    margin: 0 auto;
    border-radius: 20rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
  }
  
  .donate-tip {
    font-size: 24rpx;
    color: #999;
    margin-top: 20rpx;
  }
}
</style>
