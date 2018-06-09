<template>
  <div>
    <Header>
      <div slot="title" class="title">课程</div>
      <div slot="buttons" class="buttons">
        <router-link to="/list"><m-button class="m_button">课程列表</m-button></router-link>
        <router-link to="/searchcourse"><m-button class="m_button">搜索课程</m-button></router-link>
        <router-link to="/addcourse"><m-button class="m_button">添加课程</m-button></router-link>
      </div>
    </Header>
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Header from "../common/header";
export default {
  components: {
    Header: Header
  },
  methods: {
    ...mapActions(["setToken"])
  },
  mounted() {
    this.setToken();
  }
};
</script>
