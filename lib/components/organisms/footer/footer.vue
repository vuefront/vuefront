<template>
  <footer class="vf-o-footer clearfix">
    <vf-m-container>
      <vf-m-row class="pt-md">
        <vf-m-col sm="4" class="mb-5 mb-lg-0">
          <div>
            <vf-a-image 
            :src="logo" 
            :width-amp="$vuefront.images.logo.width"
            :height-amp="$vuefront.images.logo.height" 
            alt 
            width="180" 
            class="mb-3" 
            />
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
export default {
  data() {
    return {};
  },
  computed: {
    logo() {
      if (typeof this.$vuefront.images.footerLogo !== "undefined") {
        return this.$vuefront.images.footerLogo.image;
      } else {
        return "";
      }
    }
  }
};
</script>