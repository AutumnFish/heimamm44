<template>
<!-- 布局容器 -->
  <el-container class="index-container">
    <el-header class="my-header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="my-aside">Aside</el-aside>
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less">
.index-container{
  height: 100%;
  .my-header{
    background-color: skyblue;
  }
  .my-aside{
    background-color: green;
  }
  .my-main{
    background-color: purple;
  }
}
</style>
