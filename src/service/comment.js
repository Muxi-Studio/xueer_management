import Fetch from "./fetch.js";

let CommentService = {
  getCommentsList(token) {
    return Fetch("/api/v1.0/comments/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      },
      responseHeaders: ["link"]
    });
  },
  getNextCommentsList(page, token) {
    return Fetch("/api/v1.0/comments/?page=" + page, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      },
    });
  },
  deleteComment(id, token) {
    return Fetch("/api/v1.0/comments/" + id + "/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      }
    })
  }
}

export default CommentService;