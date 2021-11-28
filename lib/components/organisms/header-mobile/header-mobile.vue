<template>
  <section class="vf-o-header-mobile md:hidden block">
    <vf-m-container class="vf-o-header-mobile__top">
      <div class="vf-o-header-mobile__toggle" @click="toggleSidebar()">
        <vf-a-image width="20" :src="toggleIcon"></vf-a-image>
      </div>
      <vf-m-logo class="mr-auto ml-5" />
      <vf-m-account-menu class="mr-2" />
      <vf-m-wishlist-link class="mr-2" />
      <vf-o-cart-sidebar />
    </vf-m-container>
    <vf-o-sidebar :open="sidebar" @close="toggleSidebar">
      <template #top>
        <vf-o-search-inline-form />
      </template>
      <template #bottom>
        <vf-o-currency nav />
        <vf-o-language />
      </template>
      <vf-o-position name="headerMenu" />
    </vf-o-sidebar>
  </section>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import toggleIcon from "../../../../assets/img/toggle-icon.svg";
const store = useStore();
const toggleSidebar = () => store.commit("vuefront/toggleSidebar");
const sidebar = computed(() => store.getters["vuefront/sidebar"]);
</script>
