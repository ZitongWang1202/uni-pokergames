<template>
  <view>
    <view class="rule-container">
      <view class="rule-title">{{ ruleTitle }}</view>
      <view class="rule-content">{{ ruleContent }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        ruleTitle: '',
        ruleContent: '',
        ruleData: {
          '3': {
            'main': {
              title: '三人游戏规则说明',
              content: '这里是三人游戏的主要规则说明...'
            },
            'rule1': {
              title: '三人玩法1',
              content: '这里是三人玩法1的具体规则...'
            },
            // ... 其他规则
          },
          '4': {
            // 四人规则
          },
          // ... 其他人数的规则
        }
      };
    },
    onLoad(options) {
        const { type, ruleId } = options;
        const ruleInfo = this.ruleData[type][ruleId];
        this.ruleTitle = ruleInfo.title;
        this.ruleContent = ruleInfo.content;
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