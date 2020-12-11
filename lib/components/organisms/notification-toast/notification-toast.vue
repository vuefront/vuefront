<template>
  <div class="vf-o-notification-toast" :class="{'vf-o-notification-toast--show': show}">
    {{messageNotification}}
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      messageNotification: "notification/get",
      errorNotification: "notification/error"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    },
    errorNotification(val, oldVal) {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
};
</script>