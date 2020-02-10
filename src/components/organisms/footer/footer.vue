<template>
  <footer class="footer-section clearfix">
    <vf-m-container>
      <vf-m-row class="pt-md">
        <vf-m-col sm="4" class="mb-5 mb-lg-0">
          <div>
            <vf-a-amp-image
              v-if="$vuefront.isAMP"
              :src="logo"
              width="180"
              height="40"
              class="mb-3"
            />
            <vf-a-image v-else :src="logo" alt style="height: 40px;" class="mb-3" />
            <p>{{$t('elements.common.footer.descriptionText')}}</p>
          </div>
        </vf-m-col>
        <vf-m-col sm="4" md="6" lg="2" class="ml-lg-auto mb-5 mb-lg-0">
          <vf-o-position name="footerLeft" />
        </vf-m-col>
        <vf-m-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-o-position name="footerCenter" />
        </vf-m-col>
        <vf-m-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-o-position name="footerRight" />
        </vf-m-col>
      </vf-m-row>
      <vf-m-row class="py-4 mt-4 delimiter-top">
        <vf-m-col md="6">
          <div
            class="text-sm text-center text-md-left"
            v-html="$t('elements.common.footer.copyrightText')"
          />
        </vf-m-col>
        <vf-m-col md="6">
          <div
            class="text-sm text-center text-md-right"
            v-html="$t('elements.common.footer.poweredText')"
          />
        </vf-m-col>
      </vf-m-row>
    </vf-m-container>
  </footer>
</template>
<script>
import "./footer.scss";

export default {
  data() {
    return {};
  },
  computed: {
    logo() {
      if (typeof this.$vuefront.options.footerLogo !== "undefined") {
        return this.$vuefront.options.footerLogo;
      } else {
        return "";
      }
    }
  }
};
</script>