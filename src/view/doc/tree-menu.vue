
<template>
  <div class="flexLayout">
    <li>
      <div class="items cup" @click.stop="toggle(model)">
        <span
          :style="{
            color: routerId == model.id ? '#00A4FF !important' : '#222222',
          }"
          >{{ model.name }}</span
        >
        <Icon
          type="ios-arrow-down"
          v-if="isFolder"
          class="triangle"
          :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }"
          color="#666666"
        />
      </div>
      <ul v-show="open" v-if="isFolder" class="items-child">
        <tree-menu
          v-for="(cel, index) in model.childList"
          :model="cel"
          :key="index"
          @on-change="handleClick(cel)"
        ></tree-menu>
      </ul>
    </li>
  </div>
</template>
<script>
export default {
  name: "tree-menu",
  props: {
    model: Object,
    // 是否根据路由id将导航栏高亮并展开
    routerId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      open: false,
      isFolder: true,
    };
  },
  computed: {},
  methods: {
    toggle(item) {
      if (this.isFolder) {
        this.open = !this.open;
      }
      this.handleClick(item);
    },
    handleClick(item) {
      if (item.childList.length == 0) {
        this.$emit("on-change", item);
      }
    },
  },
  created() {
    //将isFolder放在这里判断可以识别出最底层菜单，然后改变图标，放在computed的话会一直报错并识别不出最底层菜单改变样式
    this.isFolder = this.model.childList && this.model.childList.length;
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 20px;
  li {
    .items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      span {
        color: #222222;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .items-child {
      span {
        color: #444444 !important;
        font-weight: normal;
      }
    }
    .triangle {
      transition: transform 0.3s linear;
    }
  }
}
</style>
