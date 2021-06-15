<template>
  <div class="vf-o-manufacturer-list">
    <template v-for="value in getBrandIndex">
      <div :key="value.name">
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
      </div>
    </template>
  </div>
</template>
<script>
import isNumber from "lodash/isNumber";
import upperCase from "lodash/upperCase";
import chunk from "lodash/chunk";
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
  methods: {
    arrayChunk(val, size = 1) {
      return chunk(val, size);
    },
  },
};
</script>
