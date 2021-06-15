<template>
  <div class="vf-t-layout-default">
    <LazyHydrate when-visible>
      <vf-o-header />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <vf-o-header-mobile />
    </LazyHydrate>
    <vf-o-notification />
    <vf-o-breadcrumb />
    <vf-m-container>
      <div class="vf-t-layout-default__content">
        <vf-o-position
          name="contentTop"
          class="vf-t-layout-default__content-top"
        />
        <vf-m-row>
          <vf-m-col
            v-if="checkModules('columnLeft')"
            xs="3"
            class="hidden md:block vf-t-layout-default__content-left"
          >
            <vf-o-position name="columnLeft" />
          </vf-m-col>
          <vf-m-col :xs="contentWidth">
            <vf-o-position
              name="columnCenterTop"
              class="vf-t-layout-default__content-center-top"
            />
            <slot></slot>
            <vf-o-position
              name="columnCenterBottom"
              class="vf-t-layout-default__content-center-bottom"
            />
          </vf-m-col>
          <vf-m-col
            v-if="checkModules('columnRight')"
            xs="3"
            class="hidden md:block vf-t-layout-default__content-right"
          >
            <vf-o-position name="columnRight" />
          </vf-m-col>
        </vf-m-row>
        <vf-o-position
          name="contentBottom"
          class="vf-t-layout-default__content-bottom"
        />
      </div>
    </vf-m-container>
    <LazyHydrate when-visible>
      <vf-o-footer />
    </LazyHydrate>
  </div>
</template>
<script>
import { BaseModule } from "vuefront/lib/utils/module.js";
import { mapGetters } from "vuex";
import LazyHydrate from "vue-lazy-hydration";
export default {
  components: {
    LazyHydrate,
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
    },
  },
};
</script>
