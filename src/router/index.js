import Vue from "vue";
import Router from "vue-router";
import Course from "../components/course/course";
import CourseList from "../components/course/courseList";
import AddCourse from "../components/course/addCourse";
import SearchCourse from "../components/course/searchCourse";
import CommentList from "../components/comment/CommentList";
import User from "../components/user/user";
import UserList from "../components/user/userList";
import UserAdmin from "../components/user/UserAdmin";
import Article from "../components/article/article";
import AddArticle from "../components/article/addArticle";
import ArticleList from "../components/article/articleList";
import Landing from "../components/common/landing";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      name: "landing",
      path: "/landing",
      component: Landing
    },
    {
      name: "course",
      path: "/",
      component: Course,
      children: [
        {
          path: "list",
          component: CourseList
        },
        {
          path: "addcourse",
          component: AddCourse
        },
        {
          path: "searchcourse",
          component: SearchCourse
        },
        {
          path: "editcourse/:id",
          component: AddCourse
        }
      ]
    },
    {
      name: "comment",
      path: "/comment",
      component: CommentList
    },
    {
      name: "user",
      path: "/user",
      component: User,
      children: [
        {
          path: "list",
          component: UserList
        },
        {
          path: "admin",
          component: UserAdmin
        }
      ]
    },
    {
      name: "article",
      path: "/article",
      component: Article,
      children: [
        {
          path: "list",
          component: ArticleList
        },
        {
          path: "add",
          component: AddArticle
        }
      ]
    },
  ]
});
