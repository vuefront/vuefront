<template>
  <section>
    <vf-t-account-edit :account="account" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      account: "common/customer/get"
    })
  }
};
</script>
