<template>
  <v-container fluid pa-0 grid-list-xl>
    <v-layout align-start justify-start row wrap>
      <v-flex xs12 md3 v-for="(value, index) in posts" :key="index">
        <vf-post-thumb :post="value"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Post} from "~/types";

@Component
export default class extends Vue {
  @Prop()
  posts!: Post[];
}
</script>