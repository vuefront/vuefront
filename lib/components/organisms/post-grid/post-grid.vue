<template>
  <section>
    <vf-m-row>
      <vf-m-col
        v-for="(value, index) in posts"
        :key="index"
        xs="12"
        :md="column ? 12 : 12 / gridSize"
      >
        <vf-m-post-thumb :post="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      },
    },
    column: {
      type: Boolean,
      default: false,
    },
    gridSize: {
      type: Number,
      default: 4,
    },
  },
};
</script>
