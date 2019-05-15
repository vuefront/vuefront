<template>
  <section class="product-attribute">
    <b-row tag="dl">
      <template v-for="(value, key) in product.attributes">
        <b-col :key="`name-${key}`" sm="3" tag="dt">
          <div class="product-info__attribute_name h6 text-sm mb-0">{{value.name}}</div>
        </b-col>
        <b-col :key="`value-${key}`" sm="9" tag="dd">
          <div
            v-for="(option, optionKey) in value.options"
            :key="optionKey"
            class="product-info__attribute_value text-sm"
          >{{option}}</div>
        </b-col>
      </template>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue/es/components";
export default {
  components: {
    BRow,
    BCol
  },
  props: ["product"]
};
</script>
