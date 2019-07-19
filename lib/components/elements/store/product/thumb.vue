<template>
  <vf-m-card :class="{'card-product_wide' : wide}" class="card-product" no-body>
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="px-4">
        <vf-a-link :to="url" class="card-product__image_wrapper">
          <vf-a-amp-image
            v-if="$vuefront.isAMP"
            :src="mainImage"
            :width="205"
            :height="205"
            class="card-product__image card-img"
          />
          <vf-a-image
            v-else
            :src="mainImagelazy"
            :lazy-src="mainImage"
            class="card-product__image card-img"
            fluid
          />
        </vf-a-link>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12">
        <vf-m-card-body class="pt-0">
          <vf-a-heading tag="h3" level="6" class="mb-0 card-product__name">{{ product.name }}</vf-a-heading>
          <vf-rating
            v-if="product.rating > 0 && wide"
            :value="product.rating"
            color="#ffcc00"
            readonly
          />
          <div v-html="product.shortDescription" class="card-product__description text-sm mb-3"></div>
          <vf-a-heading :level="4" class="mb-0 card-product__price">
            <span
              v-if="product.special !== ''"
              class="card-product__price_special"
            >{{product.special}}</span>
            <span :class="{'font-weight-regular': product.special !== ''}">{{ product.price }}</span>
          </vf-a-heading>
        </vf-m-card-body>
        <vf-m-button-group size="sm" block>
          <vf-a-button
            color="light-gray"
            class="border border-radius-top-left-0"
            @click="handleAddToCart"
          >
            <vf-a-icon :icon="['fas', 'shopping-cart']" />
          </vf-a-button>
          <vf-a-button
            color="light-gray"
            class="border border-radius-top-left-0"
            @click="handleAddToWishlist"
          >
            <vf-a-icon :icon="['fas', 'heart']" />
          </vf-a-button>
          <vf-a-button
            color="light-gray"
            class="border border-radius-top-left-0"
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
import placeholder from "vuefront/assets/img/placeholder.png";
import { mapGetters } from "vuex";
export default {
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
        id: this.product.id,
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
<style lang="scss">
.card-product {
  margin-bottom: 30px;
  &_wide {
  }

  &__image_wrapper {
    min-height: 213px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
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
    font-size: 1rem;
    font-weight: 600;
  }

  .fa-w-18 {
    width: 1.125rem;
  }
  .fa-w-16 {
    width: 1rem;
  }
}
</style>
