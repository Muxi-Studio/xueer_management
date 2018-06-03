<template>
  <div class="add_course">
    <m-input placeholder="课程名" label="课程名" v-model="course_name" class="add_item"></m-input>
    <m-input placeholder="教师" label="教师" v-model="teacher" class="add_item"></m-input>
    <div class="add_item">
    课程主分类：
    <m-select v-model="main_category">
      <m-option v-for="item in main_options" :key="item.value" :label="item.label" :value="`${item.value}`">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    二级分类：
    <m-select v-model="sub_category">
      <m-option v-for="item in sub_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    学分类别：
    <m-select v-model="type">
      <m-option v-for="item in type_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    是否在本学期开设：
    <m-radio v-model="available" label="1">是</m-radio>
    <m-radio v-model="available" label="0">否</m-radio>
    </div>
    <m-button :on-click="submit">确定</m-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        course_name: "",
        teacher: "",
        main_category: "1",
        sub_category: "1",
        available: "1",
        type: "1",
        id: 1,
        main_options: [
          {
            value: "1",
            label:"公共课"
          },
          {
            value: "2",
            label:"通识课"
          },
          {
            value: "3",
            label:"专业课"
          },
          {
            value: "4",
            label:"素质课"
          }
        ],
        sub_options: [
          {
            value: "0",
            label:"无"
          },
          {
            value: "1",
            label:"通识核心课"
          },
          {
            value: "2",
            label:"通识选修课"
          }
        ],
        type_options: [
          {
            value: "1",
            label:"理科"
          },
          {
            value: "2",
            label:"文科"
          },
          {
            value: "3",
            label:"艺体"
          },
          {
            value: "4",
            label:"教育"
          }
        ],
        // course_info: {
        //   type: Object
        // }
      }
    },
    computed: {
      ...mapGetters(["course_info"])
    },
    methods: {
      ...mapActions(["addCourse", "getCourse", "editCourse", "setID"]),
      submit() {
        this.course_info.name = this.course_name;
        this.course_info.teacher = this.teacher;
        this.course_info.category_id = parseInt(this.main_category);
        this.course_info.sub_category_id = parseInt(this.sub_category);
        this.course_info.type_id = parseInt(this.type);
        if (this.$route.params.id) {
          this.course_info.id = this.$route.params.id;
          this.course_info.available = ((this.available == "1") ? true : false);
          this.editCourse(this.course_info)
        } else {
          this.addCourse(this.course_info)
        }
      }
    },
    mounted() {
      if(this.$route.params.id) {
        this.setID(this.$route.params.id);
        this.getCourse();
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
