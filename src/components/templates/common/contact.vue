<template>
  <section class="page-contact">
    <vf-contact-location-grid v-if="contact.locations.length > 0" :items="contact.locations"/>
    <b-row>
      <b-col sm="12" md="6">
        <vf-contact-form/>
      </b-col>
      <b-col sm="12" md="6" class="ml-lg-auto">
        <vf-contact :contact="contact"/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import { mapGetters } from "vuex";
export default {
  components: {
    BRow,
    BCol
  },
  computed: {
    ...mapGetters({
      contact: "common/contact/get"
    })
  },
  async fetch({ store }) {
    await store.dispatch("common/contact/get");
  }
};
</script>
