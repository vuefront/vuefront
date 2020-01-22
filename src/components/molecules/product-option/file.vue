<template>
  <div class="vf-m-product-option-file">
    <vf-a-heading level="6" class="vf-m-product-option-file__name mt-5">{{option.name}}</vf-a-heading>
    <b-form-file
      class="vf-m-product-option-file__value"
      :value="activeOptionValue"
      @input="handleChange"
    />
  </div>
</template>
<script>
import { BFormFile } from "bootstrap-vue";
import uploadFileGql from "./upload.graphql";
import { mapGetters } from "vuex";
import { find } from "lodash";

export default {
  components: {
    BFormFile
  },
  props: ["option", "selected"],
  computed: {
    ...mapGetters({ error: "vuefront/error" }),
    activeOptionValue() {
      let result = find(this.selected, { id: this.option.id });

      return result ? result.value : "";
    }
  },
  methods: {
    async handleChange(value) {
      await this.$store.dispatch("apollo/upload", {
        mutation: uploadFileGql,
        variables: { file: value }
      });

      if (!this.error) {
        const { uploadFile } = this.$store.getters["apollo/get"];
        this.$emit("change", uploadFile.code);
      }
    }
  }
};
</script>