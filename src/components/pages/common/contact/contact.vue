<template>
  <vf-t-contact :contact="contact" />
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      contact: "common/contact/get"
    })
  },
  async fetch({ store }) {
    await store.dispatch("common/contact/get");
  }
};
</script>
