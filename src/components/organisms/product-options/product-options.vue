<template>
  <section class="vf-o-product-options">
    <div
      v-for="(option, index) in product.options"
      :key="index"
      class="vf-o-product-options__item"
    >
      <vf-m-product-option-checkbox
        v-if="option.type === 'checkbox'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-date
        v-else-if="option.type === 'date'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-datetime
        v-else-if="option.type === 'datetime'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-file
        v-else-if="option.type === 'file'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-radio
        v-else-if="option.type === 'radio'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-select
        v-else-if="option.type === 'select'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-text
        v-else-if="option.type === 'text'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-textarea
        v-else-if="option.type === 'textarea'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
      <vf-m-product-option-time
        v-else-if="option.type === 'time'"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import isEmpty from "lodash-es/isEmpty";
import filter from "lodash-es/filter";
import { mapGetters, useStore } from "vuex";
import { computed } from "vue";
defineProps({
  product: {
    type: Object,
    default: () => null,
  },
});

const store = useStore();
const options = computed(() => store.getters["store/product/options"]);

const checkActive = (e, option) => {
  const result = filter(
    this.options,
    (value) => value.id === option.id && e === value.value
  );

  return !isEmpty(result);
};

const handleOptionChange = (e, option) => {
  const result = filter(options, (value) => value.id !== option.id);
  result.push({
    id: option.id,
    value: e,
  });

  store.commit("store/product/setOptions", result);
};
</script>
