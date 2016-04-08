export default function routes($stateProvider) {
  $stateProvider
    .state('courses', {
      url: '/courses',
      template: require('./courses.html'),
    })
    .state('courses.list', {
      url: '/list/?{page:int}',
      template: require('./courses.list.html'),
      controller: 'CoursesListController',
      controllerAs: 'coursesList',
    })
    .state('courses.list.delete', {
      url: '/delete/?id&title&type',
      template: require('../../components/dialog/dialog.html'),
      controller: 'DialogDeleteController',
      controllerAs: 'dialogDelete',
    })
    .state('courses.add', {
      url: '/add',
      template: require('./courses.add.html'),
      controller: 'CoursesAddController',
      controllerAs: 'coursesAdd',
    })
    .state('courses.update', {
      url: '/update/:cid',
      template: require('./courses.add.html'),
      controller: 'CoursesUpdateController',
      controllerAs: 'coursesAdd',
    })
    .state('courses.search', {
      url: '/search',
      template: require('./courses.search.html'),
      controller: 'CoursesSearchController',
      controllerAs: 'coursesSearch',
    })
}

routes.$inject = ['$stateProvider']
