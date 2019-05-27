<template>
  <b-nav-item-dropdown v-if="language.length > 1" class="language-section" left>
    <template slot="button-content">
      <b-img :src="activeLanguage.image" class="language-section__image d-none d-md-inline-block"/>
      <span class="language-section__name">{{activeLanguage.name}}</span>
    </template>
    <b-dropdown-item v-for="(value, index) in language" :key="index" @click="handleEdit(value)">
      <b-img :src="value.image"/>
      {{value.name}}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import {
  BNavItemDropdown,
  BDropdownItem,
  BImg
} from "bootstrap-vue/es/components";
import { mapGetters } from "vuex";
import find from "lodash/find";
import "vuefront/scss/elements/common/language.scss";
export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg
  },
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

