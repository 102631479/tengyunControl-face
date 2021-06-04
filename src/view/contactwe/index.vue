<template>
  <div class="container">
    <div class="contact-titleImg flex">
      <div class="conatct-banner-info">
        <!-- <Button type="default" ghost>智能客服</Button> -->
      </div>
      <img src="../../assets/images/contact.png" alt />
    </div>
    <div class="contact-boxs">
      <div class="contact-title">
        <span>我需要购买咨询</span>
      </div>
      <div class="purchase-content">
        <div class="purchase-contact">
          <div class="purchase-sale">
            <span>联系销售人员</span>
          </div>
          <div class="purchase-phone">
            <span>18201401676</span>
          </div>
          <div class="purchase-content-text">
            <span>直接致电销售人员，立即进行购买咨询，</span>
          </div>
        </div>
        <div class="purchase-tec">
          <div class="purchase-tec-title-box">
            <span class="purchase-tec-title">预约技术架构师</span>
          </div>
          <section>快速获得全面的技术购买方案，与商务 保持沟通</section>
          <div class="purchase-btn-box" @click="openDialog">
            <span class="purchase-btn-content">马上预约</span>
          </div>
        </div>
      </div>
    </div>
    <div class="support-box">
      <div class="support-title-box">
        <span>我需要技术支持</span>
      </div>
      <div class="support-content-box">
        <div class="support-content-con">
          <div class="contact-technology">
            <span>联系技术支持</span>
          </div>
          <div class="contact-technology-content">
            <span
              >遇到运维或技术产品使用问题，您可登录并提交工单，7×24小时</span
            >
          </div>
          <div class="contact-technology-btn" @click="handleJump('/workOrder')">
            <span>提交工单</span>
          </div>
        </div>
        <div class="support-content-service">
          <div class="service-title">
            <span>智能客服</span>
          </div>
          <div class="service-content">
            <span>智能诊断，即时回复，为您提供快速便捷的服务体验</span>
          </div>
          <div class="service-content-btn">
            <span>智能客服</span>
          </div>
        </div>
      </div>
      <div class="support-footer">
        <span class="support-footer-content">
          有任何建议或问题，欢迎您向我们进行反馈，
          <span class="support-feedback">立即反馈></span>
        </span>
      </div>
    </div>
    <!-- 常见问题 -->
    <div class="common-problem">
      <div class="common-problem-title-box">
        <span>常见问题</span>
      </div>
      <div class="common-problem-content-box">
        <ul class="common-problem-list">
          <li
            class="common-problem-list-li cup"
            v-for="(item, index) in problemData"
            :key="index"
          >
            <span>{{ item.content }}</span>
            <div class="common-problem-line">
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog
      title="预约架构师"
      center
      :visible.sync="dialogVisible"
      position="left"
      width="30%"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="咨询内容" prop="content">
          <el-input
            v-model="ruleForm.content"
            type="textarea"
            :rows="5"
          ></el-input>
        </el-form-item>
        <el-form-item label="您的姓名" prop="userName">
          <el-input v-model="ruleForm.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系手机" prop="phone">
          <el-input v-model="ruleForm.phone" size="small"></el-input>
        </el-form-item>
        <el-form-item label="上传附件" prop="photoIdList">
          <el-upload
            ref="uplode"
            class="upload-demo"
            :action="actionUrl"
            :on-success="handSuccess"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              支持上传JPG、PNG、DOC、XLS、TXT格式文件,最大不超过5M
            </div>
          </el-upload>
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="name">
          <div class="cans-box">
            <el-input
              v-model="ruleForm.name"
              size="small"
              style="width: 70%"
              placeholder="请输入验证码"
            ></el-input>
            <div class="get-code" @click="refreshCode()">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
          </div>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="subilime" size="small">完成并提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userReserve } from "@/api/user";

