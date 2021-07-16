<template>
  <div style="height:850px" class="flex justify-center bg-fff">
    <div class="card bg-fff" style="width: 410px;padding: 50px 0px 135px;">
      <div class="t-center color-666" style="font-weight: 600;font-size: 20px;">免费注册账号</div>
      <Form :model="registForm" ref="form" :rules="ruleInline">
        <div class="pl-10 pr-10">
          <FormItem class="mt-40 mb-30" prop="userName">
            <Input
              style="width: 100%;"
              size="large"
              v-model="registForm.userName"
              class
              placeholder="用户名"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="password">
            <Input
              style="width: 100%;"
              size="large"
              type="password"
              v-model="registForm.password"
              class
              placeholder="密码"
              @keydown.enter="submit"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="password2">
            <Input
              style="width: 100%;"
              size="large"
              type="password"
              v-model="registForm.password2"
              class
              placeholder="确认密码"
              @keydown.enter="submit"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="email">
            <Input
              style="width: 100%;"
              size="large"
              type="email"
              v-model="registForm.email"
              class
              placeholder="邮箱"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="phone">
            <Input
              style="width: 100%;"
              size="large"
              type="tel"
              v-model="registForm.phone"
              :maxlength="11"
              placeholder="手机号"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="verifyCode">
            <Input style="width: 75%;" size="large" type="text" class="aaaa"
              v-model="registForm.verifyCode" :maxlength="4"  placeholder="短信验证码" />   
            <Button
              size="large"
              style="width: 25%;height:44px"
              @click="send"
              ref="sendCode"
              class="lh-28"
              v-if="sendCodeLoading"
            >
            获取验证码
            </Button>
            <Button
              v-else
              size="large"
              style="width: 25%;height:44px"
              disabled
              class="lh-28"
            >
            {{miao}}S
            </Button>
          </FormItem>
        </div>
        <div class="color-666 f-size-12 ml-10 mb-10">
          <Checkbox v-model="single">
            <span class="pl-2">阅读并同意</span>
          </Checkbox>
          <span class="cup color-blue">《用户服务条款》</span>
          <span>和</span>
          <span class="cup color-blue">《用户隐私协议》</span>
        </div>
        <div class="pl-10 pr-10">
          <Button
            type="primary"
            long
            size="large"
            class="lh-30"
            @click="submit"
            :loading="loading"
          >注册</Button>
        </div>
        <div style="font-size: 12px;" class="cup mt-16 flex justify-end pr-10">
          <span class="color-666">已有账号,</span>
          <span class="color-blue" @click="$router.push({name: 'login'})">&nbsp; 直接登录</span>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
const SM4 = require("gm-crypt").sm4;
import { register, verifyCode, resetPassword } from "@/api/user";
import { validateEMail, validateTel, SendCode } from "@/libs/util";
import { cloneDeep } from "lodash";
export default {
  data() {
    //校验密码
    const validatePwd = (rule, value, callback) => {
      console.log(value);
      if (value !== this.registForm.password) {
        callback(new Error("两次密码输入不一致"));
        return;
      }
      callback();
    };
    // 验证码只能是数字
    const validateName1 = (rule, value, callback) => {
      console.log(value);
      if (!/^\+?[0-9][0-9]*$/g.test(value)) {
        callback("只能输入数字");//中文
      } else {
        callback();
      }
    };

    return {
      loading: false,
      single: false,
      miao:60,
      setTimer:null,//计时器
      sendCodeLoading: true,//倒计时
      sendCode: {},
      registForm: {
        userName: "",
        password: "",
        password2: "",
        email: "",
        phone: "",
        verifyCode: "",
      },
      ruleInline: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: validatePwd, trigger: "blur", },
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: validateEMail,trigger: "blur", },
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateTel, trigger: "blur" },],

        // verifyCode: [ { required: true, message: "请输入验证码", trigger: "blur" }, ],

        //测试 
        verifyCode: [ { required: true, message: "请输入验证码", trigger: "blur" },
       { validator: validateName1, trigger: "blur", },
       ],

      },
    };
  },
  mounted() {
    this.sendCode = new SendCode(this.$refs.sendCode.$el);
  },
  methods: {
    /**
     * 发送验证码
     */
    async send() {
      if (this.sendCode.lock) {
        return;
      }
      let phone = this.registForm.phone;
      if (!phone || phone.length !== 11) {
        this.$Message.warning("请输入正确的手机号码");
        return;
      }
      this.sendCodeLoading = false;
      this.setTimer= setInterval(() => {
        this.miao--;
        if (this.miao==0) {//60s自动清除定时器
          this.clearReply()
        }
      }, 1000);
      await verifyCode({ phone},"register")
        .then((d) => {
          this.$Message.success("验证码发送成功！");
          this.registForm.verifyCode = "";
          this.sendCode.start();
        }).catch(err => {
          this.clearReply()//验证码发送失败清除定时器
          this.$Message.error(err.msg)
        });
    },
    submit() {
      if (!this.single) {
        this.$Message.info("请选择阅读");
        return;
      }
      this.$refs["form"].validate(async (valid) => {
        if (!valid) return;
        let obj = cloneDeep(this.registForm);
        delete obj.password2;
        this.loading = true;
        obj.password=this.gmcryptSm4(obj.password)
        await register(obj)
          .then( d => {
            this.clearReply()//注册成功清除定时器
            this.$Message.success("注册成功");
            this.$router.push({ name: "login" });
          }).catch(err => {
            this.clearReply()//注册失败清除定时器
            this.$Message.error(err.msg)
          });
        this.loading = false;
      });
    },
    clearReply(){
      this.sendCodeLoading = true//打开获取验证码
      clearInterval(this.setTimer)//清除上一个定时器
      this.miao=60 //计时重置
    },

    /*
      M4加密
    */
    gmcryptSm4(password) {
      let sm4Config = {
        key: "gph2i2xxfln0w9sj",
        // mode: "cbc",
        iv: "8r13qykaklic5su7",
        // cipherType: "base64",
      };
      let sm4 = new SM4(sm4Config);
      let newPassword = password.trim();
      let text = sm4.encrypt(newPassword);
      // console.log(sm4.decrypt(text), "解密字符串");
      return sm4.encrypt(newPassword);
    },
  },
};
</script>
<style lang="scss">
.page {
  overflow: hidden;
  .ivu-input {
    border-radius: 1px;
    background-color: #fff;
  }
  .ivu-btn {
    border-radius: 1px;
    justify-content: end;
  }
  .ivu-input-large {
    padding: 15px 16px;
    height: 44px;
  }
  .miao{
    width: 100px;
    height: 44px;
    line-height: 44px;
  }
}
</style>
