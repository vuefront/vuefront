<template>
  <section class="location-section mb-3">
    <vf-m-card>
      <vf-m-card-body class="px-5 py-5">
        <div style="min-height: 250px;">
          <vf-a-heading :level="2" class="font-weight-bold mb-4">{{location.address}}</vf-a-heading>
          <vf-a-heading
            :level="5"
            class="mt-4 mb-2"
            v-if="location.telephone !== ''"
          >T: {{location.telephone}}</vf-a-heading>
          <p class="lead">{{location.comment}}</p>
        </div>
      </vf-m-card-body>
    </vf-m-card>
  </section>
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
      default() {
        return null;
      }
    }
  }
};
</script>
