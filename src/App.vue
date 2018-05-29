<template>
  <div id="app" class="full_width full_height">
    <div class="navi">
      <div class="navi_top flex_center">
        <div class="margin text_align">
        <img class="logo" src="./assets/logo.png">
        <div class="user">学而管理后台</div>
        </div>
      </div>
      <div class="navi_link">
        <div class="navi_item flex_center"><router-link to="/"><i class="item_eng">Course</i><span class="item_ch">课程</span></router-link></div>
        <div class="navi_item flex_center"><router-link to="/user"><i class="item_eng">User</i><span class="item_ch">用户</span></router-link></div>
        <div class="navi_item flex_center"><router-link to="/comment"><i class="item_eng">Comment</i><span class="item_ch">评论</span></router-link></div>
        <div class="navi_item flex_center"><router-link to="/article"><i class="item_eng">Article</i><span class="item_ch">运营</span></router-link></div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Loading from "./components/common/Loading"
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["username", "avatar"])
  }
  // components: {
  //     Loading,
  // }
}
</script>

<style lang="scss">
@import "./assets/reset.scss";
@import "./assets/utility.scss";
#app {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.navi {
  min-width: 250px;
}

.logo {
  width: 70px;
}

.navi_header {
  margin: 0 auto;
  text-align: center;
}

.user {
  color: #ffffff;
}

.navi_top {
  height: 20%;
  background-color: #1d262a;
}

.navi_link {
  height: 80%;
  padding-top: 20px;
  background-color: rgb(42, 54, 62);
}
.navi_item {
  line-height: 50px;
  justify-content: center;
  height: 50px;
  width: 100%;
}

.navi_item:hover {
  background-color: rgb(20, 176, 202);
}
.item_eng {
  color: #78909c;
  margin-right: 32px;
  font-size: 24px;
}

.item_ch {
  color: rgba(255,255,255,.56);
  font-size: 14px;
}

.main {
  flex: 1;
  min-width: 700px;
  overflow: scroll;
}
</style>
