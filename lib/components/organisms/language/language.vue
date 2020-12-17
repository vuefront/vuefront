<template>
  <vf-m-dropdown v-if="language && language.length > 1" class="language-section" left variant="link" size="sm">
    <template slot="button-content">
      <vf-a-image
        :src="activeLanguage.image"
        width="16"
        width-amp="16"
        height-amp="11"
        class="language-section__image d-none d-md-inline-block"
      />
      <span class="language-section__name">{{activeLanguage.name}}</span>
    </template>
    <vf-m-dropdown-item v-for="(value, index) in language" :key="index" @click="handleEdit(value)">
      <vf-a-image 
        :src="value.image" 
        width="16"
        width-amp="16"
        height-amp="11"
        class="d-none d-md-inline-block"
         />
      {{value.name}}
    </vf-m-dropdown-item>
  </vf-m-dropdown>
</template>
<script>
import { mapGetters } from "vuex";
import find from "lodash/find";
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