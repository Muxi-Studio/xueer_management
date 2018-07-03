<template>
  <div>
    <Header>
      <div slot="title" class="title">文章</div>
      <div slot="buttons" class="buttons">
        <router-link to="/article"><m-button class="m_button">文章列表</m-button></router-link>
        <router-link to="/article/add"><m-button class="m_button">添加文章</m-button></router-link>
      </div>
    </Header>
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "../common/header";
export default {
  components: {
    Header: Header
  }
};
</script>
