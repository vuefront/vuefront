<template>
  <div class="vf-m-product-option vf-m-product-option--file">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <input
      class="vf-m-product-option__value"
      type="file"
      :value="activeOptionValue"
      @input="handleChange"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import find from "lodash-es/find";
import uploadFileGql from "./upload.graphql";

export default {
  props: ["option", "selected"],
  computed: {
    ...mapGetters({ error: "vuefront/error" }),
    activeOptionValue() {
      const result = find(this.selected, { id: this.option.id });

      return result ? result.value : null;
    },
  },
  methods: {
    async handleChange(value) {
      await this.$store.dispatch("apollo/upload", {
        mutation: uploadFileGql,
        variables: { file: value },
      });

      if (!this.error) {
        const { uploadFile } = this.$store.getters["apollo/get"];
        this.$emit("change", uploadFile.code);
      }
    },
  },
};
</script>
