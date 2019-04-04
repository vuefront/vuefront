<template>
  <v-container px-0>
    <section class="nav-menu-section">
      <div class="nav-menu-section__item" v-for="(item, index) in items" :key="index">
        <nuxt-link :to="item.to" class="nav-menu-section__item_link">
          <div class="nav-menu-section__item_title body-2">
            {{item.title}}
          </div>
          <v-icon v-if="item.children.length > 0" class="nav-menu-section__item_icon">keyboard_arrow_down</v-icon>
        </nuxt-link>
        <div v-if="item.children.length > 0" class="nav-menu-section__sub_menu nav-menu-section__sub_menu--vertical">
          <div class="nav-menu-section__item" v-for="(subItem, key) in item.children"
               :key="key">
            <nuxt-link :to="subItem.to" class="nav-menu-section__item_link nav-menu-section__item_link--size_big">
              <div class="nav-menu-section__item_title subheading">
                {{subItem.title}}
              </div>
              <v-icon v-if="subItem.children.length > 0"
                      class="nav-menu-section__item_icon nav-menu-section__item_icon--float">keyboard_arrow_right
              </v-icon>
            </nuxt-link>
            <div v-if="subItem.children.length > 0"
                 class="nav-menu-section__sub_menu nav-menu-section__sub_menu--horizontal">
              <div class="nav-menu-section__item"
                   v-for="(value, subKey) in subItem.children" :key="subKey">
                <nuxt-link :to="value.to" class="nav-menu-section__item_link nav-menu-section__item_link--size_medium">
                  <div class="nav-menu-section__item_title subheading">
                    {{value.title}}
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script>
import {VContainer, VIcon} from 'vuetify/lib'
import 'vuefront/scss/elements/common/header/topMenu.scss'
export default {
  name: "vfCommonTopMenuDefault",
  components: {
    VContainer,
    VIcon
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  }
}
</script>
