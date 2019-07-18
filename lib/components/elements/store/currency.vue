<template>
  <b-nav-item-dropdown v-if="currency.length > 1" class="currency-section">
    <template slot="button-content">
      <span
        class="d-none d-md-inline-block currency-section__symbol"
      >{{activeCurrency.symbol_left || activeCurrency.symbol_right}}</span>
      <span class="currency-section__title">{{activeCurrency.title}}</span>
    </template>
    <b-dropdown-item
      v-for="(value, index) in currency"
      :key="index"
      @click="handleEdit(value)"
    >{{value.symbol_left || value.symbol_right}} {{value.title}}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import { BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import {find} from 'lodash'
export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
  },
  computed: {
    ...mapGetters({
      currency: 'store/currency/get',
      error: 'vuefront/error',
    }),
    activeCurrency() {
      return find(this.currency, { active: true })
    },
  },
  methods: {
    async handleEdit({ code }) {
      await this.$store.dispatch('store/currency/edit', { code })
      if (!this.error) {
        location.reload()
      }
    },
  },
}
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
