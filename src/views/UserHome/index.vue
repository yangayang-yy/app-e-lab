<template>
  <div class="user-home-content">
    <!-- 背景 + 头像 -->
    <div class="banner-wrp">
      <img class="banner" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      <div class="user-info-wrp">
        <div class="user-info">
          <div class="top">
            <span class="user-name">刘讲明</span><span class="line">|</span
            ><span class="user-position">主治医师</span>
          </div>
          <div class="top">
            <span class="user-company">长海医院</span
            ><span class="user-research-directions">神经外科</span>
          </div>
        </div>
        <img class="user-avatar" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="like-info show-line_1">
        <div class="look">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div class="look-num">2121212</div>
        </div>
        <div class="look">
          <img src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          <div class="look-num">2121212</div>
        </div>  
      </div>
    </div>

    <div class="dynamic">
      <dynamic-item type='self'/>
      <dynamic-item type='self'/>
    </div>
  </div>
</template>

<script>
import dynamicItem from "@/components/dynamic-item";
export default {
  components:{
    "dynamic-item": dynamicItem,
  }
};
</script>

<style lang="less" scoped>
.user-home-content {
  .banner-wrp {
    position: relative;
    height: 400px;

    .banner {
      width: 100%;
      height: 100%;
    }

    .user-info-wrp {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 125px;
      right: 30px;

      .user-info {
        flex: 1;
        margin-right: 22px;

        .top {
          font-size: 30px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 30px;

          &:first-child {
            margin-bottom: 25px;
          }

          .user-name {
            font-weight: 700;
          }

          .user-company {
            margin-right: 20px;
          }

          .line {
            position: relative;
            top: -4px;
            padding: 0 15px;
          }
        }
      }

      .user-avatar {
        width: 90px;
        height: 90px;
        box-shadow: 0px 4px 10px 0px #29abe2;
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        box-sizing: border-box;
      }
    }

    .like-info {
      display: flex;
      max-width: 700px;
      position: absolute;
      bottom: 20px;
      right: 30px;

      .look {
        flex: 1;
        display: flex;
        align-items: center;

        &:nth-of-type(2){
          margin-left: 38px;
        }

        img {
          width: 28px;
          height: 20px;
          margin-right: 12px;
        }

        .look-num {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 28px;
        }
      }
    }
  }

  .dynamic {
    margin-top: 100px;

    .line {
      width: 100%;
      height: 20px;
      margin-bottom: 20px;
      background-color: #f9f9f9;
    }
  }
}
</style>