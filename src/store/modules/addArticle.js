import ArticleService from "../../service/article";
import { statSync } from "fs";
import State from "../state";

const state = {
  id: 1,
  title: "",
  author: "",
  img: "",
  banner: "",
  input: "",
  body: ""
};

const getters = {
  id: () => state.id,
  title: () => state.title,
  author: () => state.author,
  img: () => state.img,
  banner: () => state.banner,
  input: () => state.input,
  body: () => state.body,
};

const actions = {
  addArticle({ state, commit }) {
    let article_info = {
        title: state.title,
        author: state.author,
        img_url: state.img,
        banner_url: state.banner,
        body: state.body
    }
    ArticleService.addArticle(article_info, State.token).then(res => {
      commit("reset");
    })
  },
  getArticle({ state, commit }, id) {
    commit("setID", id)
    ArticleService.getArticle(id).then(json => {
      commit("setArticle", json)
    })
  },
  editArticle({ state, commit }) {
    let article_info = {
        id: state.id,
        title: state.title,
        author: state.author,
        img_url: state.img,
        banner_url: state.banner,
        body: state.body
    }
    ArticleService.editArticle(state.id, article_info, State.token).then(res => {
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
  setArticle(state, json) {
    state.title = json.title;
    state.input = json.body;
    state.author = json.author;
    state.banner = json.banner_url;
    state.img = json.img_url;
  },
  reset(state) {
    state.title = "";
    state.input = "";
    state.author = "";
    state.banner = "";
    state.img = "";
  },
  updateTitle(state, value) {
    state.title = value;
  },
  updateAuthor(state, value) {
    state.author = value;
  },
  updateInput(state, value) {
    state.input = value;
  },
  updateImg(state, value) {
    state.img = value;
  },
  updateBanner(state, value) {
    state.banner = value;
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};
