<template>
  <b-nav-item-dropdown class="top-nav__dropdown" left>
    <template
      slot="button-content"
    >{{activeCurrency.symbol_left || activeCurrency.symbol_right}} {{activeCurrency.title}}</template>
    <b-dropdown-item
      v-for="(value, index) in currency"
      :key="index"
      @click="handleEdit(value)"
    >{{value.symbol_left || value.symbol_right}} {{value.title}}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import BNavItemDropdown from "bootstrap-vue/es/components/nav/nav-item-dropdown";
import BDropdownItem from "bootstrap-vue/es/components/dropdown/dropdown-item";
import { mapGetters } from "vuex";
import find from "lodash/find";
export default {
  components: {
    BNavItemDropdown,
    BDropdownItem
  },
  computed: {
    ...mapGetters({
      currency: "store/currency/get",
      error: "vuefront/error"
    }),
    activeCurrency() {
      return find(this.currency, { active: true });
    }
  },
  methods: {
    async handleEdit({ code }) {
      await this.$store.dispatch("store/currency/edit", { code });
      if (!this.error) {
        location.reload();
      }
    }
  }
};
</script>

