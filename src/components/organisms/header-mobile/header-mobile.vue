<template>
  <section class="vf-o-header-mobile md:hidden block">
    <vf-m-container class="vf-o-header-mobile__top">
      <div class="vf-o-header-mobile__toggle" @click="toggleSidebar()">
        <vf-a-icon :icon="mdiApps" size="25"></vf-a-icon>
      </div>
      <vf-m-logo class="mx-auto" />
      <vf-m-cart-link />
    </vf-m-container>
    <vf-o-sidebar>
      <template #top>
        <vf-o-search-inline-form />
      </template>
      <template #bottom>
        <vf-o-currency nav />
        <vf-o-language />
      </template>
      <template #right>
        <div class="vf-o-header-mobile__toggle_close" @click="toggleSidebar()">
          <vf-a-icon :icon="mdiClose"></vf-a-icon>
        </div>
      </template>
      <vf-o-position name="headerMenu" />
    </vf-o-sidebar>
  </section>
</template>
<script>
import { mdiClose, mdiApps } from "@mdi/js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      mdiClose,
      mdiApps,
    };
  },
  methods: {
    ...mapMutations({
      toggleSidebar: "vuefront/toggleSidebar",
    }),
  },
};
</script>
<style lang="scss">
.vf-o-header-mobile {
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
  a,
  a:hover {
    &:not([aria-controls]) {
      padding: 0.5rem 0.5rem;
      color: rgba(31, 45, 61, 0.5);
    }
  }
  .dropdown {
    > .btn {
      &.btn-link,
      &.btn-link:hover {
        color: rgba(31, 45, 61, 0.5);
        font-size: 1rem;
      }
      &.btn-link {
        &:after {
          display: none;
        }
      }
    }
  }
  &__toggle {
    font-size: 25px;
    &_close {
      font-size: 20px;
      width: 100%;
      text-align: center;
      color: #000000;
      i {
        cursor: pointer;
      }
    }
  }
  #menu-collapse {
    display: flex;
    &.show {
      .sidebar {
        @media (max-width: 768px) {
          transform: translate(0);
          transition: transform ease 0.3s;
        }
      }
    }
    .sidebar {
      @media (max-width: 768px) {
        transform: translate(-100%);
      }
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-height: 80px;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 95;
      background-color: white;
      border-bottom: 3px solid #f5f5f5;
    }
  }
}
</style>
