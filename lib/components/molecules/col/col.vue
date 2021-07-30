<template>
  <component :is="tag" class="vf-m-col" :class="classList">
    <slot></slot>
  </component>
</template>
<script>
import capitalize from "lodash-es/capitalize";
export default {
  props: {
    alignSelf: {
      type: String,
      default() {
        return null;
      },
    },
    xs: {
      type: [String, Number, Boolean],
      default() {
        return null;
      },
    },
    sm: {
      type: [String, Number, Boolean],
      default() {
        return false;
      },
    },
    md: {
      type: [String, Number, Boolean],
      default() {
        return false;
      },
    },
    lg: {
      type: [String, Number, Boolean],
      default() {
        return false;
      },
    },
    xl: {
      type: [String, Number, Boolean],
      default() {
        return false;
      },
    },
    orderXs: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    orderSm: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    orderMd: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    orderLg: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    orderXl: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    offsetXs: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    offsetSm: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    offsetMd: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    offsetLg: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    offsetXl: {
      type: [String, Number],
      default() {
        return null;
      },
    },
    tag: {
      type: String,
      default() {
        return "div";
      },
    },
  },
  computed: {
    getOrders() {
      return {
        xs: {
          1: "order-1",
          2: "order-2",
          3: "order-3",
          4: "order-4",
          5: "order-5",
          6: "order-6",
          7: "order-7",
          8: "order-8",
          9: "order-9",
          10: "order-10",
          11: "order-11",
          12: "order-12",
        },
        sm: {
          1: "sm:order-1",
          2: "sm:order-2",
          3: "sm:order-3",
          4: "sm:order-4",
          5: "sm:order-5",
          6: "sm:order-6",
          7: "sm:order-7",
          8: "sm:order-8",
          9: "sm:order-9",
          10: "sm:order-10",
          11: "sm:order-11",
          12: "sm:order-12",
        },
        md: {
          1: "md:order-1",
          2: "md:order-2",
          3: "md:order-3",
          4: "md:order-4",
          5: "md:order-5",
          6: "md:order-6",
          7: "md:order-7",
          8: "md:order-8",
          9: "md:order-9",
          10: "md:order-10",
          11: "md:order-11",
          12: "md:order-12",
        },
        lg: {
          1: "lg:order-1",
          2: "lg:order-2",
          3: "lg:order-3",
          4: "lg:order-4",
          5: "lg:order-5",
          6: "lg:order-6",
          7: "lg:order-7",
          8: "lg:order-8",
          9: "lg:order-9",
          10: "lg:order-10",
          11: "lg:order-11",
          12: "lg:order-12",
        },
        xl: {
          1: "lg:order-1",
          2: "lg:order-2",
          3: "lg:order-3",
          4: "lg:order-4",
          5: "lg:order-5",
          6: "lg:order-6",
          7: "lg:order-7",
          8: "lg:order-8",
          9: "lg:order-9",
          10: "lg:order-10",
          11: "lg:order-11",
          12: "lg:order-12",
        },
      };
    },
    getOffsets() {
      return {
        xs: {
          1: "push-1/12",
          2: "push-1/6",
          3: "push-1/4",
          4: "push-1/3",
          5: "push-5/12",
          6: "push-1/2",
          7: "push-7/12",
          8: "push-2/3",
          9: "push-3/4",
          10: "push-5/6",
          11: "push-11/12",
          12: "push-1",
        },
        sm: {
          1: "sm:push-1/12",
          2: "sm:push-1/6",
          3: "sm:push-1/4",
          4: "sm:push-1/3",
          5: "sm:push-5/12",
          6: "sm:push-1/2",
          7: "sm:push-7/12",
          8: "sm:push-2/3",
          9: "sm:push-3/4",
          10: "sm:push-5/6",
          11: "sm:push-11/12",
          12: "sm:push-1",
        },
        md: {
          1: "md:push-1/12",
          2: "md:push-1/6",
          3: "md:push-1/4",
          4: "md:push-1/3",
          5: "md:push-5/12",
          6: "md:push-1/2",
          7: "md:push-7/12",
          8: "md:push-2/3",
          9: "md:push-3/4",
          10: "md:push-5/6",
          11: "md:push-11/12",
          12: "md:push-1",
        },
        lg: {
          1: "lg:push-1/12",
          2: "lg:push-1/6",
          3: "lg:push-1/4",
          4: "lg:push-1/3",
          5: "lg:push-5/12",
          6: "lg:push-1/2",
          7: "lg:push-7/12",
          8: "lg:push-2/3",
          9: "lg:push-3/4",
          10: "lg:push-5/6",
          11: "lg:push-11/12",
          12: "lg:push-1",
        },
        xl: {
          1: "xl:push-1/12",
          2: "xl:push-1/6",
          3: "xl:push-1/4",
          4: "xl:push-1/3",
          5: "xl:push-5/12",
          6: "xl:push-1/2",
          7: "xl:push-7/12",
          8: "xl:push-2/3",
          9: "xl:push-3/4",
          10: "xl:push-5/6",
          11: "xl:push-11/12",
          12: "xl:push-1",
        },
      };
    },

    getSizes() {
      return {
        xs: {
          "": "flex-1",
          1: "w-1/12 flex-grow-0",
          2: "w-2/12 flex-grow-0",
          3: "w-3/12 flex-grow-0",
          4: "w-4/12 flex-grow-0",
          5: "w-5/12 flex-grow-0",
          6: "w-6/12 flex-grow-0",
          7: "w-7/12 flex-grow-0",
          8: "w-8/12 flex-grow-0",
          9: "w-9/12 flex-grow-0",
          10: "w-10/12 flex-grow-0",
          11: "w-11/12 flex-grow-0",
          12: "w-full flex-grow-0",
        },
        sm: {
          "": "flex-1",
          1: "sm:w-1/12 sm:flex-grow-0",
          2: "sm:w-2/12 sm:flex-grow-0",
          3: "sm:w-3/12 sm:flex-grow-0",
          4: "sm:w-4/12 sm:flex-grow-0",
          5: "sm:w-5/12 sm:flex-grow-0",
          6: "sm:w-6/12 sm:flex-grow-0",
          7: "sm:w-7/12 sm:flex-grow-0",
          8: "sm:w-8/12 sm:flex-grow-0",
          9: "sm:w-9/12 sm:flex-grow-0",
          10: "sm:w-10/12 sm:flex-grow-0",
          11: "sm:w-11/12 sm:flex-grow-0",
          12: "sm:w-full sm:flex-grow-0",
        },
        md: {
          "": "flex-1",
          1: "md:w-1/12 md:flex-grow-0",
          2: "md:w-2/12 md:flex-grow-0",
          3: "md:w-3/12 md:flex-grow-0",
          4: "md:w-4/12 md:flex-grow-0",
          5: "md:w-5/12 md:flex-grow-0",
          6: "md:w-6/12 md:flex-grow-0",
          7: "md:w-7/12 md:flex-grow-0",
          8: "md:w-8/12 md:flex-grow-0",
          9: "md:w-9/12 md:flex-grow-0",
          10: "md:w-10/12 md:flex-grow-0",
          11: "md:w-11/12 md:flex-grow-0",
          12: "md:w-full md:flex-grow-0",
        },
        lg: {
          "": "flex-1",
          1: "lg:w-1/12 lg:flex-grow-0",
          2: "lg:w-2/12 lg:flex-grow-0",
          3: "lg:w-3/12 lg:flex-grow-0",
          4: "lg:w-4/12 lg:flex-grow-0",
          5: "lg:w-5/12 lg:flex-grow-0",
          6: "lg:w-6/12 lg:flex-grow-0",
          7: "lg:w-7/12 lg:flex-grow-0",
          8: "lg:w-8/12 lg:flex-grow-0",
          9: "lg:w-9/12 lg:flex-grow-0",
          10: "lg:w-10/12 lg:flex-grow-0",
          11: "lg:w-11/12 lg:flex-grow-0",
          12: "lg:w-full lg:flex-grow-0",
        },
        xl: {
          "": "flex-1",
          1: "xl:w-1/12 xl:flex-grow-0",
          2: "xl:w-2/12 xl:flex-grow-0",
          3: "xl:w-3/12 xl:flex-grow-0",
          4: "xl:w-4/12 xl:flex-grow-0",
          5: "xl:w-5/12 xl:flex-grow-0",
          6: "xl:w-6/12 xl:flex-grow-0",
          7: "xl:w-7/12 xl:flex-grow-0",
          8: "xl:w-8/12 xl:flex-grow-0",
          9: "xl:w-9/12 xl:flex-grow-0",
          10: "xl:w-10/12 xl:flex-grow-0",
          11: "xl:w-11/12 xl:flex-grow-0",
          12: "xl:w-full xl:flex-grow-0",
        },
      };
    },
    getAligns() {
      return {
        start: "self-start",
        center: "self-center",
        end: "self-end",
      };
    },
    classList() {
      let result = ["flex-grow"];

      if (!this.$parent.noGutters) {
        result.push("px-4");
      }

      const sizes = ["xs", "sm", "md", "lg", "xl"];

      for (const size of sizes) {
        if (
          (typeof this[size] !== "undefined" &&
            typeof this[size] !== "boolean") ||
          (typeof this[size] === "boolean" && this[size])
        ) {
          result.push(this.getSizes[size][this[size]]);
        }
        if (
          (typeof this[`offset${capitalize(size)}`] !== "undefined" &&
            typeof this[`offset${capitalize(size)}`] !== "boolean") ||
          (typeof this[`offset${capitalize(size)}`] === "boolean" &&
            this[`offset${capitalize(size)}`])
        ) {
          result.push(this.getOffsets[size][this[`offset${capitalize(size)}`]]);
        }
        if (
          (typeof this[`order${capitalize(size)}`] !== "undefined" &&
            typeof this[`order${capitalize(size)}`] !== "boolean") ||
          (typeof this[`order${capitalize(size)}`] === "boolean" &&
            this[`order${capitalize(size)}`])
        ) {
          result.push(this.getOrders[size][this[`order${capitalize(size)}`]]);
        }
      }

      if (this.alignSelf) {
        result = [...result, this.getAligns[this.alignSelf]];
      }

      return result.join(" ");
    },
  },
  methods: {
    createSize(name, value, prefix = "") {
      let result = "";
      if (
        (typeof value !== "undefined" && typeof value !== "boolean") ||
        (typeof value === "boolean" && value)
      ) {
        if (value !== null) {
          if (value === "") {
            result = `flex-1`;
          } else if (value === 12) {
            result = `${name}:w-full ${name}:flex-grow-0`;
          } else {
            result = `${name}:w-${value}/12 ${name}:flex-grow-0`;
          }
        }
      }

      return result;
    },
    createOrder(name, value, prefix = "") {
      let result = "";
      if (
        (typeof value !== "undefined" && typeof value !== "boolean") ||
        (typeof value === "boolean" && value)
      ) {
        if (value !== null) {
          if (value !== "") {
            result = `${name}:order-${value}`;
          }
        }
      }

      return result;
    },
  },
};
</script>
