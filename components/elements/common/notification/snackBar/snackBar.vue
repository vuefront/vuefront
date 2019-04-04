<template>
  <v-container>
    <v-alert v-model="show" type="success" transition="scale-transition" dismissible>{{messageNotification}}</v-alert>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "vfCommonSnackBarDefault",
  data() {
    return {
      show: true
    }
  },
  components: {
    ...mapGetters({
      messageNotification: "notification/get"
    })
  }
}
</script>
