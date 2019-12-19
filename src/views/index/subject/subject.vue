<template>
  <div class="subject-container">
    <!-- 头部卡片 -->
    <el-card class="head-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学科编号">
          <el-input class="short-input" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input class="short-input" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="请选择状态">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btn-form-item">
          <el-button type="primary">搜索</el-button>
          <el-button>清除</el-button>
          <el-button @click="addFormVisible = true" type="primary" icon="el-icon-plus">新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 身体卡片 -->
    <el-card class="body-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </el-card>
    <!-- 新增框 -->
    <addDialog></addDialog>
  </div>
</template>

<script>
// 导入组件
import addDialog from './components/addDialog.vue'
export default {
  name: "subject",
  // 注册组件
  components:{
    addDialog
  },
  data() {
    return {
      // 顶部的 行内表单
      formInline: {},
      // table的数据
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      // 新增对话框的数据
      // 是否显示
      addFormVisible: false,

    };
  }
};
</script>

<style lang="less">
.subject-container {
  .head-card {
    // 设置按钮的容器尺寸
    .el-form-item__content {
      width: 149px;
    }
    .short-input .el-form-item__content {
      width: 100px;
    }
    .btn-form-item .el-form-item__content {
      width: 100%;
    }
  }

  // 分页
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .body-card {
    margin-top: 19px;
  }

}
</style>
