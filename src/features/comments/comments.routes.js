export default function routes($stateProvider) {
  $stateProvider
    .state('comments', {
      url: '/comments',
      template: require('./comments.html'),
    })
    .state('comments.list', {
      url: '/list/:courseId',
      template: require('./comments.list.html'),
      controller: 'CommentsListController',
      controllerAs: 'commentsList',
    })
}

routes.$inject = ['$stateProvider']
