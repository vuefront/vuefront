<template>
  <section class="vf-o-header-mobile">
    <vf-m-container class="vf-o-header-mobile__top">
      <div class="vf-o-header-mobile__toggle" v-b-toggle.menu-collapse>
        <vf-a-icon icon="bars"></vf-a-icon>
      </div>
      <vf-m-logo class="mx-auto ml-2" />
      <vf-m-cart-link />
    </vf-m-container>
    <vf-m-collapse id="menu-collapse">
      <vf-o-sidebar>
        <template #top>
          <vf-o-search-inline-form />
        </template>
        <template #bottom>
          <vf-o-currency nav />
          <vf-o-language />
        </template>
        <template #right>
          <div class="vf-o-header-mobile__toggle_close" v-b-toggle.menu-collapse>
            <vf-a-icon icon="times"></vf-a-icon>
          </div>
        </template>
        <vf-o-position name="headerMenu" />
      </vf-o-sidebar>
    </vf-m-collapse>
  </section>
</template>
<script>
import { VBToggle } from "bootstrap-vue";
import "./header-mobile.scss";
export default {
  name: 'vf-o-header-mobile',
  directives: {
    BToggle: VBToggle
  }
};
</script>
