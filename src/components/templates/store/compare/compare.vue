<template>
  <section class="compare">
    <vf-m-table-horizontal :fields="fields" :items="compare">
      <template #image="data">
        <vf-m-product-thumb-image :product="data" width="80" height="80" />
      </template>
      <template #price="data">
        <vf-m-product-price :price="data.price" :special="data.special" variant="small" />
      </template>
      <template #stock="data">
        <div v-if="data.stock">{{$t('elements.store.compare.inStockText')}}</div>
        <div v-else>{{$t('elements.store.compare.outOfStockText')}}</div>
      </template>
      <template #rating="data">
        <vf-m-rating :value="data.rating" color="#ffcc00" readonly />
      </template>
      <template #actions="data">
        <vf-o-compare-actions :product="data" />
      </template>
    </vf-m-table-horizontal>
  </section>
</template>
<script>
export default {
  props: ["compare"],
  data() {
    return {
      fields: [
        {
          key: "name",
          label: this.$t("elements.store.compare.productRow")
        },
        {
          key: "image",
          label: this.$t("elements.store.compare.imageRow")
        },
        {
          key: "price",
          label: this.$t("elements.store.compare.priceRow")
        },
        {
          key: "model",
          label: this.$t("elements.store.compare.modelRow")
        },
        {
          key: "stock",
          label: this.$t("elements.store.compare.availabilityRow")
        },
        {
          key: "rating",
          label: this.$t("elements.store.compare.ratingRow")
        },
        {
          key: "shortDescription",
          label: this.$t("elements.store.compare.summaryRow")
        },
        {
          key: "actions",
          label: ""
        }
      ]
    };
  }
};
</script>
