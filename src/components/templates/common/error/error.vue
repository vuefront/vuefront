<template>
  <vf-t-common-layout class="not-found">
    <vf-m-row align-h="center">
      <vf-m-col lg="7" class="text-center">
        <vf-a-heading :level="1" tag="h6" class="mb-5 font-normal">{{
          $t("elements.common.error.textError")
        }}</vf-a-heading>
      </vf-m-col>
    </vf-m-row>
  </vf-t-common-layout>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";

const store = useStore();
store.commit("common/breadcrumbs/setLoaded", true);
</script>
