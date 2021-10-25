<template>
  <div
    class="vf-o-apollo"
    :class="{
      'vf-o-apollo--loading': loading,
      'vf-o-apollo--loaded': !loading,
    }"
  >
    <template v-if="loading">
      <slot name="loader">
        <vf-a-loader />
      </slot>
    </template>
    <span v-else>
      <slot :data="data"></slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { graphql } from "graphql";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  onMounted,
  onServerPrefetch,
  watch,
} from "vue";
import schema from "./schema.graphql";
const props = defineProps(["query", "variables"]);
const instance = getCurrentInstance();
const queryBody = computed(() => {
  let result = props.query;
  if ((instance?.parent?.type as any).query) {
    result = (instance?.parent?.type as any).query;
  }
  return result;
});
const schemanew = makeExecutableSchema({ typeDefs: schema });
const schemaWithMocks = addMocksToSchema({ schema: schemanew });
const data = ref({
  categoriesBlogList: {
    content: [],
  },
});
const loading = ref(true);
const handleLoad = async () => {
  const result = await graphql(
    schemaWithMocks,
    queryBody.value,
    props.variables
  );
  data.value = result.data;
  loading.value = false;
};
handleLoad();
</script>
