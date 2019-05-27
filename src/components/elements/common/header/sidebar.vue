<template>
  <section class="sidebar">
    <div class="sidebar__left">
      <div class="sidebar__top">
        <b-nav tag="div">
          <slot name="top"></slot>
        </b-nav>
      </div>
      <div class="sidebar__main">
        <slot></slot>
      </div>
      <div class="sidebar__bottom">
        <b-nav tag="div">
          <slot name="bottom"></slot>
        </b-nav>
      </div>
    </div>
    <div class="sidebar__right">
      <slot name="right"></slot>
    </div>
  </section>
</template>
<script>
import "vuefront/scss/elements/common/header/sidebar.scss";
import { BNav } from "bootstrap-vue/es/components";
export default {
  components: { BNav }
};
</script>
