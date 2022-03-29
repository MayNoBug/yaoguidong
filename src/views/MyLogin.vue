<template>
  <div class="app">
    <h3 class="h3">Login From</h3>
    <el-form :model="ruleForm" :rules="rules" class="user">
      <el-form-item prop="validateUser">
        <el-input
          type="text"
          v-model="ruleForm.user"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="validatePass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          placeholder="密码"
        ></el-input>
      </el-form-item> 

      <el-form-item>
        <el-button type="primary" class="button" @click="submitfn"
          >Login</el-button
        >
      </el-form-item>

      <ul class="any">
        <li>usemname:admin</li>
        <li>password:any</li>
      </ul>
    </el-form>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  data() {
    let validateUser = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return; //格式对 不处理
      return callback(new Error("用户格式不对"));
    };

    let validatePass = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return; //格式对 不处理
      return callback(new Error("密码格式不对"));
    };
    return {
      ruleForm: {
        user: "admin",
        pass: "123456",
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitfn() {
      this.loginfn();
    },
    async loginfn() {
      let user = this.ruleForm.user;
      let pass = this.ruleForm.pass;
      let { data } = await instance.post("/login", { user, pass });
      console.log(data);
      console.log(data.data.token);
      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 1000,
          onClose: () => {
            this.$router.push({ name: "yao" });
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.app {
  background-color: #2d3a4b;
  width: 100vw;
  height: 100vh;
}

.user {
  width: 300px;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

input{
  background: 'rgba(255,255,255,0.5)'
 
}

.button {
  display: inline-block;
  width: 300px;
}

.h3 {
  margin: 0 auto;
  position: fixed;
  top:230px;
  left: 46%;
  color: #fff;
}

.any{
  display:flex;
}

.any li{
  font-size:12px;
  color:#fff;
  flex:1;
}
</style>