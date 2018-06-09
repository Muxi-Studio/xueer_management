<template>
  <div class="add_course">
    <m-input placeholder="课程名" label="课程名" v-model="course.name" class="add_item"></m-input>
    <m-input placeholder="教师" label="教师" v-model="course.teacher" class="add_item"></m-input>
    <div class="add_item">
    课程主分类：
    <m-select v-model="course.main_category">
      <m-option v-for="item in main_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    二级分类：
    <m-select v-model="course.sub_category">
      <m-option v-for="item in sub_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    学分类别：
    <m-select v-model="course.type_id">
      <m-option v-for="item in type_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    是否在本学期开设：
    <m-radio v-model="course.available" label="1">是</m-radio>
    <m-radio v-model="course.available" label="0">否</m-radio>
    </div>
    <m-button :on-click="submit">确定</m-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        id: this.$route.params.id,
        main_options: [
          {
            value: 1,
            label:"公共课"
          },
          {
            value: 2,
            label:"通识课"
          },
          {
            value: 3,
            label:"专业课"
          },
          {
            value: 4,
            label:"素质课"
          }
        ],
        sub_options: [
          {
            value: 0,
            label:"无分类"
          },
          {
            value: 1,
            label:"通识核心课"
          },
          {
            value: 2,
            label:"通识选修课"
          }
        ],
        type_options: [
          {
            value: 1,
            label:"理科"
          },
          {
            value: 2,
            label:"文科"
          },
          {
            value: 3,
            label:"艺体"
          },
          {
            value: 4,
            label:"教育"
          }
        ]
      }
    },
    computed: {
      ...mapGetters(["course"])
    //   ...mapState({
    //   course: state => state.addCourse.course
    // })
    },
    methods: {
      ...mapActions(["addCourse", "getCourse", "editCourse"]),
      submit() {
        if (this.id) {
          this.editCourse()
        } else {
          this.addCourse()
        }
      }
    },
    mounted() {
      if(this.id) {
        this.getCourse(this.id).then();
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/utility.scss";
.add_course {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add_item {
  margin-bottom: 20px;
  text-align: left;
}
</style>
