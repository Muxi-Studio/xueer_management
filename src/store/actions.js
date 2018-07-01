import SignService from "../service/sign";
import Cookie from "../service/cookie";

const actions = {
  isLoading({ commit }, flag) {
    commit("isLoading", flag);
  },
  getToken({ commit }) {
    let email = SignService.getEmail();
    SignService.getToken(email).then(res => {
      if (res !== null && res !== undefined) {
        Cookie.setCookie("token", res.token);
        commit("isLoading", false);
        window.location.href="/list";
      } else {
        SignService.getUsername(email).then(info => {
          SignService.register(info.username, email).then(res => {
            SignService.getToken(email).then(res => {
              Cookie.setCookie("token", res.token);
              commit("isLoading", false);
              window.location.href="/list";
            });
          });
        });
      }
    });
  },
  setToken({ state, commit }) {
    /* for development
     开发时Cookie.getCookie("token")为空
    */
    if (state.token !== "") {
      commit("isLogin");
    }
    /** for production
    let token = Cookie.getCookie("token");
    commit("setToken", token);
    commit("isLogin");
    */
  }
};

export default actions;
