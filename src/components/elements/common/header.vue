<template>
  <b-row no-gutters>
    <b-col sm="12" class="d-none d-md-block">
      <vf-header-top/>
    </b-col>
    <b-col sm="12" class="d-none d-md-block">
      <vf-header-center>
        <template #left>
          <vf-header-logo :logo="logo" class="d-none d-md-block"/>
        </template>
        <template #center>
          <vf-header-search class="mx-auto"/>
        </template>
        <template #right>
          <vf-header-cart/>
        </template>
      </vf-header-center>
    </b-col>
    <b-col sm="12">
      <vf-template-menu>
        <template #mobile>
          <vf-header-logo :logo="logo" class="d-block d-md-none mx-auto ml-2"/>
          <vf-header-cart/>
        </template>
        <template #mobile-dropdown>
          <vf-currency/>
          <vf-language/>
        </template>
      </vf-template-menu>
    </b-col>
    <vf-notification/>
  </b-row>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue/es/components";
export default {
  components: {
    BRow,
    BCol
  },
  props: {
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>

