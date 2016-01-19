/**
 * app.js
 * the entry of the whole app
 *
 * by zindex
 */

// import css
import 'material-design-lite/material.min.css'
import './app.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'
import 'material-design-lite/material.min'

// import deps
import AppController from './app.controller'
import routing from './app.config'
import home from './features/home'
import courses from './features/courses'

/**
 * app module
 */
angular.module('app', [angularUIRouter, home, courses])
  .config(routing)
  .controller('AppController', AppController)
