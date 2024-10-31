<template>
  <view>
    <view class="rule-container">
      <view class="rule-title">{{ ruleTitle }}</view>
      <view class="rule-content">{{ ruleContent }}</view>
    </view>
  </view>
</template>

<script>
import { ruleData } from './ruleData';

export default {
  data() {
    return {
      ruleTitle: '',
      ruleContent: '',
    };
  },
  onLoad(options) {
    const { type, ruleId } = options;
    if (ruleData[type] && ruleData[type][ruleId]) {
      const ruleInfo = ruleData[type][ruleId];
      this.ruleTitle = ruleInfo.title;
      this.ruleContent = ruleInfo.content;
    } else {
      // 处理规则不存在的情况
      uni.showToast({
        title: '规则不存在',
        icon: 'none'
      });
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
    }
  }
}
</script>

<style lang="scss">
.rule-container {
  padding: 20px;

  .rule-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .rule-content {
    font-size: 14px;
    line-height: 1.6;
  }
}
</style>