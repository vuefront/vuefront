<template>
  <vf-m-container>
    <vf-a-alert
      :show="dismissCountDown"
      color="success"
      class="mt-3"
      dismissible
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      >{{ messageNotification }}</vf-a-alert
    >
  </vf-m-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dismissCountDown: 0,
    };
  },
  computed: {
    ...mapGetters({
      messageNotification: "notification/get",
    }),
  },
  watch: {
    messageNotification(val, oldVal) {
      this.dismissCountDown = 10;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>
