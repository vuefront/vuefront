import * as EnGb from 'vuefront/lib/locales/en-gb';
import * as RuRu from 'vuefront/lib/locales/ru-ru';
import * as components from './components';
import * as stores from './store';
import 'vuefront/assets/scss/main.scss';
import placeholder from "vuefront/assets/img/placeholder.png";
var MainConfig = {
  plugins: [],
  css: {},
  menu: [],
  image: {
    placeholder: placeholder,
    product: {
      width: 825,
      height: 825
    },
    categoryThumb: {
      width: 300,
      height: 300
    },
    productThumb: {
      width: 300,
      height: 300
    },
    productThumbInline: {
      width: 200,
      height: 200
    },
    post: {
      width: 825,
      //10x6
      height: 495
    },
    postThumb: {
      width: 300,
      //10x6
      height: 180
    },
    postThumbInline: {
      width: 200,
      //10x6
      height: 120
    }
  },
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
    Textarea: components.aTextarea,
    Loader: components.aLoader
  },
  molecules: {
    AccountMenu: components.mAccountMenu,
    AccountNew: components.mAccountNew,
    ButtonGroup: components.mButtonGroup,
    Card: components.mCard,
    CardBody: components.mCardBody,
    //Card
    CardFooter: components.mCardFooter,
    //Card
    CartLink: components.mCartLink,
    CategoryThumb: components.mCategoryThumb,
    Collapse: components.mCollapse,
    CompareLink: components.mCompareLink,
    Contact: components.mContact,
    Container: components.mContainer,
    Col: components.mCol,
    Dropdown: components.mDropdown,
    DropdownItem: components.mDropdownItem,
    //Dropdown
    Empty: components.mEmpty,
    Field: components.mField,
    InputGroup: components.mInputGroup,
    ListGroup: components.mListGroup,
    ListGroupItem: components.mListGroupItem,
    //ListGroup
    LocationThumb: components.mLocationThumb,
    Logo: components.mLogo,
    Media: components.mMedia,
    MediaAside: components.mMediaAside,
    //Media
    MediaBody: components.mMediaBody,
    //Media
    PostImage: components.mPostImage,
    PostNav: components.mPostNav,
    PostThumb: components.mPostThumb,
    PostThumbImage: components.mPostThumbImage,
    //PostThumb
    PostThumbInline: components.mPostThumbInline,
    ProductAttribute: components.mProductAttribute,
    ProductImage: components.mProductImage,
    ProductImagePopup: components.mProductImagePopup,
    //ProductImage
    ProductOptionCheckbox: components.mProductOptionCheckbox,
    //ProductOption
    ProductOptionDate: components.mProductOptionDate,
    //ProductOption
    ProductOptionDatetime: components.mProductOptionDateTime,
    //ProductOption
    ProductOptionFile: components.mProductOptionFile,
    //ProductOption
    ProductOptionRadio: components.mProductOptionRadio,
    //ProductOption
    ProductOptionSelect: components.mProductOptionSelect,
    //ProductOption
    ProductOptionText: components.mProductOptionText,
    //ProductOption
    ProductOptionTextarea: components.mProductOptionTextarea,
    //ProductOption
    ProductOptionTime: components.mProductOptionTime,
    //ProductOption
    ProductPrice: components.mProductPrice,
    ProductThumb: components.mProductThumb,
    ProductThumbImage: components.mProductThumbImage,
    //ProductThumb
    ProductThumbInline: components.mProductThumbInline,
    Rating: components.mRating,
    Review: components.mReview,
    Row: components.mRow,
    Table: components.mTable,
    TableHorizontal: components.mTableHorizontal,
    WishlistLink: components.mWishlistLink
  },
  organisms: {
    SearchInlineForm: components.oSearchInlineForm,
    Sidebar: components.oSidebar,
    HeaderMobile: components.oHeaderMobile,
    Header: components.oHeader,
    Footer: components.oFooter,
    Apollo: components.oApollo,
    Layout: components.oLayout,
    Position: components.oPosition,
    LocationGrid: components.oLocationGrid,
    ContactForm: components.oContactForm,
    Notification: components.oNotificationToast,
    // Notification: components.oNotificationSnackBar,
    SearchForm: components.oSearchForm,
    AddressCreateForm: components.oAddressCreateForm,
    AddressEditForm: components.oAddressEditForm,
    AddressActions: components.oAddressActions,
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
    AccountAccount: components.pAccountAccount,
    AccountAddress: components.pAccountAddress,
    AccountAddressEdit: components.pAccountAddressEdit,
    AccountAddressCreate: components.pAccountAddressCreate,
    AccountEdit: components.pAccountEdit,
    AccountLogin: components.pAccountLogin,
    AccountPassword: components.pAccountPassword,
    AccountRegister: components.pAccountRegister,
    BlogCategory: components.pBlogCategory,
    BlogPost: components.pBlogPost,
    CommonContact: components.pCommonContact,
    CommonHome: components.pCommonHome,
    CommonPage: components.pCommonPage,
    CommonSearch: components.pCommonSearch,
    StoreCart: components.pStoreCart,
    StoreCategory: components.pStoreCategory,
    StoreCheckout: components.pStoreCheckout,
    StoreCompare: components.pStoreCompare,
    StoreProduct: components.pStoreProduct,
    StoreSpecial: components.pStoreSpecial,
    StoreWishlist: components.pStoreWishlist
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
  templates: {
    AccountAccount: components.tAccountAccount,
    AccountAddress: components.tAccountAddress,
    AccountAddressCreate: components.tAccountAddressCreate,
    AccountAddressEdit: components.tAccountAddressEdit,
    AccountEdit: components.tAccountEdit,
    AccountLogin: components.tAccountLogin,
    AccountPassword: components.tAccountPassword,
    AccountRegister: components.tAccountRegister,
    BlogCategory: components.tBlogCategory,
    BlogPost: components.tBlogPost,
    CommonContact: components.tCommonContact,
    CommonError: components.tCommonError,
    CommonPage: components.tCommonPage,
    CommonSearch: components.tCommonSearch,
    StoreCart: components.tStoreCart,
    StoreCategory: components.tStoreCategory,
    StoreCompare: components.tStoreCompare,
    StoreProduct: components.tStoreProduct,
    StoreSpecial: components.tStoreSpecial,
    StoreWishlist: components.tStoreWishlist
  },
  extensions: {
    Account: components.eAccount,
    AccountLinks: components.eAccountLinks,
    BlogCategory: components.eCategoryBlog,
    LatestPost: components.eLatestPost,
    SearchPost: components.eSearchPost,
    SearchProduct: components.eSearchProduct,
    LatestProduct: components.eLatestProduct,
    SpecialProduct: components.eSpecialProduct,
    RelatedProduct: components.eRelatedProduct,
    FeaturedProduct: components.eFeaturedProduct,
    Slideshow: components.eSlideshow,
    Pages: components.ePages,
    StoreCategory: components.eCategory,
    ExtraLinks: components.eExtraLinks,
    Checkout: components.eCheckout,
    Menu: components.eMenu,
    Search: components.eSearch
  },
  loaders: {
    MCategoryThumb: components.lMCategoryThumb,
    MPostThumb: components.lMPostThumb,
    MProductThumb: components.lMProductThumb,
    MProductImage: components.lMProductImage,
    MRating: components.lMRating,
    MReview: components.lMReview,
    OCategoryGrid: components.lOCategoryGrid,
    OCategoryInfo: components.lOCategoryInfo,
    OCategoryProduct: components.lOCategoryProduct,
    OPostGrid: components.lOPostGrid,
    OPostModule: components.lOPostModule,
    OProductGrid: components.lOProductGrid,
    OProductModule: components.lOProductModule,
    OProductSort: components.lOProductSort,
    OReviewForm: components.lOReviewForm,
    OReviewList: components.lOReviewList,
    TBlogCategory: components.lTBlogCategory,
    TBlogPost: components.lTBlogPost,
    TStoreProduct: components.lTStoreProduct,
    TStoreCategory: components.lTStoreCategory,
    TStoreSpecial: components.lTStoreSpecial
  }
};
export default MainConfig;