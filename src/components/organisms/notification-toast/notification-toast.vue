<template>
  <div
    class="vf-o-notification-toast"
    :class="{ '--show': show, '--error': error }"
  >
    {{ error ? errorNotification : messageNotification }}
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const show = ref(false);
const error = ref(false);
const store = useStore();
const messageNotification = computed(() => store.getters["notification/get"]);
const errorNotification = computed(() => store.getters["notification/error"]);
onMounted(() => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "notification/error") {
      error.value = true;
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 3000);
    }
    if (mutation.type === "notification/add") {
      error.value = false;
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 3000);
    }
  });
});
</script>
