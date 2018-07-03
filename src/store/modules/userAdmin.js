import UserService from "../../service/user";
import { statSync } from "fs";
import State from "../state"

const state = {
  userID: 1,
  user: {
    username: "",
    role_id: 1
  }
}

const getters = {
  userID: () => state.userID,
  user: () => state.user
}

const actions = {
  getUser({ state, commit }, id) {
    commit("setUserID", id)
    UserService.getUser(id).then(json => {
      commit("setUser", json)
    })
  },
  editUser({ state, commit }) {
    let role = {
      role_id: parseInt(state.user.role_id)
    }
    // console.log(state.userID, role)
    if (role.role_id != 0) {
      UserService.editUser(state.userID, role, State.token).then(res =>{
        // console.log("success")
        window.location.href = "/user"
      })
    }
  }
}

const mutations = {
  setUserID(state, id) {
    state.userID = id
  },
  setUser(state, json) {
    state.user.username = json.username;
    state.user.role = 0;
  },
  reset(state) {
    state.user.username = "";
  },
  updateUsername(state, value) {
    state.user.username = value;
  },
  updateRole(state, value) {
    state.user.role_id = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};