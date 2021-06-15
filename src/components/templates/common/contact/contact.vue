<template>
  <section class="vf-t-common-contact">
    <vf-m-row>
      <vf-m-col xs="12" md="6">
        <vf-o-contact-form />
      </vf-m-col>
      <vf-m-col xs="12" md="6" class="lg:ml-auto">
        <vf-m-contact :contact="contact" />
      </vf-m-col>
    </vf-m-row>
    <br />
    <vf-o-location-grid
      v-if="contact.locations.length > 0"
      :items="contact.locations"
    />
  </section>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>
