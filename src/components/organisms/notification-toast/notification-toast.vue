<template>
  <div
    class="vf-o-notification-toast"
    :class="{ 'vf-o-notification-toast--show': show }"
  >
    {{ error ? errorNotification : messageNotification }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      error: false,
    };
  },
  computed: {
    ...mapGetters({
      messageNotification: "notification/get",
      errorNotification: "notification/error",
    }),
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "notification/error") {
        this.message = mutation.payload;
        this.error = true;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
      if (mutation.type === "notification/add") {
        this.message = mutation.payload;
        this.error = false;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    });
  },
};
</script>
