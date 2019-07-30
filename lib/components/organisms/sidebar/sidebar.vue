<template>
  <section class="sidebar">
    <div class="sidebar__left">
      <div class="sidebar__top">
        <slot name="top"></slot>
      </div>
      <div class="sidebar__main">
        <slot></slot>
      </div>
      <div class="sidebar__bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
    <div class="sidebar__right">
      <slot name="right"></slot>
    </div>
  </section>
</template>
<script>
import "./sidebar.scss";
export default {};
</script>
