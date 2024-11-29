<template>
  <view class="rule-container">

    <view class="rule-title">
      {{ ruleTitle }}
    </view>

    <view class="rule-content">
      <block v-for="(section, index) in ruleContent" :key="index">

        <!-- title -->
        <view v-if="section.type === 'title' && section.show !== false" class="section-title">
          {{ section.content }}
        </view>

        <!-- subtitle -->
        <view v-if="section.type === 'subtitle' && section.show !== false" class="section-subtitle">
          {{ section.content }}
        </view>

        <!-- text -->
        <view v-if="section.type === 'text' && section.show !== false" class="section-text">
          <template v-for="(part, pIndex) in parseBoldText(section.content)" :key="pIndex">
            <text :class="{ 'bold': part.bold }">{{ part.text }}</text>
          </template>
        </view>

        <!-- list start with • -->
        <view v-if="section.type === 'list'" class="section-list">
          <view v-for="(item, i) in section.items" :key="i" class="list-item">
            • <template v-for="(part, pIndex) in parseBoldText(item)" :key="pIndex">
              <text :class="{ 'bold': part.bold }">{{ part.text }}</text>
            </template>
          </view>
        </view>

        <!-- 表格 -->
        <view v-if="section.type === 'table'" class="section-table">
          <!-- 表头 -->
          <view class="row header-row">
            <view v-for="(header, index) in section.headers" :key="index" class="cell" :class="{
              'cell-small': index === 0,
              'cell-medium': index === 1,
              'cell-small': index === 2,
              'cell-large': index === 3
            }">
              {{ header }}
            </view>
          </view>
          <!-- 行 -->
          <view class="row" v-for="(row, rowIndex) in section.rows" :key="rowIndex">
            <view v-for="(cell, cellIndex) in row.data" :key="cellIndex" class="cell" :class="{
              'cell-small': cellIndex === 0,
              'cell-medium': cellIndex === 1,
              'cell-small': cellIndex === 2,
              'cell-large': cellIndex === 3
            }">
              <!-- 图片格 -->
              <template v-if="cellIndex === 1 && row.type === 'normal'">
                <view class="card-groups">
                  <view v-for="(group, groupIndex) in cell" :key="groupIndex">
                    <view class="images-wrapper">
                      <image v-for="(imgSrc, imgIndex) in group.imgs" 
                             :key="imgIndex" 
                             :src="imgSrc" 
                             :style="{width: '60rpx', height: '90rpx'}" />
                    </view>
                    <text class="desc-text">{{ group.text }}</text>
                  </view>
                </view>
              </template>
              <!-- 说明格 -->
              <template v-else-if="cellIndex === 3">
                <view class="cell-list">
                  <view v-for="(item, i) in cell" :key="i" class="cell-list-item">
                    {{ item }}
                  </view>
                </view>
              </template>
              <!-- 其他格 -->
              <template v-else>
                {{ cell }}
              </template>
            </view>
          </view>
        </view>

        <!-- 图片 -->
        <view v-if="section.type === 'image'" class="section-image">
          <image :src="section.url" mode="widthFix" />
          <view class="image-caption">{{ section.caption }}</view>
        </view>

        <!-- 参考文献 -->
        <view v-if="section.type === 'reference'" class="section-reference">
          <text class="reference-text" @click="openUrl(section.content)">{{ section.content }}</text>
        </view>

      </block>

      <view class="bottom-space"></view>
    </view>

  </view>

  <!-- 添加固定定位的按钮 -->
  <view class="floating-button" @click="goToScoring">
    开始计分
  </view>

</template>

<script>
import { ruleData } from './ruleData';

export default {
  data() {
    return {
      currentRule: null,
      type: '', 
      ruleId: '',
      ruleTitle: '', 
      ruleContent: [], 
    };
  },
  onLoad(options) {
    const { type, ruleId } = options;
    if (ruleData[type] && ruleData[type][ruleId]) {
      const ruleInfo = ruleData[type][ruleId];
      this.ruleTitle = ruleInfo.title;
      this.ruleContent = ruleInfo.sections;
      this.type = type;
      this.ruleId = ruleId;
    } else {
      // 处理规则不存在的情况
      uni.showToast({
        title: '规则还没创建好',
        icon: 'none'
      });
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
    }
  },
  methods: {
    goToScoring() {
      // 跳转到计分页面并传递参数
      uni.navigateTo({
        url: `/subpkg/scoring/scoring?type=${this.type}&ruleId=${this.ruleId}`
      })
    },
    parseBoldText(text) {
      const parts = [];
      const regex = /\*\*(.*?)\*\*/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(text)) !== null) {
        // 添加普通文本
        if (match.index > lastIndex) {
          parts.push({
            text: text.substring(lastIndex, match.index),
            bold: false
          });
        }
        // 添加粗体文本
        parts.push({
          text: match[1],
          bold: true
        });
        lastIndex = regex.lastIndex;
      }
      // 添加剩余的普通文本
      if (lastIndex < text.length) {
        parts.push({
          text: text.substring(lastIndex),
          bold: false
        });
      }
      return parts;
    },
    openUrl(content) {
      const urlMatch = content.match(/https?:\/\/[^\s]+/);
      if (urlMatch) {
        uni.setClipboardData({
          data: urlMatch[0],
          success: () => {
            uni.showToast({
              title: '链接已复制',
              icon: 'none'
            });
          }
        });
      }
    }
  }
}
</script>

