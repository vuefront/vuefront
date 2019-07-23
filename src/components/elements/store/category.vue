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
        <vf-m-category-thumb :category="value" />
      </vf-m-col>
    </vf-m-row>
  </div>
</template>
<script>
export default {
  props: ["category"]
};
</script>
