import ArticleListService from "../../service/article";
import { statSync } from "fs";
import State from "../state";

const state = {
  articles: [],
  articleTotalPages: 0,
  articlepage: 1,
  pre_page: 20
};

const getters = {
  articles: () => state.articles,
  articlepage: () => state.articlepage,
  articleTotalPages: () => state.articleTotalPages
};

const actions = {
  fetchArticlesList({ commit, state }) {
    ArticleListService.getArticlesList().then(({ json, headers }) => {
      let totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("setArticles", json);
      commit("setListMetaData", totalPages);
    });
  },
  nextPage({ commit, state }) {
    if (state.articlepage <= state.articleTotalPages) {
      commit("setPage", state.page + 1);
      ArticleListService.getNextArticlesList(state.articlepage, State.token).then(res => {
        commit("setArticles", res);
      });
    }
  },
  prePage({ commit, state }) {
    if (state.articlepage > 1) {
      commit("setPage", state.articlepage - 1);
      ArticleListService.getNextArticlesList(state.articlepage, State.token).then(res => {
        commit("setArticles", res);
      });
    }
  },
  deleteArticle({ commit, state }, id) {
    ArticleListService.deletArticle(id, State.token).then(res => {
      ArticleListService.getNextArticlesList(state.articlepage, State.token).then(res => {
        commit("setArticles", res);
      });
    })
  }
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setPage(state, page) {
    state.articlepage = page;
  },
  setListMetaData(state, total) {
    state.articleTotalPages = total;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
