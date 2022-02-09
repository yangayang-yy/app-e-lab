<template>
  <dev class="friends-circle-content">
    <!-- 背景 + 头像 -->
    <div class="banner-wrp">
      <div class="title">医生圈</div>
      <img class="banner" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      <div class="avatar-wrp">
        <img class="avatar" src="https://img01.yzcdn.cn/vant/cat.jpeg">
      </div>
    </div>

    <!-- 动态 -->
    <div class="dynamic">
      <dynamic-item />
    </div>
  </dev>
</template>

<script>
import dynamicItem from '@/components/dynamic-item'

export default {
  name: 'friends',
  components: {
    'dynamic-item': dynamicItem
  }
}
</script>

<style lang="less" scoped>
.friends-circle-content {
  .banner-wrp {
    position: relative;
    height: 400px;

    .banner {
      width: 100%;
      height: 100%;
    }

    .title {
      position: absolute;
      z-index: 1;
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 34px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 34px;
    }

    .avatar-wrp {
      position: absolute;
      bottom: 0;
      right: 30px;
      width: 100px;
      height: 100px;
      transform: translateY(50%);
      border: 1px #29abe2 solid;
      border-radius: 10px;

      .avatar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90px;
        height: 90px;
        border-radius: 10px;
      }
    }
  }

  .dynamic {
    margin-top: 60px;
  }
}
</style>
