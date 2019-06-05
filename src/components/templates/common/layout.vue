<template>
  <div>
    <vf-template-header :logo="logo"/>
    <b-container>
      <div class="main-content">
        <vf-position name="contentTop" class="py-3"/>
        <b-row>
          <b-col v-if="checkModules('columnLeft')" sm="3" class="d-none d-md-block">
            <vf-position name="columnLeft" class="px-2"/>
          </b-col>
          <b-col :sm="contentWidth">
            <slot></slot>
          </b-col>
          <b-col v-if="checkModules('columnRight')" sm="3" class="d-none d-md-block">
            <vf-position name="columnRight" class="px-2"/>
          </b-col>
        </b-row>
        <vf-position name="contentBottom" class="py-3"/>
      </div>
    </b-container>
    <vf-template-footer :logo="footerLogo"/>
  </div>
</template>
<script>
import { BaseModule } from "~/utils/module.js";
import { BRow, BCol, BContainer } from "bootstrap-vue";
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
        result = 6;
      } else if (
        this.checkModules("columnLeft") ||
        this.checkModules("columnRight")
      ) {
        result = 9;
      }
      return result;
    }
  }
};
</script>
