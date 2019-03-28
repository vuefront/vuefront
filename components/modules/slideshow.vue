<template>
  <v-carousel class="mb-5" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item"
    ></v-carousel-item>
  </v-carousel>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({default: []})
  items!: string[]
}
</script>