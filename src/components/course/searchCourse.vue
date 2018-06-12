<template>
  <div>
    <div class="search">
      <div class="search-input">
        <m-input placeholder="请输入关键字" v-model="key_word" ></m-input>
      </div>
      <div class="search-bt">
        <m-button :on-click="toSearch">搜索</m-button>
      </div>
    </div>
    <div v-if="result.length" class="result">
      <m-table :data="result">
        <m-table-col prop="id" label="id" width="10%">
        </m-table-col>
        <m-table-col prop="title" label="课程名" width="20%">
        </m-table-col>
        <m-table-col prop="teacher" label="任课教师" width="10%">
        </m-table-col>
        <m-table-col prop="views" label="评论数" width="10%">
        </m-table-col>
         <m-table-col prop="main_category" label="主分类" width="10%">
        </m-table-col>
        <m-table-col prop="sub_category" label="二级分类" width="10%">
        </m-table-col>
        <m-table-col prop="credit_category" label="学分类别" width="10%">
        </m-table-col>
        <m-table-col label="操作" prop="active" width="10%">
          <template slot-scope="row">
           <div>
             <span @click="deleteCourse(row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
            <span @click="onEdit(row)">
              <i class="material-icons material-icons-light edit">edit</i>
            </span>
           </div>
           <!-- <m-button @click="deleteCourse.bind(this, row)">Delete</m-button> -->
          </template>
        </m-table-col>
      </m-table>
      <Pagiantion :page="page" :totalPages="totalPages" v-on:prePage="prePage" v-on:nextPage="nextPage"></Pagiantion>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Pagiantion from "../common/pagination";

export default {
  data() {
    return {
      key_word: ""
    }
  },
  computed: {
    ...mapState({
      result: state => state.searchCourse.result,
      page: state => state.searchCourse.search_page,
      totalPages: state => state.searchCourse.total_search_pages
    })
  },
  components: {
    Pagiantion: Pagiantion
  },
  methods: {
    ...mapActions(["setKeyWord", "searchCourse", "searchNextCourse", "searchPreCourse", "deleteCourse"]),
    toSearch() {
      if (this.key_word) {
        this.setKeyWord(this.key_word)
        this.searchCourse();
        this.key_word = "";
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.searchNextCourse();
      }
    },
    prePage() {
      if (this.page > 1) {
        this.searchPreCourse();
      }
    },
    onEdit(e) {
      this.$router.push({ path: `/editcourse/${e.id}/` })
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/utility.scss";
.search {
  width: 100%;
  height: 50px;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.search-input {
  height: 100%;
  margin-right: 30px;
}
.search-bt {
  height: 100%;
}
.delete {
  color: $red;
}
.edit {
  color: $grey;
}
</style>

