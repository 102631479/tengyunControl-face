<template>
  <div class="flex">
    <div style="width: 420px">
      <Form
        :model="loginForm"
        ref="form"
        :rules="ruleInline"
        @keydown.enter.native="submit"
      >
        <div>
          <FormItem class="mt-40 mb-30" prop="account">
            <Input
              style="width: 100%"
              size="large"
              v-model="loginForm.account"
              class
              placeholder="邮箱/账号/手机号"
            />
          </FormItem>
        </div>
        <div>
          <FormItem class="mb-30" prop="password">
            <Input
              style="width: 100%"
              size="large"
              type="password"
              v-model="loginForm.password"
              class
              placeholder="密码"
              @keydown.enter="submit"
            />
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
            >登录</Button
          >
        </div>
      </Form>

      <div class="flex border-box" style="margin-top: 180px">
        <div
          @click="$router.push({ name: 'regist' })"
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          style="border-right: 1px dotted #bbb"
        >
          立即注册
        </div>
        <div
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          @click="$router.push({ name: 'setPwd' })"
        >
          忘记密码
        </div>
      </div>

      <formModal
        ref="formModal"
        :rule="rule"
        title="选择角色"
        @submit="formModalSubmit"
      />
      <verify
        ref="verify"
        @success="success"
        :mode="'pop'"
        :captchaType="'blockPuzzle'"
        :imgSize="{ width: '330px', height: '155px' }"
      />
    </div>
  </div>
</template>

<script>
import { flattenDeep } from 'lodash'
import { login, getIdentities, getPermissions } from '@/api/user'
import formModal from '_c/formModal/index'
import rule from './rule'
import verify from '@/components/verify'
import Cookie from 'js-cookie'
export default {
  components: { formModal, verify },
  data () {
    return {
      rule,
      accountList: [], // 选择角色
      showModal: true, // 弹框
      loading: false, // 按钮loading
      ruleInline: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loginForm: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    /**
     * 验证成功
     */
    async success ({ captchaVerification }) {
      this.loginForm.captchaVerification = captchaVerification

      this.loading = true
      await login(this.loginForm)
        .then((d) => {
          this.$store.commit('setTagNavList', [])
          if (process.env.NODE_ENV === 'development') {
            Cookie.set('token', d.data.token, {
              domain: '.zhihuiwenlvyun.com',
              path: '',
              expires: 7
            })
          } else {
            Cookie.set('token', d.data.token, {
              domain: '.zhihuiwenlvyun.com',
              path: '',
              expires: 7
            })
          }
          this.$store.commit('setIsLogin', true)
          this.$store.commit('setToken', d.data.token)
          getIdentities().then((d) => {
            this.identities = d.data.identities
            this.$store.commit(
              'setAccess',
              flattenDeep(
                Object.keys(d.data.permissions).map(
                  (key) => d.data.permissions[key]
                )
              )
            )
            if (this.identities.length === 1) {
              this.$store.commit('setIdentities', this.identities[0].value)
              this.$store.commit('setIsLogin', true)
              this.$router.push({ path: '/' })
              return
            }
            this.modal = true
          })
        })
        .catch((err) => this.$Message.error(err.msg))

      this.loading = false
    },
    /**
     * 提交数据
     */
    submit () {
      this.$refs['form'].validate(async (valid) => {
        if (!valid) return
        this.$refs.verify.show()
        // this.loading = true;
        // await login(this.loginForm)
        //   .then(d => {
        //     this.$store.commit("setToken", d.data.token);
        //     this.$store.commit("setIsLogin", true);
        //     this.$router.push({ path: '/' })
        //     // getIdentities({ account: this.loginForm.account }).then(d => {
        //     //   this.$refs.formModal.steOption('account', d.data.map(item => {
        //     //     item.label = item.name
        //     //     return item
        //     //   }))
        //     //   this.$refs.formModal.show()
        //     // });
        //   })
        //   .catch(err => {
        //     this.$Message.error(err.msg);
        //   });
        // this.loading = false;
      })
    },
    /**
     * 弹框确认按钮
     */
    formModalSubmit ({ account }) {
      this.$router.push({ path: '/' })
      getPermissions({ account: this.formModal.account }).then((d) => {
        console.log(d)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.border-box {
  margin-top: 30px;
  border-top: 1px dotted #bbb;
  border-bottom: 1px dotted #bbb;
}
</style>
