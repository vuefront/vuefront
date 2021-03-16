module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    camelcase: "off",
    "vue/max-attributes-per-line": "off",
    "vue/require-prop-types": "off",
    "vue/no-v-html": "off",
  },
};
