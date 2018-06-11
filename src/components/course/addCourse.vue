<template>
  <div class="add_course">
    <m-input placeholder="课程名" label="课程名" v-model="name" class="add_item"></m-input>
    <m-input placeholder="教师" label="教师" v-model="teacher" class="add_item"></m-input>
    <div class="add_item">
    课程主分类：
    <m-select v-model="main_category" :defaultvalue="defaultMain">
      <m-option v-for="item in main_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    二级分类：
    <m-select v-model="sub_category" :defaultvalue="defaultSub">
      <m-option v-for="item in sub_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    学分类别：
    <m-select v-model="type_id" :defaultvalue="defaultTypeId">
      <m-option v-for="item in type_options" :key="item.value" :label="item.label" :value="item.value">
      </m-option>
    </m-select>
    </div>
    <div class="add_item">
    是否在本学期开设：
    <m-radio v-model="available" label=true>是</m-radio>
    <m-radio v-model="available" label=false>否</m-radio>
    </div>
    <m-button :on-click="submit">确定</m-button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        id: this.$route.params.id,
        main_options: [
          {
            value: 0,
            label: "无分类"
          },
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
            value: 0,
            label:"无分类"
          },
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
      // 不能传一个对象
      name: {
        get() {
          return this.$store.state.addCourse.course.name
        },
        set (value) {
          this.$store.commit("updateName",value)
        }
      },
      teacher: {
        get() {
          return this.$store.state.addCourse.course.teacher
        },
        set (value) {
          this.$store.commit("updateTeacher", value)
        }
      },
      main_category: {
        get() {
          return this.$store.state.addCourse.course.main_category
        },
        set (value) {
          this.$store.commit("updateMain", value)
        }
      },
      sub_category: {
        get() {
          return this.$store.state.addCourse.course.sub_category
        },
        set (value) {
          this.$store.commit("updateSub", value)
        }
      },
      type_id: {
        get() {
          return this.$store.state.addCourse.course.type_id
        },
        set (value) {
          this.$store.commit("updateType", value)
        }
      },
      available: {
        get() {
          return this.$store.state.addCourse.course.available
        },
        set (value) {
          this.$store.commit("updateAvailable", value)
        }
      },
      defaultMain: function() {
        return this.main_options.find((e)=>{
            return e.value == this.main_category
        }).label
      },
      defaultSub: function() {
        return this.sub_options.find((e)=>{
            return e.value == this.sub_category
        }).label
      },
      defaultTypeId: function() {
        return this.type_options.find((e)=>{
            return e.value == this.type_id
        }).label
      }
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
        this.getCourse(this.id);
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
