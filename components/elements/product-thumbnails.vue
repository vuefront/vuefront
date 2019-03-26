<template>
<section class="vf-product-thumbnails">
  <v-img :src="product.image" :lazy-src="product.imageLazy"/>
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
