<template>
  <div class="ebs-case-clip-content">
    <!-- 顶部导航 -->
    <van-nav-bar
      class="page-nav-bar"
      title="E-BS病例夹"
      :border="false"
      @click-right="openPhoto"
      right-text="从相册选择"
    >
      <template #left>
        <van-icon class="vanIcon" name="cross" @click="$router.back()" />
      </template>
    </van-nav-bar>
    <!-- 病例视频列表 --> 
    <div class="caseList">
      <div class="case-item" v-for="(item, i) in caseList" :key="i">
        <div class="left">
          <img class="case-img" :src="item.imgSrc" />
        </div>
        <div class="right">
          <div class="case-title show-line_3">{{ item.title }}</div>
          <div class="update-time">{{ item.updateTime }}</div>
        </div>
      </div>
    </div>
    <input type="file" hidden ref="fileRef" accept="video/*" @change="fileChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseList: [
        {
          title: "手术精彩部分1",
          updateTime: "2022/01/29",
          imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          title: "手术精彩部分2",
          updateTime: "2022/01/29",
          imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          title: "手术精彩部分3",
          updateTime: "2022/01/29",
          imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          title: "手术精彩部分3",
          updateTime: "2022/01/29",
          imgSrc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
      ],
      video:null,
    };
  },
  methods: {
    // 打开相册
    openPhoto() {
      this.$refs.fileRef.click()
    },
    // 获取文件信息
    fileChange() {
      // 获取文件对象
      const file = this.$refs.fileRef.files[0];
      //   获取blob文件
      this.video = window.URL.createObjectURL(file);
        console.log(this.video);
      this.$refs.fileRef.value = ""; //可以重复上传同一张
      // todo:打开编辑
    }
  },
};
</script>

<style lang="less" scoped>
.ebs-case-clip-content {
  /deep/.page-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    background-color: #1e1e1e;

    .van-nav-bar__title {
      font-size: 34px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #29abe2;
      line-height: 34px;
    }
    .van-nav-bar__text {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
    }
    .vanIcon {
      width: 27px;
      height: 27px;
      color: #fff;
    }
  }

  .caseList {
    padding: 88px 0 40px 0;
  }

  .case-item {
    position: relative;
    display: flex;
    margin: 40px 30px 0 30px;

    .left {
      margin-right: 30px;
      width: 320px;
      height: 180px;
      box-sizing: border-box;

      .case-img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 30px;
      box-sizing: border-box;

      .update-time {
        position: absolute;
        bottom: 0;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
        line-height: 24px;
      }
    }
  }
}
</style>

<style lang="less">
html,
body {
  background-color: #1e1e1e !important;
}
</style>