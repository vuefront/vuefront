<template>
  <section class="vf-m-menu">
    <div v-for="(item, index) in items" :key="index" class="vf-m-menu__item">
      <vf-a-link :to="item.to" class="vf-m-menu__link">
        <div class="vf-m-menu__title">{{ item.title }}</div>
        <vf-a-icon
          v-if="item.children && item.children.length > 0"
          :icon="mdiChevronDown"
          size="15"
          class="vf-m-menu__icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="vf-m-menu__submenu vf-m-menu__submenu--vertical"
        :class="[
          item.children.length > 5 && item.children.length <= 10
            ? 'vf-m-menu__submenu--two-columns'
            : '',
          item.children.length > 10 ? 'vf-m-menu__submenu--three-columns' : '',
        ]"
      >
        <div
          v-for="(subItem, key) in item.children"
          :key="key"
          class="vf-m-menu__item"
        >
          <vf-a-link
            :to="subItem.to || '/'"
            class="vf-m-menu__link vf-m-menu__link--lg"
          >
            <div class="vf-m-menu__title">
              {{ subItem.title }}
              <span v-if="subItem.children && subItem.children.length"
                >({{ subItem.children.length }})</span
              >
            </div>
            <vf-a-icon
              v-if="subItem.children && subItem.children.length > 0"
              :icon="mdiChevronRight"
              class="vf-m-menu__icon vf-m-menu__icon--float"
            />
            <vf-a-icon
              v-if="subItem.children && subItem.children.length > 0"
              :icon="mdiChevronDown"
              class="vf-m-menu__icon vf-m-menu__icon--float-mobile"
            />
          </vf-a-link>
          <div
            v-if="subItem.children && subItem.children.length > 0"
            class="vf-m-menu__submenu vf-m-menu__submenu--horizontal"
          >
            <div
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              class="vf-m-menu__item"
            >
              <vf-a-link
                :to="value.to || '/'"
                class="vf-m-menu__link vf-m-menu__link--md"
              >
                <div class="vf-m-menu__title">{{ value.title }}</div>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
interface IMenuLink {
  title: string;
  to: string;
  children: IMenuLink[];
}
defineProps({
  items: {
    type: Array as PropType<IMenuLink[]>,
    default() {
      return [];
    },
  },
});
</script>
