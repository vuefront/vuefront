const { flex } = require("tailwindcss/lib/corePlugins");

module.exports = (theme) => {
  let res = {
    ".vf-m-col": {
      flexGrow: "1",
    },
  };

  for (let i = 1; i <= 12; i++) {
    res[`.vf-m-col--${i}`] = {
      width: (100 / 12) * i + "%",
      flexGrow: "0",
    };
    res[`.vf-m-col--offset-${i}`] = {
      marginLeft: (100 / 12) * i + "%",
    };
    res[`.vf-m-col--order-${i}`] = {
      order: i,
    };
  }
  res[".vf-m-col--align-self-start"] = {
    alignSelf: "flex-start",
  };
  res[".vf-m-col--align-self-center"] = {
    alignSelf: "center",
  };
  res[".vf-m-col--align-self-end"] = {
    alignSelf: "flex-end",
  };

  return res;
};
