<template>
  <div class="list">
      <m-table :data="users">
        <m-table-col prop="id" label="id" width="10%">
        </m-table-col>
        <m-table-col prop="title" label="课程名" width="20%">
        </m-table-col>
        <m-table-col prop="teacher" label="任课教师" width="10%">
        </m-table-col>
        <m-table-col prop="views" label="评论数" width="10%">
        </m-table-col>
         <m-table-col prop="main_category" label="主分类" width="10%">
        </m-table-col>
        <m-table-col prop="sub_category" label="二级分类" width="10%">
        </m-table-col>
        <m-table-col prop="credit_category" label="学分类别" width="10%">
        </m-table-col>
        <m-table-col label="操作" prop="active" width="10%">
          <template slot-scope="row">
            <span v-on:click="deleteUser.bind(this, row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
           <!-- <m-button :on-click="deleteUser.bind(this, row)">Delete</m-button> -->
          </template>
        </m-table-col>
      </m-table>
      <Pagiantion :page="page" :totalPages="totalPages" v-on:prePage="prePage" v-on:nextPage="nextPage"></Pagiantion>
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
      page: state => state.userList.page,
      totalPages: state => state.userList.totalPages
    })
  },
  methods: {
    ...mapActions(["fetchUsersList", "prePage", "nextPage", "deleteUser"]),
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
