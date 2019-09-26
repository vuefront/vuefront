import * as EnGb from 'vuefront/lib/locales/en-gb';
import * as RuRu from 'vuefront/lib/locales/ru-ru';
import * as components from './components';
import * as stores from './store';
import 'vuefront/assets/scss/main.scss';
var MainConfig = {
  plugins: [],
  css: {},
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
    Textarea: components.aTextarea,
    Loader: components.aLoader
  },
  molecules: {
    ListGroup: components.mListGroup,
    ListGroupItem: components.mListGroupItem,
    CompareLink: components.mCompareLink,
    WishlistLink: components.mWishlistLink,
    AccountMenu: components.mAccountMenu,
    CartLink: components.mCartLink,
    Collapse: components.mCollapse,
    Logo: components.mLogo,
    Container: components.mContainer,
    LocationThumb: components.mLocationThumb,
    Contact: components.mContact,
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
    Home: components.pHome,
    Account: components.pAccount,
    AccountAddress: components.pAccountAddress,
    AccountAddressEdit: components.pAccountAddressEdit,
    AccountAddressCreate: components.pAccountAddressCreate,
    AccountEdit: components.pAccountEdit,
    AccountLogin: components.pAccountLogin,
    AccountPassword: components.pAccountPassword,
    AccountRegister: components.pAccountRegister,
    Wishlist: components.pWishlist,
    BlogCategory: components.pBlogCategory,
    BlogPost: components.pBlogPost,
    Contact: components.pContact,
    Page: components.pPage,
    Search: components.pSearch,
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
  templates: {
    Error: components.tError,
    Account: components.tAccount,
    AccountEdit: components.tAccountEdit,
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
    AccountAddress: components.tAccountAddress,
    AccountAddressCreate: components.tAccountAddressCreate,
    AccountAddressEdit: components.tAccountAddressEdit,
    Page: components.tPage,
    Search: components.tSearch,
    Contact: components.tContact
  },
  extensions: {
    SearchProduct: components.eSearchProduct,
    SearchPost: components.eSearchPost,
    LatestProduct: components.eLatestProduct,
    SpecialProduct: components.eSpecialProduct,
    LatestPost: components.eLatestPost,
    RelatedProduct: components.eRelatedProduct,
    FeaturedProduct: components.eFeaturedProduct,
    Slideshow: components.eSlideshow,
    Pages: components.ePages,
    StoreCategory: components.eCategory,
    BlogCategory: components.eCategoryBlog,
    Account: components.eAccount,
    AccountLinks: components.eAccountLinks,
    ExtraLinks: components.eExtraLinks,
    Checkout: components.eCheckout,
    Menu: components.eMenu,
    Search: components.eSearch
  },
  loaders: {
    CategoryBlogPage: components.lBlogCategory,
    CategoryInfo: components.lCategoryInfo,
    CategoryGrid: components.lCategoryGrid,
    CategoryThumb: components.lCategoryThumb,
    CategoryProduct: components.lCategoryProduct,
    CategoryPage: components.lCategory,
    Post: components.lBlogPost,
    PostModule: components.lPostModule,
    PostThumb: components.lPostThumb,
    PostGrid: components.lPostGrid,
    ProductImage: components.lProductImage,
    Product: components.lProduct,
    ProductModule: components.lProductModule,
    ProductThumb: components.lProductThumb,
    ProductGrid: components.lProductGrid,
    ReviewForm: components.lReviewForm,
    ReviewList: components.lReviewList,
    Review: components.lReview,
    SpecialPage: components.lSpecial,
    ProductSort: components.lProductSort,
    Rating: components.lRating
  }
};
export default MainConfig;