<template>
  <span>
    <vf-m-dropdown
      v-if="currency && currency.length > 1"
      class="currency-section"
      variant="link"
      size="sm"
    >
      <template v-slot:button-content>
        <span
          class="
            d-none d-md-inline-block
            currency-section__symbol
            mr-1
            font-normal
            text-base
          "
          >{{ activeCurrency.symbol_left || activeCurrency.symbol_right }}</span
        >
        <span class="currency-section__title font-normal text-base">{{
          activeCurrency.title
        }}</span>
      </template>
      <vf-m-dropdown-item
        v-for="(value, index) in currency"
        :key="index"
        class="whitespace-nowrap"
        @click="handleEdit(value)"
        >{{ value.symbol_left || value.symbol_right }}
        {{ value.title }}</vf-m-dropdown-item
      >
    </vf-m-dropdown>
  </span>
</template>
<script lang="ts" setup>
import { mapGetters, useStore } from "vuex";
import { find } from "lodash";
import { computed } from "vue";
const store = useStore();
const currency = computed(() => store.getters["store/currency/get"]);
const error = computed(() => store.getters["vuefront/error"]);
const activeCurrency = computed(() => {
  return find(currency, { active: true });
});
const handleEdit = async ({ code }: { code: string }) => {
  await store.dispatch("store/currency/edit", { code });
  if (!error.value) {
    location.reload();
  }
};
</script>
