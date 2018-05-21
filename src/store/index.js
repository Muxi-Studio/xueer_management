import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import addArticle from "./modules/addArticle";
import addCourse from "./modules/addCourse";
import articleList from "./modules/articleList";
import comment from "./modules/comment";
import courseList from "./modules/courseList";
import searchCourse from "./modules/searchCourse";
import userAdmin from "./modules/userAdmin";
import userList from "./modules/userList";

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    addArticle,
    addCourse,
    articleList,
    comment,
    courseList,
    searchCourse,
    userAdmin,
    userList
  },
  mutations
});
export default store;
