const { flex } = require("tailwindcss/lib/plugins");
module.exports = (theme) => {
  let res = { flexGrow: "1" };

  for (let i = 1; i <= 12; i++) {
    res[`&--${i}`] = {
      width: (100 / 12) * i + "%",
      flexGrow: "0",
    };
    res[`&--offset-${i}`] = {
      marginLeft: (100 / 12) * i + "%",
    };
    res[`&--order-${i}`] = {
      order: i,
    };
  }
  res["$--align-self-start"] = {
    alignSelf: "flex-start",
  };
  res["$--align-self-center"] = {
    alignSelf: "center",
  };
  res["$--align-self-end"] = {
    alignSelf: "flex-end",
  };
  return {
    ".vf-m-col": res,
  };
};
