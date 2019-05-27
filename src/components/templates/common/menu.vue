<template>
  <section class="partial-menu">
    <vf-menu :items="items"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import "vuefront/scss/templates/menu.scss";
export default {
  computed: {
    ...mapGetters({
      items: "menu/list"
    })
  }
};
</script>
