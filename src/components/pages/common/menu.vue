<template>
  <section class="partial-menu">
    <vf-position name="headerMenu">
      <vf-menu :items="items"/>
    </vf-position>
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
