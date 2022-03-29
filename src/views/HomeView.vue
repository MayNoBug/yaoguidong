<template>
  <div class="home">
    
    <el-container>
      <el-aside
        style="background-color: rgb(50, 64, 87)"
        class="aside"
        width="250px"
      >
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#ffffff"
          :router="true"
        >
          <!--  -->
           
            <div class="houtai">
            <span>ElementUi管理后台</span>
            </div>
         
          <el-menu-item class="item" index="2-1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!--二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/"><i class="el-icon-remove-outline"></i>文章列表</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-remove-outline"></i>多层级路由列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

         
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px" class="header">
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item> <i class="el-icon-menu"></i></el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>

          <!-- 

            下拉
          -->
          <div>
            <el-dropdown>
              <p ></p>
              <p style="color:#fff;">Admin</p>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <!--二级路由出口组件 -->

          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  mounted() {},
};
</script>

<style scoped>
.aside {
  height: 100vh;
}

.item {
  background-color: rgb(50, 64, 87);
  color: #fff;
}

.item span {
  color: #fff;
}

/* .el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
} */

.el-aside {
  color: #333;
}

.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0079d9;
}
.houtai{
  background:blue;
  width:249px;
  height:56px;
  text-align:center;
}

.houtai span{
  display:inline-block;
  padding-top:10px;
  color:#fff;
}
</style>
