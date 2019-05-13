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
        <b-link :to="`/store/category/${value.id}`" class="mb-2 d-block">
          <b-img-lazy
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
} from "bootstrap-vue/es/components";
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
    getImage(category) {
      return category.image !== "" ? category.image : placeholder;
    },
    getImageLazy(category) {
      return category.imageLazy !== "" ? category.imageLazy : placeholder;
    }
  }
};
</script>
