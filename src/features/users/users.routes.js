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
    .state('users.list.delete', {
      url: '/delete/?id&title&type',
      template: require('../../components/dialog/dialog.html'),
      controller: 'DialogDeleteController',
      controllerAs: 'dialogDelete',
    })
}

routes.$inject = ['$stateProvider']
