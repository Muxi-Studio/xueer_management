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
        <!-- <m-table-col label="编辑" prop="active" width="10%">
          <template scope="row">
              <m-button :on-click="onclick.bind(this, row.index)">Delete</m-button>
          </template> -->
        <!-- </m-table-col> -->
      </m-table>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";

  export default {
    name: "CourseList",
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(["page", "courses"])
    },
    methods: {
      ...mapActions(["fetchCoursesList"])
    },
    mounted() {
      this.fetchCoursesList();
    }
  }
</script>
