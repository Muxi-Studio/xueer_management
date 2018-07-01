import Fetch from "./fetch.js";

let ArticleService = {
  getArticlesList(token) {
    return Fetch("/api/v1.0/tips/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      responseHeaders: ["link"]
    });
  },
  getNextArticlesList(page, token) {
    return Fetch("/api/v1.0/tips/?page=" + page, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
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