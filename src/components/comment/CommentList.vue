<template>
  <div>
    <Header>
      <div slot="title" class="title">评论</div>
    </Header>
    <div class="list">
      <m-table :data="comments">
        <m-table-col prop="id" label="id" width="10%">
        </m-table-col>
        <m-table-col prop="date" label="日期" width="10%">
        </m-table-col>
        <m-table-col prop="user_name" label="用户名" width="20%">
        </m-table-col>
        <m-table-col prop="body" label="内容" width="50%">
        </m-table-col>
        <m-table-col label="操作" prop="active" width="10%">
          <template slot-scope="row">
            <div>
              <span @click="onDelete(row)">
              <i class="material-icons material-icons-light delete">delete_sweep</i>
            </span>
            </div>
          </template>
        </m-table-col>
      </m-table>
      <Pagiantion :page="commentpage" :totalPages="commentTotalPages" v-on:prePage="preCommentPage" v-on:nextPage="nextCommentPage"></Pagiantion>
  </div>
</div>
  
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Pagiantion from "../common/pagination";
import Header from "../common/header";
export default {
  data() {
    return {};
  },
  components: {
    Pagiantion: Pagiantion,
    Header: Header
  },
  computed: {
    ...mapState({
      comments: state => state.comment.comments,
      commentpage: state => state.comment.commentpage,
      commentTotalPages: state => state.comment.commentTotalPages
    })
  },
  methods: {
    ...mapActions(["fetchCommentsList", "preCommentPage", "nextCommentPage", "deleteComment"]),
    onDelete(e) {
      this.deleteComment(e.id)
    }
  },
  mounted() {
    this.fetchCommentsList();
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
