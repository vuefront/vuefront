<template>
  <div class="vf-t-layout-full-width">
    <vf-o-header />
    <vf-o-header-mobile />
    <vf-o-notification />
    <vf-o-breadcrumb />
    <vf-o-position
      name="contentFullTop"
      class="vf-t-layout-default__content-full-top"
    />
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
    <vf-o-position
      name="contentFullBottom"
      class="vf-t-layout-default__content-full-bottom"
    />
    <vf-o-footer />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import useModule from "../../../../utils/module";
const { checkModules } = useModule();
const contentWidth = computed(() => {
  let result = 12;
  if (checkModules("columnLeft") && checkModules("columnRight")) {
    result = 6;
  } else if (checkModules("columnLeft") || checkModules("columnRight")) {
    result = 9;
  }
  return result;
});
</script>
