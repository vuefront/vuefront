<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex";
import "vuefront/scss/elements/common/notification/toast.scss";
export default {
  data() {
    return {
      Alertify: null
    };
  },
  computed: {
    ...mapGetters({
      messageNotification: "notification/get"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
      this.Alertify.success(val);
    }
  },
  mounted() {
    if (typeof document !== "undefined") {
      this.Alertify = require("alertifyjs");
    }
  }
};
</script>
