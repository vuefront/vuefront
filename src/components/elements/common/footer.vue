<template>
  <footer class="footer-section clearfix">
    <b-container>
      <b-row class="pt-md">
        <b-col sm="4" class="mb-5 mb-lg-0">
          <div>
            <img :src="logo" alt style="height: 40px;" class="mb-3">
            <p>{{$t('elements.common.footer.descriptionText')}}</p>
          </div>
        </b-col>
        <b-col sm="4" md="6" lg="2" class="ml-lg-auto mb-5 mb-lg-0">
          <vf-position name="footerLeft"/>
        </b-col>
        <b-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-position name="footerCenter"/>
        </b-col>
        <b-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-position name="footerRight"/>
        </b-col>
      </b-row>
      <b-row class="py-4 mt-4 delimiter-top">
        <b-col md="6">
          <div class="text-sm font-weight-bold text-center text-md-left" v-html="$t('elements.common.footer.copyrightText')"/>
        </b-col>
        <b-col md="6"></b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
import BContainer from "bootstrap-vue/es/components/layout/container";
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import "vuefront/scss/elements/common/footer.scss";
export default {
  components: {
    BContainer,
    BRow,
    BCol
  },
  props: ["logo"],
  data() {
    return {}
  }
};
</script>
