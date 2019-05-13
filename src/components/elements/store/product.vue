<template>
  <section class="product-section">
    <b-row>
      <b-col sm="12" md="6">
        <vf-product-image :product="product"/>
        <vf-reviews :reviews="product.reviews" @create="handleCreateReview"/>
      </b-col>
      <b-col sm="12" md="6">
        <div class="product-info pl-lg-5">
          <div class="product-info__name h4">{{product.name}}</div>
          <div class="product-info__model text-sm h6">{{product.model}}</div>
          <b-row>
            <b-col sm="6">
              <vf-rating
                v-if="product.rating > 0"
                :value="product.rating"
                color="#ffcc00"
                readonly
              />
            </b-col>
            <b-col sm="6" class="text-sm-right">
              <b-badge variant="primary" pill>{{$t('elements.store.product.idText')}}{{product.id}}</b-badge>
              <b-badge
                v-if="product.stock"
                variant="success"
                pill
              >{{$t('elements.store.product.inStockText')}}</b-badge>
              <b-badge v-else variant="danger" pill>{{$t('elements.store.product.outOfStockText')}}</b-badge>
            </b-col>
          </b-row>
          <div
            class="my-4 py-4 border-top"
            :class="{'border-bottom': product.attributes.lenght > 0}"
          >
            <h6
              class="product-info__description-title text-sm mb-1"
            >{{$t('elements.store.product.descriptionText')}}</h6>
            <div class="product-info__description text-sm" v-html="product.description"/>
          </div>
          <vf-product-attribute v-if="product.attributes.length > 0" :product="product"/>
          <div class="py-4 my-4 border-bottom border-top">
            <vf-product-option
              v-if="product.options.length > 0"
              :product="product"
              @change="handleChangeOptions"
            />
            <b-row>
              <b-col sm="6" md="5" class="mb-4 mb-sm-0">
                <div class="product-info__price h3">
                  <span
                    v-if="product.special !== ''"
                    class="product-info__price_special"
                  >{{product.special}}</span>
                  <span
                    :class="{'font-weight-light': product.special !== '', 'h6': product.special !== ''}"
                  >{{ product.price }}</span>
                </div>
              </b-col>
              <b-col sm="6" md="7" class="text-sm-right">
                <b-button variant="primary" @click="handleAddToCart">
                  <vf-icon icon="shopping-cart"/>
                  {{$t('elements.store.product.buttonAddToCart')}}
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol, BBadge, BButton } from "bootstrap-vue/es/components";
import "vuefront/scss/elements/store/product.scss";
import { mapGetters } from "vuex";

export default {
  components: {
    BRow,
    BCol,
    BBadge,
    BButton
  },
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
        id: Number(this.product.id),
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
