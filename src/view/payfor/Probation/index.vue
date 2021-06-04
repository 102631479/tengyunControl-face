<!--
 * @Author: your name
 * @Date: 2020-10-09 13:29:23
 * @LastEditTime: 2020-10-09 16:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\Probation\index.vue
 -->
<template>
    <div class="container margin-410">
        <div class="top">
            <p class="desc">请您填写一下信息，若审核通过将会由工作人员联系您，感谢您的支持。</p>
        </div>
        <!-- <formCreate :rule="rule" :option="option" v-model="formData" class="form"></formCreate> -->

        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="form">
            <el-form-item
                label-width="200"
            >
                <p class="titles">用户信息</p>
                <p class="desc">为便于与您联系以及更好地提供服务，需要您提供联系信息，我们会根据</p>
            </el-form-item>
            <el-form-item
                label="个人姓名"
                prop="name"
                class="formItem"
                label-width="200"
                :rules="[
                    { required: true, message: '姓名不能为空',trigger: 'blur'}
                ]"
            >
                <el-input type="name" v-model="numberValidateForm.name" autocomplete="off" class="input"></el-input>
            </el-form-item>

            <el-form-item 
                label="联系邮箱"
                prop="email"
                class="formItem"
                label-width="200"
                :rules="[{
                    required: true, message: '邮箱不能为空'
                }, {
                    type: 'email', message: '请正确填写邮箱地址'
                }]"
            >
                <el-input type="email" v-model="numberValidateForm.email" autocomplete="off" class="input"></el-input>
            </el-form-item>

            <el-form-item 
                label="联系电话"
                prop="phone"
                class="formItem"
                label-width="200"
                :rules="rule.checkPhone"
            >
                <el-input 
                    v-model="numberValidateForm.phone"
                    placeholder="请输入11位手机号码"
                    maxlength = '11'
                    clearable
                    autocomplete="off"
                    class="input"
                    >
                </el-input>
            </el-form-item>
            
            <el-form-item
                label-width="200"
            >
                <p class="titles">业务信息</p>
            </el-form-item>
            <el-form-item 
                label="公司名称"
                prop="company"
                class="formItem"
                label-width="200"
                :rules="[{
                    required: true, message: '公司名称不能为空'
                }]"
            >
                <el-input v-model="numberValidateForm.company" autocomplete="off" class="input"></el-input>
            </el-form-item>

            <el-form-item 
                label="业务阶段"
                prop="stage"
                class="formItem"
                label-width="200"
                :rules="[{
                    required: true, message: '请任选其一',trigger: 'blur'
                }]"
            >
                <el-radio-group v-model="numberValidateForm.stage">
                    <el-radio :label="1">未开发</el-radio>
                    <el-radio :label="2">开发中</el-radio>
                    <el-radio :label="3">测试中</el-radio>
                    <el-radio :label="4">已上线</el-radio>
                    <el-radio :label="5">大规模应用中</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item 
                label="行业类型"
                prop="type"
                class="formItem"
                label-width="200"
                :rules="[{
                    required: true, message: '请任选其一', trigger: 'blur'
                }]"
            >
                <el-radio-group v-model="numberValidateForm.type">
                    <el-radio :label="1">银行</el-radio>
                    <el-radio :label="2">保险</el-radio>
                    <el-radio :label="3">证券</el-radio>
                    <el-radio :label="4">景区旅游</el-radio>
                    <el-radio :label="5">电商</el-radio>
                    <el-radio :label="6">物联网</el-radio>
                    <el-radio :label="7">政企</el-radio>
                    <el-radio :label="8">票务</el-radio>
                    <el-radio :label="9">其他</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item 
                label="您的需求描述"
                prop="desc"
                class="formItem"
                label-width="200"
                :rules="[{
                    required: true, message: '需求描述不能为空'
                }]"
            >
                <el-input 
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="numberValidateForm.desc" 
                    autocomplete="off" 
                    class="input"
                ></el-input>
            </el-form-item>

            <el-form-item 
                label="工商营业执照"
                class="formItem"
                label-width="200"
                limit="5"
                :rules="[{
                    required: true, message: '工商营业执照不能为空',trigger: 'blur'
                }]"
            >
                <p class="fs-12">请上传加盖公章的原件照片或扫描件，支持不超过5MB的jpeg,bmp,gif,pdf文件</p>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange"
                    :file-list="numberValidateForm.license">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import rule from './rule';
import option from './options';
import rules from '@/libs/rules'
export default {
    data() {
        return {
            formData: {},
            rule,
            option,
            numberValidateForm: {
                name: '',
                email: '',
                phone: '',
                company: '',
                stage: '',
                stage: '',
                type: '',
                desc: '',
                license: []
            },
            rule: rules
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // alert('submit!');
                console.log(this.numberValidateForm)

                // this.$refs[formName].resetFields();
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleChange(file, fileList) {
            console.log(file, fileList)
            this.numberValidateForm.license = fileList
        }
    },
    mounted() {},
}
</script>

<style lang="scss" scoped>
/deep/.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 0;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 35px;
    line-height: 35px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
    .container {
        background-color: rgb(240, 242, 245);
        display: flex;
        flex-direction: column;
    }
    .margin-410 {
        margin: 0 410px;
    }

    .fs-12 {
        color: #9A9A9A;
        font-size: 12px;
    }

    .top {
        height: 35px;
        line-height: 35px;
        background: #E5F0FF;
        border: 1px solid #98C8FF;
        margin: 21px 0 23px 0;
        .desc {
            color: #0A549A;
            font-size: 12px;
        }
    }

    .form {
        background-color: #fff;
        padding: 20px 40px;
        margin-bottom: 60px;
        .titles {
            font-size: 16px;
            color: #000;
            font-weight: 400;
        }
        .desc {
            color: #888888;
            font-size: 12px;
        }
    }
    .formItem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .input {
        width: 400px;
    }

</style>
