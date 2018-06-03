import Fetch from "./fetch.js";

let CourseService = {
  getCoursesList(params) {
    return Fetch("api/v1.0/courses", {
      data: params,
      responseHeaders: ["link"]
    });
  },
  getNextCoursesList(params) {
    return Fetch("api/v1.0/courses", {
      data: params
    });
  },
  deletCourse(id, token) {
    return Fetch("/api/v1.0/courses/" + id + "/", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(token + ":")
      }
    })
  }
}

export default CourseService;
