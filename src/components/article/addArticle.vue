<template>
  <div>
    <div class="main">
            <m-textarea v-model="title" placeholder="文章标题"></m-textarea>
            <div class="group margin">
                <input v-model="image" placeholder="banner url" class="image">
            </div>
            <textarea v-model.trim="summary" class="summary" placeholder="Summary (不超过100字)" maxlength="100"></textarea>
            <div class="editor">
                <textarea :value="body" @input="update" class="write inline_block"></textarea>
                <div class="md_box inline_block">
                    <div v-html="compiledMarkdown" class="view_md"></div>
                </div>
            </div>
            
            <button v-on:click="submit" class="submit">POST</button>
        </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

var _ = require("lodash");
var marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default {
  data() {
    return {
      id: this.$route.params.id,
      input: "",
      author: "",
      banner_url: "",
      img_url: "",
      title: ""
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, {
        sanitize: true
      });
    },
    // 不能传一个对象
    title: {
      get() {
        return this.$store.state.addArticle.title;
      },
      set(value) {
        this.$store.commit("updateTitle", value);
      }
    },
    input: {
      get() {
        return this.$store.state.addArticle.input;
      },
      set(value) {
        this.$store.commit("updateInput", value);
      }
    },
    author: {
      get() {
        return this.$store.state.addArticle.author;
      },
      set(value) {
        this.$store.commit("updateAuthor", value);
      }
    },
    banner_url: {
      get() {
        return this.$store.state.addArticle.banner;
      },
      set(value) {
        this.$store.commit("updateBanner", value);
      }
    },
    img_url: {
      get() {
        return this.$store.state.addArticle.Img;
      },
      set(value) {
        this.$store.commit("updateImg", value);
      }
    },
  },
  methods: {
    ...mapActions(["addArticle", "getArtcile", "editArtcile"]),
    submit() {
      if (this.id) {
        this.editArticle();
      } else {
        this.addArticle();
      }
    }
  },
  mounted() {
    if (this.id) {
      this.getArticle(this.id);
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/utility.scss";
.add_container {
  padding-top: 100px;
}
.add_item {
  display: flex;
  align-items: center;
  .label {
    width: 150px;
    text-align: right;
  }
  .radio {
    width: 200px;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
