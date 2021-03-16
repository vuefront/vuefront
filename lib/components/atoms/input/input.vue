<template>
  <input
    :type="type"
    :value="value"
    :state="state"
    :placeholder="placeholder"
    :trim="trim"
    class="vf-a-input block w-full form-input"
    :class="`vf-a-input--${type} ${getClass}`"
    @input="handleInput"
    @change="handleChange"
    @keypress="handleKeypress"
  />
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    state: {
      type: Boolean,
      default: null,
    },
    trim: {
      type: Boolean,
      default() {
        return false;
      },
    },
    value: {
      type: [String, Number, Object],
      default() {
        return null;
      },
    },
  },
  computed: {
    getClass() {
      const result = [];

      if (this.size === "sm") {
        result.push("px-2 py-1 text-sm");
      }

      if (this.size === "md") {
        result.push("px-3 py-1.5 text-base");
      }

      if (this.size === "lg") {
        result.push("px-4 py-2 text-xl");
      }

      if (!(this.state || this.state === null)) {
        result.push(
          "border-red-400 placeholder-red-400 focus:border-red-400 focus:ring-red-400 focus:shadow-none"
        );
      }

      return result.join(" ");
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleKeypress(e) {
      this.$emit("keypress", e);
    },
  },
};
</script>
