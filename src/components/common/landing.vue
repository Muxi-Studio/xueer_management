<template>
    <div>
        loading...
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["is_loading"])
  },
  methods: {
    ...mapActions(["isLoading", "getToken"])
  },
  created() {
    this.isLoading(true);
    this.getToken();
  }
};
</script>
