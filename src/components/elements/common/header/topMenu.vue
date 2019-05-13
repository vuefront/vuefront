<template>
  <b-container class="px-0">
    <section class="nav-menu-section">
      <div class="nav-menu-section__item" v-for="(item, index) in items" :key="index">
        <b-link :to="item.to" class="nav-menu-section__item_link">
          <div class="nav-menu-section__item_title body-2">{{item.title}}</div>
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
  </b-container>
</template>
<script>
import { BContainer, BLink } from "bootstrap-vue/es/components";
import "vuefront/scss/elements/common/header/topMenu.scss";
export default {
  components: {
    BContainer,
    BLink
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>
