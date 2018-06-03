import CourseService from "../../service/course";
import { statSync } from "fs";
import State from "../state";

const state = {
  id: 1,
  course_info: {},
  type_map: {
    "理科": 1,
    "文科": 2,
    "艺体": 3,
    "教育": 4
  }
};

const getters = {
  id: () => state.id,
  course_info: () => state.course_info,
  type_map: () => state.type_map
};

const actions = {
  addCourse({ state, commit }, course) {
    CourseService.addCourse(course, State.token).then(res => {
      window.locaition.href = "/list"
    })
  },
  getCourse({ state, commit }) {
    CourseService.getCoursesList(state.id).then(res => {
      commit("setCourse", res)
    })
  },
  editCourse({ state, commit }, course) {
    CourseService.editCourse(state.id, course, State.token).then(res => {
      window.locaition.href = "/list";
    })
  },
  setID({ state, commit }, id) {
    commit("setID", id)
  }
};

const mutations = {
  setID(state , id) {
    state.id = id
  },
  setCourse(state, course) {
    state.course_info.course_name = course.title;
    state.course_info.teacher = course.teacher;
    state.course_info.main_category = course.main_category;
    state.course_info.sub_catrgory = course.sub_catrgory;
    state.course_info.type_id = state.map[course.credit_category];
  }

};
export default {
  state,
  getters,
  actions,
  mutations
};
