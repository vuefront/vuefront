<template>
  <div class="vf-m-product-option vf-m-product-option--file">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <input
      class="vf-m-product-option__value"
      type="file"
      :value="activeOptionValue"
      @input="handleChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { mapGetters, useStore } from "vuex";
import find from "lodash-es/find";
import uploadFileGql from "./upload.graphql";
import { PropType, computed } from "vue";
const props = defineProps({
  option: {
    type: Object,
    default: () => null,
  },
  selected: {
    type: Array as PropType<{ id: string; value: string }[]>,
    default: () => [],
  },
});
const store = useStore();
const error = computed(() => store.getters["vuefront/error"]);
const activeOptionValue = () => {
  const result = find(props.selected, { id: props.option.id });

  return result ? result.value : null;
};
const emits = defineEmits(["change"]);
const handleChange = async (value: any) => {
  await store.dispatch("apollo/upload", {
    mutation: uploadFileGql,
    variables: { file: value },
  });

  if (!error.value) {
    const { uploadFile } = store.getters["apollo/get"];
    emits("change", uploadFile.code);
  }
};
</script>
