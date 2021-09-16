const vuefrontPackage = require("./package.json");

module.exports = {
  assumptions: {
    noDocumentAll: true,
  },
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "transform-define",
      {
        __VUEFRONT_VERSION__: vuefrontPackage.version,
        __REQUIRED_VUE__: vuefrontPackage.peerDependencies.vue,
      },
    ],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: { node: true },
            modules: "commonjs",
          },
        ],
      ],
    },
    lib: {
      plugins: [
        [
          "babel-plugin-transform-remove-imports",
          {
            test: ["vuefront-api", "vuefront-store"],
          },
        ],
        [
          "./build/babel-plugin-add-import-extension",
          {
            extension: "mjs",
            ignoreExtension: ["json"],
          },
        ],
        [
          "./build/babel-plugin-replace-import-extension",
          {
            extMapping: {
              ".sass": ".css",
              ".scss": ".css",
            },
          },
        ],
      ],
    },
  },
};
