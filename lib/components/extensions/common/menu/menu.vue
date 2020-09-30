<template>
  <section class="vf-e-common-menu">
    <div class="vf-e-common-menu__item" v-for="(item, index) in menuItems" :key="index">
      <vf-a-link :to="item.to" class="vf-e-common-menu__link">
        <div class="vf-e-common-menu__title">{{item.title}}</div>
        <vf-a-icon
          icon="angle-down"
          v-if="item.children && item.children.length > 0"
          class="vf-e-common-menu__icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="vf-e-common-menu__submenu vf-e-common-menu__submenu--vertical"
        :class="[ ( item.children.length > 5 && item.children.length <= 10 ? 'vf-e-common-menu__submenu--two-columns' : ''), (item.children.length > 10 ? 'vf-e-common-menu__submenu--three-columns': '' ) ]"
      >
        <div class="vf-e-common-menu__item" v-for="(subItem, key) in item.children" :key="key">
          <vf-a-link
            :to="subItem.to"
            class="vf-e-common-menu__link vf-e-common-menu__link--lg"
          >
            <div class="vf-e-common-menu__title">
              {{subItem.title}}
              <span v-if="subItem.children.length">({{ subItem.children.length }})</span>
            </div>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="vf-e-common-menu__icon vf-e-common-menu__icon--float"
            />
          </vf-a-link>
          <div
            v-if="subItem.children.length > 0"
            class="vf-e-common-menu__submenu vf-e-common-menu__submenu--horizontal"
          >
            <div
              class="vf-e-common-menu__item"
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
            >
              <vf-a-link :to="value.to" class="vf-e-common-menu__link vf-e-common-menu__link--md">
                <div class="vf-e-common-menu__title">{{value.title}}</div>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { VBToggle } from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  directives: {
    BToggle: VBToggle
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters({ menuModules: "menu/list", loadedItems: "menu/loaded" }),
    loaded() {
      let result = false;

      if (typeof this.loadedItems[this.idHash] !== 'undefined') {
        result = this.loadedItems[this.idHash];
      }

      return result;
    },
    menuItems() {
      let result = [];

      if (typeof this.menuModules[this.idHash] !== 'undefined') {
        result = [...result, ...this.menuModules[this.idHash]];
      }

      return result;
    },
    idHash() {
      return this.hashCode(JSON.stringify(this.items));
    }
  },
  serverPrefetch() {
    return this.handleLoadMenu();
  },
  mounted() {
    if (!this.loaded) {
      this.handleLoadMenu();
    }
  },
  methods: {
    async handleLoadMenu() {
      if (!this.loaded) {
        let asyncItems = [];
        for (const key in this.items) {
          const item = this.items[key];
          if (typeof item === 'string') {
            asyncItems = [
              ...asyncItems,
              this.$store.dispatch(`menu/${item}/load`, {})
            ];
          }
        }

        await Promise.all(asyncItems);

        let result = [];

        for (const key in this.items) {
          const item = this.items[key];
          if (typeof item === 'string') {
            result = [...result, ...this.$store.getters[`menu/${item}/get`]];
          } else {
            result = [...result, item];
          }
        }
        this.$store.commit("menu/setEntities", {
          id: this.idHash,
          items: result
        });
        this.$store.commit("menu/setLoaded", { id: this.idHash, loaded: true });
      }
    },
    hashCode(str) {
      var hash = 0,
        i,
        chr;
      if (str.length === 0) return hash;
      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }

      return hash;
    }
  }
};
</script>