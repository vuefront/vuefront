<template>
  <vf-m-menu :items="menuItems" class="vf-e-common-menu"></vf-m-menu>
</template>
<script lang="ts" setup>
import { computed, onMounted, onServerPrefetch, PropType } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  items: {
    type: Array as PropType<string[]>,
    default() {
      return [];
    },
  },
});

const store = useStore();
const menuModules = computed(() => store.getters["common/menu/list"]);
const loadedItems = computed(() => store.getters["common/menu/loaded"]);
const loadingItems = computed(() => store.getters["common/menu/loading"]);
const idHash = computed(() => {
  return hashCode(JSON.stringify(props.items));
});
const loaded = computed(() => {
  let result = false;
  if (typeof loadedItems.value[idHash.value] !== "undefined") {
    result = loadedItems.value[idHash.value];
  }

  return result;
});
const loading = computed(() => {
  let result = false;
  if (typeof loadingItems.value[idHash.value] !== "undefined") {
    result = loadingItems.value[idHash.value];
  }

  return result;
});
interface IMenuLink {
  title: string;
  to: string;
  children: IMenuLink[];
}
const menuItems = computed(() => {
  let result: IMenuLink[] = [];

  if (typeof menuModules.value[idHash.value] !== "undefined") {
    result = [...result, ...menuModules.value[idHash.value]];
  }
  return result;
});

onServerPrefetch(() => {
  store.commit("common/menu/setLoading", {
    id: idHash.value,
    loading: true,
  });
  return handleLoadMenu();
});

onMounted(() => {
  if (!loaded.value && !loading.value) {
    store.commit("common/menu/setLoading", {
      id: idHash.value,
      loading: true,
    });
    handleLoadMenu();
  }
});
const handleLoadMenu = async () => {
  if (!loaded.value) {
    let asyncItems: Promise<any>[] = [];
    for (const key in props.items) {
      const item = props.items[key];
      if (typeof item === "string") {
        asyncItems = [...asyncItems, store.dispatch(`menu/${item}/load`, {})];
      }
    }

    await Promise.all(asyncItems);

    let result: IMenuLink[] = [];
    for (const key in props.items) {
      const item = props.items[key];
      if (typeof item === "string") {
        result = [...result, ...store.getters[`menu/${item}/get`]];
      } else {
        result = [...result, item];
      }
    }
    store.commit("common/menu/setEntities", {
      id: idHash.value,
      items: result,
    });

    store.commit("common/menu/setLoaded", { id: idHash.value, loaded: true });
    store.commit("common/menu/setLoading", {
      id: idHash.value,
      loading: false,
    });
  }
};
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
</script>
