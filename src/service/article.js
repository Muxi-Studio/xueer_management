import Fetch from "./fetch.js";

let ArticleService = {
  getArticlesList() {
    return Fetch("/api/v1.0/tips/", {
      method: "GET",
      responseHeaders: ["link"]
    });
  },
  getNextArticlesList(page) {
    return Fetch("/api/v1.0/tips/?page=" + page, {
      method: "GET"
    });
  },
  deleteArticle(id, token) {
    return Fetch("/api/v1.0/tips/" + id + "/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      }
    })
  },
  addArticle(tip, token) {
    return Fetch("/api/v1.0/tips/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      },
      data: tip
    })
  },
  editArticle(id, tip, token) {
    return Fetch("/api/v1.0/tips/" + id + "/", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      },
      data: tip
    })
  },
  getArticle(id) {
    return Fetch("/api/v1.0/tips/" + id + "/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}

export default ArticleService;