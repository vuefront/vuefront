<template>
  <section class="product-section">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <vf-product-image :product="product"/>
        <vf-reviews :reviews="product.reviews" @create="handleCreateReview"/>
      </v-flex>
      <v-flex xs12 md6>
        <div class="product-info pl-md-and-up-5">
          <div class="product-info__name display-1 pb-1">{{product.name}}</div>
          <div class="product-info__model body-1 pb-1">{{product.model}}</div>
          <v-layout row>
            <v-flex xs6 align-self-center>
              <v-rating
                v-if="product.rating > 0"
                :value="product.rating"
                color="#ffcc00"
                dense
                readonly
              ></v-rating>
            </v-flex>
            <v-flex xs6 text-xs-right align-self-center>
              <v-layout row wrap></v-layout>
              <v-chip color="blue" dark>ID: #{{product.id}}</v-chip>
              <v-chip v-if="product.stock" color="green" dark>In stock</v-chip>
              <v-chip v-else color="red" dark>Out of stock</v-chip>
            </v-flex>
          </v-layout>
          <div class="my-4 py-4 border-bottom border-top">
            <div class="product-info__description-title body-2 mb-1">Description:</div>
            <div class="product-info__description body-1" v-html="product.description"/>
          </div>
          <v-layout v-if="product.attributes.length > 0" row wrap pb-4 border-bottom mb-4>
            <v-flex xs12>
              <vf-product-attribute :product="product"/>
            </v-flex>
          </v-layout>
          <vf-product-option
            v-if="product.options.length > 0"
            :product="product"
            class="mb-4 pb-4 border-bottom"
            @change="handleChangeOptions"
          />
          <v-layout>
            <v-flex xs6 md5 align-self-center>
              <div class="product-info__price headline">
                <span
                  v-if="product.special !== ''"
                  class="product-info__price_special"
                >{{product.special}}</span>
                <span :class="{'font-weight-light': product.special !== ''}">{{ product.price }}</span>
              </div>
            </v-flex>
            <v-flex xs6 md7 text-xs-right align-self-center>
              <v-btn color="primary" large @click="handleAddToCart">
                <v-icon class="mr-1">shopping_basket</v-icon>Add to Bug
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import isNull from "lodash/isNull";
import { VLayout, VFlex, VBtn, VIcon, VChip, VRating } from "vuetify/lib";
import "vuefront/scss/elements/store/product.scss";

export default {
  name: "vfStoreProductDefault",
  components: {
    VLayout,
    VFlex,
    VBtn,
    VIcon,
    VChip,
    VRating
  },
  props: ["product"],
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    async handleAddToCart() {
      this.$store.commit(
        "notification/add",
        `${this.product.name} product successfully added to cart`
      );

      await this.$store.dispatch("store/cart/add", {
        id: Number(this.product.id),
        quantity: 1,
        options: this.selectedOptions
      });
    },

    handleChangeOptions(e) {
      this.selectedOptions = e;
    },

    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("store/product/addReview", {
        id: Number(this.product.id),
        content,
        author,
        rating,
        limit: 3
      });
    }
  }
};
</script>
