import UserListService from "../../service/user";
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
  users: [],
  totalPages: 0,
  page: 1,
  sort: "view",
  pre_page: 20,
};

const getters = {
  users: () => state.users,
  page: () => state.page,
  totalPages: () => state.totalPages
};

const actions = {
  fetchUsersList({ commit, state }) {
    commit("reset");
    UserListService.getUsersList(getQueryParams(state)).then(({ json, headers }) => {
      let totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("setUsers", json);
      commit("setListMetaData", totalPages);
    });
  },
  nextPage({ commit, state }) {
    if (state.page <= state.totalPages) {
      commit("setPage", state.page + 1);
      UserListService.getNextUsersList(getQueryParams(state)).then(res => {
        commit("setUsers", res);
      });
    }
  },
  prePage({ commit, state }) {
    if (state.page > 1) {
      commit("setPage", state.page - 1);
      UserListService.getNextUsersList(getQueryParams(state)).then(res => {
        commit("setUsers", res);
      });
    }
  },
  deleteUser({ commit, state }, user) {
    console.log(user.id);
    UserListService.deletUser(user.id, State.token)
  }
};

const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setPage(state, page) {
    state.page = page;
  },
  reset(state) {
    state.page = 1;
    state.users = [];
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
