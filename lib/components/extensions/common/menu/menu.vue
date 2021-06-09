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
          </vf-a-link>
          <div
            v-if="subItem.children && subItem.children.length > 0"
            class="vf-e-common-menu__submenu vf-e-common-menu__submenu--horizontal"
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
<script>
import { mapGetters, mapMutations } from "vuex";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import isUndefined from "lodash/isUndefined";
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      mdiChevronDown,
      mdiChevronRight,
    };
  },
  computed: {
    ...mapGetters({
      menuModules: "menu/list",
      loadedItems: "menu/loaded",
      loadingItems: "menu/loading",
    }),
    loaded() {
      let result = false;
      if (typeof this.loadedItems[this.idHash] !== "undefined") {
        result = this.loadedItems[this.idHash];
      }

      return result;
    },
    loading() {
      let result = false;
      if (typeof this.loadingItems[this.idHash] !== "undefined") {
        result = this.loadingItems[this.idHash];
      }

      return result;
    },
    menuItems() {
      let result = [];

      if (typeof this.menuModules[this.idHash] !== "undefined") {
        result = [...result, ...this.menuModules[this.idHash]];
      }
      return result;
    },
    idHash() {
      return this.hashCode(JSON.stringify(this.items));
    },
  },
  serverPrefetch() {
    this.$store.commit("menu/setLoading", {
      id: this.idHash,
      loading: true,
    });
    return this.handleLoadMenu();
  },
  mounted() {
    if (!this.loaded && !this.loading) {
      this.$store.commit("menu/setLoading", {
        id: this.idHash,
        loading: true,
      });
      this.handleLoadMenu();
    }
  },
  methods: {
    ...mapMutations({
      toggleSidebar: "vuefront/toggleSidebar",
    }),
    async handleLoadMenu() {
      if (!this.loaded) {
        let asyncItems = [];
        for (const key in this.items) {
          const item = this.items[key];
          if (typeof item === "string") {
            asyncItems = [
              ...asyncItems,
              this.$store.dispatch(`menu/${item}/load`, {}),
            ];
          }
        }

        await Promise.all(asyncItems);

        let result = [];
        for (const key in this.items) {
          const item = this.items[key];
          if (typeof item === "string") {
            result = [...result, ...this.$store.getters[`menu/${item}/get`]];
          } else {
            result = [...result, item];
          }
        }
        this.$store.commit("menu/setEntities", {
          id: this.idHash,
          items: result,
        });

        this.$store.commit("menu/setLoaded", { id: this.idHash, loaded: true });
        this.$store.commit("menu/setLoading", {
          id: this.idHash,
          loading: false,
        });
      }
    },
    hashCode(str) {
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
    },
  },
};
</script>