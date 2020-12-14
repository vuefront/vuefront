<template>
  <div
    :id="id"
    :size="size"
    :is="tag"
    class="vf-m-input-group"
    :class="getClass"
  >
    <div v-if="$slots.prepend || prepend" class="vf-m-input-group__prepend">
      <slot name="prepend">
        <div class="vf-m-input-group__text">
          {{prepend}}
        </div>
      </slot>
    </div>
    <slot></slot>
    <div v-if="$slots.append || append" class="vf-m-input-group__append">
      <slot name="append">
        <div class="vf-m-input-group__text">
          {{append}}
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
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
  },
  computed: {
    getSizes() {
      return {
        sm: 'vf-m-input-group--sm',
        md: 'vf-m-input-group--md',
        lg: 'vf-m-input-group--lg',
      }
    },
    getClass() {
      let result = []

      result.push(this.getSizes[this.size])

      return result.join(' ')
    }
  }
};
</script>