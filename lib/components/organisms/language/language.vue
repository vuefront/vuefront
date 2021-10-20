<template>
  <vf-m-dropdown
    v-if="language && language.length > 1"
    class="language-section"
    left
    variant="link"
    size="sm"
  >
    <template v-slot:button-content>
      <vf-a-image
        :src="activeLanguage.image"
        width="16"
        width-amp="16"
        height-amp="11"
        class="language-section__image d-none d-md-inline-block mr-1"
      />
      <span class="language-section__name font-normal text-base">{{
        activeLanguage.name
      }}</span>
    </template>
    <vf-m-dropdown-item
      v-for="(value, index) in language"
      :key="index"
      class="whitespace-nowrap"
      @click="handleEdit(value)"
    >
      <vf-a-image
        :src="value.image"
        width="16"
        width-amp="16"
        height-amp="11"
        class="d-none d-md-inline-block"
      />
      {{ value.name }}
    </vf-m-dropdown-item>
  </vf-m-dropdown>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { find } from "lodash";
import { computed } from "vue";
const store = useStore();

const language = computed(() => store.getters["common/language/get"]);
const error = computed(() => store.getters["vuefront/error"]);
const activeLanguage = computed(() => {
  return find(language.value, { active: true });
});
const handleEdit = async ({ code }: { code: string }) => {
  await store.dispatch("common/language/edit", { code });
  if (!error.value) {
    location.reload();
  }
};
</script>
