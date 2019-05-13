<template>
  <b-breadcrumb v-if="isShow" :items="items"></b-breadcrumb>
</template>
<script>
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue/es/components";
export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem
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
