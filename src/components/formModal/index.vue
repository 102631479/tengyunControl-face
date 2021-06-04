<template>
  <div>
    <Modal v-model="userForm" :title="title" :loading="loading" @on-ok="submit">
      <formCreate :rule="rule" :option="option" v-model="formData"></formCreate>
    </Modal>
  </div>
</template>

<script>
import option from "./options";
import { findComponentUpward } from "@/libs/util";
import axios from 'axios'
export default {
  name: "formModal",
  props: {
    title: String,
    url: String,
    delKey: {
      type: Array,
      default: () => []
    }, // 要删除的数组
    rule: Array
  },
  data() {
    return {
      isEdit: false,
      loading: true,
      userForm: false, 
      formData: {},
      option // 弹框表单配置
    };
  },
  watch: {
    userForm(val) {
      if (val) {
        this.formData.resetFields();
      }
    }
  },
  methods: {
    // 提交数据
    async submit() {
      this.formData.submit(
        async data => {
          this.$emit("submit",data);
          this.userForm = false;
        },
        () => {
          this.loading = false;
          this.$nextTick(() => {
            this.loading = true;
          });
        }
      );
    },

    // 设置表单字段
    setKey(key, val) {
      let fields = this.formData.fields()
      if(fields.includes(key)) {
        this.formData.setValue(key,val)
      }else {
        this.formData.append({type: 'hidden', field: key, value: val})
      }
    },

    /**
     * 设置option
    */
    steOption(field, options) {
      console.log(options)
      this.formData.updateRule(field, {
        options
      })
    },

    /**
     * 显示form
    */
    show(isEdit=false) {
      this.isEdit = isEdit
      this.userForm = true
    }

    
  }
};
</script>