<template>
  <!-- 新增对话框 -->
  <el-dialog class="add-dialog" center title="新增学科" :visible.sync="$parent.addFormVisible">
    <el-form :model="addForm">
      <el-form-item label="学科编号" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科名称" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简称" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科简介" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学科备注" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$parent.addFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="$parent.addFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      addForm: {},
      // 宽度
      formLabelWidth: "80px"
    };
  }
};
</script>

<style lang="less">
.add-dialog {
  // 设置宽度
  .el-dialog {
    width: 602px;
  }
  // 对话框
  .el-dialog__header {
    background: linear-gradient(to right, #01c4fa, #1394fa);
    // 文字
    span {
      color: white;
    }
    i {
      color: white;
    }
  }
}
</style>
