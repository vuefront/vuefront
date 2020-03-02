import * as seo from 'vuefront/lib/seo'

const MainConfig = {
    plugins: [],
    root: {
      components: 'vuefront/lib/components',
      store: 'vuefront/lib/store',
      locales: 'vuefront/lib/locales'
    },
    css: {
      main: 'vuefront/assets/scss/main.scss'
    },
    menu: [],
    image: {
        placeholder: {
          path: 'vuefront/assets/img/placeholder.png'
        },
        logo: {
            width: 180,
            height: 40
        },
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
            width: 825, //10x6
            height: 495
        },
        postThumb: {
            width: 300, //10x6
            height: 180
        },
        postThumbInline: {
            width: 200, //10x6
            height: 120
        },
        contact: {
            width: 200, //10x6
            height: 120
        }
    },
    locales: {
        'en-gb': ['EnGb'],
        'ru-ru': ['RuRu']
    },
    atoms: {
        Alert: 'aAlert',
        Pagination: 'aPagination',
        Button: 'aButton',
        Icon: 'aIcon',
        Link: 'aLink',
        Image: 'aImage',
        AmpImage: 'aAmpImage',
        Badge: 'aBadge',
        Heading: 'aHeading',
        Select: 'aSelect',
        Input: 'aInput',
        Textarea: 'aTextarea',
        Loader: 'aLoader'
    },
    molecules: {
        AccountMenu: 'mAccountMenu',
        AccountNew: 'mAccountNew',
        Breadcrumb: 'mBreadcrumb',
        BreadcrumbItem: 'mBreadcrumbItem',
        ButtonGroup: 'mButtonGroup',
        Card: 'mCard',
        CardBody: 'mCardBody', //Card
        CardFooter: 'mCardFooter', //Card
        CartLink: 'mCartLink',
        CategoryThumb: 'mCategoryThumb',
        Collapse: 'mCollapse',
        CompareLink: 'mCompareLink',
        Contact: 'mContact',
        Container: 'mContainer',
        Col: 'mCol',
        Dropdown: 'mDropdown',
        DropdownItem: 'mDropdownItem', //Dropdown
        Empty: 'mEmpty',
        Field: 'mField',
        InputGroup: 'mInputGroup',
        ListGroup: 'mListGroup',
        ListGroupItem: 'mListGroupItem', //ListGroup
        LocationThumb: 'mLocationThumb',
        Logo: 'mLogo',
        Media: 'mMedia',
        MediaAside: 'mMediaAside', //Media
        MediaBody: 'mMediaBody', //Media
        PostImage: 'mPostImage',
        PostNav: 'mPostNav',
        PostThumb: 'mPostThumb',
        PostThumbImage: 'mPostThumbImage', //PostThumb
        PostThumbInline: 'mPostThumbInline',
        ProductAttribute: 'mProductAttribute',
        ProductImage: 'mProductImage',
        ProductImagePopup: 'mProductImagePopup', //ProductImage
        ProductOptionCheckbox: 'mProductOptionCheckbox', //ProductOption
        ProductOptionDate: 'mProductOptionDate', //ProductOption
        ProductOptionDatetime: 'mProductOptionDateTime', //ProductOption
        ProductOptionFile: 'mProductOptionFile', //ProductOption
        ProductOptionRadio: 'mProductOptionRadio', //ProductOption
        ProductOptionSelect: 'mProductOptionSelect', //ProductOption
        ProductOptionText: 'mProductOptionText', //ProductOption
        ProductOptionTextarea: 'mProductOptionTextarea', //ProductOption
        ProductOptionTime: 'mProductOptionTime', //ProductOption
        ProductPrice: 'mProductPrice',
        ProductThumb: 'mProductThumb',
        ProductThumbImage: 'mProductThumbImage', //ProductThumb
        ProductThumbInline: 'mProductThumbInline',
        Rating: 'mRating',
        Review: 'mReview',
        Row: 'mRow',
        Table: 'mTable',
        TableHorizontal: 'mTableHorizontal',
        WishlistLink: 'mWishlistLink'

    },
    organisms: {
        SearchInlineForm: 'oSearchInlineForm',
        Breadcrumb: 'oBreadcrumb',
        Sidebar: 'oSidebar',
        HeaderMobile: 'oHeaderMobile',
        Header: 'oHeader',
        Footer: 'oFooter',
        Apollo: 'oApollo',
        Layout: 'oLayout',
        Position: 'oPosition',
        LocationGrid: 'oLocationGrid',
        ContactForm: 'oContactForm',
        Notification: 'oNotificationToast',
        // Notification: 'oNotificationSnackBar',
        SearchForm: 'oSearchForm',
        AddressCreateForm: 'oAddressCreateForm',
        AddressEditForm: 'oAddressEditForm',
        AddressActions: 'oAddressActions',
        AccountEditForm: 'oAccountEditForm',
        PasswordForm: 'oPasswordForm',
        RegisterForm: 'oRegisterForm',
        Language: 'oLanguage',
        LoginForm: 'oLoginForm',
        PostReviews: 'oPostReviews',
        PostModule: 'oPostModule',
        BlogCategoryPost: 'oBlogCategoryPost',
        PostGrid: 'oPostGrid',
        Currency: 'oCurrency',
        CompareActions: 'oCompareActions',
        WishlistActions: 'oWishlistActions',
        CartFooter: 'oCartFooter',
        CartQuantity: 'oCartQuantity',
        CartActions: 'oCartActions',
        ProductModule: 'oProductModule',
        ProductThumb: 'oProductThumb',
        ProductGrid: 'oProductGrid',
        ProductSort: 'oProductSort',
        ReviewList: 'oReviewList',
        ReviewForm: 'oReviewForm',
        Form: 'oForm',
        ProductReviews: 'oProductReviews',
        ProductOptions: 'oProductOptions',
        ProductBuy: 'oProductBuy',
        CategoryProduct: 'oCategoryProduct',
        CategoryInfo: 'oCategoryInfo',
        CategoryGrid: 'oCategoryGrid'
    },
    pages: {
        AccountAccount: 'pAccountAccount',
        AccountAddress: 'pAccountAddress',
        AccountAddressEdit: 'pAccountAddressEdit',
        AccountAddressCreate: 'pAccountAddressCreate',
        AccountEdit: 'pAccountEdit',
        AccountLogin: 'pAccountLogin',
        AccountPassword: 'pAccountPassword',
        AccountRegister: 'pAccountRegister',
        BlogCategory: 'pBlogCategory',
        BlogPost: 'pBlogPost',
        CommonContact: 'pCommonContact',
        CommonHome: 'pCommonHome',
        CommonPage: 'pCommonPage',
        CommonSearch: 'pCommonSearch',
        StoreCart: 'pStoreCart',
        StoreCategory: 'pStoreCategory',
        StoreCheckout: 'pStoreCheckout',
        StoreCompare: 'pStoreCompare',
        StoreProduct: 'pStoreProduct',
        StoreSpecial: 'pStoreSpecial',
        StoreWishlist: 'pStoreWishlist'
    },
    store: [{
            path: 'vuefront',
            module: 'Vuefront'
        },
        {
            path: 'apollo',
            module: 'Apollo'
        },
        {
            path: 'notification',
            module: 'Notification'
        },
        {
            path: 'menu',
            module: 'Menu'
        },
        {
            path: ['menu', 'blog'],
            module: 'BlogMenu'
        },
        {
            path: ['menu', 'store'],
            module: 'StoreMenu'
        },
        {
            path: ['menu', 'page'],
            module: 'PageMenu'
        },
        {
            path: 'blog'
        },
        {
            path: ['blog', 'category'],
            module: 'CategoryBlog'
        },
        {
            path: ['blog', 'post'],
            module: 'Post'
        },
        {
            path: ['common']
        },
        {
            path: ['common', 'country'],
            module: 'Country'
        },
        {
            path: ['common', 'breadcrumbs'],
            module: 'Breadcrumbs'
        },
        {
            path: ['common', 'zone'],
            module: 'Zone'
        },
        {
            path: ['common', 'page'],
            module: 'Page'
        },
        {
            path: ['common', 'contact'],
            module: 'Contact'
        },
        {
            path: ['common', 'customer'],
            module: 'Customer'
        },
        {
            path: ['common', 'address'],
            module: 'Address'
        },
        {
            path: ['common', 'language'],
            module: 'Language'
        },
        {
            path: ['store']
        },
        {
            path: ['store', 'cart'],
            module: 'Cart'
        },
        {
            path: ['store', 'wishlist'],
            module: 'Wishlist'
        },
        {
            path: ['store', 'currency'],
            module: 'Currency'
        },
        {
            path: ['store', 'compare'],
            module: 'Compare'
        },
        {
            path: ['store', 'category'],
            module: 'Category'
        },
        {
            path: ['store', 'product'],
            module: 'Product'
        }
    ],
    templates: {
        AccountAccount: 'tAccountAccount',
        AccountAddress: 'tAccountAddress',
        AccountAddressCreate: 'tAccountAddressCreate',
        AccountAddressEdit: 'tAccountAddressEdit',
        AccountEdit: 'tAccountEdit',
        AccountLogin: 'tAccountLogin',
        AccountPassword: 'tAccountPassword',
        AccountRegister: 'tAccountRegister',
        BlogCategory: 'tBlogCategory',
        BlogPost: 'tBlogPost',
        CommonContact: 'tCommonContact',
        CommonError: 'tCommonError',
        CommonPage: 'tCommonPage',
        CommonSearch: 'tCommonSearch',
        StoreCart: 'tStoreCart',
        StoreCategory: 'tStoreCategory',
        StoreCompare: 'tStoreCompare',
        StoreProduct: 'tStoreProduct',
        StoreSpecial: 'tStoreSpecial',
        StoreWishlist: 'tStoreWishlist'
    },
    extensions: {
        Account: 'eAccount',
        AccountLinks: 'eAccountLinks',
        BlogCategory: 'eCategoryBlog',
        LatestPost: 'eLatestPost',
        SearchPost: 'eSearchPost',
        SearchProduct: 'eSearchProduct',
        LatestProduct: 'eLatestProduct',
        SpecialProduct: 'eSpecialProduct',
        RelatedProduct: 'eRelatedProduct',
        FeaturedProduct: 'eFeaturedProduct',
        Slideshow: 'eSlideshow',
        Pages: 'ePages',
        StoreCategory: 'eCategory',
        ExtraLinks: 'eExtraLinks',
        Checkout: 'eCheckout',
        Menu: 'eMenu',
        Search: 'eSearch'
    },
    loaders: {
        MCategoryThumb: 'lMCategoryThumb',
        MPostThumb: 'lMPostThumb',
        MProductThumb: 'lMProductThumb',
        MProductImage: 'lMProductImage',
        MRating: 'lMRating',
        MReview: 'lMReview',
        OBreadcrumb: 'lOBreadcrumb',
        OCategoryGrid: 'lOCategoryGrid',
        OCategoryInfo: 'lOCategoryInfo',
        OCategoryProduct: 'lOCategoryProduct',
        OPostGrid: 'lOPostGrid',
        OPostModule: 'lOPostModule',
        OProductGrid: 'lOProductGrid',
        OProductModule: 'lOProductModule',
        OProductSort: 'lOProductSort',
        OReviewForm: 'lOReviewForm',
        OReviewList: 'lOReviewList',
        TBlogCategory: 'lTBlogCategory',
        TBlogPost: 'lTBlogPost',
        TStoreProduct: 'lTStoreProduct',
        TStoreCategory: 'lTStoreCategory',
        TStoreSpecial: 'lTStoreSpecial'
    },
    seo: {
      '/': { component: 'CommonHome' },
      '/account': {
          generate: false,
          component: 'AccountAccount'
      },
      '/account/address': {
          generate: false,
          component: 'AccountAddress'
      },
      '/account/address/:id/edit': {
          generate: false,
          component: 'AccountAddressEdit'
      },
      '/account/address/create': {
          generate: false,
          component: 'AccountAddressCreate'
      },
      '/account/edit': {
          generate: false,
          component: 'AccountEdit'
      },
      '/account/login': {
          component: 'AccountLogin'
      },
      '/account/password': {
          generate: false,
          component: 'AccountPassword'
      },
      '/account/register': {
          package: 'vuefront/lib',
          component: 'AccountRegister'
      },
      '/account/wishlist': {
          generate: false,
          component: 'StoreWishlist'
      },
      '/blog/category/:id': {
          seo: seo.CategoryBlogSeo,
          component: 'BlogCategory'
      },
      '/blog/post/:id': {
          component: 'BlogPost',
          seo: seo.PostSeo
      },
      '/contact': {
          generate: false,
          component: 'CommonContact'
      },
      '/page/:id': {
          component: 'CommonPage',
          seo: seo.PageSeo
      },
      '/search': { component: 'CommonSearch' },
      '/search/:slug': {
          component: 'CommonSearch'
      },
      '/store/cart': {
          generate: false,
          component: 'StoreCart'
      },
      '/store/checkout': {
          generate: false,
          component: 'StoreCheckout'
      },
      '/store/category/:id': {
          seo: seo.CategorySeo,
          component: 'StoreCategory'
      },
      '/store/compare': {
          generate: false,
          component: 'StoreCompare'
      },
      '/store/product/:id': {
          component: 'StoreProduct',
          seo: seo.ProductSeo
      },
      '/store/special': {
          component: 'StoreSpecial'
      }
  }
}

export default MainConfig