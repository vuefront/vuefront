var atoms = require("./atoms.js");
var molecules = require("./molecules");
var organisms = require("./organisms");
var pages = require("./pages");
var store = require("./store");
var templates = require("./templates");
var extensions = require("./extensions");
var loaders = require("./loaders");
var seo = require("./seo");
module.exports = {
  version: {
    api: "1.0.0",
  },
  plugins: {},
  root: {
    components: "vuefront/lib/components",
    store: "vuefront/lib/store",
    locales: "vuefront/lib/locales",
    seo: "vuefront/lib/seo",
  },
  options: {
    productGridSize: 4,
    productGridSizeTablet: 3,
    productGridNoGutters: false,
  },
  cssImport: {},
  css: {
    tailwind: "vuefront/assets/scss/tailwind.scss",
    theme: "vuefront/assets/scss/theme.scss",
  },
  menu: [],
  images: {
    placeholder: {
      path: "vuefront/assets/img/placeholder.png",
    },
    logo: {
      width: "180",
      height: "40",
    },
    product: {
      width: "825",
      height: "825",
    },
    categoryThumb: {
      width: "300",
      height: "300",
    },
    productThumb: {
      width: "300",
      height: "300",
    },
    productThumbInline: {
      width: "200",
      height: "200",
    },
    post: {
      width: "825", // 10x6
      height: "495",
    },
    postThumb: {
      width: "300", // 10x6
      height: "180",
    },
    postThumbInline: {
      width: "200", // 10x6
      height: "120",
    },
    contact: {
      width: "200", // 10x6
      height: "120",
    },
  },
  locales: {
    "en-gb": ["en-gb/index.mjs"],
    "ru-ru": ["ru-ru/index.mjs"],
  },
  atoms,
  molecules,
  organisms,
  pages,
  store,
  templates,
  extensions,
  loaders,
  seo,
};
