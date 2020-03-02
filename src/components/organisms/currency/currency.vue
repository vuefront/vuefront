<template>
  <vf-m-dropdown v-if="currency && currency.length > 1" class="currency-section" variant="link" size="sm">
    <template slot="button-content">
      <span
        class="d-none d-md-inline-block currency-section__symbol"
      >{{activeCurrency.symbol_left || activeCurrency.symbol_right}}</span>
      <span class="currency-section__title">{{activeCurrency.title}}</span>
    </template>
    <vf-m-dropdown-item
      v-for="(value, index) in currency"
      :key="index"
      @click="handleEdit(value)"
    >{{value.symbol_left || value.symbol_right}} {{value.title}}</vf-m-dropdown-item>
  </vf-m-dropdown>
</template>
<script>
import { mapGetters } from "vuex";
import { find } from "lodash";
export default {
  name: 'vf-o-currency',
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
<style lang="scss">
.currency-section {
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  &__symbol {
  }
  &__title {
    @media (max-width: 767px) {
      color: #000;
    }
  }
}
</style>