import config from "@/config";
import "./index.less";
import SIdentify from "../../components/sIdentify/sIdentify";
export default {
  components: { SIdentify },
  data() {
    var checkphone = (rule, value, callback) => {
      if (value == "") {
        this.isPhone = false;
        callback(new Error("请输入手机号"));
      } else if (!this.isCellPhone(value)) {
        this.isPhone = false;
        callback(new Error("请输入正确的手机号!"));
      } else {
        this.isPhone = true;
        callback();
      }
    };
    return {
      isPhone: false,
      actionUrl:
        process.env.NODE_ENV === "development"
          ? config.baseUrl.dev + "/platform-file/file/img/upload"
          : process.env.NODE_ENV === "testing"
          ? config.baseUrl.test + "/platform-file/file/img/upload"
          : config.baseUrl.pro + "/platform-file/file/img/upload",
      identifyCode: "",
      identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",
      dialogVisible: false,
      problemData: [
        { content: "1. 如何登陆" },
        { content: "2. 如何注册" },
        { content: "3. 如何购买" },
        { content: "4. 资金无法全部提现" },
        { content: "5. 购买后登陆不进去系统" },
        { content: "6. 购买之后如何使用" },
        { content: "7. 购买系统无法使用怎么办" },
        { content: "8. 怎么删除购买的应用" },
        { content: "9. 怎么申请试用" },
        { content: "10. 如何退款" },
      ],
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
        // {
        //   name: "food2.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        // },
      ],
      ruleForm: {
        uid: this.$store.state.user.userInfo.id,
        userName: "",
        content: "",
        state: "1",
        phone: "",
        photoIdList: [],
      },
      rules: {
        userName: [
          { required: true, message: "请输入姓名", trigger: "change" },
        ],
        content: [
          { required: true, message: "请输入咨询内容", trigger: "change" },
        ],

        phone: [{ required: true, validator: checkphone, trigger: "blur" }],

        photoIdList: [
          { required: true, message: "请添加附件", trigger: "change" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    isCellPhone(val) {
      if (!/^1(3|4|5|6|7|8)\d{9}$/.test(val)) {
        return false;
      } else {
        return true;
      }
    },
    getImg(c) {
      this.ruleForm.photoIdList = [];
      c.forEach((item) => {
        let data = item.response.data[0];
        this.ruleForm.photoIdList.push({
          ["fileAddress"]: data.fileAddress,
          ["fileId"]: data.id,
          ["oldName"]: data.oldFileName,
        });
      });
    },
    handleRemove(s, c) {
      this.getImg(c);
    },
    handSuccess(g, s, c) {
      this.getImg(c);
    },
    handleJump(path) {
      this.$router.push(path);
    },
    subilime() {
      let _this = this;
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return;
        if (!_this.isPhone) return;
        userReserve(this.ruleForm)
          .then((res) => {
            this.dialogVisible = false;
            this.$refs.ruleForm.resetFields();
            this.ruleForm.photoIdList = [];
            this.$refs.uplode.clearFiles();
            this.$Message.success("提交成功");
          })
          .catch((err) => {
            this.$Message.error(err.msg);
            console.log(err);
          });
      });
    },

    openDialog() {
      if (!this.$store.state.user.userInfo.id) {
        this.$Message.error("请先登录，再预约");
        this.$router.push("./login");
        return;
      }
      this.dialogVisible = true;
    },

    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // //随机验证码
    // refreshCode() {
    //   //
    //   this.identifyCode = "";
    //   this.makeCode(this.identifyCodes, 4);
    // },
    // randomNum(min, max) {
    //   max = max + 1;
    //   return Math.floor(Math.random() * (max - min) + min);
    // },
    // 随机生成验证码字符串
    // makeCode(data, len) {
    //   for (let i = 0; i < len; i++) {
    //     this.identifyCode += data[this.randomNum(0, data.length - 1)];
    //   }
    // },
    //--------验证码分割线
  },
};
</script>

<style>
</style>