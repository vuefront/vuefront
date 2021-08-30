<script>
import { h, resolveDirective, withDirectives } from "vue";

export default {
  props: {
    contentClass: {
      type: String,
      default: (()=>"")
    },
    blankColor: {
      type: String,
      default() {
        return null;
      },
    },
    lazySrc: {
      validator() {
        return true;
      },
      default() {
        return "";
      },
    },
    src: {
      validator() {
        return true;
      },
      default() {
        return "";
      },
    },
    srcDark: {
      validator() {
        return true;
      },
      default() {
        return "";
      },
    },
    lazySrcDark: {
      validator() {
        return true;
      },
      default() {
        return "";
      },
    },
    width: {
      type: [String, Number],
      default() {
        return "";
      },
    },
    alt: {
      type: String,
      default() {
        return "";
      },
    },
    layout: {
      type: String,
      default() {
        return "responsive";
      },
    },
    widthAmp: {
      type: [String, Number],
      default() {
        return "1";
      },
    },
    heightAmp: {
      type: [String, Number],
      default() {
        return "1";
      },
    },
    heights: {
      type: String,
      default() {
        return null;
      },
    },
    cover: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    isDark() {
      let theme = false;
      if (document) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          theme = true;
        }
      }

      return theme;
    },
    isSVG() {
      return /.svg$/.test(this.src);
    },
    srcImage() {
      return this.src;
    },
  },
  render() {
    if (!this.$vuefront.isAMP) {
      const styles = {};
      if (this.width !== "") {
        styles.width = this.width + "px";
      }
      if (this.layout === "flex-item") {
        styles.width = this.widthAmp + "px";
        styles.height = this.heightAmp + "px";
      }

      let src = this.src;

      let lazySrc = this.lazySrc;

      if (this.isDark && this.lazySrcDark !== "") {
        lazySrc = this.lazySrcDark;
      }

      if (this.isDark && this.srcDark !== "") {
        src = this.srcDark;
      }

      let imgClass = "";

      if (this.cover) {
        imgClass = "vf-a-image__img--cover";
      }


      // if (this.lazySrc !== "") {
      const lazy = resolveDirective("lazy");
      // }
      return h(
        "div",
        {
          class: `vf-a-image image-wrapper layout-${this.layout}`,
          style: {
            ...styles,
          },
        },
        [
          h(
            "div",
            {
              class: "vf-a-image__sizer image-sizer",
              style: {
                "padding-bottom": `${100 / (this.widthAmp / this.heightAmp)}%`,
              },
            },
            []
          ),
          withDirectives(
            h(
              "div",
              {
                class: "vf-a-image__img image-img " + imgClass,
                style: {
                  /* "background-image":
                  this.lazySrc !== ""
                    ? `url(${this.lazySrc})`
                    : `url(${this.src})`, */
                  "background-color": this.blankColor ? this.blankColor : null,
                },
              },
              []
            ),
            [[lazy, src]]
          ),
          h(
            "div",
            {
              class: `vf-a-image__content ${this.contentClass}`,
            },
            this.$slots.default
          ),
        ]
      );
    } else {
      let src = this.src;

      if (this.isDark && this.srcDark !== "") {
        src = this.srcDark;
      }
      return h(
        "amp-img",
        {
          attrs: {
            src,
            alt: this.alt,
            width: this.widthAmp,
            height: this.heightAmp,
            heights: this.heights,
            layout: this.layout,
          },
        },
        []
      );
    }
  },
};
</script>
