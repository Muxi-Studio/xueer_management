import Cookie from "../service/cookie";

const mutations = {
  isLoading(state, flag) {
    state.is_loading = flag;
  },
  setToken(state, token) {
    state.token = token
    console.log(state.token)
  },
  isLogin(state) {
    state.is_logined = true
  }
};

export default mutations;
