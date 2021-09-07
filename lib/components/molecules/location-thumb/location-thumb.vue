<template>
  <vf-m-card class="vf-m-location" no-body>
    <vf-a-image
      :lazy-src="location.imageLazy"
      :src="location.image"
      width-amp="268"
      height-amp="50"
      class="vf-m-location__image"
    />
    <vf-m-card-body class>
      <vf-a-heading :level="3" class="font-bold mb-4 vf-m-location__address">{{
        location.address
      }}</vf-a-heading>
      <vf-a-heading
        v-if="location.telephone !== ''"
        :level="5"
        class="mt-4 mb-2 vf-m-location__telephone"
        >T: {{ location.telephone }}</vf-a-heading
      >
      <p class="lead vf-m-location__comment">{{ location.comment }}</p>
    </vf-m-card-body>
  </vf-m-card>
</template>
<script lang="ts" setup>
defineProps({
  location: {
    type: Object,
    default() {
      return {
        address: "",
        telephone: "",
        image: "",
        imageLazy: "",
        comment: "",
      };
    },
  },
});
</script>
