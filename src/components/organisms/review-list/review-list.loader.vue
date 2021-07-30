<template>
    <div class="reviews-section">
      <vf-m-skeleton width="40%" height="30px" class="h3 mb-3"></vf-m-skeleton>
      <div class="mb-4">
        <vf-l-m-review v-for="value in [1, 2]" :key="value" />
      </div>
    </div>
</template>
<script>


export default {
  
};
</script>
