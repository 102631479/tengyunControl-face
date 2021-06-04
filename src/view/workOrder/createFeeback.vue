<template>
  <div class="Workprogress">
    <div class="Workprogress-content">
      <div class="Workprogress-title">
        <span>提交工单</span>
      </div>
      <div class="Workprogress-Steps-box">
           <div class="Workprogress-Steps">
        <el-steps :active="3" simple style="margin-top: 20px" size="mini">
          <el-step icon="el-icon-edit" title="选择问题所属产品"></el-step>
          <el-step icon="el-icon-edit" title="选择问题类型"></el-step>
          <el-step icon="el-icon-edit" title="创建工单"></el-step>
        </el-steps>
      </div>
      </div>
   
      <div class="create-form">
        <div>
          <div class="job-nav">
            <span class="job-one">产品技术咨询</span>
            <span class="job-arrow">></span>
            <span class="job-two">景区建设</span>
          </div>
        </div>
        <div class="from-box">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item label="紧急程度" prop="name">
              <template slot-scope="scope">
                <span class="radio-box">
                  <el-radio v-model="ruleForm.radio1" label="1">普通咨询</el-radio>
                  <el-radio v-model="ruleForm.radio1" label="2">操作体验问题</el-radio>
                  <el-radio v-model="ruleForm.radio1" label="3">业务/系统异常影响使用</el-radio>
                  <el-radio v-model="ruleForm.radio1" label="4">业务完全不可用</el-radio>
                </span>
              </template>
            </el-form-item>
            <el-form-item label="请输入问题描述" prop="name">
              <el-input type="textarea" :rows="5" v-model="ruleForm.problem"></el-input>
            </el-form-item>
            <el-form-item label prop="name">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <div slot="tip" class="el-upload__tip">支持png、jpg、jpeg、txt、rar、doc。xls、xlsx、zip、7z格式，最大不超过5M</div>
                <el-button size="small" class="addEnclosure"  >点击上传</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="机密信息（选填）" prop="name">
              <el-input type="textarea" :rows="5" v-model="ruleForm.confidential"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="name">
              <template slot-scope="scope">
                <span class="form-phone">
                  <Select v-model="ruleForm.phone" placeholder="请选择" style="width:177px">
                    <Option
                      v-for="(item,index) in regionList"
                      :key="index"
                      :label="item.city+item.code"
                      :value="item.code"
                    ></Option>
                  </Select>
                  <div style="width:9px;"></div>
                  <Input class="Textfield" v-model="ruleForm.desc"></Input>
                </span>
              </template>
            </el-form-item>
            <el-form-item label="接受提醒">
              <template slot-scope="scope">
                <div class="order-acceptance-box">
                  <div class="wechat-order-box">
                    <span>微信公众号提醒</span>
                    <section>您可以扫码关注腾讯云助手，及时接收工单提醒</section>
                    <img src="../../assets/images/contact.png" alt />
                  </div>
                  <div class="phone-order-box">
                    <span>手机短信提醒</span>
                    <section>您可以短信接收提醒，并设置接收短信的时间段</section>
                    <span class="phone-radio-box">
                      <el-radio v-model="ruleForm.radio2" label="1">任何时间</el-radio>
                      <el-radio v-model="ruleForm.radio2" label="2">每日9：00-18：00</el-radio>
                      <el-radio v-model="ruleForm.radio2" label="3">不提醒</el-radio>
                    </span>
                  </div>
                </div>
              </template>
            </el-form-item>
            <el-form-item>
              <div class="feekback-btn">
                <el-button @click="back()">上一步</el-button>
                <el-button type="primary" @click="submitForm()">提交工单</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './createFeeback.less'
import dataList from './data.js'
export default {
  data() {
    return {
      stepValue: 0,
      selecTsteps: 1,
      selectProData: '',
      feekbackradio1: [],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      regionList: [{ city: '1', code: '2' }],
      selectProblem: [
        {
          titile: '景区建设',
          content: '产品技术质询产品技术质询'
        },
        {
          titile: '景区对接',
          content: '产品技术质询产品技术质询'
        },
        {
          titile: '景区任务交付',
          content: '产品技术质询产品技术质询'
        },
        {
          titile: '支付对接',
          content: '产品技术质询产品技术质询'
        }
      ],
      ruleForm: {
        radio1: "1",
        radio2: "1",
        region: '',
        problem: '',
        phone:"+86",
        confidential: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  created() {
    this.nextfeebck()
  },
  mounted() {},
  methods: {
    back(){
      this.$router.go(-1)
    },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    nextfeebck() {
      // console.log(dataList.regionData)
      this.regionList = dataList.regionData
      this.feekbackradio1 = dataList.feekbackradio1
      console.log(this.regionList)
    },
    backfeebck() {
      this.$router.go(-1)
    },
    submitForm() {
      console.log(this.ruleForm.name)
    },
    boxCli(index) {
      this.selecTsteps = this.selecTsteps + 1
      console.log(this.selecTsteps)
      this.selectProData = index + 1
    }
  }
}
</script>