<template>
  <div class="category-section">
    <vf-a-heading level="1" class="category-section__name text-sm-center">{{category.name}}</vf-a-heading>
    <div
      class="category-section__description text-sm-center mt-4 lead"
      v-html="category.description"
    />
    <vf-a-heading
      level="4"
      v-if="category.categories.length > 0"
      class="category-section__sub_name text-sm-center mt-2"
    >{{$t('elements.store.category.categoriesText')}}</vf-a-heading>
    <vf-m-row v-if="category.categories.length > 0">
      <vf-m-col v-for="(value, index) in category.categories" :key="index" sm="4" md="2">
        <vf-a-link :to="url(value)" class="mb-2 d-block">
          <vf-a-amp-image
            v-if="$vuefront.isAMP"
            :src="getImage(value)"
            width="113"
            height="80"
            layout="responsive"
            class="mb-2"
          />
          <vf-a-image
            v-else
            :src="getImageLazy(value)"
            :lazy-src="getImage(value)"
            class="mb-2"
            full-width
            fluid
          />
          <vf-a-heading level="6" class="text-sm-center">{{value.name}}</vf-a-heading>
        </vf-a-link>
      </vf-m-col>
    </vf-m-row>
  </div>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";
export default {
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
