<template>
  <section class="vf-l-t-store-manufacturer-list">
      <vf-m-row align-h="flex-start" style="padding-top: 7px">
        <vf-m-col xs="4">
          <vf-m-skeleton height="37px" class="mx-auto mb-5"></vf-m-skeleton>
        </vf-m-col>
      </vf-m-row>
    <vf-l-o-manufacturer-filter />
    <vf-l-o-manufacturer-list class="mt-5" />
  </section>
</template>
<script>


export default {
  
  props: ["gridSize"],
};
</script>
