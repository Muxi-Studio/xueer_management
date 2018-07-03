<template>
  <div>
    <Header>
      <div slot="title" class="title">用户</div>
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
