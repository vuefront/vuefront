<template>
  <section class="contact-section">
    <h3>{{contact.address}}</h3>
    <p class="lead my-4">
      E:
      <b-link>{{contact.email}}</b-link>
      <br>
      T: {{contact.telephone}}
      <template v-if="contact.fax">
        <br>
        F: {{contact.fax}}
      </template>
    </p>
    <p>{{contact.comment}}</p>
  </section>
</template>
<script>
import BLink from "bootstrap-vue/es/components/link/link";
export default {
  components: {
    BLink
  },
  props: ["contact"]
};
</script>
