export default function routes($stateProvider) {
  $stateProvider
    .state('courses', {
      url: '/',
      template: require('./courses.html'),
      controller: 'CoursesController',
      controllerAs: 'courses',
    })
}

routes.$inject = ['$stateProvider']
