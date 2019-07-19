<template>
  <footer class="footer-section clearfix">
    <b-container>
      <b-row class="pt-md">
        <b-col sm="4" class="mb-5 mb-lg-0">
          <div>
            <amp-img v-if="$vuefront.isAMP" :src="logo" width="180" height="40" class="mb-3" />
            <img v-else :src="logo" alt style="height: 40px;" class="mb-3" />
            <p>{{$t('elements.common.footer.descriptionText')}}</p>
          </div>
        </b-col>
        <b-col sm="4" md="6" lg="2" class="ml-lg-auto mb-5 mb-lg-0">
          <vf-position name="footerLeft" />
        </b-col>
        <b-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-position name="footerCenter" />
        </b-col>
        <b-col sm="4" md="6" lg="2" class="mb-5 mb-lg-0">
          <vf-position name="footerRight" />
        </b-col>
      </b-row>
      <b-row class="py-4 mt-4 delimiter-top">
        <b-col md="6">
          <div
            class="text-sm font-weight-bold text-center text-md-left"
            v-html="$t('elements.common.footer.copyrightText')"
          />
        </b-col>
        <b-col md="6">
          <div
            class="text-sm font-weight-bold text-center text-md-right"
            v-html="$t('elements.common.footer.poweredText')"
          />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'
export default {
  components: {
    BContainer,
    BRow,
    BCol,
  },
  props: ['logo'],
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.footer-section {
  margin-top: 30px;
  padding-top: 3rem;
  background-color: #273444;
  border-top: 1px solid #ddd;
  color: #e2e2e2;
  hr {
    border-top: 1px solid #666;
  }
  .heading {
    color: #eff2f7;
  }
  .list-unstyled li a {
    color: #d3dce6;
    &:hover {
      color: #fff;
    }
  }
}
</style>
