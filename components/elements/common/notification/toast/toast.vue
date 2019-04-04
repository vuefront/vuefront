<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "vfCommonToastDefault",
  components: {
    ...mapGetters({
      messageNotification: "notification/get"
    })
  },
  watch: {
    onMessageChanged(val, oldVal) {
      this.$alertify.success(val);
    }
  }
};
</script>
