export default function routes($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      template: require('./users.html'),
    })
    .state('users.list', {
      url: '/list',
      template: require('./users.list.html'),
      controller: 'UsersListController',
      controllerAs: 'usersList',
    })
}

routes.$inject = ['$stateProvider']
