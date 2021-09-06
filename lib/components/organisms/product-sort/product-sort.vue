<template>
  <section class="sort-section mb-4">
    <vf-m-row cols="12">
      <vf-m-col xs="6" md="2" align-self="center">
        <vf-m-button-group size="sm">
          <vf-a-button
            :pressed="mode === 'grid'"
            color="light"
            @click="modeValue = 'grid'"
          >
            <vf-a-icon :icon="mdiViewGrid" size="26" />
          </vf-a-button>
          <vf-a-button
            :pressed="mode === 'list'"
            color="light"
            @click="modeValue = 'list'"
          >
            <vf-a-icon :icon="mdiViewList" size="26" />
          </vf-a-button>
        </vf-m-button-group>
      </vf-m-col>
      <vf-m-col align-self="center">
        <vf-a-link to="/store/compare">{{
          $t("elements.store.productSort.compareText")
        }}</vf-a-link>
      </vf-m-col>
      <vf-m-col xs="6" md="4" align-self="center">
        <vf-m-input-group
          :prepend="$t('elements.store.productSort.sortByText')"
          size="sm"
        >
          <vf-a-select
            v-model="sizeValue"
            :options="sizeOptions"
            class="mr-3"
          />
        </vf-m-input-group>
      </vf-m-col>
      <vf-m-col xs="6" md="3" align-self="center">
        <vf-m-input-group
          :prepend="$t('elements.store.productSort.showText')"
          size="sm"
        >
          <vf-a-select v-model="sortValue" :options="sortOptions" />
        </vf-m-input-group>
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
const modeValue = computed({
  get: () => props.mode,
  set: (e) => emits("changeMode", e),
});
const sizeValue = computed({
  get: () => props.size,
  set: (e) => emits("changeSize", e),
});
const sortValue = computed({
  get: () => props.sort,
  set: (e) => emits("changeSort", e),
});
</script>
