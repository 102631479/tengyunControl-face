<template>
  <div class="Workprogress">
    <div class="Workprogress-content">
      <div class="Workprogress-title">
        <span>提交工单</span>
      </div>
        <div class="Workprogress-Steps-box">
           <div class="Workprogress-Steps">
        <el-steps :active="2" simple style="margin-top: 20px" size="mini">
          <el-step icon="el-icon-edit" title="选择问题所属产品"></el-step>
          <el-step icon="el-icon-edit" title="选择问题类型"></el-step>
          <el-step icon="el-icon-edit" title="创建工单"></el-step>
        </el-steps>
      </div>
      </div>
      <div class="selectProblem-To">
        <div class="selectProblem-demo-box-To">
          <div class="selectProblem-demo-To" @click="boxCli(index)" v-for="(item,index) in selectProblem" :key="index">
            <div class="selectProblem-demo-img-To">
              <span>{{index+1}}</span>
            </div>
            <div class="selectProblem-demo-content-To">
              <span>{{item.titile}}</span>
              <section>{{item.content}}</section>
            </div>
          </div>
          <div class="selectProblem-zhanwei"></div>
          <div class="selectProblem-zhanwei"></div>
          <div class="selectProblem-btn-box-To">
            <div class="selectProblem-btn-box-To-jus">
                 <div class="selectProblem-btn-back-To" @click="backfeebck"><span>上一步</span></div>
                    <router-link to="createFeeback" tag="span">
                         <div class="selectProblem-btn-To"  @click="nextfeebck"><span>下一步</span></div>
              </router-link>
 
            </div>
         
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import './SelectL.less'
export default {
  data() {
    return {
      stepValue: 0,
      selecTsteps:1,
      selectProData:"",
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
      ]
    }
  },
     created() {},
  mounted() {

  },
  methods: {
      nextfeebck(){
        console.log(132)
      },
      backfeebck(){
        this.$router.go(-1)
      },
      boxCli(index){
          this.selecTsteps = this.selecTsteps +1
          console.log( this.selecTsteps)
          this.selectProData = index+1
      }
  }
}
</script>