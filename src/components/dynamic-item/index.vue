<template>
  <div>
    <div class="dynamic-content">
      <div class="top">
        <div class="left">
          <div class="avatar-wrp">
            <img class="avatar" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </div>
        <div class="right">
          <div class="username show-line_1">本人</div>
          <div class="update-time">7分钟前</div>
        </div>
      </div>
      <!-- 发布内容 -->
      <div class="content">
        <div class="word">发布了一个病例</div>
        <img
          class="video-img"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          alt=""
        />
      </div>

      <!-- 点赞、评论区 -->
      <div class="action-wrp">
        <img class="eye" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div class="look-num">浏览了200次</div>
        <img class="like" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <img class="comments" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div>

      <div class="like-people-wrp">
        <img class="like-people" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div class="people">小明和其他用户赞了</div>
      </div>
      <div class="comments-list-wrp">
        <div class="comment">小明：你好，老师</div>
        <div class="reply">
          林清野<span class="blue">回复</span
          >小明：你好小明：你好小明：你好小明：你好小明：你好小明：你好小明：你好
        </div>
      </div>
      <div class="add-comment-wrp">
        <van-search
          class="add-comment"
          placeholder="请输入搜索关键词"
        />
        <!-- <input class="add-comment" type="text" placeholder="添加评论"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamicItem',
  props: {
    type: all, // all:所有的动态样式   self:个人动态 样式
    dynamicList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.dynamic-content {
  box-sizing: border-box;
  margin: 0 30px;
  .top {
    display: flex;

    .avatar-wrp {
      position: relative;
      width: 88px;
      height: 88px;
      margin-right: 13px;
      border: 1px #29abe2 solid;
      border-radius: 10px;

      .avatar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        border-radius: 10px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .username {
        max-width: 500px;
        font-size: 30px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242424;
        line-height: 30px;
      }

      .update-time {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #cccccc;
        line-height: 24px;
        margin-top: 20px;
      }
    }
  }

  .content {
    margin-top: 26px;

    .word {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 30px;
      word-break: break-all;
    }

    .video-img {
      margin-top: 28px;
      width: 100%;
      height: 389px;
      box-shadow: 0px 7px 11px 0px #b0b0b0;
    }
  }

  .action-wrp {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .eye {
      width: 24px;
      height: 16px;
    }

    .look-num {
      flex: 1;
      margin-left: 20px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #cccccc;
      line-height: 24px;
    }

    .like {
      width: 40px;
      height: 38px;
    }

    .comments {
      width: 40px;
      height: 40px;
      margin-left: 44px;
    }
  }

  .like-people-wrp {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #f0f0f0;
    }

    .like-people {
      width: 23px;
      height: 21px;
    }

    .people {
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #010101;
      line-height: 22px;
      margin-left: 20px;
    }
  }

  .comments-list-wrp,
  .reply {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 28px;
    margin-top: 20px;

    .blue {
      color: #29abe2;
    }
  }

  .add-comment-wrp {
    .add-comment {
      width: 100%;
      height: 88px;
      border-radius: 20px 20px 20px 20px;
      outline: none;
      background: #f9f9f9;
    }
  }
}
</style>
