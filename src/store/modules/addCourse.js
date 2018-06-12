import CourseService from "../../service/course";
import { statSync } from "fs";
import State from "../state";

const state = {
  id: 1,
  course: {
    name: "",
    teacher: "",
    main_category: "1",
    sub_category: "0",
    type_id: "0",
    available: "true"
  },
  type_map: {
    "无分类": "0",
    "理科": "1",
    "文科": "2",
    "艺体": "3",
    "教育": "4"
  },
  main_category_map: {
    "公共课": "1",
    "通识课": "2",
    "专业课": "3",
    "素质课": "4"
  },
  sub_category_map: {
    "无分类": "0",
    "通识核心课": "1",
    "通识选修课": "2"
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
    // 二级分类和学分分类 可选
    if (state.course.sub_category != "0" ) course_info.sub_category_id = parseInt(state.course.sub_category);
    if (state.course.type_id != "0" ) course_info.type_id = parseInt(state.course.type_id);

    CourseService.addCourse(course_info, State.token).then(res => {
      // window.locaition.href = "/list"
      console.log("success")
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
    CourseService.editCourse(state.id, state.course, State.token).then(res => {
      window.locaition.href = "/list";
    })
  },
  reset({ commit }) {
    commit("reset")
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
    state.course.available = (json.available == true) ? "true" : "false"
    // console.log(state.course)
  },
  reset(state) {
    state.course.name = "";
    state.course.teacher = "";
    state.course.main_category = "0";
    state.course.sub_category = "0";
    state.course.type_id = "0";
    state.course.available = "true";
  },
  updateName(state, value) {
    state.course.name = value;
  },
  updateTeacher(state, value) {
    state.course.teacher = value;
  },
  updateMain(state, value) {
    state.course.main_category = value;
  },
  updateSub(state, value) {
    state.course.sub_category = value;
  },
  updateType(state, value) {
    state.course.type_id = value;
  },
  updateAvailable(state, value) {
    state.course.available = value;
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};
