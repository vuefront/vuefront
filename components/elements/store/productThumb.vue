<template>
  <v-hover>
    <v-card :class="{'card-product_wide' : wide}" class="card-product" slot-scope="{ hover }">
      <v-layout row pa-0 ma-0 wrap align-space-between>
        <v-flex :xs12="!wide" :xs-auto="wide">
          <nuxt-link :to="`/store/product/${product.id}`">
            <v-img :src="productImage" :lazy-src="productImageLazy" aspect-ratio="1" contain
                   :width="wide ? '250' : 'auto'" :height="wide ? '100%' : '228'">
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
        </v-flex>
        <v-flex :xs12="!wide" :xs-fill="wide">
          <v-card-title primary-title class="text-xs-center pb-0">
            <div style="width:100%;">
              <h3 class="subheading font-weight-medium mb-0 card-product__name">{{ product.name }}</h3>
              <v-rating v-if="product.rating > 0 && wide" :value="product.rating" color="#ffcc00" dense
                        readonly></v-rating>
              <div v-html="product.shortDescription" class="card-product__description body-1 mb-3"></div>
              <h4 class="subheading font-weight-medium mb-0 card-product__price">
                <span
                  v-if="product.special !== ''"
                  class="card-product__price_special">{{product.special}}</span>
                <span :class="{'font-weight-regular': product.special !== ''}">{{ product.price }}</span></h4>
            </div>
          </v-card-title>
          <v-card-actions v-if="wide" class="card-product__actions">
            <v-spacer></v-spacer>
            <v-btn flat icon @click="handleAddToCart">
              <v-icon class="outline">shopping_basket</v-icon>
            </v-btn>
            <v-btn flat icon>
              <v-icon>star_border</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
        <v-flex v-if="!wide" xs12>
          <v-card-actions class="card-product__actions">
            <v-spacer></v-spacer>
            <v-btn flat icon @click="handleAddToCart">
              <v-icon class="outline">shopping_basket</v-icon>
            </v-btn>
            <v-btn flat icon>
              <v-icon>star_border</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-flex>
      </v-layout>
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

  @Prop()
  wide!: boolean

  async handleAddToCart() {
    this.$store.commit('notification/add', `${this.product.name} product successfully added to cart`)

    await this.$store.dispatch('store/cart/add', {id: Number(this.product.id), quantity: 1, options: []})
  }

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
<style lang="postcss">
.card-product {
  &_wide {
  }

  &__price_special {
    & + span {
      text-decoration: line-through;
    }
  }

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
  }
}
</style>
