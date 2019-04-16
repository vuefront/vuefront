<template>
  <div class="category-section">
    <div class="category-section__name text-sm-center h1">{{category.name}}</div>
    <div
      class="category-section__description text-sm-center mt-4 lead"
      v-html="category.description"
    />
    <div v-if="category.categories.length > 0" class="category-section__sub_name text-sm-center h4 mt-2">Categories</div>
    <b-row v-if="category.categories.length > 0">
      <b-col v-for="(value, index) in category.categories" :key="index" sm="4" md="2">
        <b-link :to="`/store/category/${value.id}`" class="mb-2 d-block">
          <b-img-lazy :src="value.image" :blank-src="value.imageLazy"  class="mb-2" fluid style="width: 100%;"/>
          <div class="text-sm-center h6" v-html="value.name"/>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import BRow from "bootstrap-vue/es/components/layout/row";
import BCol from "bootstrap-vue/es/components/layout/col";
import BContainer from "bootstrap-vue/es/components/layout/container";
import BImgLazy from "bootstrap-vue/es/components/image/img-lazy";
import BLink from "bootstrap-vue/es/components/link/link";

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BImgLazy,
    BLink
  },
  props: ["category"]
};
</script>
