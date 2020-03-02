<template>
  <section>
    <vf-m-row>
      <vf-m-col
        sm="12"
        :md="column? 12: 12 / gridSize"
        v-for="(value, index) in posts"
        :key="index"
      >
        <vf-m-post-thumb :post="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  name: 'vf-o-post-grid',
  props: {
    posts: {
      type: Array,
      default: []
    },
    column: {
      type: Boolean,
      default: false
    },
    gridSize: {
      type: Number,
      default: 4
    }
  }
};
</script>
