<template>
  <div class="pagaition flex_center">
    <m-button :on-click="pre">上一页</m-button>
    <div class="page_num">
      <span>{{page}}</span>/<span>{{totalPages}}</span></div>
    <m-button :on-click="next">下一页</m-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: ["page", "totalPages"],
  methods: {
    pre() {
      this.$emit("prePage")
    },
    next() {
      this.$emit("nextPage")
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/utility.scss";
.pagaition {
  margin-top: 20px;
}
.page_num {
  margin: 0 10px;
}
</style>
