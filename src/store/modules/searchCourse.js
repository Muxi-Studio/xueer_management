import SearchService from "../../service/search";

// params hepler
function getQueryParams(state) {
  const obj = {
    keywords: state.key_word,
    page: state.search_page,
    pre_page: state.pre_page
  };
  return obj;
}

const state = {
  result: [],
  search_page: 1,
  key_word: "",
  total_search_pages: 0,
  pre_page: 20
};
const getters = {
  search_end: state => {
    if (state.total_search_pages === 0) {
      return true;
    }
    return state.search_page == state.total_search_pages;
  }
};
const actions = {
  setKeyWord({ commit }, key_word) {
    commit("setKeyWord", key_word);
  },
  searchCourse({ commit }) {
    commit("initPage");
    const param = getQueryParams(state);
    SearchService.searchCourse(param).then(({ json, headers }) => {
      const totalPages = Number(
        /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
      );
      commit("initResult");
      commit("insertResult", json);
      commit("settotalPages", totalPages);
    });
  },
  searchNextCourse({ commit }) {
    commit("searchPageAdd");
    const param = getQueryParams(state);
    SearchService.searchCourse(param).then(({ json }) => {
      commit("initResult");
      commit("insertResult", json);
    });
  },
  searchPreCourse({ commit }) {
    commit("searchPageminus");
    const param = getQueryParams(state);
    SearchService.searchCourse(param).then(({ json }) => {
      commit("initResult");
      commit("insertResult", json);
    });
  }
};
const mutations = {
  setKeyWord(state, key_word) {
    state.key_word = key_word;
  },
  initPage(state) {
    state.search_page = 1;
  },
  initResult(state) {
    state.result = [];
  },
  insertResult(state, json) {
    state.result = state.result.concat(json);
  },
  settotalPages(state, totalPages) {
    state.total_search_pages = totalPages;
  },
  searchPageAdd(state) {
    state.search_page++;
  },
  searchPageminus(state) {
    state.search_page--;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
