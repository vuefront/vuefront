<template>
  <section class="header-section">
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
      <b-col class="d-none d-md-block">
        <b-container>
          <vf-template-menu/>
        </b-container>
      </b-col>
      <b-col sm="12" class="d-block d-md-none">
        <b-container class="header-section__top">
          <div class="header-section__toggle" v-b-toggle.menu-collapse>
            <vf-icon icon="bars"></vf-icon>
          </div>
          <vf-header-logo :logo="logo" class="mx-auto ml-2"/>
          <vf-header-cart/>
        </b-container>
        <b-collapse id="menu-collapse">
          <vf-header-sidebar>
            <template #top>
              <vf-header-search/>
            </template>
            <template #bottom>
              <vf-currency/>
              <vf-language/>
            </template>
            <template #right>
              <div class="header-section__toggle_close" v-b-toggle.menu-collapse>
                <vf-icon icon="times"></vf-icon>
              </div>
            </template>
            <vf-template-menu/>
          </vf-header-sidebar>
        </b-collapse>
      </b-col>
      <vf-notification/>
    </b-row>
  </section>
</template>
<script>
import { BRow, BCol, BCollapse, BContainer, VBToggle } from "bootstrap-vue";
import "vuefront/scss/elements/common/header.scss";
export default {
  components: {
    BRow,
    BCol,
    BCollapse,
    BContainer
  },
  directives: {
    BToggle: VBToggle
  },
  props: {
    logo: {
      type: String,
      default: ""
    }
  }
};
</script>

