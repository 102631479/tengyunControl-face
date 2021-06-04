export default {
  methods: {
    // 更新表单字段
    updateRule(key, result, label) {
      let res = this[key] = result.data.map(item => {
        return {
          value: item.id,
          label: item[label]
        };
      });
      this.$refs.crudTable.$refs.formModal.formData.updateRule(key, {
        options: this[key]
      });
      return res
    }
  }
}