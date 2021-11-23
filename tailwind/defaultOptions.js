const { colors } = require("./colors");
const { invertColor, alpha, darken } = require("./utils");
module.exports = (theme) => ({
  select: {
    "-webkit-appearance": "none",
    borderRadius: theme("borderRadius.0"),
    width: theme("width.full"),
    backgroundColor: theme("backgroundColor.white"),
    borderWidth: theme("borderWidth.DEFAULT"),
    display: theme("display.block"),
    iconColor: theme("colors.gray.400"),
    backgroundPosition: `right ${theme("spacing.2")} center`,
    backgroundSize: `1.5em 1.5em`,
    backgroundRepeat: "no-repeat",
    borderColor: "#C4C4C4",
    icon: (iconColor) =>
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${iconColor}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
    "&.--sm": {
      fontSize: theme("fontSize.sm.0"),
      lineHeight: theme("fontSize.sm.0.lineHeight"),
      paddingLeft: theme("padding.2"),
      paddingRight: theme("padding.2"),
      paddingTop: theme("padding.1"),
      paddingBottom: theme("padding.1"),
    },
    "&.--md": {
      fontSize: theme("fontSize.base.0"),
      lineHeight: theme("fontSize.base.1.lineHeight"),
      paddingLeft: theme("padding.3"),
      paddingRight: theme("padding.3"),
      paddingTop: theme("padding")["1.5"],
      paddingBottom: theme("padding")["1.5"],
    },
    "&.--lg": {
      fontSize: theme("fontSize.xl.0"),
      lineHeight: theme("fontSize.xl.1.lineHeight"),
      paddingLeft: theme("padding.4"),
      paddingRight: theme("padding.4"),
      paddingTop: theme("padding.2"),
      paddingBottom: theme("padding.2"),
    },
    "&.--error": {
      borderColor: theme("colors.red.400"),
      color: theme("colors.red.400"),
      "--tw-ring-color": theme("ringColors.red.400"),
      "&::placeholder": {
        color: theme("colors.red.400"),
      },
      "&::focus": {
        borderColor: theme("colors.red.400"),
        boxShadow: theme("boxShadow.none"),
      },
    },
  },
  checkbox: {
    "&.--error": {
      color: theme("colors.red.400"),
      "[type=checkbox]": {
        borderColor: theme("colors.red.400"),
      },
    },
  },
  radio: {
    "&.--error": {
      color: theme("colors.red.400"),
      "[type=radio]": {
        borderColor: theme("colors.red.400"),
      },
    },
  },
  input: {
    "-webkit-appearance": "none",
    borderRadius: theme("borderRadius.0"),
    width: theme("width.full"),
    backgroundColor: theme("backgroundColor.white"),
    borderWidth: theme("borderWidth.DEFAULT"),
    display: theme("display.block"),
    borderColor: "#C4C4C4",
    "&.--sm": {
      fontSize: theme("fontSize.sm.0"),
      lineHeight: theme("fontSize.sm.0.lineHeight"),
      paddingLeft: theme("padding.2"),
      paddingRight: theme("padding.2"),
      paddingTop: theme("padding.1"),
      paddingBottom: theme("padding.1"),
    },
    "&.--md": {
      fontSize: theme("fontSize.base.0"),
      lineHeight: theme("fontSize.base.1.lineHeight"),
      paddingLeft: theme("padding.3"),
      paddingRight: theme("padding.3"),
      paddingTop: theme("padding")["1.5"],
      paddingBottom: theme("padding")["1.5"],
    },
    "&.--lg": {
      fontSize: theme("fontSize.xl.0"),
      lineHeight: theme("fontSize.xl.1.lineHeight"),
      paddingLeft: theme("padding.4"),
      paddingRight: theme("padding.4"),
      paddingTop: theme("padding.2"),
      paddingBottom: theme("padding.2"),
    },
    "&.--error": {
      borderColor: theme("colors.red.400"),
      "--tw-ring-color": theme("ringColors.red.400"),
      "&::placeholder": {
        color: theme("colors.red.400"),
      },
      "&::focus": {
        borderColor: theme("colors.red.400"),
        boxShadow: theme("boxShadow.none"),
      },
    },
  },
  textarea: {
    "-webkit-appearance": "none",
    borderRadius: theme("borderRadius.0"),
    width: theme("width.full"),
    backgroundColor: theme("backgroundColor.white"),
    borderWidth: theme("borderWidth.DEFAULT"),
    display: theme("display.block"),
    borderColor: "#C4C4C4",
    "&.--sm": {
      fontSize: theme("fontSize.sm.0"),
      lineHeight: theme("fontSize.sm.0.lineHeight"),
      paddingLeft: theme("padding.2"),
      paddingRight: theme("padding.2"),
      paddingTop: theme("padding.1"),
      paddingBottom: theme("padding.1"),
    },
    "&.--md": {
      fontSize: theme("fontSize.base.0"),
      lineHeight: theme("fontSize.base.1.lineHeight"),
      paddingLeft: theme("padding.3"),
      paddingRight: theme("padding.3"),
      paddingTop: theme("padding")["1.5"],
      paddingBottom: theme("padding")["1.5"],
    },
    "&.--lg": {
      fontSize: theme("fontSize.xl.0"),
      lineHeight: theme("fontSize.xl.1.lineHeight"),
      paddingLeft: theme("padding.4"),
      paddingRight: theme("padding.4"),
      paddingTop: theme("padding.2"),
      paddingBottom: theme("padding.2"),
    },
    "&.--error": {
      borderColor: theme("colors.red.400"),
      "--tw-ring-color": theme("ringColors.red.400"),
      "&::placeholder": {
        color: theme("colors.red.400"),
      },
      "&::focus": {
        borderColor: theme("colors.red.400"),
        boxShadow: theme("boxShadow.none"),
      },
    },
  },
  alert: {
    borderLeftWidth: theme("borderWidth.4"),
    borderStyle: "solid",
    display: "flex",
    fontSize: theme("fontSize.sm.0"),
    lineHeight: theme("lineHeight.5"),
    padding: theme("padding.4"),
    marginBottom: theme("margin.4"),
    borderRadius: theme("borderRadius.DEFAULT"),
    "&__content": {
      flexGrow: 1,
      textAlign: "left",
    },
    "&__button": {
      marginLeft: theme("margin.4"),
    },
  },
  badge: {
    fontSize: theme("fontSize.xs.0"),
    lineHeight: theme("lineHeight.4"),
    fontWeight: theme("fontWeight.bold"),
    paddingLeft: theme("padding.2"),
    paddingRight: theme("padding.2"),
    paddingTop: theme("padding.1"),
    paddingBottom: theme("padding.1"),

    borderRadius: theme("borderRadius.DEFAULT"),
    "&--rounded": {
      borderRadius: theme("borderRadius.full"),
    },
  },
  breadcrumb: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: theme("padding.3"),
    paddingRight: theme("padding.3"),
    paddingTop: theme("padding.4"),
    paddingBottom: theme("padding.4"),
    marginBottom: theme("margin.6"),
    listStyle: "none",
    "&__item": {
      display: "flex",
      fontWeight: theme("fontWeight.normal"),
      fontSize: theme("fontSize.sm")[0],
      lineHeight: theme("fontSize.sm")[1].lineHeight,
      "&:last-child": {
        "&::after": {
          display: "none",
        },
      },
      "&::after": {
        content: '"·"',
        color: "#6E6E6E",
        display: "inline-block",
        marginLeft: theme("margin.2"),
        marginRight: theme("margin.2"),
      },
      a: {
        color: "#6E6E6E",
      },
      ".router-link-active": {
        color: theme("vuefront.colors.primary"),
      },
      "&+.vf-m-breadcrumb__item": {},
    },
  },
  buttonGroup: {
    display: "inline-flex",
    "> *": {
      flex: "1 1 auto",
      "&:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      "&:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    "&--sm": {
      ".vf-a-button": {
        paddingLeft: theme("padding.2"),
        paddingRight: theme("padding.2"),
        paddingTop: theme("padding.1"),
        paddingBottom: theme("padding.1"),
        fontSize: theme("fontSize.sm.0"),
        lineHeight: theme("lineHeight.normal"),
        borderRadius: theme("borderRadius.DEFAULT"),
      },
    },
    "&--md": {
      ".vf-a-button": {
        paddingLeft: theme("padding.3"),
        paddingRight: theme("padding.3"),
        paddingTop: theme("padding.2"),
        paddingBottom: theme("padding.2"),
      },
    },
    "&--lg": {
      ".vf-a-button": {
        paddingLeft: theme("padding.4"),
        paddingRight: theme("padding.4"),
        paddingTop: theme("padding.3"),
        paddingBottom: theme("padding.3"),
        fontSize: theme("fontSize.xl.0"),
        lineHeight: theme("lineHeight.normal"),
        borderRadius: theme("borderRadius.md"),
      },
    },
    "&--block": {
      width: theme("width.full"),
    },
  },
  button: {
    padding: ".5rem 1rem",
    fontWeight: "600",
    borderWidth: "2px",
    borderStyle: "solid",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "&--link": {
      padding: "0",
      borderWidth: "0px",
    },
    "&--rounded": {
      borderRadius: theme("borderRadius.full"),
    },
    "&--sm": {
      paddingLeft: "3.875rem",
      paddingRight: "3.875rem",
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      fontWeight: theme("fontWeight.semibold"),
      fontSize: theme("fontSize.xs.0"),
      lineHeight: theme("lineHeight.4"),
    },
    "&--md": {
      paddingLeft: "2.1875rem",
      paddingRight: "2.1875rem",
      paddingTop: "0.875rem",
      paddingBottom: "0.875rem",
      fontSize: theme("fontSize.sm.0"),
      fontWeight: theme("fontWeight.semibold"),
      lineHeight: "1.1875rem",
    },
    "&--lg": {
      paddingLeft: "3.875rem",
      paddingRight: "3.875rem",
      paddingTop: "1.125rem",
      paddingBottom: "1.125rem",
      fontSize: theme("fontSize.lg.0"),
      fontWeight: theme("fontWeight.semibold"),
      lineHeight: theme("lineHeight.6"),
    },
  },
  field: {
    marginBottom: theme("margin.4"),
    "&__label": {
      marginBottom: theme("margin.4"),
      display: "block",
      fontSize: theme("fontSize.base.0"),
      color: "#6E6E6E",
    },
    "&__error": {
      marginTop: theme("margin.1"),
      width: theme("width.full"),
      fontSize: theme("fontSize.sm.0"),
      color: theme("vuefront.colors.danger"),
    },
  },
  heading: {
    "&--1": {
      fontSize: "1.625rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: theme("vuefront.colors.dark"),
    },
    "&--2": {
      fontSize: "1.375rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: theme("vuefront.colors.dark"),
    },
    "&--3": {
      fontSize: "1.125rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: theme("vuefront.colors.dark"),
    },
    "&--4": {
      fontSize: "1rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: theme("vuefront.colors.dark"),
    },
    "&--5": {
      fontSize: "0.813rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: theme("vuefront.colors.dark"),
    },
    "&--6": {
      fontSize: "0.75rem",
      lineHeight: "1.375",
      fontWeight: theme("fontWeight.normal"),
      marginBottom: theme("margin.2"),
      color: "#6E6E6E", //theme("vuefront.colors.dark"),
    },
  },
  inputGroup: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "row",
    alignItems: "stretch",
    width: theme("width.full"),
    "&--sm": {
      ".vf-m-input-group__text, .vf-a-button, .vf-a-input, vf-a-select, vf-a-datepicker, .vf-a-timepicker":
        {
          paddingTop: theme("padding.1"),
          paddingBottom: theme("padding.1"),
          paddingLeft: theme("padding.2"),
          paddingRight: theme("padding.2"),
          fontSize: theme("fontSize.sm.0"),
        },
    },
    "&--lg": {
      ".vf-m-input-group__text, .vf-a-button, .vf-a-input, vf-a-select, vf-a-datepicker, .vf-a-timepicker":
        {
          paddingTop: theme("padding.2"),
          paddingBottom: theme("padding.2"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
          fontSize: theme("fontSize.xl.0"),
        },
    },
    "> *:not(:first-child)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "> *:not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "&__prepend": {
      display: "flex",
      marginRight: "-1px",
      "> .vf-m-input-group__text,> .vf-a-button,> .vf-m-dropdown,> .vf-a-input,> .vf-a-select,> .vf-a-datepicker,> .vf-a-timepicker":
        {
          "&:not(:first-child)": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            ".vf-a-button": {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          ".vf-a-button": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
    },
    "&__append": {
      display: "flex",
      marginLeft: "-1px",
      "> .vf-m-input-group__text,> .vf-a-button,> .vf-m-dropdown,> .vf-a-input,> .vf-a-select,> .vf-a-datepicker,> .vf-a-timepicker":
        {
          "&:not(:last-child)": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            ".vf-a-button": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          ".vf-a-button": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
    },
    "&__text": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme("margin.0"),
      paddingTop: theme("padding")["1.5"],
      paddingBottom: theme("padding")["1.5"],
      paddingLeft: theme("padding.3"),
      paddingRight: theme("padding.3"),
      textAlign: "center",
      whiteSpace: "nowrap",
      borderRadius: theme("borderRadius.DEFAULT"),
      fontSize: theme("fontSize.base.0"),
      fontWeight: theme("fontWeight.normal"),
      lineHeight: theme("lineHeight.normal"),
      color: "#495057",
      backgroundColor: "#e9ecef",
      border: "1px solid #ced4da",
    },
  },
  listGroup: {
    display: "flex",
    flexDirection: "column",
    maxWidth: theme("maxWidth.md"),
    paddingLeft: theme("padding.0"),
    marginBottom: theme("margin.0"),
    "&__item": {
      position: "relative",
      display: "block",
      paddingLeft: theme("padding.3"),
      paddingRight: theme("padding.3"),
      paddingTop: theme("padding.3"),
      paddingBottom: theme("padding.3"),
      "&--active": {
        color: theme("vuefront.colors.primary"),
      },
    },
  },
  pagination: {
    display: "table",
    borderCollapse: "collapse",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme("margin.2"),
    backgroundColor: theme("colors.white"),
    "&__item": {
      display: "table-cell",
      float: "left",
      width: theme("width.16"),
      height: theme("height.16"),
      marginRight: "1px",
      borderWidth: theme("borderWidth.0"),
      "&:last-child": {
        marginRight: 0,
      },
      "&__hellip": {
        lineHeight: "2.5",
        backgroundColor: "#F5F5F5",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default",
      },
      "&:nth-child(-n + 2),&:nth-last-child(-n + 2)": {
        ".vf-a-pagination__link": {
          lineHeight: "2",
        },
      },
    },
    "&__link": {
      width: theme("width.full"),
      height: theme("height.full"),
      backgroundColor: "#F5F5F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:not(.vf-a-pagination__link--active):not(.vf-a-pagination__link--disabled)":
        {
          "&:hover": {
            backgroundColor: "#6AA6C4",
            color: invertColor("#6AA6C4", true),
          },
        },
      "&--active": {
        backgroundColor: "#6AA6C4",
        color: invertColor("#6AA6C4", true),
      },
      "&--disabled": {
        opacity: theme("opacity.25"),
        cursor: theme("cursor.not-allowed"),
      },
    },
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme("margin.-4"),
    marginRight: theme("margin.-4"),
    ">.vf-m-col": {
      paddingLeft: theme("padding.4"),
      paddingRight: theme("padding.4"),
    },
    "&.--no-gutter": {
      marginLeft: theme("margin.0"),
      marginRight: theme("margin.0"),
      ">.vf-m-col": {
        paddingLeft: theme("padding.0"),
        paddingRight: theme("padding.0"),
      },
    },
    "&.--align-v-start": {
      alignItems: "flex-start",
    },
    "&.--align-v-center": {
      alignItems: "center",
    },
    "&.--align-v-end": {
      alignItems: "flex-end",
    },
    "&.--align-h-start": {
      justifyContent: "flex-start",
    },
    "&.--align-h-center": {
      justifyContent: "center",
    },
    "&.--align-h-end": {
      justifyContent: "flex-end",
    },
  },
  productOption: {
    display: "flex",
    flexDirection: "row",

    "&__name": {
      fontSize: theme("fontSize.base.0"),
      fontWeight: theme("fontWeight.normal"),
      flex: "0 0 20%",
      marginBottom: 0,
      display: "flex",
      alignItems: "center",
    },
    "&__values": {},
    "&__value": {
      "&.vf-a-button": {
        marginRight: "10px",
        borderRadius: theme("borderRadius.none"),
        borderColor: "#C4C4C4",
        borderWidth: theme("borderWidth.DEFAULT"),
        fontSize: theme("fontSize.base.0"),
        fontWeight: theme("fontWeight.semibold"),
        marginBottom: theme("margin.1"),
        "&:last-child": {
          marginRight: 0,
        },
        "&:hover, &.active": {
          backgroundColor: theme("colors.white"),
          borderColor: theme("vuefront.colors.primary"),
          borderWidth: theme("borderWidth"),
        },
      },
    },
  },
});
