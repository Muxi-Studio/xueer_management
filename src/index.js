/*
* index.js
* the entry of the whole App
* by zindex
 */

// Import angular
import 'angular';
// Import modules
import home from './home/home.module';

// Create the App Module
export const AppModule = angular.module('App', [
    home
]);

