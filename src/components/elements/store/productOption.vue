<template>
  <section class="product-option">
    <div v-for="(option, index) in product.options" :key="index" class="mb-5 mt-3">
      <div class="product-option__name h6 mt-5">{{option.name}}</div>
      <div class="btn-group-toggle btn-group-options row mx-0 mt-3 mb-5">
        <b-button
          v-for="(value, key) in option.values"
          :key="key"
          :pressed="checkActive(value.id, option)"
          :active="checkActive(value.id, option)"
          variant="neutral"
          class="col-12 mb-2 text-sm"
          size="lg"
          @click="handleOptionChange(value.id, option)"
        >{{value.name}}</b-button>
      </div>
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
