export default function routes($stateProvider) {
  $stateProvider
    .state('comments', {
      url: '/comments',
      template: require('./comments.html'),
    })
    .state('comments.list', {
      url: '/list/:courseId?{page:int}',
      template: require('./comments.list.html'),
      controller: 'CommentsListCourseController',
      controllerAs: 'commentsList',
    })
    .state('comments.all', {
      url: '/all?{page:int}',
      template: require('./comments.list.html'),
      controller: 'CommentsListAllController',
      controllerAs: 'commentsList',
    })
    .state('comments.list.delete', {
      url: '/delete/?id&title&type',
      template: require('../../components/dialog/dialog.html'),
      controller: 'DialogDeleteController',
      controllerAs: 'dialogDelete',
    })
}

routes.$inject = ['$stateProvider']
