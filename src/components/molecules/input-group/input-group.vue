<template>
  <b-input-group
    :id="id"
    :size="size"
    :prepend="prepend"
    :prependHtml="prependHtml"
    :append="append"
    :appendHtml="appendHtml"
    :tag="tag"
  >
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </b-input-group>
</template>
<script>
import { BInputGroup } from "bootstrap-vue";
export default {
  components: {
    BInputGroup
  },
  props: {
    id: {
      type: String
    },
    size: {
      type: String
    },
    prepend: {
      type: String
    },
    prependHtml: {
      type: String
    },
    append: {
      type: String
    },
    appendHtml: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>
