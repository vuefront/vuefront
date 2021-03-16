<template>
  <section class="vf-m-contact">
    <vf-a-heading v-if="contact.address" level="3">{{
      contact.address
    }}</vf-a-heading>
    <p class="lead my-4">
      <template v-if="contact.email">
        E:
        <vf-a-link>{{ contact.email }}</vf-a-link>
        <br />
      </template>
      <template v-if="contact.telephone">
        T: {{ contact.telephone }}
        <br />
      </template>
      <template v-if="contact.fax">F: {{ contact.fax }}</template>
    </p>
    <p v-if="contact.comment">{{ contact.comment }}</p>
  </section>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default() {
        return {
          address: "",
          email: "",
          telephone: "",
          fax: "",
          comment: "",
        };
      },
    },
  },
};
</script>
