<template>
  <input
    type="date"
    class="vf-a-datepicker vf-a-input"
    :class="getClass"
    :value="modelValue"
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
    modelValue: {
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
        result.push("--sm");
      }

      if (this.size === "md") {
        result.push("--md");
      }

      if (this.size === "lg") {
        result.push("--lg");
      }

      if (!(this.state || this.state === null)) {
        result.push(
          "--error"
        );
      }
      
      return result.join(" ");
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleKeypress(e) {
      this.$emit("keypress", e.target.value);
    },
  },
};
</script>