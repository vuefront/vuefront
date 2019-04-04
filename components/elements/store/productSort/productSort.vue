<template>
  <section class="sort-section mb-4">
    <v-layout row wrap align-center fill-height>
      <v-flex xs-fill text-xs-left>
        <v-layout row>
          <v-btn-toggle v-model="modeValue">
            <v-btn flat value="grid">
              <v-icon>grid_on</v-icon>
            </v-btn>
            <v-btn flat value="list">
              <v-icon>view_list</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-layout>
      </v-flex>
      <v-flex xs4 text-xs-right>
        <v-layout row>
          <v-select
            v-model="sizeValue"
            :items="sizes"
            prepend-inner-icon="format_size"
            class="mr-3"
            height="40px"
            hide-details
            solo
            dense
          />
          <v-select
            v-model="sortValue"
            :items="sorts"
            prepend-inner-icon="sort"
            height="40px"
            hide-details
            solo
            dense
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import isNull from "lodash/isNull";
import filter from "lodash/filter";
import { VLayout, VFlex, VSelect, VBtnToggle, VBtn, VIcon } from "vuetify/lib";
export default {
  name: "vfStoreProductSortDefault",
  components: {
    VLayout,
    VFlex,
    VSelect,
    VBtnToggle,
    VBtn,
    VIcon
  },
  props: ["sizes", "sorts", "sort", "size", "mode"],
  computed: {
    modeValue: {
      get() {
        return this.mode;
      },
      set(e) {
        this.$emit("changeMode", e);
      }
    },

    sizeValue: {
      get() {
        return this.size;
      },
      set(e) {
        this.$emit("changeSize", e);
      }
    },

    sortValue: {
      get() {
        return this.sort;
      },
      set(e) {
        this.$emit("changeSort", e);
      }
    }
  }
};
</script>
