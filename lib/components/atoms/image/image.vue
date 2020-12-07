<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
export default {
  props: {
    blankColor: {
      type: String,
      default() {
        return null
      }
    },
    lazySrc: {
      validator () {
        return true
      },
      default () {
        return ''
      }
    },
    src: {
      validator () {
        return true
      },
      default () {
        return ''
      }
    },
    srcDark: {
      validator () {
        return true
      },
      default () {
        return ''
      }
    },
    lazySrcDark: {
      validator () {
        return true
      },
      default () {
        return ''
      }
    },
    width: {
      type: String | Number,
      default () {
        return ''
      }
    },
    alt: {
      type: String,
      default () {
        return ''
      }
    },
    layout: {
      type: String,
      default () {
        return 'responsive'
      }
    },
    widthAmp: {
      type: String | Number,
      default () {
        return '1'
      }
    },
    heightAmp: {
      type: String | Number,
      default () {
        return '1'
      }
    },
    heights: {
      type: String,
      default () {
        return null
      }
    },
    cover: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    isDark () {
      let theme = false
      if (process.client) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          theme = true
        }
      }

      return theme
    },
    isSVG () {
      return /.svg$/.test(this.src)
    },
    srcImage () {
      if (/.svg$/.test(this.src)) {
      }
      return this.src
    }
  },
  render (createElement) {
    // if (typeof this.srcDark === 'object') {
    //   if (this.isDark && this.srcDark !== '') {
    //     return createElement(this.srcDark.default)
    //   }`
    // }
    // if (typeof this.src === 'object') {
    //   return createElement(this.src.default)
    // }
    if (!this.$vuefront.isAMP) {
      const styles = {}
      if (this.width !== '') {
        styles.width = this.width + 'px'
      }
      if (this.layout === 'flex-item') {
        styles.width = this.widthAmp + 'px'
        styles.height = this.heightAmp + 'px'
      }

      let src = this.src

      let lazySrc = this.lazySrc

      if (this.isDark && this.lazySrcDark !== '') {
        lazySrc = this.lazySrcDark
      }

      if (this.isDark && this.srcDark !== '') {
        src = this.srcDark
      }

      let imgClass = ''

      if(this.cover) {
        imgClass = 'vf-a-image__img--cover'
      }

      return createElement('div', {
        class: `vf-a-image image-wrapper layout-${this.layout}`,
        style: {
          ...styles
        }
      }, [
        createElement('div', {
          class: 'vf-a-image__sizer image-sizer',
          style: {
            'padding-bottom': `${100 / (this.widthAmp / this.heightAmp)}%`
          }
        }, []),
        createElement('div', {
          class: 'vf-a-image__img image-img '+imgClass,
          directives: [
            {
              name: 'lazy',
              arg: 'background-image',
              value: src
            }
          ],
          style: {
            'background-image': this.lazySrc !== '' ? `url(${this.lazySrc})` : null,
            'background-color': this.blankColor ? this.blankColor: null
          }
        }, []),
        createElement('div', {
          class: 'vf-a-image__content'
        }, this.$slots.default)
      ])
    } else {
      let src = this.src

      if (this.isDark && this.srcDark !== '') {
        src = this.srcDark
      }
      return createElement('amp-img', {
        attrs: {
          src,
          alt: this.alt,
          width: this.widthAmp,
          height: this.heightAmp,
          heights: this.heights,
          layout: this.layout
        }
      }, [])
    }
  }
}
</script>