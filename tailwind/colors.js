var defaultColors = {
  primary: "#2864A2",
  secondary: "#eff2f7",
  success: "#39bf6b",
  info: "#50cce8",
  warning: "#e5912e",
  danger: "#e2322e",
  white: "#ffffff",
  light: "#eff2f7",
  dark: "#273444",
};

module.exports.colors = (theme) => {
  return {
    ...defaultColors,
  };
};

module.exports.vuefrontColors = (theme) => {
  return {
    ...defaultColors,
    ...theme("vuefront.colors"),
  };
};
