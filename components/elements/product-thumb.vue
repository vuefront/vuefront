<template>
  <v-hover>
    <v-card class="card-product" slot-scope="{ hover }">
      <nuxt-link :to="`/store/product/${product.id}`">
        <v-img :src="productImage" :lazy-src="productImageLazy" aspect-ratio="1" height="228">
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
      </nuxt-link>

      <v-card-title primary-title class="text-xs-center">
        <div style="width:100%;">
          <h3 class="subheading font-weight-medium mb-0 card-product__name">{{ product.name }}</h3>
          <div v-html="product.shortDescription" class="card-product__description body-1 mb-3"></div>
          <h4 class="subheading font-weight-medium mb-0 card-product__price">{{ product.price }}</h4>
        </div>
      </v-card-title>
      <v-expand-x-transition>
        <div
          v-show="hover"
          class="card-product__actions"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn flat icon class="ma-1" v-on="on" @click="handleAddToCart">
                <v-icon class="outline">shopping_basket</v-icon>
              </v-btn>
            </template>
            <span>Add to cart</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn flat icon class="ma-1" v-on="on">
                <v-icon>star_border</v-icon>
              </v-btn>
            </template>
            <span>Wishlist</span>
          </v-tooltip>
        </div>
      </v-expand-x-transition>
    </v-card>
  </v-hover>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Product} from "~/types";
import {isNull} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  product!: Product;

  async handleAddToCart() {
    this.$store.commit('notification/add', `${this.product.name} product successfully added to cart`)

    await this.$store.dispatch('store/cart/add', {id: Number(this.product.id), quantity: 1, options: []})
  }

  get productImage(): string | NodeRequire {
    if(!isNull(this.product.image)) {
      return this.product.image
    } else {
      return require('~/assets/img/Logo.png')
    }
  }

  get productImageLazy(): string | NodeRequire {
    if(!isNull(this.product.imageLazy)) {
      return this.product.imageLazy
    } else {
      return require('~/assets/img/Logo.png')
    }
  }
}
</script>
<style lang="postcss">
.card-product {
  &__name {
    min-height: 65px;
    max-height: 65px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__description {
    min-height: 65px;
    max-height: 65px;
    overflow: hidden;
  }

  &__price {

  }

  &__actions {
    left: 16px;
    top: 16px;
    position: absolute;
    white-space: nowrap;
  }
}
</style>
