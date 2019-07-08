<template>
    <section class="nav-menu-section">
      <div class="nav-menu-section__item" v-for="(item, index) in items" :key="index">
        <b-link :to="item.to" class="nav-menu-section__item_link">
          <div class="nav-menu-section__item_title body-2" v-b-toggle.menu-collapse>{{item.title}}</div>
          <vf-icon
            icon="angle-down"
            v-if="item.children.length > 0"
            class="nav-menu-section__item_icon"
          />
        </b-link>
        <div
          v-if="item.children.length > 0"
          class="nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical"
        >
          <div class="nav-menu-section__item" v-for="(subItem, key) in item.children" :key="key">
            <b-link
              :to="subItem.to"
              class="nav-menu-section__item_link nav-menu-section__item_link--size_big"
              v-b-toggle.menu-collapse
            >
              <div class="nav-menu-section__item_title subheading">{{subItem.title}}</div>
              <vf-icon
                v-if="subItem.children.length > 0"
                icon="angle-right"
                class="nav-menu-section__item_icon nav-menu-section__item_icon--float"
              />
            </b-link>
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
                <b-link
                  :to="value.to"
                  class="nav-menu-section__item_link nav-menu-section__item_link--size_medium"
                >
                  <div class="nav-menu-section__item_title subheading">{{value.title}}</div>
                </b-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import { BLink, BNav, VBToggle } from "bootstrap-vue";
import "vuefront/scss/elements/common/header/topMenu.scss";
import { isArray, isString } from 'lodash';
export default {
  components: {
    BLink,
    BNav
  },
  directives: {
    BToggle: VBToggle
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  serverPrefetch() {
    return this.handleLoadMenu
  },
  methods: {
    async handleLoadMenu() {
      for(const key in this.items) {
        const item = this.items[key]
        if(isString(item)) {
          await this.$store
        }
      }
    }
  }
};
</script>
