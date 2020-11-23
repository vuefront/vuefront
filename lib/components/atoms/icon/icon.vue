<template>
  <i class="vf-a-icon" :class="currentIcon" :style="{ backgroundImage: `url('${getIconFromAssetsImg}')` }"></i>
</template>
<script>
import { isArray, join } from "lodash";
export default {
  props: ["icon", "size", "img"],
  computed: {
    getIcons() {
      
    },
    getIconFromAssetsImg(){
      if(this.img){
        return require('~/assets/img/'+this.img)
      }
      return null;
    },
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