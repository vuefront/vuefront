<template>
  <section class="store-manufacturer-section">
    <vf-a-heading>{{
      $t("templates.store.manufacturerList.textTitle")
    }}</vf-a-heading>
    <vf-o-manufacturer-filter :manufacturers="manufacturers" class="mt-2" />
    <vf-o-manufacturer-list :manufacturers="manufacturers" class="mt-5" />
  </section>
</template>
<script>
export default {
  props: ["manufacturers"],
};
</script>
