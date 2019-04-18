<template>
  <section class="sort-section mb-4">
    <b-row>
      <b-col sm="6" md="2" align-self="center">
        <b-button-group size="sm">
          <b-button :pressed="mode === 'grid'" variant="light-gray" @click="modeValue='grid'">
            <vf-icon icon="th"/>
          </b-button>
          <b-button :pressed="mode === 'list'" variant="light-gray" @click="modeValue='list'">
            <vf-icon icon="th-list"/>
          </b-button>
        </b-button-group>
      </b-col>
      <b-col align-self="center">
        <b-link to="/store/compare">Product Compare</b-link>
      </b-col>
      <b-col sm="6" md="4" align-self="center">
        <b-input-group prepend="Sort by:" size="sm">
          <b-form-select v-model="sizeValue" :options="sizes" class="mr-3" height="40px"/>
        </b-input-group>
      </b-col>
      <b-col sm="6" md="3" align-self="center">
        <b-input-group prepend="Show:" size="sm">
          <b-form-select v-model="sortValue" :options="sorts" height="40px"/>
        </b-input-group>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BButton from "bootstrap-vue/es/components/button/button";
import BButtonGroup from "bootstrap-vue/es/components/button-group/button-group";
import BFormSelect from "bootstrap-vue/es/components/form-select/form-select";
import BInputGroup from "bootstrap-vue/es/components/input-group/input-group";
import BLink from "bootstrap-vue/es/components/link/link";
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
