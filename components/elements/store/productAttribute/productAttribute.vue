<template>
  <section class="product-attribute">
    <v-layout v-for="(value, key) in product.attributes" :key="key">
      <v-flex xs3>
        <div class="product-info__attribute_name body-2">{{value.name}}</div>
      </v-flex>
      <v-flex xs9 mb-2>
        <div
          v-for="(option, optionKey) in value.options"
          :key="optionKey"
          class="product-info__attribute_value body-1"
        >{{option}}</div>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import { VLayout, VFlex } from "vuetify/lib";
export default {
  name: "vfStoreProductAttributeDefault",
  components: {
    VLayout,
    VFlex
  },
  props: ["product"]
};
</script>
