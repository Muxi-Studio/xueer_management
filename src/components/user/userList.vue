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
            <div>
              <span @click="onDelete(row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
            <span @click="onEdit(row)">
              <i class="material-icons material-icons-light edit">edit</i>
            </span>
            </div>
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
    onDelete(e) {
      this.deleteUser(e.id)
    },
    onEdit(e) {
      this.$router.push({ path: `/user/admin/${e.id}/` })
    }
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
