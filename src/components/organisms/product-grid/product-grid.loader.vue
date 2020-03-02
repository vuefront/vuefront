<template>
  <div class="vf-l-o-product-gid">
    <section>
      <vf-m-row>
        <vf-m-col
          sm="12"
          :md="list || column? 12: 12 / gridSize"
          v-for="(value) in [1, 2, 3 ,4]"
          :key="value"
        >
          <vf-l-m-product-thumb :wide="list" />
        </vf-m-col>
      </vf-m-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'vf-l-o-product-grid',
  props: {
    column: {
      type: Boolean,
      default: false
    },
    list: {
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
