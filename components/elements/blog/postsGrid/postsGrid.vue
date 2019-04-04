<template>
  <v-container fluid pa-0 grid-list-xl>
    <v-layout align-start justify-start wrap :row="!column" :column="column">
      <v-flex xs12 md3 v-for="(value, index) in posts" :key="index">
        <vf-post-thumb :post="value"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { VContainer, VLayout, VFlex } from "vuetify/lib";
export default {
  name: "vfBlogPostsGridDefault",
  components: {
    VContainer,
    VLayout,
    VFlex
  },
  props: {
    posts: {
      type: Array,
      default: []
    },
    column: {
      type: Boolean,
      default: false
    }
  }
};
</script>
