<template>
  <vf-m-card class="vf-m-location" no-body>
    <vf-a-amp-image
      v-if="$vuefront.isAMP"
      :src="location.image"
      layout="responsive"
      :width="$vuefront.options.image.contact.width"
      :height="$vuefront.options.image.contact.height"
      class="vf-m-location__image"
    />
    <vf-a-image
      v-else
      :lazy-src="location.image"
      :src="location.imagelazy"
      fluid
      full-width
      class="vf-m-location__image"
    />
    <vf-m-card-body class>
      <vf-a-heading
        :level="3"
        class="font-weight-bold mb-4 vf-m-location__address"
      >{{ location.address }}</vf-a-heading>
      <vf-a-heading
        :level="5"
        class="mt-4 mb-2 vf-m-location__telephone"
        v-if="location.telephone !== ''"
      >T: {{location.telephone}}</vf-a-heading>
      <p class="lead vf-m-location__comment">{{location.comment}}</p>
    </vf-m-card-body>
  </vf-m-card>
</template>
<script>
export default {
  props: {
    location: {
      type: Object,
      default() {
        return {
          address: "",
          telephone: "",
          image: "",
          imageLazy: "",
          comment: ""
        };
      }
    }
  }
};
</script>
