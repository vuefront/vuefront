<template>
  <div
    v-show="show || value"
    :transition="transition"
  >
    <div
      class="vf-o-modal"
      @click.self="clickMask"
    >
      <div
        :class="modalClass"
        class="vf-o-modal__dialog"
      >
        <div class="vf-o-modal__content">
          <a
            v-if="btnClose"
            class="vf-o-modal__close"
            @click="cancel"
          ><svg-icon
            type="mdi"
            :path="mdiClose"
          /></a>
          <div
            v-if="$slots.header"
            class="vf-o-modal__header"
          >
            <slot name="header" />
          </div>
          <div class="vf-o-modal__body">
            <slot />
          </div>
          <div
            v-if="$slots.footer"
            class="vf-o-modal__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div class="vf-o-modal__backdrop --in" />
  </div>
</template>
<script>
import { mdiClose } from '@mdi/js';

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    btnClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Modal'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    force: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'modal'
    },
    closeWhenOK: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      duration: null,
      show: false,
      mdiClose
    }
  },
  computed: {
    modalClass() {
      return {
        '--lg': this.large,
        '--sm': this.small,
        '--full': this.full
      }
    }
  },
  watch: {
    show(value) {
      if (value) {
        document.body.className += ' vf-o-modal--open'
        document.querySelector('html').className += ' vf-o-modal--open'
      } else {
        if (!this.duration) {
          this.duration =
            window
              .getComputedStyle(this.$el)
              ['transition-duration'].replace('s', '') * 1000
        }
        window.setTimeout(() => {
          document.body.className = document.body.className.replace(
            /\s?vf-o-modal-open/,
            ''
          )
          document.querySelector('html').className = document
            .querySelector('html')
            .className.replace(/\s?vf-o-modal-open/, '')
        }, this.duration || 0)
      }
    },
    value(value) {
      if (value) {
        document.body.className += ' vf-o-modal--open'
        document.querySelector('html').className += ' vf-o-modal--open'
      } else {
        if (!this.duration) {
          this.duration =
            window
              .getComputedStyle(this.$el)
              ['transition-duration'].replace('s', '') * 1000
        }
        window.setTimeout(() => {
          document.body.className = document.body.className.replace(
            /\s?vf-o-modal-open/,
            ''
          )
          document.querySelector('html').className = document
            .querySelector('html')
            .className.replace(/\s?vf-o-modal-open/, '')
        }, this.duration || 0)
      }
    }
  },
  created() {
    if (this.show || this.value) {
      document.body.className += ' vf-o-modal--open'
      document.querySelector('html').className += ' vf-o-modal--open'
    }
  },
  beforeDestroy() {
    document.body.className = document.body.className.replace(
      /\s?vf-o-modal--open/,
      ''
    )
    document.querySelector('html').className = document
      .querySelector('html')
      .className.replace(/\s?vf-o-modal--open/, '')
  },
  methods: {
    ok() {
      this.$emit('ok')
      if (this.closeWhenOK) {
        this.show = false
        this.$emit('input', false)
      }
    },
    cancel() {
      this.$emit('cancel')
      this.show = false
      this.$emit('input', false)
    },
    clickMask() {
      if (!this.force) {
        this.cancel()
      }
    }
  }
}
</script>