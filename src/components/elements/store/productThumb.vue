<template>
  <b-card :class="{'card-product_wide' : wide}" class="card-product" no-body>
    <b-row no-gutters>
      <b-col :md="wide ? 3 : 12" class="px-4">
        <b-link :to="`/store/product/${product.id}`">
          <b-card-img-lazy
            :src="product.image"
            :blank-src="product.imageLazy"
            fluid
            class="card-product__image"
          />
        </b-link>
      </b-col>
      <b-col :md="wide ? 9 : 12">
        <b-card-body class="pt-0">
          <h3 class="h6 mb-0 card-product__name">{{ product.name }}</h3>
          <vf-rating
            v-if="product.rating > 0 && wide"
            :value="product.rating"
            color="#ffcc00"
            readonly
          />
          <div v-html="product.shortDescription" class="card-product__description text-sm mb-3"></div>
          <h4 class="mb-0 card-product__price">
            <span
              v-if="product.special !== ''"
              class="card-product__price_special"
            >{{product.special}}</span>
            <span :class="{'font-weight-regular': product.special !== ''}">{{ product.price }}</span>
          </h4>
        </b-card-body>
        <b-button-group style="width: 100%;" size="sm">
          <b-button variant="light-gray" class="border border-radius-top-left-0" @click="handleAddToCart">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </b-button>
          <b-button variant="light-gray" class="border border-radius-top-right-0" @click="handleAddToWishlist">
            <vf-icon :icon="['fas', 'heart']"/>
          </b-button>
          <b-button variant="light-gray" class="border border-radius-top-right-0" @click="handleAddToCompare">
            <vf-icon :icon="['fas', 'exchange-alt']"/>
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BCard from "bootstrap-vue/es/components/card/card";
import BCardImgLazy from "bootstrap-vue/es/components/card/card-img-lazy";
import BCardBody from "bootstrap-vue/es/components/card/card-body";
import BCardFooter from "bootstrap-vue/es/components/card/card-footer";
import BButton from "bootstrap-vue/es/components/button/button";
import BButtonGroup from "bootstrap-vue/es/components/button-group/button-group";
import BLink from "bootstrap-vue/es/components/link/link";
import "vuefront/scss/elements/store/productThumb.scss";

export default {
  components: {
    BLink,
    BRow,
    BCol,
    BContainer,
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardFooter,
    BButton,
    BButtonGroup
  },
  props: ["product", "wide"],
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
    },
    async handleAddToWishlist() {
      this.$store.commit(
        "notification/add",
        `${this.product.name} product successfully added to wishlist`
      );

      await this.$store.dispatch("store/wishlist/add", {
        id: Number(this.product.id)
      });
    },
    async handleAddToCompare() {
      this.$store.commit(
        "notification/add",
        `${this.product.name} product successfully added to compare`
      );

      await this.$store.dispatch("store/compare/add", {
        id: Number(this.product.id)
      });
    }
  }
};
</script>
