<template>
  <component
    :is="tag"
    :id="id"
    :size="size"
    class="vf-m-input-group"
    :class="getClass"
  >
    <div v-if="$slots.prepend || prepend" class="vf-m-input-group__prepend">
      <slot name="prepend">
        <div class="vf-m-input-group__text">
          {{ prepend }}
        </div>
      </slot>
    </div>
    <slot></slot>
    <div v-if="$slots.append || append" class="vf-m-input-group__append">
      <slot name="append">
        <div class="vf-m-input-group__text">
          {{ append }}
        </div>
      </slot>
    </div>
  </component>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default() {
        return null;
      },
    },
    size: {
      type: String,
      default() {
        return null;
      },
    },
    prepend: {
      type: String,
      default() {
        return null;
      },
    },
    prependHtml: {
      type: String,
      default() {
        return null;
      },
    },
    append: {
      type: String,
      default() {
        return null;
      },
    },
    appendHtml: {
      type: String,
      default() {
        return null;
      },
    },
    tag: {
      type: String,
      default() {
        return "div";
      },
    },
  },
  computed: {
    getSizes() {
      return {
        sm: "vf-m-input-group--sm",
        md: "vf-m-input-group--md",
        lg: "vf-m-input-group--lg",
      };
    },
    getClass() {
      const result = [];

      result.push(this.getSizes[this.size]);

      return result.join(" ");
    },
  },
};
</script>
