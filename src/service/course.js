import Fetch from "./fetch.js";

let CourseService = {
  getCoursesList(params) {
    return Fetch("/api/v1.0/courses", {
      data: params,
      responseHeaders: ["link"]
    });
  },
  getNextCoursesList(params) {
    return Fetch("/api/v1.0/courses", {
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
  },
  addCourse(course, token) {
    return Fetch("/api/v1.0/courses/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(token + ":")
      },
      data: course
    })
  },
  editCourse(id, course, token) {
    return Fetch("/api/v1.0/courses/" + id + "/", {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(token + ":")
      },
      data: course
    })
  },
  getCourse(id) {
    return Fetch("/api/v1.0/courses/" + id + "/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}

export default CourseService;
