<template>
  <section class="sort-section mb-4">
    <v-layout row wrap align-center fill-height>
      <v-flex xs-fill text-xs-left>
        <v-layout row>
          <v-btn-toggle v-model="modeValue">
            <v-btn flat value="grid">
              <v-icon>grid_on</v-icon>
            </v-btn>
            <v-btn flat value="list">
              <v-icon>view_list</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-layout>
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

  @Prop()
  mode!: string

  get modeValue() {
    return this.mode
  }

  set modeValue(e) {
    this.$emit('changeMode', e)
  }

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
