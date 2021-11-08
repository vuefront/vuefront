<template>
  <vf-m-container>
    <vf-a-alert
      :show="dismissCountDown"
      color="success"
      class="mt-3"
      dismissible
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      >{{ messageNotification }}</vf-a-alert
    >
  </vf-m-container>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
const dismissCountDown = ref(0);
const store = useStore();
const messageNotification = computed(() => store.getters["notification/get"]);
watch(
  () => messageNotification.value,
  (val, oldVal) => {
    dismissCountDown.value = 10;
  }
);
const countDownChanged = (val: number) => {
  dismissCountDown.value = val;
};
</script>
