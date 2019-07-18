<template>
  <b-breadcrumb v-if="isShow" :items="items"></b-breadcrumb>
</template>
<script>
import { BBreadcrumb } from "bootstrap-vue";
export default {
  components: {
    BBreadcrumb,
  },
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#"
        },
        {
          text: "Manage",
          href: "#"
        },
        {
          text: "Library",
          active: true
        }
      ]
    };
  },
  computed: {
    isShow() {
      return this.$route.path !== "/";
    }
  }
};
</script>
