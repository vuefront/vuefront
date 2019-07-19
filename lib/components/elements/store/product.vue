<template>
  <section class="product-section">
    <vf-m-row>
      <vf-m-col sm="12" md="6">
        <vf-product-image :product="product" />
        <vf-reviews :reviews="product.reviews" @create="handleCreateReview" />
      </vf-m-col>
      <vf-m-col sm="12" md="6">
        <div class="product-info pl-lg-5">
          <vf-a-heading level="4" class="product-info__name">{{product.name}}</vf-a-heading>
          <vf-a-heading level="6" class="product-info__model text-sm">{{product.model}}</vf-a-heading>
          <vf-m-row>
            <vf-m-col sm="6">
              <vf-rating
                v-if="product.rating > 0"
                :value="product.rating"
                color="#ffcc00"
                readonly
              />
            </vf-m-col>
            <vf-m-col sm="6" class="text-sm-right">
              <vf-a-badge
                color="primary"
                rounded
              >{{$t('elements.store.product.idText')}}{{product.id}}</vf-a-badge>
              <vf-a-badge
                v-if="product.stock"
                color="success"
                rounded
              >{{$t('elements.store.product.inStockText')}}</vf-a-badge>
              <vf-a-badge
                v-else
                color="danger"
                rounded
              >{{$t('elements.store.product.outOfStockText')}}</vf-a-badge>
            </vf-m-col>
          </vf-m-row>
          <div
            class="my-4 py-4 border-top"
            :class="{'border-bottom': product.attributes.lenght > 0}"
          >
            <vf-a-heading
              level="6"
              tag="h6"
              class="product-info__description-title text-sm mb-1"
            >{{$t('elements.store.product.descriptionText')}}</vf-a-heading>
            <div class="product-info__description text-sm" v-html="product.description" />
          </div>
          <vf-product-attribute v-if="product.attributes.length > 0" :product="product" />
          <div class="py-4 my-4 border-bottom border-top">
            <vf-product-option
              v-if="product.options.length > 0"
              :product="product"
              @change="handleChangeOptions"
            />
            <vf-m-row>
              <vf-m-col sm="6" md="5" class="mb-4 mb-sm-0">
                <vf-a-heading level="3" class="product-info__price">
                  <span
                    v-if="product.special !== ''"
                    class="product-info__price_special"
                  >{{product.special}}</span>
                  <span
                    :class="{'font-weight-light': product.special !== '', 'h6': product.special !== ''}"
                  >{{ product.price }}</span>
                </vf-a-heading>
              </vf-m-col>
              <vf-m-col sm="6" md="7" class="text-sm-right">
                <vf-a-button variant="primary" @click="handleAddToCart">
                  <vf-a-icon icon="shopping-cart" />
                  {{$t('elements.store.product.buttonAddToCart')}}
                </vf-a-button>
              </vf-m-col>
            </vf-m-row>
          </div>
        </div>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      selectedOptions: []
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async handleAddToCart() {
      await this.$store.dispatch("store/cart/add", {
        id: this.product.id,
        quantity: 1,
        options: this.selectedOptions
      });

      if (!this.error) {
        this.$store.commit(
          "notification/add",
          this.product.name + this.$t("elements.store.product.notificationText")
        );
      } else {
        this.$store.commit("notification/error", this.error.message);
      }
    },

    handleChangeOptions(e) {
      this.selectedOptions = e;
    },

    async handleCreateReview({ content, author, rating }) {
      await this.$store.dispatch("store/product/addReview", {
        id: this.product.id,
        content,
        author,
        rating,
        limit: 5
      });
    }
  }
};
</script>
<style lang="scss">
.product-info {
  &__price_special {
    & + span {
      text-decoration: line-through;
    }
  }
}
</style>
