<template>
  <div>
    <div class="el-row">
      <el-row>
        <el-button type="primary">编辑添加,字段各种规则验证实例</el-button>
        <el-button type="primary">本地导出</el-button>
        <el-button type="success" class="b1">查询</el-button>
        <el-button type="warning" class="b2">重置</el-button>
      </el-row>
    </div>

    <el-table :data="arrs">
      <el-table-column prop="id" label="文章标题"> </el-table-column>

      <el-table-column prop="name" label="作者"> </el-table-column>

      <el-table-column prop="text" label="浏览量"> </el-table-column>
      <el-table-column prop="huifu" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--增加 -->
  </div>
</template>

<script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  handleDelete(a, b) {
    console.log(a, b);

    this.$confirm("您确定删除该信息吗", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        this.deleteHomeIndex(a);
      })
      .catch(() => {
        console.log("取消了");
      });
  },
  data() {
    return {
      arrs: null,
      debounceedit: null,
      debouncedelete: null,
      dialogFormVisible: false,
      form: {
        id: "0",
        name: "",
        text: "",
      },
      formLabelWidth: "120px",
      i: 0,
    };
  },
  methods: {
    handleDelete(a, b) {
      console.log(a, b);
      this.$confirm("您确定删除该信息吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteHomeIndex(a);
        })
        .catch(() => {
          console.log("取消了");
        });
    },
    async getHomeIndex() {
      let { data } = await instance.get("/homeindex");
      console.log(data);
      this.arrs = data;
    },

    async deleteHomeIndex(index) {
      let { data } = await instance.delete("/homeindex/" + index);
      console.log(data);
      this.getHomeIndex();
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>

<style scoped>
.addbtn {
  float: right;
  margin-right: 170px;
  margin-top: 30px;
}

.b1 {
  position: fixed;
  left: 88%;
}

.b2 {
  position: fixed;
  left: 93%;
}
</style>