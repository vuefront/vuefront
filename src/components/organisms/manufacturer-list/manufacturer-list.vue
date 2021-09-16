<template>
  <div class="vf-o-manufacturer-list">
    <template v-for="value in getBrandIndex" :key="value.name">
      <vf-a-heading :id="value.name" level="2">{{ value.name }}</vf-a-heading>
      <template v-if="value.manufacturer">
        <vf-m-row
          v-for="(manufacturerChunk, index) in arrayChunk(
            value.manufacturer,
            4
          )"
          :key="index"
        >
          <vf-m-col
            v-for="(manufacturer, index2) in manufacturerChunk"
            :key="index2"
            xs="3"
            md="3"
          >
            <vf-a-link :to="manufacturer.url">{{
              manufacturer.name
            }}</vf-a-link>
          </vf-m-col>
        </vf-m-row>
      </template>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { isNumber, upperCase, chunk, isUndefined } from "lodash";
import { computed } from "vue";
import { List } from "lodash";
const props = defineProps({
  manufacturers: {
    type: Object,
    default() {
      return {
        content: [],
      };
    },
  },
});
interface IBrand {
  name: string;
  manufacturer: { name: string }[];
}
interface IBrandList {
  [x: string]: IBrand;
}
const getBrandIndex = computed(() => {
  const result: IBrandList = {};

  for (const index in props.manufacturers.content) {
    const manufacturer = props.manufacturers.content[index];
    let key = "";
    if (isNumber(manufacturer.name.substring(0, 1))) {
      key = "0 - 9";
    } else {
      key = upperCase(manufacturer.name).substring(0, 1);
    }
    if (isUndefined(result[key])) {
      result[key] = {
        name: key,
        manufacturer: [manufacturer],
      };
    } else {
      result[key].manufacturer.push(manufacturer);
    }
  }

  return result;
});
const arrayChunk = (val: List<unknown>, size = 1) => {
  return chunk(val, size);
};
</script>
