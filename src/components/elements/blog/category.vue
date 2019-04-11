<template>
  <div class="category-section">
    <div class="category-section__name text-sm-center h1">{{category.name}}</div>
    <div class="category-section__description text-sm-center mt-4 lead" v-html="category.description"/>
  </div>
</template>
<script>
export default {
  props: ['category']
}
</script>
