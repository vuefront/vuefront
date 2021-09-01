<template>
  <div>{{show ? 'true' : 'false'}}</div>
  <pre>{{images}}</pre>
  <vue-easy-lightbox
    ref="lightbox"
    :imgs="images"
    :visible="visible"
    @onOpened="handleOpened"
  ></vue-easy-lightbox>
</template>
<script setup>
import { reactive, watch } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
const {images, show, index} = defineProps({
  images: {
      type: Array,
      default() {
        return [];
      },
    },
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
})

const {visible} = reactive({
  visible: false
})

function handleOpened(value) {
  if (!value) {
    this.$emit("click:close", value);
  }
}

watch(() => show, (value, oldValue) => {
  console.log('watch show')
  console.log(value)
  if (!oldValue && value) {
    state.visible = true
    // this.$refs.lightbox.showImage(this.index);
  }
})
</script>
