<template>
  <div class="login-box">
    <!-- 表单容器 -->
    <div class="form-box">
      <!-- 标题 -->
      <div class="title-box">
        <img src="../../assets/login-logo.png" alt="">
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
    </div>
    <img class="login-pic" src="../../assets/login_banner_ele.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="less">
.login-box {
  /* 开启弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右 均分 */
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  height: 100%;
  .form-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 44px;
    box-sizing: border-box;
    // 标题
    .title-box{
      display: flex;
      align-items: center;
      img{
        // emmet语法
        // w22+h17+mr16
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title{
        font-size: 24px;
        margin-right: 14px;
      }
      i{
        width: 1px;
        height: 28px;
        background-color: #C7C7C7;
        margin-right: 12px;
      }
      .sub-title{
        font-size: 22px;
      }
    }
  }
  .login-pic {
  }
}
</style>
