import CourseListService from "../../service/course";
import { statSync } from "fs";

const state = {
  courses: [],
  totalPages: 0,
  page: 1,
  sort: "view",
  pre_page: 20
};

const getters = {
  courses: () => state.courses,
  page: () => state.page
};

const actions = {
  fetchCoursesList({ commit, state }) {
    CourseListService.fetchCoursesList(state.page).then(res => {
      commit("getCourses", res.json);
      console.log("action")
    });
  },
};

const mutations = {
  getCourses(state, courses) {
    state.courses = courses
  },
  nextPage(state) {
    state.page++;
  },
  prePage(state) {
    state.page--;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
