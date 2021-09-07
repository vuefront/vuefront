<template>
  <div class="vf-o-position" :class="`vf-o-position--${name}`">
    <slot v-if="modules.length === 0"></slot>
    <template v-for="(value, index) in modules" v-else :key="index">
      <component
        :is="extension(value)"
        v-bind="value.props"
        class="vf-o-position__module"
      >
        <slot></slot>
      </component>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import useLayout from "../../../utils/baseLayout";
import useModule from "../../../utils/module";
const props = defineProps({
  name: {
    type: String,
    default() {
      return null;
    },
  },
});
const { modules } = useLayout(props.name);
const { checkModules } = useModule();

onMounted(() => {
  checkModules(props.name);
});

const kebabize = (str: string) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

const extension = (value: { component: string }) => {
  return "vf-e-" + kebabize(value.component);
};
</script>
