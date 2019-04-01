<template>
  <section class="product-attribute">
    <div v-for="(value, key) in product.attributes">
      <v-flex :key="`${key}-left`" xs3>
        <div class="product-info__attribute_name body-2">{{value.name}}</div>
      </v-flex>
      <v-flex :key="`${key}-right`" xs9 mb-2>
        <div v-for="(option, optionKey) in value.options" :key="optionKey"
             class="product-info__attribute_value body-1">{{option}}
        </div>
      </v-flex>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "~/types";

@Component
export default class extends Vue {
  @Prop()
  product!: Product;
}
</script>