<template>
  <div class="list">
      <m-table :data="articles">
        <m-table-col prop="id" label="id" width="10%">
        </m-table-col>
        <m-table-col prop="title" label="文章名" width="50%">
        </m-table-col>
        <m-table-col prop="likes" label="点赞数" width="10%">
        </m-table-col>
        <m-table-col prop="views" label="浏览量" width="10%">
        </m-table-col>
        <m-table-col label="操作" prop="active" width="20%">
          <template slot-scope="row">
           <div>
             <span @click="deleteTip(row.id)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
            <span @click="onEdit(row)">
              <i class="material-icons material-icons-light edit">edit</i>
            </span>
           </div>
          </template>
        </m-table-col>
      </m-table>
      <Pagiantion :page="articlepage" :totalPages="articleTotalPages" v-on:prePage="preArticlePage" v-on:nextPage="nextArticlePage"></Pagiantion>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Pagiantion from "../common/pagination";
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  components: {
    Pagiantion: Pagiantion
  },
  computed: {
    ...mapState({
      articles: state => state.articleList.articles,
      articlepage: state => state.articleList.articlepage,
      articleTotalPages: state => state.articleList.articleTotalPages
      })
  },
  methods: {
    ...mapActions(["fetchArticlesList", "preArticlePage", "nextArticlePage", "deleteArticle"]),
    onEdit(e) {
      this.$router.push({ path: `/article/edit/${e.id}/` })
    }
  },
  mounted() {
    if (this.articles.length == 0)
      this.fetchArticlesList();
  }
};
</script>
<style lang="scss">
@import "../../assets/utility.scss";
.delete {
  color: $red;
}
.edit {
  color: $grey;
}
</style>
