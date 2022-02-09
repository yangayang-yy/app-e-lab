<template>
  <div class="edit-dynamic-content">
    <!-- navbar -->
    <van-nav-bar class="page-nav-bar" :border="false">
      <template #left>
        <van-icon class="vanIcon" name="arrow-left" @click="$router.back()" />
      </template>
      <template #right>
        <div class="nav-bar-right">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
          <div class="word">草稿箱</div>
        </div>
      </template>
    </van-nav-bar>

    <div class="content">
      <div class="img-wrp">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div class="mask">
          <div class="edit-img">
            <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            <div class="word">编辑封面</div>
          </div>
        </div>
      </div>
      <van-button class="btn-preview" color="#29abe2">预览视频</van-button>

      <div class="input-wrp">
        <!-- <input
            ref="addCommentIpt"
            class="add-comment"
            type="text"
            placeholder="添加评论..."
            v-model="commentValue"
          /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.edit-dynamic-content {
  .page-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;

    .vanIcon {
      width: 22px;
      height: 36px;
      font-weight: 700;
      color: #353535;
    }

    .nav-bar-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 40px;
        height: 36px;
        margin: 24px 0 5px;
      }
      .word {
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
    }
  }
  .content {
    margin: 140px 30px 0 30px;

    .img-wrp {
      position: relative;
      width: 689px;
      height: 387px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      .mask {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        z-index: 1;

        .edit-img {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 42px;
            height: 42px;
            border-radius: 0;
          }
          .word {
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 28px;
            margin-top: 10px;
          }
        }
      }
    }

    /deep/.van-button--normal {
      padding: 0 !important;
    }


    .btn-preview {
      width: 150px;
      height: 60px;
      margin-top: 40px;

      /deep/.van-button__text {
        font-size: 28px !important;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
      }
    }
  }
}
</style>