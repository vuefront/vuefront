<template>
  <div class="vf-o-manufacture-filter">
    <strong>{{ $t("organisms.manufacturerFilter.textBrandIndex") }}</strong>
    <span v-for="value in getBrandIndex" :key="value.name">
      &nbsp;&nbsp;&nbsp;
      <vf-a-link :to="`#${value.name}`">{{ value.name }}</vf-a-link>
    </span>
  </div>
</template>
<script>
import isNumber from "lodash/isNumber";
import upperCase from "lodash/upperCase";
import isUndefined from "lodash/isUndefined";
export default {
  props: {
    manufacturers: {
      type: Object,
      default() {
        return {
          content: [],
        };
      },
    },
  },
  computed: {
    getBrandIndex() {
      const result = {};

      for (const index in this.manufacturers.content) {
        const manufacturer = this.manufacturers.content[index];
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
    },
  },
};
</script>
