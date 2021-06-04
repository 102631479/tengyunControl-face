<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOption" class="swiper-wrapper">
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/home/banner1.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/home/banner2.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/home/banner3.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/home/banner4.png" alt="" />
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/home/banner5.png" alt="" />
      </swiper-slide>
    </swiper>
    <!-- 轮播图自定义分页器待制作 -->
    <div class="swiper-pagination" id="paginationCustom"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
  },
  data() {
    const vm = this;
    return {
      // 轮播图初始化属性
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          clickable: true, // 自定义分页加了这个 没效果
          renderCustom: function (swiper, current, total) {
            // 这里因为 this 作用域的关系，不能直接使用 this 获取 Vue 相关内容，通过上面的 const vm = this，使用 vm 获取
            let _html = "";
            for (let i = 1; i <= total; i++) {
              if (current == i) {
                _html += `<div class="swiper-pagination-bullet swiper-pagination-bullet-active cup" index="${
                  vm.listData[i - 1]
                }">
                <span index="${vm.listData[i - 1]}"></span>
              </div>`;
              } else {
                _html += `<div class="swiper-pagination-bullet cup" index="${
                  vm.listData[i - 1]
                }">
                <span index="${vm.listData[i - 1]}"></span>
              </div>`;
              }
            }
            return _html;
          },
        },
        paginationClickable: true,
        loop: true, //无限循环
        autoplay: true,
      },
    };
  },
  props: {
    listData: Array,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    handlePaginationClick(e) {
      // 获取目标元素，拿到目标元素上的 index 值
      const current = e.target;
      const toCount = current.attributes["index"].value || "";
      // 跳转到指定的 swiper 页面
      if (toCount) {
        this.swiper.slideTo(toCount);
      }
    },
  },
  mounted() {
    this.paginationCustom = document.getElementById("paginationCustom");
    this.paginationCustom.addEventListener(
      "click",
      this.handlePaginationClick,
      false
    );
  },
};
</script>

<style scoped lang="scss">
.swiper {
  position: relative;
  img {
    width: 100%;
  }
  .swiper-pagination {
    width: 900px;
    display: flex;
    position: absolute;
    left: 317px;
    bottom: 145px;
  }
  /deep/ .swiper-pagination-bullet {
    width: 40px;
    height: 4px;
    background-color: #5b5c63;
    border-radius: 0;
    margin-right: 10px;
    opacity: 1;
  }
  /deep/.swiper-pagination-bullet-active {
    background-color: #00baff;
  }
}
</style>
