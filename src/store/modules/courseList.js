import CourseListService from "../../service/course";
import { statSync } from "fs";
import State from "../state";

// params hepler
function getQueryParams(state) {
  let mainCatKey;
  let obj = {
    page: state.page,
    sort: state.sort,
    pre_page: state.pre_page
  };
  if (state.catgories.length >= 0) {
    state.catgories.forEach(item => {
      obj[item] = 1;
    });
  }
  return obj;
}

const state = {
  courses: [],
  totalPages: 0,
  page: 1,
  sort: "view",
  pre_page: 20,
  catgories: [],
};

const getters = {
  courses: () => state.courses,
  page: () => state.page,
  totalPages: () => state.totalPages
};

const actions = {
  fetchCoursesList({ commit, state }) {
    commit("reset");
    CourseListService.getCoursesList(getQueryParams(state)).then(({ json, headers }) => {
      let totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("setCourses", json);
      commit("setListMetaData", totalPages);
    });
  },
  nextPage({ commit, state }) {
    if (state.page <= state.totalPages) {
      commit("setPage", state.page + 1);
      CourseListService.getNextCoursesList(getQueryParams(state)).then(res => {
        commit("setCourses", res);
      });
    }
  },
  prePage({ commit, state }) {
    if (state.page > 1) {
      commit("setPage", state.page - 1);
      CourseListService.getNextCoursesList(getQueryParams(state)).then(res => {
        commit("setCourses", res);
      });
    }
  },
  deleteCourse({ commit, state }, id) {
    CourseListService.deletCourse(id, State.token)
  }
};

const mutations = {
  setCourses(state, courses) {
    state.courses = courses
  },
  setPage(state, page) {
    state.page = page;
  },
  reset(state) {
    state.page = 1;
    state.courses = [];
  },
  setListMetaData(state, total) {
    state.totalPages = total;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
