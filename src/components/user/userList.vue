<template>
  <div class="list">
      <m-table :data="users">
        <m-table-col prop="id" label="id" width="10%">
        </m-table-col>
        <m-table-col prop="username" label="用户名" width="20%">
        </m-table-col>
        <m-table-col prop="email" label="邮箱" width="30%">
        </m-table-col>
        <m-table-col prop="valid_recommend_count" label="有效推荐数" width="25%">
        </m-table-col>
        <m-table-col label="操作" prop="active" width="15%">
          <template slot-scope="row">
            <span v-on:click="deleteUser.bind(this, row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
          </template>
        </m-table-col>
      </m-table>
      <Pagiantion :page="userpage" :totalPages="userTotalPages" v-on:prePage="preUserPage" v-on:nextPage="nextUserPage"></Pagiantion>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Pagiantion from "../common/pagination";
export default {
  data() {
    return {};
  },
  components: {
    Pagiantion: Pagiantion
  },
  computed: {
    ...mapState({
      users: state => state.userList.users,
      userpage: state => state.userList.userpage,
      userTotalPages: state => state.userList.userTotalPages
    })
  },
  methods: {
    ...mapActions(["fetchUsersList", "preUserPage", "nextUserPage", "deleteUser"]),
  },
  mounted() {
    this.fetchUsersList();
  }
};
</script>
<style lang="scss">
@import "../../assets/utility.scss";
.delete {
  color: $red;
}
.edit {
  color: $grey;
}
</style>
