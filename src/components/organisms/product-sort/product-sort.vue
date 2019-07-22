<template>
  <section class="sort-section mb-4">
    <vf-m-row>
      <vf-m-col sm="6" md="2" align-self="center">
        <vf-m-button-group size="sm">
          <vf-a-button :pressed="mode === 'grid'" color="light-gray" @click="modeValue='grid'">
            <vf-a-icon icon="th" />
          </vf-a-button>
          <vf-a-button :pressed="mode === 'list'" color="light-gray" @click="modeValue='list'">
            <vf-a-icon icon="th-list" />
          </vf-a-button>
        </vf-m-button-group>
      </vf-m-col>
      <vf-m-col align-self="center">
        <vf-a-link to="/store/compare">{{$t('elements.store.productSort.compareText')}}</vf-a-link>
      </vf-m-col>
      <vf-m-col sm="6" md="4" align-self="center">
        <vf-m-input-group :prepend="$t('elements.store.productSort.sortByText')" size="sm">
          <vf-a-select v-model="sizeValue" :options="sizes" class="mr-3" />
        </vf-m-input-group>
      </vf-m-col>
      <vf-m-col sm="6" md="3" align-self="center">
        <vf-m-input-group :prepend="$t('elements.store.productSort.showText')" size="sm">
          <vf-a-select v-model="sortValue" :options="sorts" />
        </vf-m-input-group>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
import { BInputGroup } from "bootstrap-vue";
export default {
  components: {
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
