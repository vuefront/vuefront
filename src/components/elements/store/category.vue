<template>
  <div class="category-section">
    <div class="category-section__name text-sm-center h1">{{category.name}}</div>
    <div
      class="category-section__description text-sm-center mt-4 lead"
      v-html="category.description"
    />
    <div
      v-if="category.categories.length > 0"
      class="category-section__sub_name text-sm-center h4 mt-2"
    >{{$t('elements.store.category.categoriesText')}}</div>
    <b-row v-if="category.categories.length > 0">
      <b-col v-for="(value, index) in category.categories" :key="index" sm="4" md="2">
        <b-link :to="url(value)" class="mb-2 d-block">
          <amp-img v-if="$vuefront.isAMP" :src="getImage(value)" layout="responsive" width="113" height="80" class="mb-2"></amp-img>
          <b-img-lazy
            v-else
            :src="getImage(value)"
            :blank-src="getImageLazy(value)"
            class="mb-2"
            fluid
            style="width: 100%;"
          />
          <div class="text-sm-center h6" v-html="value.name"/>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BContainer,
  BImgLazy,
  BLink
} from "bootstrap-vue";
import placeholder from "~/assets/img/placeholder.png";
export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BImgLazy,
    BLink
  },
  props: ["category"],
  methods: {
    url(category) {
      if (category.keyword && category.keyword !== "") {
        return "/" + category.keyword;
      } else {
        return `/store/category/${category.id}`;
      }
    },
    getImage(category) {
      return category.image !== "" ? category.image : placeholder;
    },
    getImageLazy(category) {
      return category.imageLazy !== "" ? category.imageLazy : placeholder;
    }
  }
};
</script>
