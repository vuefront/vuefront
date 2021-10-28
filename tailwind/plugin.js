const _ = require("lodash");
const plugin = require("tailwindcss/plugin");
const { colors, vuefrontColors } = require("./colors");
const { replaceIconDeclarations } = require("./utils");
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
const selectComponent = require("./component/select");
const inputComponent = require("./component/input");
const textareaComponent = require("./component/textarea");
const defaultOptions = require("./defaultOptions");
const columnComponent = require("./component/column");
const rowComponent = require("./component/row");
const productOptionComponent = require("./component/product-option");
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
    addComponents(replaceIconDeclarations(selectComponent(theme)));
    addComponents(rowComponent(theme));
    addComponents(textareaComponent(theme));
    addComponents(inputComponent(theme));
    addComponents(productOptionComponent(theme));
    addComponents(columnComponent(theme), {
      variants: ["responsive"],
    });
  },
  {
    theme: {
      vuefrontComponent: (theme) => defaultOptions(theme),
      vuefront: {
        colors: {
          primary: "#2864A2",
          secondary: "#eff2f7",
          success: "#39bf6b",
          info: "#50cce8",
          warning: "#e5912e",
          danger: "#e2322e",
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
        colors: vuefrontColors,
        // colors: {
        //     primary: '#6e00ff',
        //     secondary: '#eff2f7',
        //     success: '#36b37e',
        //     info: '#00b8d9',
        //     warning: '#ffab00',
        //     danger: '#ff5630',
        //     white: '#ffffff',
        //     light: '#eff2f7',
        //     dark: '#273444'
        // },
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
