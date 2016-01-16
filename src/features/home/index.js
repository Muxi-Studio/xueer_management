/**
 * index.js
 * the entry of home module
 *
 * by zindex
 */

// import css
import './home.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'

// import deps
import routing from './home.routes'
import HomeController from './home.controller'

/**
 * home module
 */
export default angular.module('app.home', [angularUIRouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name
