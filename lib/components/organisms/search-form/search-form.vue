<template>
  <vf-o-form @submit="onSubmit">
    <vf-m-field id="input-keyword">
      <template #label>{{
        $t("elements.common.search.keywordEntry")
      }}</template>
      <template #default="data">
        <vf-a-input
          v-model="keyword"
          v-bind="data"
          trim
          @keypress.stop="handleKeyPress"
        />
      </template>
    </vf-m-field>
    <template #button>{{ $t("elements.common.search.buttonSearch") }}</template>
  </vf-o-form>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const onSubmit = () => {
  if (route.params.slug !== "") {
    router.push(`/search/${route.params.slug}`);
  } else {
    router.push("/search");
  }
};
const handleKeyPress = (e: any) => {
  if (e.key === "Enter") {
    if (route.params.slug !== "") {
      router.push(`/search/${route.params.slug}`);
    } else {
      router.push("/search");
    }
  }
};
</script>
