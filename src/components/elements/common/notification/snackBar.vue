<template>
  <b-container>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      class="mt-3"
      dismissible
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >{{messageNotification}}</b-alert>
  </b-container>
</template>
<script>
import { mapGetters } from "vuex";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BAlert from "bootstrap-vue/es/components/alert/alert";

export default {
  components: {
    BAlert,
    BContainer
  },
  data() {
    return {
      dismissCountDown: 0
    };
  },
  computed: {
    ...mapGetters({
      messageNotification: "notification/get"
    })
  },
  watch: {
    messageNotification(val, oldVal) {
      this.dismissCountDown = 10;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    }
  }
};
</script>
