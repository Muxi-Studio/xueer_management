<template>
  <div class="list">
      <m-table :data="courses">
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
           <div>
             <span @click="deleteCourse(row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
            <span @click="onEdit(row)">
              <i class="material-icons material-icons-light edit">edit</i>
            </span>
           </div>
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
  name: "CourseList",
  data() {
    return {};
  },
  components: {
    Pagiantion: Pagiantion
  },
  computed: {
    ...mapState({
      courses: state => state.courseList.courses,
      page: state => state.courseList.page,
      totalPages: state => state.courseList.totalPages
    })
  },
  methods: {
    ...mapActions(["fetchCoursesList", "prePage", "nextPage", "deleteCourse"]),
    onEdit(e) {
      this.$router.push({ path: `/editcourse/${e.id}/` })
    }
  },
  mounted() {
    if (this.courses.length == 0)
      this.fetchCoursesList();
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
