<template>
  <div class="nav-section">
    <b-container>
      <b-row class="nav-section__navbar">
        <b-col sm="12" md class="text-center text-md-left mb-3 mb-md-0">
          <slot name="left"></slot>
        </b-col>
        <b-col sm="12" md="auto" class="mb-3 mb-md-0">
          <slot name="center"></slot>
        </b-col>
        <b-col sm="12" md class="text-center text-md-right">
          <slot name="right"></slot>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { BRow, BCol, BContainer } from 'bootstrap-vue'

export default {
  components: {
    BContainer,
    BRow,
    BCol,
  },
}
</script>
<style lang="scss">
.nav-section {
  padding: 12px 0;
  &__navbar {
    flex-direction: row;
  }
  &__link {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
    .nav-link {
      padding: 0.5rem 0.5rem;
      color: rgba(31, 45, 61, 0.5);
    }
  }

  &__logo {
    height: 40px;
  }
}
</style>
