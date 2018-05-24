<template>
  <div>
    <div class="header">
      <div class="title">课程</div>
      <div class="buttons">
      <router-link to="/"><m-button class="m_button">课程列表</m-button></router-link>
      <router-link to="/searchcourse"><m-button class="m_button" type="error">搜索课程</m-button></router-link>
      <router-link to="/addcourse"><m-button class="m_button" type="warning">添加课程</m-button></router-link>
    </div>
    </div>
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {


}
</script>
<style lang="scss">
@import "../../assets/header.scss";
</style>

