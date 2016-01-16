/**
 * app.js
 * the entry of the whole app
 *
 * by zindex
 */

// import css
import 'angular-material/angular-material.css'
import './app.css'

// import vendors
import angular from 'angular'
import angularUIRouter from 'angular-ui-router'
import angularMaterial from 'angular-material'

// import deps
import routing from './app.config'
import home from './features/home'
import courses from './features/courses'

/**
 * app module
 */
angular.module('app', [angularUIRouter, angularMaterial, home, courses])
  .config(routing)
