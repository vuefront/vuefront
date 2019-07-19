<template>
  <section class="sort-section mb-4">
    <b-row>
      <b-col sm="6" md="2" align-self="center">
        <b-button-group size="sm">
          <b-button :pressed="mode === 'grid'" variant="light-gray" @click="modeValue='grid'">
            <vf-a-icon icon="th"/>
          </b-button>
          <b-button :pressed="mode === 'list'" variant="light-gray" @click="modeValue='list'">
            <vf-a-icon icon="th-list"/>
          </b-button>
        </b-button-group>
      </b-col>
      <b-col align-self="center">
        <b-link to="/store/compare">{{$t('elements.store.productSort.compareText')}}</b-link>
      </b-col>
      <b-col sm="6" md="4" align-self="center">
        <b-input-group :prepend="$t('elements.store.productSort.sortByText')" size="sm">
          <b-form-select v-model="sizeValue" :options="sizes" class="mr-3"/>
        </b-input-group>
      </b-col>
      <b-col sm="6" md="3" align-self="center">
        <b-input-group :prepend="$t('elements.store.productSort.showText')" size="sm">
          <b-form-select v-model="sortValue" :options="sorts"/>
        </b-input-group>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BButtonGroup,
  BFormSelect,
  BInputGroup,
  BLink
} from "bootstrap-vue";
export default {
  components: {
    BLink,
    BRow,
    BCol,
    BButton,
    BButtonGroup,
    BFormSelect,
    BInputGroup
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
