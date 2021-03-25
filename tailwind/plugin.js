const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

const buttonComponent = require("./component/button");
const alertComponent = require("./component/alert");
const badgesComponent = require("./component/badges");
const paginationComponent = require("./component/pagination");
const breadcrumbsComponent = require("./component/breadcrumb");
const inputGroupComponent = require("./component/input-group");
const buttonGroupComponent = require("./component/button-group");
const listGroupComponent = require("./component/list-group");
const fieldComponent = require("./component/field");
const headingComponent = require("./component/heading");
const defaultOptions = require("./defaultOptions");
module.exports = plugin(
  function ({ addUtilities, e, theme, variants, addComponents }) {
    addComponents(fieldComponent(theme));
    addComponents(listGroupComponent(theme));
    addComponents(buttonGroupComponent(theme));
    addComponents(buttonComponent(theme));
    addComponents(alertComponent(theme));
    addComponents(badgesComponent(theme));
    addComponents(paginationComponent(theme));
    addComponents(breadcrumbsComponent(theme));
    addComponents(inputGroupComponent(theme));
    addComponents(headingComponent(theme));
  },
  {
    purge: [
      `./components/**/*.{vue,js}`,
      `./layouts/**/*.vue`,
      `./pages/**/*.vue`,
      `./plugins/**/*.{js,ts}`,
      `./nuxt.config.{js,ts}`,
      "./node_modules/vuefront/**/*.{js,vue}",
    ],
    theme: {
      vuefrontComponent: (theme) => defaultOptions(theme),
      vuefront: {
        colors: {
          primary: "#6e00ff",
          secondary: "#eff2f7",
          success: "#36b37e",
          info: "#00b8d9",
          warning: "#ffab00",
          danger: "#ff5630",
          white: "#ffffff",
          light: "#eff2f7",
          dark: "#273444",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
      extend: {
        customForms: {
          default: {
            checkbox: {
              "&:focus": {
                outline: "none",
                boxShadow: "none",
                borderColor: "none",
              },
            },
          },
        },
      },
    },
    future: {
      removeDeprecatedGapUtilities: true,
    },

    variants: {
      extend: {
        opacity: ["disabled"],
      },
    },
    plugins: [],
  }
);
