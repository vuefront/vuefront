<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      messageNotification: "notification/get"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
      this.$alertify.success(val);
    }
  }
};
</script>
