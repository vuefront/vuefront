<template>
  <section class="vf-o-header-mobile md:hidden block">
    <vf-m-container class="vf-o-header-mobile__top">
      <div class="vf-o-header-mobile__toggle" @click="toggleSidebar()">
        <vf-a-icon :icon="mdiApps" size="25"></vf-a-icon>
      </div>
      <vf-m-logo class="mx-auto" />
      <vf-o-cart />
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
import { mdiApps } from "@mdi/js";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const toggleSidebar = () => store.commit("vuefront/toggleSidebar");
const sidebar = computed(() => store.getters["vuefront/sidebar"]);
</script>
