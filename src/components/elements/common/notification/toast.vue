<template>
  <div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from "vuex";
import BVToast from 'bootstrap-vue/es/components/toast/helpers/bv-toast'
Vue.use(BVToast)
export default {
  computed: {
    ...mapGetters({
      messageNotification: "notification/get",
      errorNotification: "notification/error"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
       this.$bvToast.toast(val, {
          title: this.$t('elements.common.notification.toast.notificationText'),
          toaster: 'b-toaster-bottom-right',
          solid: true,
          variant: 'success'
        })
    },
    errorNotification(val, oldVal) {
       this.$bvToast.toast(val, {
          title: this.$t('elements.common.notification.toast.errorText'),
          toaster: 'b-toaster-bottom-right',
          solid: true,
          variant: 'danger'
        })
    }
  }
};
</script>
