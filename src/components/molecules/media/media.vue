<template>
  <div
    class="vf-m-media flex"
    :is="tag"
  >
    <template v-if="!rightAlign">
      <div class="vf-m-media-aside flex mr-4" :class="asideClass" v-if="$slots.aside">
        <slot name="aside"></slot>
      </div>
    </template>
    <div class="vf-m-media-body" v-if="!noBody">
      <slot></slot>
    </div>
    <slot v-else></slot>
    <template v-if="rightAlign">
      <div class="vf-m-media-aside flex ml-4" :class="asideClass" v-if="$slots.aside">
        <slot name="aside"></slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    rightAlign: {
      type: Boolean,
      default: false
    },
    verticalAlign: {
      type: String,
      default: "top"
    },
    noBody: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    asideClass() {
      let result = []

      if (this.verticalAlign === 'start' ||this.verticalAlign === 'top' ) {
        result.push('self-start')
      }
      if (this.verticalAlign === 'center') {
        result.push('self-center')
      }
      if (this.verticalAlign === 'end' ||this.verticalAlign === 'bottom' ) {
        result.push('self-end')
      }

      return result.join(' ')
    }
  }
};
</script>