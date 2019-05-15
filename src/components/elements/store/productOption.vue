<template>
  <section class="product-option">
    <div v-for="(option, index) in product.options" :key="index" class="mb-5 mt-3">
      <div class="product-option__name h6 mt-5" v-html="option.name"/>
      <div :is="`vf-product-option-${option.type}`" :option="option" :selected="selectedOptions" @change="handleOptionChange($event, option)"/>
    </div>
  </section>
</template>
<script>
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import { BFormRadioGroup, BButton } from "bootstrap-vue/es/components";
export default {
  components: {
    BFormRadioGroup,
    BButton
  },
  props: ["product"],
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    checkActive(e, option) {
      let result = filter(
        this.selectedOptions,
        value => value.id === option.id && e === value.value
      );

      return !isEmpty(result);
    },
    handleOptionChange(e, option) {
      let result = filter(
        this.selectedOptions,
        value => value.id !== option.id
      );
      result.push({
        id: option.id,
        value: e
      });

      this.selectedOptions = result;

      this.$emit("change", result);
    }
  }
};
</script>
