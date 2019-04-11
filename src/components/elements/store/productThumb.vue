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
        <b-button-group class="border-radius-top-left border-radius-top-right" style="width: 100%;">
          <b-button variant="light-gray" class="border" @click="handleAddToCart">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </b-button>
          <b-button variant="light-gray" class="border">
            <vf-icon :icon="['fas', 'heart']"/>
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
    }
  }
};
</script>
