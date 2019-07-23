<template>
  <section class="product-option">
    <div v-for="(option, index) in product.options" :key="index" class="mb-5 mt-3">
      <vf-a-heading level="6" class="product-option__name mt-5">{{option.name}}</vf-a-heading>
      <div
        :is="`vf-m-product-option-${option.type}`"
        :option="option"
        :selected="options"
        @change="handleOptionChange($event, option)"
      />
    </div>
  </section>
</template>
<script>
import { isEmpty, filter } from "lodash";
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapGetters({
      options: "store/product/options"
    })
  },
  methods: {
    checkActive(e, option) {
      let result = filter(
        this.options,
        value => value.id === option.id && e === value.value
      );

      return !isEmpty(result);
    },
    handleOptionChange(e, option) {
      let result = filter(this.options, value => value.id !== option.id);
      result.push({
        id: option.id,
        value: e
      });

      this.$store.commit("store/product/setOptions", result);
    }
  }
};
</script>