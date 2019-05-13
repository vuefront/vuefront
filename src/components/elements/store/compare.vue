<template>
  <section class="compare">
    <div class="compare__products">
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.productRow')}}</div>
        <div
          v-for="(value, index) in compare"
          :key="index"
          class="compare__item_value border p-2"
          v-html="value.name"
        />
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.imageRow')}}</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <b-img-lazy :src="value.image" :blank-src="value.imageLazy" width="80" height="80"/>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.priceRow')}}</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div class="card-product__price h4">
            <span v-if="value.special !== ''" class="card-product__price_special">{{value.special}}</span>
            <span :class="{'font-weight-regular': value.special !== ''}">{{ value.price }}</span>
          </div>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.modelRow')}}</div>
        <div
          v-for="(value, index) in compare"
          :key="index"
          class="compare__item_value border p-2"
        >{{value.model}}</div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.availabilityRow')}}</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div v-if="value.stock">{{$t('elements.store.compare.inStockText')}}</div>
          <div v-else>{{$t('elements.store.compare.outOfStockText')}}</div>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.ratingRow')}}</div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <vf-rating :value="value.rating" color="#ffcc00" readonly/>
        </div>
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2">{{$t('elements.store.compare.summaryRow')}}</div>
        <div
          v-for="(value, index) in compare"
          :key="index"
          class="compare__item_value border p-2"
          v-html="value.shortDescription"
        />
      </div>
      <div class="compare__item">
        <div class="compare__item_value border p-2"></div>
        <div v-for="(value, index) in compare" :key="index" class="compare__item_value border p-2">
          <div class="compare__action m-1 d-inline" @click="handleAddToCart(value)">
            <vf-icon :icon="['fas', 'shopping-cart']"/>
          </div>
          <div class="compare__action m-1 ml-2 d-inline" @click="handleRemove(value)">
            <vf-icon icon="times"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  BTable,
  BImgLazy,
  BMedia,
  BMediaBody,
  BMediaAside,
  BFormInput
} from "bootstrap-vue/es/components";
import "vuefront/scss/elements/store/compare.scss";
export default {
  components: { BTable, BImgLazy, BMedia, BMediaBody, BMediaAside, BFormInput },
  props: ["compare"],
  data() {
    let fields = [
      {
        key: 0,
        label: ""
      }
    ];
    for (const key in this.compare) {
      const product = this.compare[key];
      fields = [
        ...fields,
        {
          key: product.id,
          label: this.compare[key].name,
          sortable: false
        }
      ];
    }
    return {
      fields
    };
  },
  computed: {
    items() {
      let result = [];
      const row = { 0: "Product" };
      for (const key in this.compare) {
        const product = this.compare[key];
        row[product.id] = product.name;
      }

      result = [...result, row];

      return result;
    }
  },
  methods: {
    handleRemove(compareProduct) {
      this.$store.dispatch("store/compare/remove", {
        id: compareProduct.id
      });
    },
    async handleAddToCart(compareProduct) {
      this.$store.commit(
        "notification/add",
        compareProduct.name + this.$t("elements.store.compare.notificationText")
      );

      await this.$store.dispatch("store/cart/add", {
        id: Number(compareProduct.id),
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
