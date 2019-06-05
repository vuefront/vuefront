<template>
  <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/storeCategory.graphql')">
    <div class="categoriesList mb-4">
      <b-list-group>
        <template v-for="(value, index) in data.categoriesList.content">
          <b-list-group-item
            :to="url(value)"
            :key="`root-${index}`"
            :active="checkView(value, value.categories)"
            v-html="value.name"
          />
          <template v-if="checkView(value, value.categories)">
            <b-list-group-item
              v-for="(subValue, subIndex) in value.categories"
              :key="`sub-${subIndex}`"
              :to="url(subValue)"
              :active="subValue.id === id"
              v-html="`&nbsp;&nbsp;&nbsp;- ${subValue.name}`"
            />
          </template>
        </template>
      </b-list-group>
    </div>
  </vf-apollo>
</template>
<script>
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import includes from "lodash/includes";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
export default {
  components: {
    BListGroup,
    BListGroupItem
  },
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
    }
  },
  methods: {
    url(category) {
      if (category.keyword && category.keyword !== "") {
        return "/" + category.keyword;
      } else {
        return `/store/category/${category.id}`;
      }
    },
    checkView(value, subValues) {
      if (this.id) {
        if (this.id === value.id) {
          return true;
        } else if (includes(map(subValues, subValue => subValue.id), this.id)) {
          return true;
        }
      }

      return false;
    }
  }
};
</script>
