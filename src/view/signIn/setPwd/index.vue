<template>
  <div style="height:850px" class="flex bg-fff justify-center">
    <div class="card " style="width: 710px;margin-top: 30px;padding:50px 0 210px;">
      <div class="t-center lh-70 f-size-20 color-02">找回密码</div>
      <Form
        :model="setPwdForm"
        ref="form"
        :rules="ruleInline"
        style="padding: 20px 140px 30px 140px;"
      >
        <div class="pl-10 pr-10">
          <FormItem class="mt-24 mb-30" prop="phone">
            <Input
              style="width: 100%;"
              size="large"
              v-model="setPwdForm.phone"
              class
              placeholder="手机号"
            />
          </FormItem>
        </div>
        <div class="pl-10 pr-10">
          <FormItem class="mb-30" prop="verifyCode">
            <Input
              style="width: 280px;"
              size="large"
              type="number"
              v-model="setPwdForm.verifyCode"
              :maxlength="4"
              placeholder="短信验证码"
            />
            <Button size="large" :loading="sendCodeLoading" style="width: 126px;" @click="send" class="lh-28" ref="sendCode">获取验证码</Button>
          </FormItem>
        </div>

        <div class="pl-10 pr-10">
          <FormItem class="mt-24 mb-30" prop="password">
            <Input
              style="width: 100%;"
              size="large"
              type="password"
              v-model="setPwdForm.password"
              class
              placeholder="新密码"
            />
          </FormItem>
        </div>

        <div class="pl-10 pr-10">
          <FormItem class="mt-24 mb-30" prop="password2">
            <Input
              type="password"
              style="width: 100%;"
              size="large"
              v-model="setPwdForm.password2"
              class
              placeholder="确认新密码"
            />
          </FormItem>
        </div>

        <div class="pl-10 pr-10 mb-20" style="margin-top: 20px;">
          <Button
            type="primary"
            long
            size="large"
            class="lh-30"
            @click="submit"
            :loading="loading"
          >找回密码</Button>
        </div>
        <div style="font-size: 12px;" class="cup mt-16 pr-10 flex justify-end">
          <span class="color-blue" @click="$router.push({name: 'login'})">返回登录</span>
        </div>
      </Form>


    </div>
  </div>
</template>

<script>
const SM4 = require("gm-crypt").sm4;
import { verifyCode, resetPassword } from "@/api/user";
import { validateEMail } from "@/libs/util";
import { cloneDeep } from "lodash";
import { SendCode } from '@/libs/util'
export default {
  data() {
    const validatePwd = (rule, value, callback) => {
      if (value !== this.setPwdForm.password) {
        callback(new Error("两次密码输入不一致"));
        return;
      }
      callback();
    };

    return {
      loading: false,
      sendCodeLoading: false,
      sendCode: {},
      setPwdForm: {
        userName: "",
        password: "",
        password2: "",
        email: "",
        phone: "",
        verifyCode: ""
      },
      ruleInline: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password2: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {
            validator: validatePwd,
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: validateEMail,
            trigger: "blur"
          }
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        verifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.sendCode = new SendCode(this.$refs.sendCode.$el)
  },
  methods: {
    /**
     * 发送验证码
    */
    async send() {
      if(this.sendCode.lock){
        return
      }
      let phone = this.setPwdForm.phone;
      if (!phone || phone.length !== 11) {
        this.$Message.warning("请输入正确的手机号码");
        return;
      }
      this.sendCodeLoading = true
      await verifyCode({ phone},"reset").then(d => {
        this.$Message.success('验证码发送成功！')
        this.sendCode.start()
      }).catch(err => this.$Message.error(err.msg))
      this.sendCodeLoading = false
    },
    /**
     * 提交表单
    */
    submit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) return;
        let obj = cloneDeep(this.setPwdForm);
        delete obj.password2;
        this.loading = true;
        obj.password=this.gmcryptSm4(obj.password)
        await resetPassword(obj)
          .then(d => {
            this.$Message.success('重置成功')
            this.$router.go(-1)
          })
          .catch(err => this.$Message.error(err.msg));
        this.loading = false;
      });
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
  }
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
}
</style>
