module.exports = {
  content: [
    "./src/components/**/*.vue",
    "./node_modules/vuefront/lib/**/*.vue",
    "./node_modules/@vuefront/checkout-app/**/*.vue",
  ],
  safelist: [
    {
      variants: ["md", "sm", "lg"],
      pattern: /^vf-/,
    },
  ],
  // theme: {
  //   extend: {
  //     vuefront: {
  //       colors: {
  //         primary: 'red'
  //       }
  //     }
  //   }
  // },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("vuefront/tailwind/plugin.js"),
  ],
};
