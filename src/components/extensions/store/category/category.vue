<template>
  <vf-o-apollo v-slot="{ data }" class="vf-e-store-category">
    <span>
      <vf-m-list-group>
        <template
          v-for="(value, index) in data.categoriesList.content"
          :key="`root-${index}`"
        >
          <vf-m-list-group-item
            :to="value.url"
            :active="checkView(value, value.categories)"
            v-html="value.name"
          />
          <template v-if="checkView(value, value.categories)">
            <vf-m-list-group-item
              v-for="(subValue, subIndex) in value.categories"
              :key="`sub-${subIndex}`"
              :to="subValue.url"
              :active="subValue.id === id"
              v-html="`&nbsp;&nbsp;&nbsp;- ${subValue.name}`"
            />
          </template>
        </template>
      </vf-m-list-group>
    </span>
  </vf-o-apollo>
</template>
<script setup lang="ts">
import isEmpty from "lodash-es/isEmpty";
import map from "lodash-es/map";
import includes from "lodash-es/includes";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = computed(() => {
  let result: boolean | string = false;

  if (!isEmpty(route.params.id)) {
    result = route.params.id as string;
  }
  return result;
});

const checkView = (value: { id: string }, subValues: { id: string }[]) => {
  if (id.value) {
    if (id.value === value.id) {
      return true;
    } else if (
      includes(
        map(subValues, (subValue) => subValue.id),
        id.value
      )
    ) {
      return true;
    }
  }

  return false;
};
</script>
<graphql>
  {
    categoriesList(page: 1, size: 10, parent: 0) {
      content {
        id
        name
        keyword
        url(url: "/store/category/_id")
        categories {
          id
          name
          keyword
          url(url: "/store/category/_id")
        }
      }
    }
  }
</graphql>
