<template>
  <b-nav-item-dropdown v-if="language.length > 1" class="top-nav__dropdown" left>
    <template
      slot="button-content"
    > <b-img :src="activeLanguage.image"/> {{activeLanguage.name}}</template>
    <b-dropdown-item
      v-for="(value, index) in language"
      :key="index"
      @click="handleEdit(value)"
    ><b-img :src="value.image"/> {{value.name}}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import BNavItemDropdown from "bootstrap-vue/es/components/nav/nav-item-dropdown";
import BDropdownItem from "bootstrap-vue/es/components/dropdown/dropdown-item";
import BImg from 'bootstrap-vue/es/components/image/img'
import { mapGetters } from "vuex";
import find from "lodash/find";
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

