<template>
  <section class="location-section">
    <b-card class="shadow">
      <b-card-body class="px-5 py-5">
        <div style="min-height: 250px;">
          <h2 class="h2 font-weight-bold mb-4">{{location.address}}</h2>
          <h5 class="mt-4 mb-2">T: {{location.telephone}}</h5>
          <p class="lead">{{location.comment}}</p>
        </div>
      </b-card-body>
    </b-card>
  </section>
</template>
<script>
import { BCard, BCardBody, BCardFooter } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardBody,
    BCardFooter
  },
  props: ["location"]
};
</script>
