<template>
  <textarea
    class="vf-a-textarea mt-1 block w-full form-textarea"
    :class="getClass"
    :value="value"
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
        return null;
      },
    },
    state: {
      type: Boolean,
      default() {
        return null;
      },
    },
    value: {
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
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
