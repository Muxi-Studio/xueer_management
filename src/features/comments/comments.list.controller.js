/**
 * users.controller.js
 * by zindex
 */
export default class CommentsListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.comments = []
    $http.get('/api/v1.0/courses/' + $state.params.courseId + '/comments/').then((response) => {
      this.comments = response.data
    })
  }
  onDeleteClick(comment) {
    this.$state.go('comments.list.delete', {
      id: comment.id,
      type: 'comments',
    })
  }
}

CommentsListController.$inject = ['$http', '$state']
