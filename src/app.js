/**
 * app.js
 * the entry of the whole app
 *
 * by zindex
 */

// import css
import 'material-design-lite/material.min.css'
import './app.css'
import './simditor.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'
import 'material-design-lite/material.min'

// import deps
import AppController from './app.controller'
import routing from './app.config'
import home from './features/home'
import courses from './features/courses'
import users from './features/users'
import comments from './features/comments'
import tips from './features/tips'

// import service
import authService from './services/auth.service'
import categoryService from './services/category.service'

// import directive
import convertToNumber from './directives/convertToNum.directive'
/**
 * app module
 */
angular.module('app', [angularUIRouter, home, courses, users, comments, tips, authService, categoryService, convertToNumber])
  .config(routing)
  .controller('AppController', AppController)
