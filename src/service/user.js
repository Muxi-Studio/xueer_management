import Fetch from "./fetch.js";

let UserService = {
  getUsersList() {
    return Fetch("/api/v1.0/users/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      responseHeaders: ["link"]
    });
  },
  getNextUsersList(page) {
    return Fetch("/api/v1.0/users/?page=" + page, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  deleteUser(id, token) {
    return Fetch("/api/v1.0/users/" + id + "/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + token
      }
    })
  }
}

export default UserService;