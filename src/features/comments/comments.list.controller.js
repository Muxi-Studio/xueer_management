/**
 * users.controller.js
 * by zindex
 */
export default class CommentsListController {
  constructor() {

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
  onPrevClick() {
    this.$state.go(this.$state.current, {
      page: this.$state.params.page - 1,
    })
  }
}

CommentsListController.$inject = ['$http', '$state']