<style lang="scss">
.rule-container {
  padding: 40rpx;
  padding-bottom: 140rpx;
  min-height: 100vh;
  box-sizing: border-box;

  .rule-title {
    font-size: 40rpx;
    font-weight: bold;
    text-align: center;
  }

  .rule-content {
    padding: 20rpx;
  }
}

// 通用样式
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

%text-wrap {
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
}

// 各部分样式
.section {
  &-title {
    font-size: 36rpx;
    font-weight: bold;
    margin: 20rpx 0 20rpx;
    padding-left: 20rpx;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6rpx;
      height: 80%;
      background-color: #07c160;
      border-radius: 6rpx;
    }
  }

  &-subtitle {
    font-size: 32rpx;
    font-weight: bold;
    margin: 20rpx 0 20rpx;
  }

  &-text {
    font-size: 28rpx;
    margin: 20rpx 0;
    line-height: 1.6;

    .bold {
      font-weight: bold;
      font-size: inherit;
    }
  }

  &-list {
    margin: 20rpx 0;

    .list-item {
      padding: 10rpx 0 10rpx 20rpx;
      font-size: 28rpx;
    }
    
    .bold {
      font-weight: bold;
      font-size: inherit;
    }
  }

  &-table {
    margin: 20rpx 0;
    border: 2rpx solid #ddd;
  }

  &-image {
    margin: 20rpx 0;
    text-align: center;

    image {
      max-width: 100%;
    }

    .image-caption {
      color: #666;
      font-size: 28rpx;
      margin-top: 10rpx;
    }
  }
}

// 表格相关样式
.row {
  display: flex;
  border-bottom: 2rpx solid #ddd;
  align-items: stretch;

  &.header-row {
    background-color: #f5f5f5;
    font-weight: bold;
  }
}

.cell {
  @extend %text-wrap;
  min-height: 120rpx;
  display: flex;
  align-items: flex-start;
  padding: 10rpx;
  text-align: center;
  border-right: 2rpx solid #ddd;
  flex-shrink: 0;
  font-size: 28rpx;

  &-small {
    flex: 1;
    width: 0;
  }

  &-medium {
    flex: 2;
    width: 0;
  }

  &-large {
    flex: 4;
    width: 0;
    text-align: left;
    padding: 20rpx;
  }
}

// 卡片组样式
.card {
  &-container {
    @extend %flex-center;
    width: 100%;
    height: 100%;
  }

  &-images {
    @extend %flex-center;
    gap: 5rpx;
  }

  &-image {
    width: 60rpx;
    height: 90rpx;
    object-fit: contain;
  }

  &-groups {
    width: 100%;
    
    view {
      margin-bottom: 10rpx;
      
      &:last-child {
        margin-bottom: 0;
      }
    }

    .images-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      
      image {
        flex-shrink: 0;
        display: block;
      }
    }

    .desc-text {
      @extend %text-wrap;
      display: block;
      font-size: 24rpx;
      color: #666;
      line-height: 1.2;
      margin-top: 2rpx;
      text-align: left;
    }
  }
}

// 单元格列表样式
.cell-list {
  width: 100%;
  text-align: left;
  
  &-item {
    @extend %text-wrap;
    padding: 4rpx 0;
    line-height: 1.5;
    font-size: 28rpx;
  }
}

// 参考文献样式
.section-reference {
  margin: 30rpx 0;
  padding: 20rpx;
  border-top: 2rpx solid #eee;
  
  .reference-text {
    font-size: 24rpx;
    color: #666;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    text-decoration: underline;
    
    &:active {
      opacity: 0.7;
    }
  }
}

// 浮动按钮样式
.floating-button {
  position: fixed;
  bottom: 40rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background-color: #007AFF;
  color: #fff;
  border-radius: 40rpx;
  font-size: 32rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.2);
  z-index: 999;

  &:active {
    opacity: 0.8;
  }
}

// 底部间距
.bottom-space {
  height: 160rpx;
  width: 100%;
}
</style>