import Fetch from "./fetch.js";

const SearchService = {
  searchCourse(params) {
    return Fetch("/api/v1.0/search", {
      data: params,
      responseHeaders: ["link"]
    });
  }
};
export default SearchService;
