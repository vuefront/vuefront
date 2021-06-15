<template>
  <div class="vf-t-layout-full-width">
    <LazyHydrate when-visible>
      <vf-o-header />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <vf-o-header-mobile />
    </LazyHydrate>
    <vf-o-notification />
    <vf-o-breadcrumb />
    <vf-m-container fluid>
      <div class="vf-t-layout-full-width__content">
        <vf-o-position
          name="contentTop"
          class="vf-t-layout-full-width__content-top"
        />
        <vf-m-row>
          <vf-m-col
            v-if="checkModules('columnLeft')"
            xs="3"
            class="hidden md:block vf-t-layout-full-width__content-left"
          >
            <vf-o-position name="columnLeft" />
          </vf-m-col>
          <vf-m-col :xs="contentWidth">
            <vf-o-position
              name="columnCenterTop"
              class="vf-t-layout-full-width__content-center-top"
            />
            <slot></slot>
            <vf-o-position
              name="columnCenterBottom"
              class="vf-t-layout-full-width__content-center-bottom"
            />
          </vf-m-col>
          <vf-m-col
            v-if="checkModules('columnRight')"
            xs="3"
            class="hidden md:block vf-t-layout-full-width__content-right"
          >
            <vf-o-position name="columnRight" />
          </vf-m-col>
        </vf-m-row>
        <vf-o-position
          name="contentBottom"
          class="vf-t-layout-full-width__content-bottom"
        />
      </div>
    </vf-m-container>
    <LazyHydrate when-visible>
      <vf-o-footer />
    </LazyHydrate>
  </div>
</template>
<script>
import vfTLayoutsDefault from "vuefront/lib/components/templates/layouts/default/default.vue";
export default {
  mixins: [vfTLayoutsDefault],
};
</script>
