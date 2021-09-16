<template>
  <vf-o-apollo v-slot="{ data }" class="vf-e-blog-category">
    <span>
      <vf-m-list-group>
        <template
          v-for="(value, index) in data.categoriesBlogList.content"
          :key="`root-${index}`"
        >
          <vf-m-list-group-item
            :to="url(value)"
            :active="checkView(value, value.categories)"
            v-html="value.name"
          />
          <template v-if="checkView(value, value.categories)">
            <vf-m-list-group-item
              v-for="(subValue, subIndex) in value.categories"
              :key="`sub-${subIndex}`"
              :to="url(subValue)"
              :active="subValue.id === id"
              v-html="`&nbsp;&nbsp;&nbsp;- ${subValue.name}`"
            />
          </template>
        </template>
      </vf-m-list-group>
    </span>
  </vf-o-apollo>
</template>
<script lang="ts" setup>
import {isEmpty, map, includes} from "lodash";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const id = computed(() => {
  let result = "";

  if (!isEmpty(route.params.id)) {
    result = route.params.id as string;
  }

  return result;
});
interface ICategory {
  id: string;
  keyword: string;
}
const url = (category: ICategory) => {
  if (category.keyword && category.keyword !== "") {
    return "/" + category.keyword;
  } else {
    return `/blog/category/${category.id}`;
  }
};
const checkView = (value: ICategory, subValues: ICategory[]) => {
  if (id.value !== "") {
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
  categoriesBlogList(page: 1, size: 10, parent: 0) {
    content {
      id
      name
      keyword
      categories {
        id
        name
        keyword
      }
    }
  }
}
</graphql>
