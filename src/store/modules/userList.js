import UserListService from "../../service/user";
import { statSync } from "fs";
import State from "../state";

const state = {
  users: [],
  userTotalPages: 0,
  userpage: 1,
  pre_page: 20,
};

const getters = {
  users: () => state.users,
  userpage: () => state.userpage,
  userTotalPages: () => state.userTotalPages
};

const actions = {
  // 第一次加载
  fetchUsersList({ commit, state }) {
    commit("reset");
    UserListService.getUsersList().then(({ json, headers }) => {
      let totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("setUsers", json);
      commit("setListMetaData", totalPages);
    });
  },
  nextUserPage({ commit, state }) {
    if (state.userpage < state.userTotalPages) {
      commit("setPage", state.userpage + 1);
      UserListService.getNextUsersList(state.userpage).then(res => {
        console.log(res)
        commit("setUsers", res);
      });
    }
  },
  preUserPage({ commit, state }) {
    if (state.userpage > 1) {
      commit("setPage", state.userpage - 1);
      UserListService.getNextUsersList(state.userpage).then(res => {
        commit("setUsers", res);
      });
    }
  },
  deleteUser({ commit, state }, user) {
    console.log(user.id);
    UserListService.deleteUser(user.id, State.token)
  }
};

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setPage(state, page) {
    state.userpage = page;
  },
  setListMetaData(state, total) {
    state.userTotalPages = total;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
