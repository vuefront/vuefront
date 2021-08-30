<template>
  <textarea
    class="vf-a-textarea"
    :class="getClass"
    :value="modelValue"
    :rows="rows"
    :state="state"
    @input="handleChange"
  />
</template>
<script>
export default {
  props: {
    rows: {
      type: [Number, String],
      default() {
        return null;
      },
    },
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    state: {
      type: Boolean,
      default() {
        return null;
      },
    },
    modelValue: {
      type: [String, Number, Object],
      default() {
        return null;
      },
    },
    trim: {
      type: Boolean,
      default() {
        return false;
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
    handleChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>