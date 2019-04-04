<template>
  <v-hover>
    <v-card :class="{'card-product_wide' : wide}" class="card-product" slot-scope="{ hover }">
      <v-layout row pa-0 ma-0 wrap align-space-between>
        <v-flex :xs12="!wide" :xs-auto="wide">
          <nuxt-link :to="`/store/product/${product.id}`">
            <v-img
              :src="product.image"
              :lazy-src="product.imageLazy"
              aspect-ratio="1"
              contain
              :width="wide ? '250' : 'auto'"
              :height="wide ? '100%' : '228'"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
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
              <v-rating
                v-if="product.rating > 0 && wide"
                :value="product.rating"
                color="#ffcc00"
                dense
                readonly
              ></v-rating>
              <div v-html="product.shortDescription" class="card-product__description body-1 mb-3"></div>
              <h4 class="subheading font-weight-medium mb-0 card-product__price">
                <span
                  v-if="product.special !== ''"
                  class="card-product__price_special"
                >{{product.special}}</span>
                <span :class="{'font-weight-regular': product.special !== ''}">{{ product.price }}</span>
              </h4>
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
<script>
import isNull from "lodash/isNull";
import {
  VHover,
  VSpacer,
  VBtn,
  VIcon,
  VLayout,
  VFlex,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VRating,
  VProgressCircular,
  VImg
} from "vuetify/lib";
import 'vuefront/scss/elements/store/productThumb.scss'

export default {
  name: "vfStoreProductThumbDefault",
  components: {
    VHover,
    VSpacer,
    VBtn,
    VIcon,
    VLayout,
    VFlex,
    VCard,
    VCardTitle,
    VCardActions,
    VCardText,
    VRating,
    VProgressCircular,
    VImg
  },
  props: ['product', 'wide'],
  methods: {
    async handleAddToCart() {
      this.$store.commit(
        "notification/add",
        `${this.product.name} product successfully added to cart`
      );

      await this.$store.dispatch("store/cart/add", {
        id: Number(this.product.id),
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
