<template>
  <section class="vf-product-thumbnails mb-4">
    <v-img :src="productImage" :lazy-src="productImageLazy">
      <template v-slot:placeholder>
        <v-layout
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "~/types";
import {isNull} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  product!: Product;

  get productImage(): string | NodeRequire {
    if (!isNull(this.product.image)) {
      return this.product.image
    } else {
      return require('~/assets/img/Logo.png')
    }
  }

  get productImageLazy(): string | NodeRequire {
    if (!isNull(this.product.imageLazy)) {
      return this.product.imageLazy
    } else {
      return require('~/assets/img/Logo.png')
    }
  }
}
</script>
