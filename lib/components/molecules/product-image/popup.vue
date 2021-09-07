<template>
  <vue-easy-lightbox
    :imgs="images"
    :visible="visible"
    :index="index"
    @hide="handleOpened"
  ></vue-easy-lightbox>
</template>
<script lang="ts" setup>
import { defineComponent, PropType, ref, watch } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const props = defineProps({
  show: { type: Boolean, required: true },
  index: { type: Number, required: true },
  images: { type: Array as PropType<Array<string>>, required: true },
});
const emits = defineEmits(["click:close"]);

let visible = ref(false);

const handleOpened = () => {
  emits("click:close");
};

watch(
  () => props.show,
  (value, oldValue) => {
    if (!oldValue && value) {
      visible.value = true;
    }
    if (oldValue && !value) {
      visible.value = false;
    }
  }
);
</script>
