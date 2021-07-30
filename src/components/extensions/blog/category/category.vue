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
<script>
import isEmpty from "lodash-es/isEmpty";
import map from "lodash-es/map";
import includes from "lodash-es/includes";
export default {
  computed: {
    id() {
      let result = false;

      if (!isEmpty(this.$route.params.id)) {
        result = this.$route.params.id;
      }
      if (!isEmpty(this.$route.matched[0].props)) {
        result = this.$route.matched[0].props.default.id;
      }

      return result;
    },
  },
  methods: {
    url(category) {
      if (category.keyword && category.keyword !== "") {
        return "/" + category.keyword;
      } else {
        return `/blog/category/${category.id}`;
      }
    },
    checkView(value, subValues) {
      if (this.id) {
        if (this.id === value.id) {
          return true;
        } else if (
          includes(
            map(subValues, (subValue) => subValue.id),
            this.id
          )
        ) {
          return true;
        }
      }

      return false;
    },
  },
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
