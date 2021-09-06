<template>
  <footer class="vf-o-footer clearfix">
    <vf-m-container>
      <vf-m-row class="md:pt">
        <vf-m-col xs="4" class="mb-5 lg:mb-0">
          <div>
            <vf-a-image
              :src="logo"
              :width-amp="vuefront$.images.logo.width"
              :height-amp="vuefront$.images.logo.height"
              alt
              width="180"
              class="mb-3"
            />
            <p>{{ $t("elements.common.footer.descriptionText") }}</p>
          </div>
        </vf-m-col>
        <vf-m-col xs="4" md="6" lg="2" class="lg:ml-auto mb-5 lg:mb-0">
          <vf-o-position name="footerLeft" />
        </vf-m-col>
        <vf-m-col xs="4" md="6" lg="2" class="mb-5 lg:mb-0">
          <vf-o-position name="footerCenter" />
        </vf-m-col>
        <vf-m-col xs="4" md="6" lg="2" class="mb-5 lg:mb-0">
          <vf-o-position name="footerRight" />
        </vf-m-col>
      </vf-m-row>
      <vf-m-row class="py-4 mt-4 delimiter-top">
        <vf-m-col md="6">
          <div
            class="text-sm text-center md:text-left"
            v-html="$t('elements.common.footer.copyrightText')"
          />
        </vf-m-col>
        <vf-m-col md="6">
          <div class="text-sm text-center md:text-right">
            {{ $t("elements.common.footer.poweredByText") }}
            <a class="heading" href="http://vuefront.com" target="_blank">{{
              $t("elements.common.footer.vuefrontText")
            }}</a>
            {{ $t("elements.common.footer.withLoveText") }}
          </div>
        </vf-m-col>
      </vf-m-row>
    </vf-m-container>
  </footer>
</template>
<script lang="ts" setup>
import { inject } from "vue";
const vuefront$ = inject<any>("$vuefront");
let logo = "https://vuefront.com/logo.png";
if (typeof vuefront$.images.footerLogo !== "undefined") {
  logo = vuefront$.images.footerLogo.image;
}
</script>
