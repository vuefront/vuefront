<template>
  <div class="vf-o-manufacture-filter">
    <strong>{{ $t("organisms.manufacturerFilter.textBrandIndex") }}</strong>
    <span v-for="value in getBrandIndex" :key="value.name">
      &nbsp;&nbsp;&nbsp;
      <vf-a-link :to="`#${value.name}`"
        ><span @click="handleScroll(value.name)">{{
          value.name
        }}</span></vf-a-link
      >
    </span>
  </div>
</template>
<script lang="ts" setup>
import { isNumber, upperCase, isUndefined } from "lodash";
import { computed } from "vue";
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
interface BrandIndex {
  [x: string]: {
    name: string;
    manufacturer: object[];
  };
}
const getBrandIndex = computed(() => {
  const result: BrandIndex = {};

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

const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView();
};
</script>
