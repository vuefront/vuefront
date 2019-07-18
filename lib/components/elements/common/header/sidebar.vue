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
import { BNav } from 'bootstrap-vue'
export default {
  components: { BNav },
}
</script>
<style lang="scss">
.sidebar {
  display: flex;
  flex-flow: row;
  @media (max-width: 765px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    background-color: white;
    z-index: 99;
  }

  &__top {
    padding-left: 40px;
    padding-top: 40px;
    flex: 0 1 10%;
  }
  &__left {
    flex: 1;
    display: flex;
    flex-flow: column;
    background-color: #f5f5f5;
  }
  &__right {
    flex: 0 1 auto;
    min-width: 50px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 15px;
  }
  &__bottom {
    padding-left: 40px;
    background-color: #ececec;
    flex: 0 1 70px;
    display: flex;
    align-items: center;
  }
  &__main {
    flex: 1;
    padding-left: 40px;
    padding-right: 15px;
    overflow-y: scroll;
  }
}
</style>
