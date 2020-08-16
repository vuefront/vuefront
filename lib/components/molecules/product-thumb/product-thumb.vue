<template>
  <vf-m-card :class="{'vf-m-product-thumb--wide' : wide}" class="vf-m-product-thumb" no-body>
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="px-4">
        <vf-a-link :to="product.url" class="vf-m-product-thumb__image">
          <vf-m-product-thumb-image :product="product" card />
        </vf-a-link>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12">
        <vf-m-card-body class="pt-0">
          <div>
            <vf-a-link :to="product.url" class="mb-0 vf-m-product-thumb__title">
              <vf-a-heading tag="h3" level="6">{{ product.name }}</vf-a-heading>
            </vf-a-link>
            <vf-m-rating
              v-if="product.rating > 0 && wide"
              :value="product.rating"
              color="#ffcc00"
              readonly
            />
            <div
              v-html="product.shortDescription"
              class="vf-m-product-thumb__description text-sm mb-3"
            ></div>
            <vf-m-product-price variant="small" :price="product.price" :special="product.special" />
          </div>
        </vf-m-card-body>
        <vf-m-button-group class="vf-m-product-thumb__buttons" size="sm" block>
          <vf-a-button
            class="rounded-0 vf-m-product-thumb__button-buy"
            color="light-gray"
            @click="handleAddToCart"
          >
            <vf-a-icon :icon="['fas', 'shopping-cart']" />
            {{$t('elements.store.product.buttonAddToCart')}}
          </vf-a-button>
          <vf-a-button
            class="vf-m-product-thumb__button-wishlist"
            color="light-gray"
            @click="handleAddToWishlist"
          >
            <vf-a-icon :icon="['fas', 'heart']" />
          </vf-a-button>
          <vf-a-button
            class="rounded-0 vf-m-product-thumb__button-compare"
            color="light-gray"
            @click="handleAddToCompare"
          >
            <vf-a-icon :icon="['fas', 'exchange-alt']" />
          </vf-a-button>
        </vf-m-button-group>
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script>
export default {
  props: ["product", "wide"],
  computed: {
    url() {
      if (this.product.keyword && this.product.keyword !== "") {
        return "/" + this.product.keyword;
      } else {
        return "/store/product/" + this.product.id;
      }
    }
  },
  methods: {
    handleAddToCart() {
      this.$emit("click:cart");
    },
    async handleAddToWishlist() {
      this.$emit("click:wishlist");
    },
    async handleAddToCompare() {
      this.$emit("click:compare");
    }
  }
};
</script>