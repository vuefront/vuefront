<template>
  <vf-apollo v-slot="{data}" :query="require('~/graphql/modules/blogCategory.graphql')">
    <div class="categoriesBlogList mb-4">
      <b-list-group>
        <template v-for="(value, index) in data.categoriesBlogList.content">
          <b-list-group-item
            :to="`/blog/category/${value.id}`"
            :key="`root-${index}`"
            :active="checkView(value, value.categories)"
            v-html="value.name"
          />
          <template v-if="checkView(value, value.categories)">
            <b-list-group-item
              v-for="(subValue, subIndex) in value.categories"
              :key="`sub-${subIndex}`"
              :to="`/blog/category/${subValue.id}`"
              :active="Number(subValue.id) === id"
              v-html="`&nbsp;&nbsp;&nbsp;- ${subValue.name}`"
            />
          </template>
        </template>
      </b-list-group>
    </div>
  </vf-apollo>
</template>
<script>
import BListGroup from "bootstrap-vue/es/components/list-group/list-group";
import BListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
import includes from "lodash/includes";
import map from "lodash/map";
export default {
  components: {
    BListGroup,
    BListGroupItem
  },
  computed: {
    id() {
      return this.$route.params.id ? Number(this.$route.params.id) : false;
    }
  },
  methods: {
    checkView(value, subValues) {
      if (this.id) {
        if (this.id === Number(value.id)) {
          return true;
        } else if (
          includes(map(subValues, subValue => Number(subValue.id)), this.id)
        ) {
          return true;
        }
      }

      return false;
    }
  }
};
</script>
