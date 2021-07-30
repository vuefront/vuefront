<template>
  <span v-for="rating in [1, 2, 3, 4, 5]" :key="rating">
    <vf-m-skeleton
      width="1.125em"
      height="18px"
      class="d-inline-block mr-1"
    ></vf-m-skeleton>
  </span>
</template>
<script>
export default {
  
};
</script>
