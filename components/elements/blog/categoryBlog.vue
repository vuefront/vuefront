<template>
  <div class="category-section">
    <div class="category-section__name text-xs-center display-2 font-weight-medium">{{category.name}}</div>
    <div class="category-section__description text-xs-center mt-4 subheading font-weight-light" v-html="category.description"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {CategoryBlog} from "~/types";

@Component
export default class extends Vue {
  @Prop()
  category!: CategoryBlog;
}
</script>