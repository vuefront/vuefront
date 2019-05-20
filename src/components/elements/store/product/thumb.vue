<template>
  <b-card :class="{'card-product_wide' : wide}" class="card-product" no-body>
    <b-row no-gutters>
      <b-col :md="wide ? 3 : 12" class="px-4">
        <b-link :to="url" class="card-product__image_wrapper">
          <b-card-img-lazy
            :src="mainImage"
            :blank-src="mainImagelazy"
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
          <b-button
            variant="light-gray"
            class="border border-radius-top-left-0"
            @click="handleAddToCart"
          >
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </b-button>
          <b-button
            variant="light-gray"
            class="border border-radius-top-right-0"
            @click="handleAddToWishlist"
          >
            <vf-icon :icon="['fas', 'heart']"/>
          </b-button>
          <b-button
            variant="light-gray"
            class="border border-radius-top-right-0"
            @click="handleAddToCompare"
          >
            <vf-icon :icon="['fas', 'exchange-alt']"/>
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import {
  BRow,
  BCol,
  BContainer,
  BCard,
  BCardImgLazy,
  BCardBody,
  BCardFooter,
  BButton,
  BButtonGroup,
  BLink
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/store/productThumb.scss";
import placeholder from "~/assets/img/placeholder.png";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    }),
    mainImage() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    mainImagelazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    },
    url() {
      if (this.product.keyword && this.product.keyword !== "") {
        return "/" + this.product.keyword;
      } else {
        return "/store/product/" + this.product.id;
      }
    }
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        id: Number(this.product.id),
        quantity: 1,
        options: []
      });

      if (!this.error) {
        this.$store.commit(
          "notification/add",
          this.product.name +
            this.$t("elements.store.productThumb.notificationText")
        );
      } else {
        this.$store.commit("notification/error", this.error.message);

        this.$router.push("/store/product/" + this.product.id);
      }
    },
    async handleAddToWishlist() {
      this.$store.commit(
        "notification/add",
        this.product.name +
          this.$t("elements.store.productThumb.wishlistNotificationText")
      );

      await this.$store.dispatch("store/wishlist/add", {
        id: Number(this.product.id)
      });
    },
    async handleAddToCompare() {
      this.$store.commit(
        "notification/add",
        this.product.name +
          this.$t("elements.store.productThumb.compareNotificationText")
      );

      await this.$store.dispatch("store/compare/add", {
        id: Number(this.product.id)
      });
    }
  }
};
</script>
