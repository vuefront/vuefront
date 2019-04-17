<template>
  <section class="account-login-section">
    <b-row>
        <b-col sm="12" md="6">
            <vf-account-new/>
        </b-col>
        <b-col sm="12" md="6">
            <vf-account-login/>
        </b-col>
    </b-row>
  </section>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
export default {
  components: {
    BRow,
    BCol
  },
  fetch(ctx) {
    if(ctx.store.getters['common/customer/auth']) {
      ctx.redirect('/account')
    }
  }
};
</script>

