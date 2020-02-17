<template>
  <vf-m-container v-show="breadcrumbs.length > 0" class="mb-3 vf-o-breadcrumb">
    <b-breadcrumb>
      <b-breadcrumb-item>{{$t('elements.common.home.titleText')}}</b-breadcrumb-item>
      <b-breadcrumb-item
        v-for="(value, key) in breadcrumbs"
        :key="key"
        :to="value.to"
      >{{ value.title }}</b-breadcrumb-item>
    </b-breadcrumb>
  </vf-m-container>
</template>
<script>
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem
  },
  computed: {
    ...mapGetters({
      breadcrumbs: "common/breadcrumbs/get"
    })
  }
};
</script>