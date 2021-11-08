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
import { useStore } from "vuex";
import { isUndefined } from "lodash";
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  onServerPrefetch,
  watch,
} from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const props = defineProps(["query", "variables"]);
const $vfapollo = inject<any>("$vfapollo");
const emit = defineEmits(["loaded"]);

const hashCode = (str: string) => {
  let hash = 0;
  let i;
  let chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};
const instance = getCurrentInstance();
const prefetchData = computed(() => store.getters["apollo/prefetchData"]);
const componentHash = computed(() => {
  let query = props.query;
  if ((instance?.parent?.type as any).query) {
    query = (instance?.parent?.type as any).query;
  }
  return hashCode(JSON.stringify({ query, variables: props.variables }));
});
const data = computed(() => {
  let data = {};

  if (!isUndefined(prefetchData.value[componentHash.value])) {
    data = prefetchData.value[componentHash.value].data;
  }

  return data;
});
const loading = computed(() => {
  let loading = true;
  if (!isUndefined(prefetchData.value[componentHash.value])) {
    loading = prefetchData.value[componentHash.value].loading;
  }
  return loading;
});

const loadData = async (ssr = false) => {
  let query = props.query;
  if ((instance?.parent?.type as any).query) {
    query = (instance?.parent?.type as any).query;
  }
  try {
    const { data } = await $vfapollo.query({
      query,
      variables: props.variables ? props.variables : {},
    });
    emit("loaded", data);
    store.commit("apollo/setPrefetchData", {
      key: componentHash.value,
      data: { data, loading: false },
    });
  } catch (e) {
    store.commit("apollo/setPrefetchData", {
      key: componentHash.value,
      data: { error: {}, loading: false },
    });
  }
};

watch(
  () => route,
  (to, from) => {
    loadData();
  }
);
onMounted(async () => {
  if (loading.value) {
    await loadData();
  } else {
    emit("loaded", data);
  }
});
onServerPrefetch(() => {
  return loadData(true);
});
</script>
