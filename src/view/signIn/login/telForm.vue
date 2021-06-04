<template>
  <div class="flex">
    <div style="width: 420px;">
      <Form :model="loginForm" ref="form" :rules="ruleInline">
        <div>
          <FormItem class="mt-40 mb-30" prop="phone">
            <Input
              style="width: 100%;"
              size="large"
              v-model="loginForm.phone"
              class
              placeholder="手机号"
            />
          </FormItem>
        </div>
        <div>
          <FormItem class="mb-30" prop="verifyCode">
            <Input
              style="width: 310px;"
              size="large"
              type="number"
              v-model="loginForm.verifyCode"
              :maxlength="4"
              placeholder="短信验证码"
            />
            <Button
              size="large"
              style="width: 110px;"
              class="lh-28"
              ref="sendCode"
              @click="send"
            >获取验证码</Button>
          </FormItem>
        </div>
        <div>
          <Button
            type="primary"
            long
            size="large"
            class="lh-30"
            @click="submit"
            :loading="loading"
          >登录</Button>
        </div>
      </Form>

      <div class="flex border-box" style="margin-top:180px;">
        <div
          @click="$router.push({name: 'regist'})"
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          style="border-right: 1px dotted #bbb;"
        >立即注册</div>
        <div
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          @click="$router.push({ name: 'setPwd' })"
        >忘记密码</div>
      </div>

      <!-- <div class="f-size-14 mb-10">
        <div class="mb-20 mt-22">关于登录</div>
        <div class="flex cup">
          <div>登录遇到问题？</div>
          <div class="color-blue">点击获取帮助</div>
        </div>
      </div>-->

      <!-- <formModal ref="formModal" :rule="rule" title="选择角色" @submit="formModalSubmit" /> -->
    </div>

  </div>
</template>

<script>
import {
  phoneLogin,
  getIdentities,
  getPermissions,
  verifyCode
} from "@/api/user";
import formModal from "_c/formModal/index";
import rule from "./rule";
import { SendCode, validateTel } from "@/libs/util";

export default {
  components: { formModal },
  data() {
    return {
      sendCode: {},
      rule,
      // accountList: [], // 选择角色
      showModal: true, // 弹框
      loading: false, // 按钮loading
      ruleInline: {
        verifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateTel, trigger: "blur" }
        ]
      },
      loginForm: {
        verifyCode: "",
        phone: ""
      }
    };
  },
  mounted() {
    this.sendCode = new SendCode(this.$refs.sendCode.$el);
  },
  methods: {
    /**
     * 发送验证码
     */
    send() {
      let phone = this.loginForm.phone
      if(!phone||phone.length !== 11){
        this.$Message.warning('请输入正确的手机号码')
        return
      } 
      verifyCode({ phone },"login" )
        .then(d => {
          this.$Message.success('验证码发送成功！')
          this.sendCode.start();
        })
        .catch(err => this.$Message.error(err.msg));
    },
    /**
     * 提交数据
     */
    submit() {
      this.$refs["form"].validate(async valid => {
        if (!valid) return;
        this.loading = true;
        await phoneLogin(this.loginForm)
          .then(d => {
            this.$store.commit("setIsLogin", true);
            this.$store.commit("setToken", d.data.token);
            this.$router.push({ path: "/" });
          })
          .catch(err => {
            this.$Message.error(err.msg);
          });
        this.loading = false;
      });
    },
    /**
     * 弹框确认按钮
     */
    formModalSubmit({ account }) {
      this.$router.push({ path: "/" });
      getPermissions({ account: this.formModal.account }).then(d => {
        console.log(d);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.border-box {
  margin-top: 30px;
  border-top: 1px dotted #bbb;
  border-bottom: 1px dotted #bbb;
}
</style>