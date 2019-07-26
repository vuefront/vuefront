"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var EnGb = _interopRequireWildcard3(require("vuefront/lib/locales/en-gb"));

var RuRu = _interopRequireWildcard3(require("vuefront/lib/locales/ru-ru"));

var components = _interopRequireWildcard3(require("./components"));

var stores = _interopRequireWildcard3(require("./store"));

var _default = {
  plugins: [],
  css: {
    main: function main() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('vuefront/assets/scss/main.scss'));
      });
    }
  },
  menu: [],
  locales: {
    'en-gb': [EnGb],
    'ru-ru': [RuRu]
  },
  atoms: {
    Alert: components.aAlert,
    Pagination: components.aPagination,
    Button: components.aButton,
    Icon: components.aIcon,
    Link: components.aLink,
    Image: components.aImage,
    AmpImage: components.aAmpImage,
    Badge: components.aBadge,
    Heading: components.aHeading,
    Select: components.aSelect,
    Input: components.aInput,
    Textarea: components.aTextarea
  },
  molecules: {
    Empty: components.mEmpty,
    NewCustomer: components.mNewCustomer,
    PostThumbInline: components.mPostThumbInline,
    PostImage: components.mPostImage,
    PostNav: components.mPostNav,
    PostThumb: components.mPostThumb,
    PostThumbImage: components.mPostThumbImage,
    Media: components.mMedia,
    MediaAside: components.mMediaAside,
    MediaBody: components.mMediaBody,
    Table: components.mTable,
    ButtonGroup: components.mButtonGroup,
    InputGroup: components.mInputGroup,
    Row: components.mRow,
    Col: components.mCol,
    Card: components.mCard,
    CardBody: components.mCardBody,
    CardFooter: components.mCardFooter,
    ProductPrice: components.mProductPrice,
    ProductThumb: components.mProductThumb,
    ProductAttribute: components.mProductAttribute,
    ProductThumbImage: components.mProductThumbImage,
    ProductImage: components.mProductImage,
    ProductImagePopup: components.mProductImagePopup,
    ProductOptionCheckbox: components.mProductOptionCheckbox,
    ProductOptionDate: components.mProductOptionDate,
    ProductOptionDatetime: components.mProductOptionDateTime,
    ProductOptionFile: components.mProductOptionFile,
    ProductOptionRadio: components.mProductOptionRadio,
    ProductOptionSelect: components.mProductOptionSelect,
    ProductOptionText: components.mProductOptionText,
    ProductOptionTextarea: components.mProductOptionTextarea,
    ProductOptionTime: components.mProductOptionTime,
    Rating: components.mRating,
    Review: components.mReview,
    Field: components.mField,
    CategoryThumb: components.mCategoryThumb,
    ProductThumbInline: components.mProductThumbInline,
    TableHorizontal: components.mTableHorizontal,
    Dropdown: components.mDropdown,
    DropdownItem: components.mDropdownItem
  },
  organisms: {
    AddressCreateForm: components.oAddressCreateForm,
    AddressEditForm: components.oAddressEditForm,
    AddressActions: components.oAddressActions,
    AccountAddress: components.oAccountAddress,
    AccountEditForm: components.oAccountEditForm,
    PasswordForm: components.oPasswordForm,
    RegisterForm: components.oRegisterForm,
    Language: components.oLanguage,
    LoginForm: components.oLoginForm,
    PostReviews: components.oPostReviews,
    PostModule: components.oPostModule,
    BlogCategoryPost: components.oBlogCategoryPost,
    PostGrid: components.oPostGrid,
    Currency: components.oCurrency,
    CompareActions: components.oCompareActions,
    WishlistActions: components.oWishlistActions,
    CartFooter: components.oCartFooter,
    CartQuantity: components.oCartQuantity,
    CartActions: components.oCartActions,
    CartProductThumb: components.oCartProductThumb,
    ProductModule: components.oProductModule,
    ProductThumb: components.oProductThumb,
    ProductGrid: components.oProductGrid,
    ProductSort: components.oProductSort,
    ReviewList: components.oReviewList,
    ReviewForm: components.oReviewForm,
    Form: components.oForm,
    ProductReviews: components.oProductReviews,
    ProductOptions: components.oProductOptions,
    ProductBuy: components.oProductBuy,
    CategoryProduct: components.oCategoryProduct,
    CategoryInfo: components.oCategoryInfo,
    CategoryGrid: components.oCategoryGrid
  },
  pages: {
    HomePage: components.HomePage,
    Account: components.pAccount,
    AccountAddress: components.pAccountAddress,
    AccountEditAddressPage: components.pAccountEditAddress,
    AccountCreateAddressPage: components.pAccountCreateAddress,
    AccountEdit: components.pAccountEdit,
    AccountLogin: components.pAccountLogin,
    AccountPassword: components.pAccountPassword,
    AccountRegister: components.pAccountRegister,
    Wishlist: components.pWishlist,
    BlogCategory: components.pBlogCategory,
    BlogPost: components.pBlogPost,
    ContactPage: components.ContactPage,
    PagePage: components.pPage,
    SearchPage: components.SearchPage,
    Cart: components.pCart,
    Checkout: components.pCheckout,
    Category: components.pCategory,
    Compare: components.pCompare,
    Product: components.pProduct,
    Special: components.pSpecial
  },
  store: [{
    path: 'vuefront',
    module: stores.Vuefront
  }, {
    path: 'apollo',
    module: stores.Apollo
  }, {
    path: 'notification',
    module: stores.Notification
  }, {
    path: 'menu',
    module: stores.Menu
  }, {
    path: ['menu', 'blog'],
    module: stores.BlogMenu
  }, {
    path: ['menu', 'store'],
    module: stores.StoreMenu
  }, {
    path: ['menu', 'page'],
    module: stores.PageMenu
  }, {
    path: 'blog'
  }, {
    path: ['blog', 'category'],
    module: stores.CategoryBlog
  }, {
    path: ['blog', 'post'],
    module: stores.Post
  }, {
    path: ['common']
  }, {
    path: ['common', 'country'],
    module: stores.Country
  }, {
    path: ['common', 'zone'],
    module: stores.Zone
  }, {
    path: ['common', 'page'],
    module: stores.Page
  }, {
    path: ['common', 'contact'],
    module: stores.Contact
  }, {
    path: ['common', 'customer'],
    module: stores.Customer
  }, {
    path: ['common', 'address'],
    module: stores.Address
  }, {
    path: ['common', 'language'],
    module: stores.Language
  }, {
    path: ['store']
  }, {
    path: ['store', 'cart'],
    module: stores.Cart
  }, {
    path: ['store', 'wishlist'],
    module: stores.Wishlist
  }, {
    path: ['store', 'currency'],
    module: stores.Currency
  }, {
    path: ['store', 'compare'],
    module: stores.Compare
  }, {
    path: ['store', 'category'],
    module: stores.Category
  }, {
    path: ['store', 'product'],
    module: stores.Product
  }],
  components: {
    Apollo: components.Apollo,
    Breadcrumbs: components.Breadcrumbs,
    Contact: components.Contact,
    ContactForm: components.ContactForm,
    ContactLocation: components.ContactLocation,
    ContactLocationGrid: components.ContactLocationGrid,
    Footer: components.Footer,
    Header: components.Header,
    HeaderCart: components.HeaderCart,
    HeaderCenter: components.HeaderCenter,
    HeaderLogo: components.HeaderLogo,
    HeaderSearch: components.HeaderSearch,
    HeaderSidebar: components.HeaderSidebar,
    HeaderTop: components.HeaderTop,
    Language: components.Language,
    Notification: components.NotificationToast,
    Page: components.Page,
    Position: components.Position,
    Search: components.Search
  },
  templates: {
    Header: components.HeaderTemplate,
    Footer: components.FooterTemplate,
    Layout: components.LayoutTemplate,
    Error: components.ErrorTemplate,
    Account: components.tAccount,
    AccountEdit: components.tAccountEdit,
    AccountAddress: components.tAccountAddress,
    Cart: components.tCart,
    Category: components.tCategory,
    BlogCategory: components.tBlogCategory,
    BlogPost: components.tBlogPost,
    Wishlist: components.tWishlist,
    Compare: components.tCompare,
    Special: components.tSpecial,
    Product: components.tProduct,
    AccountLogin: components.tAccountLogin,
    AccountRegister: components.tAccountRegister,
    AccountPassword: components.tAccountPassword,
    AccountCreateAddress: components.tAccountCreateAddress,
    AccountEditAddress: components.tAccountEditAddress,
    Page: components.tPage
  },
  modules: {
    SearchProduct: components.SearchProductModule,
    SearchPost: components.SearchPostModule,
    LatestProduct: components.LatestProductModule,
    SpecialProduct: components.SpecialProductModule,
    LatestPost: components.LatestPostModule,
    RelatedProduct: components.RelatedProductModule,
    FeaturedProduct: components.FeaturedProductModule,
    Slideshow: components.SlideshowModule,
    Pages: components.PagesModule,
    StoreCategory: components.CategoryModule,
    BlogCategory: components.CategoryBlogModule,
    Account: components.AccountModule,
    AccountLinks: components.AccountLinksModule,
    ExtraLinks: components.ExtraLinksModule,
    Checkout: components.CheckoutModule,
    Menu: components.MenuModule,
    Search: components.SearchModule
  },
  loaders: {
    CategoryBlog: components.CategoryBlogLoader,
    CategoryBlogPage: components.CategoryBlogPageLoader,
    Category: components.CategoryLoader,
    CategoryPage: components.CategoryPageLoader,
    Post: components.PostLoader,
    Common: components.Loader,
    PostModule: components.PostModuleLoader,
    PostThumb: components.PostThumbLoader,
    PostsGrid: components.PostGridLoader,
    ProductImage: components.ProductImageLoader,
    Product: components.ProductLoader,
    ProductModule: components.ProductModuleLoader,
    ProductThumb: components.ProductThumbLoader,
    ProductsGrid: components.ProductGridLoader,
    Reviews: components.ReviewsLoader,
    SpecialPage: components.SpecialPageLoader,
    Sort: components.ProductSortLoader,
    Rating: components.RatingLoader
  }
};
exports.default = _default;