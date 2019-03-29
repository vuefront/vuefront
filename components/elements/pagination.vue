<template>
  <div>
    <v-pagination
      v-if="totalPages > 1"
      :value="page"
      :length="totalPages"
      @input="handleChange"
    ></v-pagination>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Review} from "~/types";
import {isNull, filter} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  page!: number;

  @Prop()
  totalPages!: number;

  handleChange(e) {
    this.$emit('input', e)
  }

}
</script>
