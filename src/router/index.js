import Vue from "vue";
import Router from "vue-router";
import Course from "../components/course/course";
import CourseList from "../components/course/courseList";
import AddCourse from "../components/course/addCourse";
import SearchCourse from "../components/course/searchCourse";
import CommentList from "../components/comment/CommentList";
import User from "../components/user/user";
import UserList from "../components/user/userList";
import UserAdmin from "../components/user/userAdmin";
import Article from "../components/article/article";
import AddArticle from "../components/article/addArticle";
import ArticleList from "../components/article/articleList";
import Landing from "../components/common/landing";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: "/webadmin",
  routes: [
    {
      name: "landing",
      path: "/landing",
      component: Landing
    },
    {
      path: "/",
      redirect: "/list"
    },
    {
      // name: "course",
      path: "/list",
      component: Course,
      children: [
        {
          // path: "list",
          path: "/",
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
      // name: "user",
      path: "/user",
      component: User,
      children: [
        {
          // path: "list",
          path: "/",
          component: UserList
        },
        {
          path: "admin/:id",
          component: UserAdmin
        }
      ]
    },
    {
      // name: "article",
      path: "/article",
      component: Article,
      children: [
        {
          path: "/",
          component: ArticleList
        },
        {
          path: "add",
          component: AddArticle
        },
        {
          path: "edit/:id",
          component: AddArticle
        }
      ]
    },
  ]
});
