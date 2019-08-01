<template>
  <section class="nav-menu-section">
    <div class="nav-menu-section__item" v-for="(item, index) in menuItems" :key="index">
      <vf-a-link :to="item.to" class="nav-menu-section__item_link">
        <div class="nav-menu-section__item_title body-2" v-b-toggle.menu-collapse>{{item.title}}</div>
        <vf-a-icon
          icon="angle-down"
          v-if="item.children && item.children.length > 0"
          class="nav-menu-section__item_icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical"
      >
        <div class="nav-menu-section__item" v-for="(subItem, key) in item.children" :key="key">
          <vf-a-link
            :to="subItem.to"
            class="nav-menu-section__item_link nav-menu-section__item_link--size_big"
            v-b-toggle.menu-collapse
          >
            <div class="nav-menu-section__item_title subheading">{{subItem.title}}</div>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="nav-menu-section__item_icon nav-menu-section__item_icon--float"
            />
          </vf-a-link>
          <div
            v-if="subItem.children.length > 0"
            class="nav-menu-section__sub_menu nav-menu-section__sub_menu--horizontal"
          >
            <div
              class="nav-menu-section__item"
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              v-b-toggle.menu-collapse
            >
              <vf-a-link
                :to="value.to"
                class="nav-menu-section__item_link nav-menu-section__item_link--size_medium"
              >
                <div class="nav-menu-section__item_title subheading">{{value.title}}</div>
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
import { isString } from "lodash";
import './menu.scss'
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
    loaded() {
      return this.$store.getters["menu/loaded"](this.idHash);
    },
    menuItems() {
      return this.$store.getters["menu/list"](this.idHash);
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
          if (isString(item)) {
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
          if (isString(item)) {
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
