<template>
  <div>
    <Header>
      <div slot="title" class="title">用户</div>
      <div slot="buttons" class="buttons">
        <router-link to="/user"><m-button class="m_button">用户列表</m-button></router-link>
        <router-link to="/user/admin"><m-button class="m_button">管理用户</m-button></router-link>
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
