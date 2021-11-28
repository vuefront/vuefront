<template>
  <td class="vf-m-td" :colspan="colspan"><slot></slot></td>
</template>
<script lang="ts" setup>
defineProps({
  colspan: {
    type: Number,
    default() {
      return null;
    },
  },
});
</script>
