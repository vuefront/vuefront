<template>
  <section class="product-option">
    <div v-for="(option, index) in product.options" :key="index" class="mb-5 mt-3">
      <div class="product-option__name subheading font-weight-medium">{{option.name}}</div>
      <v-item-group @change="handleOptionChange($event, option)">
        <v-item v-for="(value, key) in option.values" :key="key" :value="value.id">
          <v-btn
            slot-scope="{ active, toggle }"
            :color="active ? 'primary' : ''"
            :ripple="false"
            @click="toggle"
            outline
            block
            flat
            large
            class="mb-2"
            depressed
          >
            <div class="product-option__value_name body-2">{{value.name}}</div>
          </v-btn>
        </v-item>
      </v-item-group>
    </div>
  </section>
</template>
<script>
import isNull from "lodash/isNull";
import filter from "lodash/filter";
import { VItemGroup, VItem, VBtn } from "vuetify/lib";
export default {
  name: "vfStoreProductOptionsDefault",
  components: {
    VItemGroup,
    VItem,
    VBtn
  },
  props: ["product"],
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
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
