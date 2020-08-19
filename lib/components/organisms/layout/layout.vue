<template>
  <div class="vf-o-layout">
    <vf-o-header />
    <vf-o-header-mobile />
    <!-- <vf-o-notification /> -->
    <!-- <vf-o-breadcrumb /> -->
    <vf-m-container>
      <div class="vf-o-layout__content">
        <!-- <vf-o-position name="contentTop" class="vf-o-layout__content-top" /> -->
        <vf-m-row>
          <!-- <vf-m-col
            v-if="checkModules('columnLeft')"
            sm="3"
            class="d-none d-md-block vf-o-layout__content-left"
          >
            <vf-o-position name="columnLeft" />
          </vf-m-col> -->
          <vf-m-col :sm="contentWidth">
            <!-- <vf-o-position name="columnCenterTop" class="vf-o-layout__content-center-top" /> -->
            <slot></slot>
            <!-- <vf-o-position name="columnCenterBottom" class="vf-o-layout__content-center-bottom" /> -->
          </vf-m-col>
          <!-- <vf-m-col
            v-if="checkModules('columnRight')"
            sm="3"
            class="d-none d-md-block vf-o-layout__content-right"
          >
            <vf-o-position name="columnRight" />
          </vf-m-col> -->
        </vf-m-row>
        <!-- <vf-o-position name="contentBottom" class="vf-o-layout__content-bottom" /> -->
      </div>
    </vf-m-container>
    <vf-o-footer />
  </div>
</template>
<script>
// import { BaseModule } from "vuefront/lib/utils/module.js";
import { mapGetters } from 'vuex';

export default {
  // mixins: [BaseModule],
  computed: {
    contentWidth() {
      let result = 12;
      // if (this.checkModules("columnLeft") && this.checkModules("columnRight")) {
      //   result = 6;
      // } else if (
      //   this.checkModules("columnLeft") ||
      //   this.checkModules("columnRight")
      // ) {
      //   result = 9;
      // }
      return result;
    }
  }
};
</script>