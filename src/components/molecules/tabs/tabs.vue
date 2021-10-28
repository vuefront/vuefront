<template>
  <div class="vf-m-tabs">
    <div class="vf-m-tabs__list">
      <div
        class="vf-m-tabs__list__item"
        :class="{ '--active': value.id === state.activeTab }"
        v-for="value in state.tabs"
        :key="value.id"
        @click="state.activeTab = value.id"
      >
        {{ value.title }}
      </div>
    </div>
    <div class="vf-m-tabs__content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, onMounted } from "vue";
const content = ref(null);
const state = ref<{
  tabs: { title: string; id: string }[];
  activeTab: string;
}>({
  tabs: [],
  activeTab: "",
});

provide("vfTabs", state.value);

onMounted(() => {
  state.value.activeTab = state.value.tabs[0].id;
});

</script>
