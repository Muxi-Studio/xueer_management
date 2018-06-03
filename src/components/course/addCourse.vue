<template>
  <div class="add_course">
    <m-input placeholder="课程名" label="课程名" v-model="course_name" class="add_item"></m-input>
    <m-input placeholder="教师" label="教师" v-model="teacher" class="add_item"></m-input>
    <div class="add_item">
    课程主分类：
    <m-select v-model="main_category">
      <m-option v-for="item in main_options" :key="item.value" :label="item.label" :value="item.value">
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
    <m-radio v-model="available" label="true">是</m-radio>
    <m-radio v-model="available" label="false">否</m-radio>
    </div>
    <m-button :on-click="addCourse">确定</m-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        course_name: "",
        teacher: "",
        main_category: 1,
        sub_category: 1,
        available: true,
        type: 1,
        id: 1,
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
            label:"无"
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
      ...mapGetters([])
    },
    methods: {
      ...mapActions(["addCourse", "getCourse"]),
    },
    mounted() {
      if(this.$route.params.id) {
        this.getCourse()
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
