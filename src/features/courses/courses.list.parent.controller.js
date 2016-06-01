/**
 * courses.list.parent.controller.js
 * by zindex
 */
export default class CoursesListParentController {
  constructor() {}
  onDeleteClick(course) {
    this.$state.go('.delete', {
      id: course.id,
      title: course.title,
      type: 'courses',
    })
  }
  onCommentClick(cid) {
    this.$state.go('comments.list', {
      courseId: cid,
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
