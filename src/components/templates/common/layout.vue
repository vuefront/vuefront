<template>
  <div>
    <vf-template-header :logo="logo"/>
    <b-container class="p-0">
      <div class="main-content">
        <vf-position-top class="py-3"/>
        <b-row>
          <b-col v-if="checkModules('columnLeft')" sm="3" class="d-none d-md-block">
            <vf-position-left class="px-2"/>
          </b-col>
          <b-col :sm="contentWidth">
            <slot></slot>
          </b-col>
          <b-col v-if="checkModules('columnRight')" sm="3" class="d-none d-md-block">
            <vf-position-right class="px-2"/>
          </b-col>
        </b-row>
        <vf-position-bottom class="py-3"/>
      </div>
    </b-container>
    <vf-template-footer :logo="footerLogo"/>
  </div>
</template>
<script>
import { BaseModule } from "~/utils/module.js";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import "vuefront/scss/templates/layout.scss";

export default {
  components: {
    BContainer,
    BRow,
    BCol
  },
  props: {
    logo: {
      type: String,
      default: ""
    },
    footerLogo: {
      type: String,
      default: ""
    }
  },
  mixins: [BaseModule],
  computed: {
    contentWidth() {
      let result = 12;
      if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
          result = 6
      } else if (this.checkModules("columnLeft") || this.checkModules("columnRight")) {
          result = 9
      }
      return result;
    }
  }
};
</script>
