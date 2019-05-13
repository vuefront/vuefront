<template>
  <section class="account-register-section">
    <b-row>
      <b-col sm="12" md="8" offset-md="2">
        <vf-account-register/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue/es/components";
export default {
  components: {
    BRow,
    BCol
  },
  fetch(ctx) {
    if (ctx.store.getters["common/customer/auth"]) {
      ctx.redirect("/account");
    }
  }
};
</script>