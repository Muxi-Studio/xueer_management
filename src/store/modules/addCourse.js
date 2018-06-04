import CourseService from "../../service/course";
import { statSync } from "fs";
import State from "../state";

const state = {
  id: 1,
  course: {},
  type_map: {
    "理科": 1,
    "文科": 2,
    "艺体": 3,
    "教育": 4
  },
  main_category_map: {
    "公共课": 1,
    "通识课": 2,
    "专业课": 3,
    "素质课": 4
  },
  sub_category_map: {
    "无分类": 0,
    "通识核心课": 1,
    "通识选修课": 2
  }
};

const getters = {
  id: () => state.id,
  course: () => state.course,
  type_map: () => state.type_map,
  main_category_map: () => state.main_category_map,
  sub_category_map: () => state.sub_category_map
};

const actions = {
  addCourse({ state, commit }) {
    let course_info = {};
    course_info.name = state.course.name;
    course_info.teacher = state.course.teacher;
    course_info.category_id = parseInt(state.course.main_category);
    course_info.sub_category_id = parseInt(state.course.sub_category);
    course_info.type_id = parseInt(state.course.type_id);
    // course_info.introduction = "";
    // course_info.credit = 0;

    CourseService.addCourse(course_info, State.token).then(res => {
      window.locaition.href = "/list"
    })
  },
  getCourse({ state, commit }, id) {
    commit("setID", id)
    CourseService.getCourse(id).then(json => {
      commit("setCourse", json)
    })
  },
  editCourse({ state, commit }) {
    state.course.id = state.id;
    state.course.available = ((state.course.available == "1") ? true : false);
    CourseService.editCourse(state.id, state.course, State.token).then(res => {
      window.locaition.href = "/list";
    })
  }
};

const mutations = {
  setID(state, id) {
    state.id = id
  },
  setCourse(state, json) {
    state.course.name = json.title;
    state.course.teacher = json.teacher;
    state.course.main_category = state.main_category_map[json.main_category];
    state.course.sub_category = state.sub_category_map[json.sub_category];
    state.course.type_id = state.type_map[json.credit_category];
    state.course.available = (json.available === true) ? 1 : 0
    console.log(state.course)
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
