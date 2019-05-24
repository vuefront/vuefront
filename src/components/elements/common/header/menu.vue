<template>
  <b-container>
    <section class="nav-menu-section">
      <div class="nav-menu-section__wrapper">
        <b-nav tag="div" class="d-flex d-md-none">
          <slot name="mobile-dropdown"></slot>
        </b-nav>
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
      </div>
    </section>
  </b-container>
</template>
<script>
import { BContainer, BLink, BNav } from "bootstrap-vue/es/components";
import "vuefront/scss/elements/common/header/topMenu.scss";
import { VBToggle } from "bootstrap-vue/es/directives";
export default {
  components: {
    BContainer,
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
  }
};
</script>
