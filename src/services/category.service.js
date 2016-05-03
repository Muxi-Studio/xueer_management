import angular from 'angular'

class CategoryService {
	constructor(){

	}
	defaultCategory(){
		return {
			"公共课" : '1',
			"通识课": '2',
			"专业课": '3',
			"素质课": '4',
			"通识核心课" : '1',
			"通识选修课" : '2',
			"理科": '1',
			"文科": '2',
			"艺体": '3',
			"教育": '4'
		}
	}
}

export default angular.module('sevices.category-service',[])
.service('categoryService',CategoryService)
.name