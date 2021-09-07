<template>
  <div class="vf-m-product-option vf-m-product-option--file">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <input
      class="vf-m-product-option__value"
      type="file"
      @input="handleChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import find from "lodash-es/find";
import { PropType, computed } from "vue";
import gql from "graphql-tag";
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

const emits = defineEmits(["change"]);
const handleChange = async (value: any) => {
  await store.dispatch("apollo/upload", {
    mutation: gql`
      mutation ($file: Upload) {
        uploadFile(file: $file) {
          code
        }
      }
    `,
    variables: { file: value },
  });

  if (!error.value) {
    const { uploadFile } = store.getters["apollo/get"];
    emits("change", uploadFile.code);
  }
};
</script>
