<template>
  <div class="text">
    <div class="markdown-body">
      <privacy />
    </div>
  </div>
</template>

<script>
import privacy from "./privacy.md";
console.log(privacy,'privacy');
import "highlight.js/styles/github.css";
import "github-markdown-css";
export default {
  components: {
    privacy,
  },
  data() {
    return {};
  },
  methods: {
  },
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.text {
  margin: 0 auto;
  width: 1300px;
}
</style>