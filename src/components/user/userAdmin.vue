<template>
  <div class="add_container">
    <m-input placeholder="用户名" label="用户名" v-model="username" class="add_item"></m-input>
    <div class="add_item">
      角色管理
      <m-select v-model="role_id" :defaultvalue="defaultValue">
        <m-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value"></m-option>
      </m-select>
    </div>
    <div class="add_item">
      <m-button :on-click="editUser">确认修改</m-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id,
      roles: [
        {
          value: 0,
          label: "无"
        },
        {
          value: 1,
          label: "运营"
        },
        {
          value: 2,
          label: "管理员"
        },
        {
          value: 3,
          label: "普通用户"
        }
      ]
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.userAdmin.user.username
      },
      set(value) {
        this.$store.commit("updateUsername", value)
      }
    },
    role_id: {
      get() {
        return this.$store.state.userAdmin.user.role_id
      },
      set(value) {
        this.$store.commit("updateRole", value)
      }
    },
    defaultValue: function() {
      return this.roles.find((e) => {
        return e.value == this.role_id
      }).label
    }
  },
  methods: {
    ...mapActions(["editUser","getUser"])
  },
  mounted() {
    this.getUser(this.id)
  }
}
</script>
<style lang="scss">
@import "../../assets/utility.scss";
</style>