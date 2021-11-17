<template>
  <section class="account-address-edit">
    <vf-m-card no-body>
      <vf-m-card-body>
        <vf-o-address-edit-form
          :address="address"
          :countries="countries"
          :zones="zones"
        />
      </vf-m-card-body>
    </vf-m-card>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  address: {
    type: Object,
    default: () => null,
  },
  countries: {
    type: Object,
    default: () => null,
  },
  zones: {
    type: Object,
    default: () => null,
  },
});
</script>
