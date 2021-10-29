<template>
  <section class="vf-t-store-compare">
    <vf-m-table-horizontal :fields="fields" :items="compare">
      <template #image="data">
        <vf-m-product-thumb-image :product="data" width="80" height="80" />
      </template>
      <template #price="data">
        <vf-m-product-price
          :price="data.price"
          :special="data.special"
          variant="small"
        />
      </template>
      <template #stock="data">
        <div v-if="data.stock">
          {{ $t("elements.store.compare.inStockText") }}
        </div>
        <div v-else>{{ $t("elements.store.compare.outOfStockText") }}</div>
      </template>
      <template #rating="data">
        <vf-m-rating :model-value="data.rating" readonly />
      </template>
      <template #actions="data">
        <vf-o-compare-actions :product="data" />
      </template>
    </vf-m-table-horizontal>
  </section>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

defineProps({
  compare: {
    type: Array,
    default: () => [],
  },
});
const i18n = useI18n();
const fields = [
  {
    key: "name",
    label: i18n.t("elements.store.compare.productRow"),
  },
  {
    key: "image",
    label: i18n.t("elements.store.compare.imageRow"),
  },
  {
    key: "price",
    label: i18n.t("elements.store.compare.priceRow"),
  },
  {
    key: "model",
    label: i18n.t("elements.store.compare.modelRow"),
  },
  {
    key: "stock",
    class: "vf-t-store-compare__stock",
    label: i18n.t("elements.store.compare.availabilityRow"),
  },
  {
    key: "rating",
    class: "vf-t-store-compare__rating",
    label: i18n.t("elements.store.compare.ratingRow"),
  },
  {
    key: "shortDescription",
    class: "vf-t-store-compare__description",
    label: i18n.t("elements.store.compare.summaryRow"),
  },
  {
    key: "actions",
    class: "vf-t-store-compare__actions",
    label: "",
  },
];
</script>
