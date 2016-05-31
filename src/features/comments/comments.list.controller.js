/**
 * users.controller.js
 * by zindex
 */
export default class CommentsListController {
  constructor($http, $state) {
    this.$http = $http
    this.$state = $state
    this.comments = []
    this.hasNext = false
    this.pid = this.$state.params.page || 1
    $http.get('/api/v1.0/courses/' + $state.params.courseId + '/comments/?page=' + this.pid)
      .then((response) => {
        this.hasNext = /<([\da-z.\/:?=]+)>; rel="next"/.test(response.headers('link'))
        this.comments = response.data
      })
  }
  onDeleteClick(comment) {
    this.$state.go('comments.list.delete', {
      id: comment.id,
      type: 'comments',
    })
  }
  onNextClick() {
    if (!this.$state.params.page) {
      this.$state.go(this.$state.current, {
        page: 2,
      })
    } else {
      this.$state.go(this.$state.current, {
        page: this.$state.params.page + 1,
      })
    }
  }
}

CommentsListController.$inject = ['$http', '$state']
