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
        Cookie.setCookie("xueer_token", res.token);
        commit("isLoading", false);
        window.location.href="/webadmin/list";
      } else {
        SignService.getUsername(email).then(info => {
          SignService.register(info.username, email).then(res => {
            SignService.getToken(email).then(res => {
              Cookie.setCookie("xueer_token", res.token);
              commit("isLoading", false);
              window.location.href="/webadmin/list";
            });
          });
        });
      }
    });
  },
  setToken({ state, commit }) {
    let token = Cookie.getCookie("xueer_token");
    commit("setToken", token);
    commit("isLogin");
  }
};

export default actions;
