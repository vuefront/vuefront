<template>
  <section class="partial-menu">
    <div
      class="partial-menu__top d-flex d-md-none justify-content-center align-items-center container"
    >
      <div class="partial-menu__toggle" v-b-toggle.menu-collapse>
        <vf-icon icon="bars"></vf-icon>
      </div>
      <slot name="mobile"></slot>
    </div>
    <div class="d-block d-md-none">
      <b-collapse id="menu-collapse">
        <vf-menu :items="items">
          <template #mobile-dropdown>
            <slot name="mobile-dropdown"></slot>
            <b-nav-item class="ml-auto">
              <div class="partial-menu__toggle_close" v-b-toggle.menu-collapse>
                <vf-icon icon="times"></vf-icon>
              </div>
            </b-nav-item>
          </template>
        </vf-menu>
      </b-collapse>
    </div>
    <vf-menu :items="items" class="d-none d-md-block">
      <template #mobile-dropdown>
        <slot name="mobile-dropdown"></slot>
      </template>
    </vf-menu>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import "vuefront/scss/templates/menu.scss";
import { BCollapse, BNavItem } from "bootstrap-vue/es/components";
import { VBToggle } from "bootstrap-vue/es/directives";
export default {
  components: {
    BCollapse,
    BNavItem
  },
  directives: {
    BToggle: VBToggle
  },
  computed: {
    ...mapGetters({
      items: "menu/list"
    })
  }
};
</script>
