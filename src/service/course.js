import Fetch from "./fetch.js";

let CourseService = {
  fetchCourseList(page) {
    return Fetch("/api/v1.0/courses/?sort=view&page=" + page);
  },
}

export default CourseService;