import CommentListService from "../../service/comment";
import { statSync } from "fs";
import State from "../state";

const state = {
  comments: [],
  commentTotalPages: 0,
  commentpage: 1,
  pre_page: 10,
};

const getters = {
  comments: () => state.comments,
  commentpage: () => state.commentpage,
  commentTotalPages: () => state.commentTotalPages
};

const actions = {
  // 第一次加载
  fetchCommentsList({ commit, state }) {
    CommentListService.getCommentsList(State.token).then(({ json, headers }) => {
      let totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("setComments", json);
      commit("setListMetaData", totalPages);
    });
  },
  nextCommentPage({ commit, state }) {
    if (state.commentpage < state.commentTotalPages) {
      commit("setPage", state.commentpage + 1);
      CommentListService.getNextCommentsList(state.commentpage, State.token).then(res => {
        commit("setComments", res);
      });
    }
  },
  preCommentPage({ commit, state }) {
    if (state.commentpage > 1) {
      commit("setPage", state.commentpage - 1);
      CommentListService.getNextCommentsList(state.commentpage, State.token).then(res => {
        commit("setComments", res);
      });
    }
  },
  deleteComment({ commit, state }, id) {
    CommentListService.deleteComment(id, State.token).then(res => {
      CommentListService.getNextCommentsList(state.commentpage).then(res => {
        commit("setComments", res);
      });
    })
  }
};

const mutations = {
  setComments(state, comments) {
    state.comments = comments
  },
  setPage(state, page) {
    state.commentpage = page;
  },
  setListMetaData(state, total) {
    state.commentTotalPages = total;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
