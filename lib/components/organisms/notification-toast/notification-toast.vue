<template>
  <div></div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { ToastPlugin } from "bootstrap-vue";
Vue.use(ToastPlugin);
export default {
  name: 'vf-o-notification',
  computed: {
    ...mapGetters({
      messageNotification: "notification/get",
      errorNotification: "notification/error"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
      this.$bvToast.toast(val, {
        title: this.$t("elements.common.notification.toast.notificationText"),
        toaster: "b-toaster-top-right",
        solid: true,
        variant: "success"
      });
    },
    errorNotification(val, oldVal) {
      this.$bvToast.toast(val, {
        title: this.$t("elements.common.notification.toast.errorText"),
        toaster: "b-toaster-top-right",
        solid: true,
        variant: "danger"
      });
    }
  }
};
</script>
