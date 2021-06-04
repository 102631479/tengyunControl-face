/*
 * @Author: your name
 * @Date: 2020-10-09 15:09:22
 * @LastEditTime: 2020-10-09 15:09:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\libs\rules.js
 */
// 验证手机号码
export function checkPhoneNumber(rule, value, callback) {
    const reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
    if (!value) {
      return callback(new Error('请填写手机号码！'))
    } else if (!reg.test(value)) {
      return callback(new Error('请填写正确的手机号码！'))
    }else{
      callback()
    }
  }
  
  export function checkIdNum(rule, value, callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!value) {
      return callback(new Error('证件号码不能为空'))
    } else if (!reg.test(value)) {
      return callback(new Error('证件号码不正确'))
    } else {
      callback()
    }
  }

  export default {
    checkPhone: [{ required: true, validator: checkPhoneNumber, trigger: 'blur' }],
    checkId: [{ required: true, validator: checkIdNum, trigger: 'blur' }],
  }
