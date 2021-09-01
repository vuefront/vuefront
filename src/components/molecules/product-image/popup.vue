<template>
  <vue-easy-lightbox
    :imgs="images"
    :visible="visible"
    :index="index"
    @hide="handleOpened"
  ></vue-easy-lightbox>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  props: {
    show: { type: Boolean, required: true },
    index: { type: Number, required: true },
    images: { type: Array as PropType<Array<string>>, required: true }
  },
  emits: ["click:close"],
  setup(props, ctx) {
    let visible = ref(false);
    const handleOpened = () => {
      ctx.emit("click:close");
    };

    watch(() => props.show, (value, oldValue) => {
      if (!oldValue && value) {
        visible.value = true
      }
      if (oldValue && !value) {
        visible.value = false
      }
    })

    return {
      visible,
      handleOpened,
    };
  },
});
</script>
