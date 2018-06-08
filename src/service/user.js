import Fetch from "./fetch.js";

let UserService = {
  getUsersList(params) {
    return Fetch("api/v1.0/users", {
      data: params,
      responseHeaders: ["link"]
    });
  },
  getNextUsersList(params) {
    return Fetch("api/v1.0/users", {
      data: params
    });
  },
  deletUser(id, token) {
    return Fetch("/api/v1.0/users/" + id + "/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(token + ":")
      }
    })
  }
}

export default UserService;