<template>
  <span>
    <vf-m-dropdown
      v-if="currency && currency.length > 1"
      class="currency-section"
      variant="link"
      size="sm"
      link
    >
      <template #button-content>
        <span class="currency-section__title font-normal text-base">{{
          activeCurrency.code
        }}</span>
      </template>
      <vf-m-dropdown-item
        v-for="(value, index) in currency"
        :key="index"
        class="whitespace-nowrap uppercase"
        @click="handleEdit(value)"
        >{{ value.code }}</vf-m-dropdown-item
      >
    </vf-m-dropdown>
  </span>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { find } from "lodash";
import { computed } from "vue";
const store = useStore();
const currency = computed(() => store.getters["store/currency/get"]);
const error = computed(() => store.getters["vuefront/error"]);
const activeCurrency = computed(() => {
  return find(currency.value, { active: true });
});
const handleEdit = async ({ code }: { code: string }) => {
  await store.dispatch("store/currency/edit", { code });

if (!error.value) {
    location.reload();
  }
};
</script>
