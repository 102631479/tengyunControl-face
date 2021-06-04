<!-- 合作伙伴组件 -->
<template>
  <div class="partner-box">
    <div class="partner-title-box">
      <span>合作伙伴</span>
    </div>
    <div class="partner-content-box">
      <div class="partner-content">
        <ul class="partner-content-ul">
          <li>
            <img src="../../assets/images/hezuo/alibaba.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/donghuaruanjian.png" alt />
          </li>
          <li>
            <img src="../../assets/images/txy.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/fushizhineng.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/mutianyvcahngcheng.png" alt />
          </li>
          <li>
            <img src="../../assets/images/partner-ty.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/meishekeji.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/lijiangwenlu.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/gelinshentong.png" alt />
          </li>
          <li>
            <img src="../../assets/images/hezuo/haikangweishi.png" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "../../assets/images/hezuo/alibaba.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/donghuaruanjian.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/txy.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/fushizhineng.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/mutianyvcahngcheng.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/partner-ty.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/meishekeji.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/lijiangwenlu.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/gelinshentong.png",
          name: "未定义",
        },
        {
          src: "../../assets/images/hezuo/haikangweishi.png",
          name: "未定义",
        },
      ], //合作伙伴数据
    };
  },
  watch: {},
  methods: {},
  created() {},
};
</script>



<style scoped lang="scss">
.partner-box {
  width: 100%;
  background-color: white;
  .partner-title-box {
    padding-top: 79px;
    width: 100%;
    text-align: center;
  }
  .partner-title-box span {
    height: 28px;
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(2, 2, 2, 1);
  }
  .partner-content-box {
    width: 100%;
    text-align: center;
    margin-top: 52px;
  }
  .partner-content {
    display: flex;
    justify-content: center;
  }
  .partner-Station {
    height: 0px;
    width: 210px;
  }
  .partner-content-ul {
    width: 1138px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .partner-content-ul li {
    width: 210px;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 10px 0px rgba(26, 99, 221, 0.1);
    border-radius: 6px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .partner-content-ul li:nth-last-of-type(1) {
    margin-bottom: 20px;
  }
}
</style>