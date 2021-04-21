<template>
  <div class="vf-l-layout">
    <LazyHydrate when-visible>
      <vf-o-header />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <vf-o-header-mobile />
    </LazyHydrate>
    <vf-o-notification />
    <vf-o-breadcrumb />
    <vf-m-container>
      <div class="vf-l-layout__content">
        <vf-o-position name="contentTop" class="vf-l-layout__content-top" />
        <vf-m-row>
          <vf-m-col
            v-if="checkModules('columnLeft')"
            sm="3"
            class="hidden md:block vf-l-layout__content-left"
          >
            <vf-o-position name="columnLeft" />
          </vf-m-col>
          <vf-m-col :sm="contentWidth">
            <vf-o-position
              name="columnCenterTop"
              class="vf-l-layout__content-center-top"
            />
            <slot></slot>
            <vf-o-position
              name="columnCenterBottom"
              class="vf-l-layout__content-center-bottom"
            />
          </vf-m-col>
          <vf-m-col
            v-if="checkModules('columnRight')"
            sm="3"
            class="hidden md:block vf-l-layout__content-right"
          >
            <vf-o-position name="columnRight" />
          </vf-m-col>
        </vf-m-row>
        <vf-o-position
          name="contentBottom"
          class="vf-l-layout__content-bottom"
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
