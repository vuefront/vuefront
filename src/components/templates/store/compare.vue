<template>
  <vf-compare :compare="compare"/>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Compare"
    };
  },
  computed: {
    ...mapGetters({
      compare: "store/compare/get"
    })
  }
};
</script>
