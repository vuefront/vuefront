<template>
  <section class="vf-e-common-menu">
    <div
      v-for="(item, index) in menuItems"
      :key="index"
      class="vf-e-common-menu__item"
    >
      <vf-a-link :to="item.to" class="vf-e-common-menu__link">
        <div class="vf-e-common-menu__title">{{ item.title }}</div>
        <vf-a-icon
          v-if="item.children && item.children.length > 0"
          :icon="mdiChevronDown"
          size="15"
          class="vf-e-common-menu__icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="vf-e-common-menu__submenu vf-e-common-menu__submenu--vertical"
        :class="[
          item.children.length > 5 && item.children.length <= 10
            ? 'vf-e-common-menu__submenu--two-columns'
            : '',
          item.children.length > 10
            ? 'vf-e-common-menu__submenu--three-columns'
            : '',
        ]"
      >
        <div
          v-for="(subItem, key) in item.children"
          :key="key"
          class="vf-e-common-menu__item"
        >
          <vf-a-link
            :to="subItem.to || '/'"
            class="vf-e-common-menu__link vf-e-common-menu__link--lg"
          >
            <div class="vf-e-common-menu__title">
              {{ subItem.title }}
              <span v-if="subItem.children && subItem.children.length"
                >({{ subItem.children.length }})</span
              >
            </div>
            <vf-a-icon
              v-if="subItem.children && subItem.children.length > 0"
              :icon="mdiChevronRight"
              class="vf-e-common-menu__icon vf-e-common-menu__icon--float"
            />
            <vf-a-icon
              v-if="subItem.children && subItem.children.length > 0"
              :icon="mdiChevronDown"
              class="
                vf-e-common-menu__icon vf-e-common-menu__icon--float-mobile
              "
            />
          </vf-a-link>
          <div
            v-if="subItem.children && subItem.children.length > 0"
            class="
              vf-e-common-menu__submenu vf-e-common-menu__submenu--horizontal
            "
          >
            <div
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              class="vf-e-common-menu__item"
            >
              <vf-a-link
                :to="value.to || '/'"
                class="vf-e-common-menu__link vf-e-common-menu__link--md"
              >
                <div class="vf-e-common-menu__title">{{ value.title }}</div>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, onMounted, onServerPrefetch, PropType } from "vue";
import { useStore } from "vuex";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
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
