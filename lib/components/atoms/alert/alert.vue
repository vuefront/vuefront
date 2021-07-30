<template>
  <div v-show="localShow" class="vf-a-alert" :class="getClass" v-bind="$attrs">
    <div class="vf-a-alert__content">
      <slot></slot>
    </div>
    <button
      v-if="dismissible"
      class="vf-a-alert__button"
      type="button"
      @click="hide"
    >
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="h-5 w-5 fill-current h-5 w-5 fill-current"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: [Boolean, Number, String],
      default: false,
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    color: {
      type: [String],
      default: "default",
    },
  },
  data() {
    return {
      localShow: this.show,
    };
  },
  computed: {
    getColors() {
      return {
        primary: "vf-a-alert--primary",
        secondary: "vf-a-alert--secondary",
        success: "vf-a-alert--success",
        info: "vf-a-alert--info",
        warning: "vf-a-alert--warning",
        danger: "vf-a-alert--danger",
        white: "vf-a-alert--white",
        light: "vf-a-alert--light",
        dark: "vf-a-alert--dark",
      };
    },
    getClass() {
      const result = [];
      result.push(this.getColors[this.color]);

      return result.join(" ");
    },
  },
  watch: {
    show(show) {
      this.localShow = show;
    },
    localShow(localShow) {
      this.$emit("update:show", localShow);
      if (this.localShow) {
        this.$emit("shown");
        if (typeof this.localShow === "number") {
          this.initTimeout();
        }
      } else {
        this.$emit("hidden");
      }
    },
  },
  mounted() {
    if (this.localShow && typeof this.localShow === "number") {
      this.$emit("dismiss-count-down", this.localShow);
      this.initTimeout();
    }
  },

  methods: {
    initTimeout() {
      setTimeout(() => {
        this.hide();
      }, this.localShow * 1000);
    },
    hide() {
      this.localShow = false;
    },
  },
};
</script>
