<template>
  <section class="sort-section mb-4">
    <v-layout row wrap>
      <v-flex xs-fill text-xs-left>

      </v-flex>
      <v-flex xs4 text-xs-right>
        <v-layout row>
          <v-select
            v-model="sizeValue"
            :items="sizes"
            prepend-inner-icon="format_size"
            class="mr-3"
            height="40px"
            hide-details
            solo
            dense
          />
          <v-select
            v-model="sortValue"
            :items="sorts"
            prepend-inner-icon="sort"
            height="40px"
            hide-details
            solo
            dense
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Review, SizeItem, SortItem} from "~/types";
import {isNull, filter} from 'lodash'

@Component
export default class extends Vue {
  @Prop()
  sizes!: SizeItem[];

  @Prop()
  sorts!: SortItem[];

  @Prop()
  sort!: string

  @Prop()
  size!: string

  get sizeValue() {
    return this.size
  }

  set sizeValue(e) {
    this.$emit('changeSize', e)
  }

  get sortValue() {
    return this.sort
  }

  set sortValue(e) {
    this.$emit('changeSort', e)
  }

}
</script>
