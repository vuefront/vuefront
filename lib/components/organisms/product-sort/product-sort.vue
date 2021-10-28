<template>
  <section class="vf-o-product-sort mb-4">
    <vf-m-row cols="12">
      <vf-m-col xs="6" md="2" align-self="center">
        <div
          class="vf-o-product-sort__mode --grid"
          :class="{ '--active': modeValue === 'grid' }"
          @click="modeValue = 'grid'"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          class="vf-o-product-sort__mode --list"
          :class="{ '--active': modeValue === 'list' }"
          @click="modeValue = 'list'"
        >
          <span></span>
        </div>
      </vf-m-col>
      <vf-m-col align-self="center">
        <vf-a-link to="/store/compare" class="vf-o-product-sort__compare">{{
          $t("elements.store.productSort.compareText")
        }}</vf-a-link>
      </vf-m-col>
      <vf-m-col xs="6" md="7" align-self="center" class="text-right">
        <div class="vf-o-product-sort__sort">
          <span>{{ $t("elements.store.productSort.sortByText") }}</span>
          <vf-a-select
            v-model="sortValue"
            :options="sortOptions"
            class="mr-3"
            size="sm"
          />
        </div>
        <div class="vf-o-product-sort__limit">
          <span>{{ $t("elements.store.productSort.showText") }}</span>
          <vf-a-select v-model="sizeValue" size="sm" :options="sizeOptions" />
        </div>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script lang="ts" setup>
import { mdiViewGrid, mdiViewList } from "@mdi/js";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const i18n = useI18n();

const props = defineProps({
  sort: {
    type: String,
    default: () => "id|ASC",
  },
  size: {
    type: Number,
    default: () => 15,
  },
  mode: {
    type: String,
    default: () => "grid",
  },
});

const sizeOptions = [
  {
    text: i18n.t("templates.store.category.15Text"),
    value: 15,
  },
  {
    text: i18n.t("templates.store.category.25Text"),
    value: 25,
  },
  {
    text: i18n.t("templates.store.category.50Text"),
    value: 50,
  },
  {
    text: i18n.t("templates.store.category.75Text"),
    value: 75,
  },
  {
    text: i18n.t("templates.store.category.100Text"),
    value: 100,
  },
];

const sortOptions = [
  {
    text: i18n.t("templates.store.category.defaultSortText"),
    value: "id|ASC",
  },
  {
    text: i18n.t("templates.store.category.nameAscSortText"),
    value: "name|ASC",
  },
  {
    text: i18n.t("templates.store.category.nameDescSortText"),
    value: "name|DESC",
  },
  {
    text: i18n.t("templates.store.category.priceAscSortText"),
    value: "price|ASC",
  },
  {
    text: i18n.t("templates.store.category.priceDescSortText"),
    value: "price|DESC",
  },
  {
    text: i18n.t("templates.store.category.ratingAscSortText"),
    value: "rating|ASC",
  },
  {
    text: i18n.t("templates.store.category.ratingDescSortText"),
    value: "rating|DESC",
  },
  {
    text: i18n.t("templates.store.category.modelAscSortText"),
    value: "model|ASC",
  },
  {
    text: i18n.t("templates.store.category.modelDescSortText"),
    value: "model|DESC",
  },
];
const emits = defineEmits(["changeMode", "changeSize", "changeSort"]);

const sizeValue = computed({
  get: () => props.size,
  set: (e) => emits("changeSize", e),
});
const modeValue = computed({
  get: () => props.mode,
  set: (e) => emits("changeMode", e),
});

const sortValue = computed({
  get: () => props.sort,
  set: (e) => emits("changeSort", e),
});
</script>
