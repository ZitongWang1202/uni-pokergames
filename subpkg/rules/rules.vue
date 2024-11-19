<template>
  <view class="rule-container">

    <view class="rule-title">
      {{ ruleTitle }}
    </view>

    <view class="rule-content">
      <block v-for="(section, index) in ruleContent" :key="index">

        <!-- title -->
        <view v-if="section.type === 'title'" class="section-title">
          {{ section.content }}
        </view>

        <!-- text -->
        <view v-if="section.type === 'text'" class="section-text">
          {{ section.content }}
        </view>

        <!-- list start with • -->
        <view v-if="section.type === 'list'" class="section-list">
          <view v-for="(item, i) in section.items" :key="i" class="list-item">
            • {{ item }}
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
    }
  }
}
</script>

<style lang="scss">
.rule-container {
  padding: 20px;
  padding-bottom: 140rpx; // 为底部按钮留出空间
  min-height: 100vh; // 确保容器至少占满整个视口高度
  box-sizing: border-box; // 确保padding不会增加总高度

  .rule-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
}

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


.row {
  display: flex;
  border-bottom: 1rpx solid #ddd;
  align-items: stretch;
}

.header-row {
  background-color: #f5f5f5; // 表头背景色
  font-weight: bold;
}

.cell {
  min-height: 120rpx;
  display: flex;
  align-items: flex-start;
  padding: 10rpx;
  text-align: center;
  border-right: 1rpx solid #ddd;
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
  flex-shrink: 0;

  &.cell-small {
    flex: 1;
    width: 0;
  }

  &.cell-medium {
    flex: 2;
    width: 0;
  }

  &.cell-large {
    flex: 4;
    width: 0;
  }
}

.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rpx;
}

.card-image {
  width: 60rpx;
  height: 90rpx;
  object-fit: contain;
}

.rule-container {
  padding: 20px;

  .rule-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  .rule-content {
    padding: 20rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: bold;
      margin: 30rpx 0 20rpx;
    }

    .section-text {
      margin: 20rpx 0;
      line-height: 1.6;
    }

    .section-list {
      margin: 20rpx 0;

      .list-item {
        padding: 10rpx 0;
        padding-left: 20rpx;
      }
    }

    .section-table {
      margin: 20rpx 0;
      border: 1px solid #ddd;

      .table-header {
        display: flex;
        background-color: #f5f5f5;
        font-weight: bold;
      }

      .table-row {
        display: flex;
        border-top: 1px solid #ddd;
      }

      .table-cell {
        flex: 1;
        min-height: 120rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-right: 1rpx solid #ddd;
        padding: 10rpx;

        &:last-child {
          border-right: none;
        }
      }

      .cell-small {
        flex: 1; // 1份宽度
      }

      .cell-medium {
        flex: 2; // 2份宽度
      }

      .cell-large {
        flex: 4; // 4份宽度
        text-align: left; // 文字左对齐
        padding: 20rpx; // 增加内边距
      }
    }

    .section-image {
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
}

.bottom-space {
  height: 120rpx;
  width: 100%;
}

.cell-list {
  width: 100%;
  text-align: left;
  
  .cell-list-item {
    padding: 4rpx 0;
    line-height: 1.5;
    white-space: normal;
    word-break: break-all;
  }
}

.card-groups {
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
    display: block;
    font-size: 24rpx;
    color: #666;
    line-height: 1.2;
    margin-top: 2rpx;
    text-align: left;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }
}
</style>