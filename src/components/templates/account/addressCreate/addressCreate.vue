<template>
  <section class="vf-t-account-address-create">
    <vf-m-card no-body>
      <vf-m-card-body>
        <vf-o-address-create-form :countries="countries" :zones="zones" />
      </vf-m-card-body>
    </vf-m-card>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  countries: {
    type: Object,
    default() {
      return null;
    },
  },
  zones: {
    type: Object,
    default() {
      return null;
    },
  },
});
</script>
