<template>
  <vf-m-dropdown v-if="language.length > 1" class="language-section" left variant="link" size="sm">
    <template slot="button-content">
      <vf-a-image
        :src="activeLanguage.image"
        class="language-section__image d-none d-md-inline-block"
      />
      <span class="language-section__name">{{activeLanguage.name}}</span>
    </template>
    <vf-m-dropdown-item v-for="(value, index) in language" :key="index" @click="handleEdit(value)">
      <b-img :src="value.image" />
      {{value.name}}
    </vf-m-dropdown-item>
  </vf-m-dropdown>
</template>
<script>
import { mapGetters } from "vuex";
import { find } from "lodash";
export default {
  computed: {
    ...mapGetters({
      language: "common/language/get",
      error: "vuefront/error"
    }),
    activeLanguage() {
      return find(this.language, { active: true });
    }
  },
  methods: {
    async handleEdit({ code }) {
      await this.$store.dispatch("common/language/edit", { code });
      if (!this.error) {
        location.reload();
      }
    }
  }
};
</script>
<style lang="scss">
.language-section {
  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  &__image {
  }
  &__name {
    @media (max-width: 767px) {
      color: #000;
    }
  }
}
</style>

