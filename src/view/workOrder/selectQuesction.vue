<template>
  <div class="Workprogress">
    <div class="Workprogress-content">
      <div class="Workprogress-title">
        <span>提交工单</span>
      </div>
      <div class="Workprogress-Steps-box">
           <div class="Workprogress-Steps">
        <el-steps :active="1" simple style="margin-top: 20px" size="mini">
          <el-step icon="el-icon-edit" title="选择问题所属产品"></el-step>
          <el-step icon="el-icon-edit" title="选择问题类型"></el-step>
          <el-step icon="el-icon-edit" title="创建工单"></el-step>
        </el-steps>
      </div>
      </div>
      <div class="selectProblem">
        <div class="selectProblem-demo-box">
          <div
            class="selectProblem-demo"
            @click="boxCli(index)"
            v-for="(item,index) in selectProblem"
            :key="index"
          >
            <div class="selectProblem-demo-img">
              <span>{{index+1}}</span>
            </div>
            <div class="selectProblem-demo-content">
              <span>{{item.titile}}</span>
              <section>{{item.content}}</section>
            </div>
          </div>
          <div class="selectProblem-zhanwei"></div>
          <div class="selectProblem-zhanwei"></div>
          <div class="selectProblem-btn-box">
            <router-link to="workOrderTO" tag="span">
              <div class="selectProblem-btn">
                <span @click="nextfeebck">下一步</span>
              </div>
            </router-link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import './selectQuesction.less'
export default {
  data() {
    return {
      stepValue: 0,
      selecTsteps: 1,
      selectProData: '',
      selectProblem: [
        {
          titile: '产品技术咨询',
          content: '产品技术质询产品技术质询'
        },
        {
          titile: '产品技术咨询',
          content: '产品技术质询产品技术质询'
        },
        {
          titile: '产品技术咨询',
          content: '产品技术质询产品技术质询'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    nextfeebck() {
      console.log(132)
    },
    boxCli(index) {
      this.selecTsteps = this.selecTsteps + 1
      console.log(this.selecTsteps)
      this.selectProData = index + 1
    }
  }
}
</script>