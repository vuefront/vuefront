<template>
  <section class="contact-section">
    <vf-a-heading level="3">{{contact.address}}</vf-a-heading>
    <p class="lead my-4">
      E:
      <vf-a-link>{{contact.email}}</vf-a-link>
      <br />
      T: {{contact.telephone}}
      <template v-if="contact.fax">
        <br />
        F: {{contact.fax}}
      </template>
    </p>
    <p>{{contact.comment}}</p>
  </section>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default() {
        return null;
      }
    }
  }
};
</script>
