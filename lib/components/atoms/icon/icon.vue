<template>
  <i :class="currentIcon"></i>
</template>
<script>
import { isArray, join } from "lodash";
export default {
  props: ["icon", "size"],
  computed: {
    currentIcon() {
      let result = "";
      if (isArray(this.icon)) {
        result = join(this.icon, " fa-");
      } else {
        result = `fas fa-${this.icon}`;
      }

      if (this.size) {
        result += ` fa-${this.size}x`;
      }
      return result;
    }
  }
};
</script>
