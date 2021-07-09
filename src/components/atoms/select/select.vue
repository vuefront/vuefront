<template>
  <select
    :value="getLocalValue"
    class="vf-a-select"
    :class="getClass"
    @input="handleChange"
  >
    <option v-for="(item, index) in optionsData" :key="index" :value="index">
      {{ item[textField] }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
    },
    options: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
    valueField: {
      type: String,
      default() {
        return "value";
      },
    },
    textField: {
      type: String,
      default() {
        return "text";
      },
    },
    noSelect: {
      type: Boolean,
      default() {
        return false;
      },
    },
    state: {
      type: Boolean,
      default: null,
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
    getLocalValue() {
      for (const key in this.options) {
        if (
          JSON.stringify(this.options[key][this.valueField]) ===
          JSON.stringify(this.value)
        ) {
          return key;
        }
      }
      return null;
    },
    optionsData() {
      let result = [];

      if (this.noSelect) {
        const option = {};
        option[this.textField] = this.$t("atoms.select.pleaseSelectText");
        option[this.valueField] = null;
        result = [...result, option];
      }

      result = [...result, ...this.options];
      return result;
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("input", this.options[e.target.value][this.valueField]);
    },
  },
};
</script>