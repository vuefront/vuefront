import * as seo from 'vuefront/lib/seo'

const MainConfig = {
    plugins: [],
    root: {
      components: 'vuefront/lib/components',
      store: 'vuefront/lib/store',
      locales: 'vuefront/lib/locales'
    },
    css: {
      bootstrap: 'vuefront/assets/scss/bootstrap.scss',
      theme: 'vuefront/assets/scss/theme.scss',
      aButton: 'vuefront/lib/components/atoms/button/button.scss',
      aIcon: 'vuefront/lib/components/atoms/icon/icon.scss',
      aImage: 'vuefront/lib/components/atoms/image/image.scss',
      aLoader: 'vuefront/lib/components/atoms/loader/loader.scss',
      eCommonMenu: 'vuefront/lib/components/extensions/common/menu/menu.scss',
      mBreadcrumb: 'vuefront/lib/components/molecules/breadcrumb/breadcrumb.scss',
      mCartLink: 'vuefront/lib/components/molecules/cart-link/cart-link.scss',
      mButtonGroup: 'vuefront/lib/components/molecules/button-group/button-block.scss',
      mPostThumb: 'vuefront/lib/components/molecules/post-thumb/post-thumb.scss',
      mPostThumbInline: 'vuefront/lib/components/molecules/post-thumb-inline/post-thumb-inline.scss',
      mProductPrice: 'vuefront/lib/components/molecules/product-price/product-price.scss',
      mProductThumb: 'vuefront/lib/components/molecules/product-thumb/product-thumb.scss',
      mTableHorizontal: 'vuefront/lib/components/molecules/table-horizontal/table-horizontal.scss',
      oFooter: 'vuefront/lib/components/organisms/footer/footer.scss',
      oHeader: 'vuefront/lib/components/organisms/header/header.scss',
      oHeaderMobile: 'vuefront/lib/components/organisms/header-mobile/header-mobile.scss',
      oSidebar: 'vuefront/lib/components/organisms/sidebar/sidebar.scss'
    },
    menu: [],
    image: {
        placeholder: {
          path: 'vuefront/assets/img/placeholder.png'
        },
        logo: {
            width: '180',
            height: '40'
        },
        product: {
            width: '825',
            height: '825'
        },
        categoryThumb: {
            width: '300',
            height: '300'
        },
        productThumb: {
            width: '300',
            height: '300'
        },
        productThumbInline: {
            width: '200',
            height: '200'
        },
        post: {
            width: '825', //10x6
            height: '495'
        },
        postThumb: {
            width: '300', //10x6
            height: '180'
        },
        postThumbInline: {
            width: '200', //10x6
            height: '120'
        },
        contact: {
            width: '200', //10x6
            height: '120'
        }
    },
    locales: {
        'en-gb': ['en-gb'],
        'ru-ru': ['ru-ru']
    },
    atoms: {
      Alert: "atoms/alert/alert.vue",
      Badge: "atoms/badge/badge.vue",
      Button: "atoms/button/button.vue",
      Heading: "atoms/heading/heading.vue",
      Icon: "atoms/icon/icon.vue",
      Image: "atoms/image/image.vue",
      Input: "atoms/input/input.vue",
      Link: "atoms/link/link.vue",
      Loader: "atoms/loader/loader.vue",
      Pagination: "atoms/pagination/pagination.vue",
      Select: "atoms/select/select.vue",
      Textarea: "atoms/textarea/textarea.vue",
      Radio: "atoms/radio/radio.vue",
      RadioGroup: "atoms/radio-group/radio-group.vue",
      Checkbox: "atoms/checkbox/checkbox.vue",
      CheckboxGroup: "atoms/checkbox-group/checkbox-group.vue",
      Datepicker: "atoms/datepicker/datepicker.vue",
      Timepicker: "atoms/timepicker/timepicker.vue"
    },
    molecules: {
      AccountMenu: "molecules/account-menu/account-menu.vue",
      AccountNew: "molecules/account-new/account-new.vue",
      Breadcrumb: "molecules/breadcrumb/breadcrumb.vue",
      BreadcrumbItem: "molecules/breadcrumb/item.vue",
      ButtonGroup: "molecules/button-group/button-group.vue",
      CardBody: "molecules/card/body.vue",
      Card: "molecules/card/card.vue",
      CardFooter: "molecules/card/footer.vue",
      CartLink: "molecules/cart-link/cart-link.vue",
      CategoryThumb: "molecules/category-thumb/category-thumb.vue",
      Collapse: "molecules/collapse/collapse.vue",
      CompareLink: "molecules/compare-link/compare-link.vue",
      Contact: "molecules/contact/contact.vue",
      Container: "molecules/container/container.vue",
      Col: "molecules/col/col.vue",
      Dropdown: "molecules/dropdown/dropdown.vue",
      DropdownItem: "molecules/dropdown/dropdown-item.vue",
      Empty: "molecules/empty/empty.vue",
      Field: "molecules/field/field.vue",
      InputGroup: "molecules/input-group/input-group.vue",
      ListGroup: "molecules/list-group/list-group.vue",
      ListGroupItem: "molecules/list-group/list-group-item.vue",
      LocationThumb: "molecules/location-thumb/location-thumb.vue",
      Logo: "molecules/logo/logo.vue",
      Media: "molecules/media/media.vue",
      MediaAside: "molecules/media/aside.vue",
      MediaBody: "molecules/media/body.vue",
      PostImage: "molecules/post-image/post-image.vue",
      PostNav: "molecules/post-nav/post-nav.vue",
      PostThumb: "molecules/post-thumb/post-thumb.vue",
      PostThumbImage: "molecules/post-thumb-image/post-thumb-image.vue",
      PostThumbInline: "molecules/post-thumb-inline/post-thumb-inline.vue",
      ProductAttribute: "molecules/product-attribute/product-attribute.vue",
      ProductImage: "molecules/product-image/product-image.vue",
      ProductImagePopup: "molecules/product-image/popup.vue",
      ProductOptionCheckbox: "molecules/product-option/checkbox.vue",
      ProductOptionDate: "molecules/product-option/date.vue",
      ProductOptionDatetime: "molecules/product-option/datetime.vue",
      ProductOptionFile: "molecules/product-option/file.vue",
      ProductOptionRadio: "molecules/product-option/radio.vue",
      ProductOptionSelect: "molecules/product-option/select.vue",
      ProductOptionText: "molecules/product-option/text.vue",
      ProductOptionTextarea: "molecules/product-option/textarea.vue",
      ProductOptionTime: "molecules/product-option/time.vue",
      ProductPrice: "molecules/product-price/product-price.vue",
      ProductThumb: "molecules/product-thumb/product-thumb.vue",
      ProductThumbImage: "molecules/product-thumb-image/product-thumb-image.vue",
      ProductThumbInline: "molecules/product-thumb-inline/product-thumb-inline.vue",
      Rating: "molecules/rating/rating.vue",
      Review: "molecules/review/review.vue",
      Row: "molecules/row/row.vue",
      Table: "molecules/table/table.vue",
      TableHorizontal: "molecules/table-horizontal/table-horizontal.vue",
      WishlistLink: "molecules/wishlist-link/wishlist-link.vue"
    },
    organisms: {
      CartProducts: "organisms/cart-products/cart-products.vue",
      SearchInlineForm: "organisms/search-inline-form/search-inline-form.vue",
      Breadcrumb: "organisms/breadcrumb/breadcrumb.vue",
      Sidebar: "organisms/sidebar/sidebar.vue",
      HeaderMobile: "organisms/header-mobile/header-mobile.vue",
      Header: "organisms/header/header.vue",
      Footer: "organisms/footer/footer.vue",
      Apollo: "organisms/apollo/apollo.vue",
      Layout: "organisms/layout/layout.vue",
      Position: "organisms/position/position.vue",
      LocationGrid: "organisms/location-grid/location-grid.vue",
      ContactForm: "organisms/contact-form/contact-form.vue",
      // Notification: "organisms/notification-snack-bar/notification-snack-bar.vue",
      Notification: "organisms/notification-toast/notification-toast.vue",
      SearchForm: "organisms/search-form/search-form.vue",
      AddressCreateForm: "organisms/address-create-form/address-create-form.vue",
      AddressEditForm: "organisms/address-edit-form/address-edit-form.vue",
      AddressActions: "organisms/address-actions/address-actions.vue",
      AccountEditForm: "organisms/account-edit-form/account-edit-form.vue",
      PasswordForm: "organisms/password-form/password-form.vue",
      RegisterForm: "organisms/register-form/register-form.vue",
      Language: "organisms/language/language.vue",
      LoginForm: "organisms/login-form/login-form.vue",
      PostReviews: "organisms/post-reviews/post-reviews.vue",
      PostModule: "organisms/post-module/post-module.vue",
      BlogCategoryPost: "organisms/blog-category-post/blog-category-post.vue",
      PostGrid: "organisms/post-grid/post-grid.vue",
      Currency: "organisms/currency/currency.vue",
      CompareActions: "organisms/compare-actions/compare-actions.vue",
      WishlistActions: "organisms/wishlist-actions/wishlist-actions.vue",
      CartFooter: "organisms/cart-footer/cart-footer.vue",
      CartQuantity: "organisms/cart-quantity/cart-quantity.vue",
      CartActions: "organisms/cart-actions/cart-actions.vue",
      ProductModule: "organisms/product-module/product-module.vue",
      ProductThumb: "organisms/product-thumb/product-thumb.vue",
      ProductGrid: "organisms/product-grid/product-grid.vue",
      ProductSort: "organisms/product-sort/product-sort.vue",
      ReviewList: "organisms/review-list/review-list.vue",
      ReviewForm: "organisms/review-form/review-form.vue",
      Form: "organisms/form/form.vue",
      ProductReviews: "organisms/product-reviews/product-reviews.vue",
      ProductOptions: "organisms/product-options/product-options.vue",      
      ProductBuy: "organisms/product-buy/product-buy.vue",
      CategoryProduct: "organisms/category-product/category-product.vue",
      CategoryInfo: "organisms/category-info/category-info.vue",
      CategoryGrid: "organisms/category-grid/category-grid.vue",
    },
    pages: {
      AccountAccount: "pages/account/account/account.vue",
      AccountAddress: "pages/account/address/address.vue",
      AccountAddressEdit: "pages/account/addressEdit/addressEdit.vue",
      AccountAddressCreate: "pages/account/addressCreate/addressCreate.vue",
      AccountEdit: "pages/account/edit/edit.vue",
      AccountLogin: "pages/account/login/login.vue",
      AccountPassword: "pages/account/password/password.vue",
      AccountRegister: "pages/account/register/register.vue",
      BlogCategory: "pages/blog/category/category.vue",
      BlogPost: "pages/blog/post/post.vue",
      CommonContact: "pages/common/contact/contact.vue",
      CommonHome: "pages/common/home/home.vue",
      CommonPage: "pages/common/page/page.vue",
      CommonSearch: "pages/common/search/search.vue",
      StoreCart: "pages/store/cart/cart.vue",
      StoreCategory: "pages/store/category/category.vue",
      StoreCheckout: "pages/store/checkout/checkout.vue",
      StoreCompare: "pages/store/compare/compare.vue",
      StoreProduct: "pages/store/product/product.vue",
      StoreSpecial: "pages/store/special/special.vue",
      StoreWishlist: "pages/store/wishlist/wishlist.vue"
    },
    store: [
        {
            path: 'vuefront',
            module: 'common/vuefront/vuefront.js'
        },
        {
            path: 'apollo',
            module: 'common/apollo/apollo.js'
        },
        {
            path: 'notification',
            module: 'common/notification/notification.js'
        },
        {
            path: 'menu',
            module: 'common/menu/menu.js'
        },
        {
            path: ['menu', 'blog'],
            module: 'menu/blog/blog.js'
        },
        {
            path: ['menu', 'store'],
            module: 'menu/store/store.js'
        },
        {
            path: ['menu', 'page'],
            module: 'menu/page/page.js'
        },
        {
            path: 'blog'
        },
        {
            path: ['blog', 'category'],
            module: 'blog/category/category.js'
        },
        {
            path: ['blog', 'post'],
            module: 'blog/post/post.js'
        },
        {
            path: ['common']
        },
        {
            path: ['common', 'country'],
            module: 'common/country/country.js'
        },
        {
            path: ['common', 'breadcrumbs'],
            module: 'common/breadcrumbs/breadcrumbs.js'
        },
        {
            path: ['common', 'zone'],
            module: 'common/zone/zone.js'
        },
        {
            path: ['common', 'page'],
            module: 'common/page/page.js'
        },
        {
            path: ['common', 'contact'],
            module: 'common/contact/contact.js'
        },
        {
            path: ['common', 'customer'],
            module: 'common/customer/customer.js'
        },
        {
            path: ['common', 'address'],
            module: 'Address'
        },
        {
            path: ['common', 'language'],
            module: 'common/language/language.js'
        },
        {
            path: ['store']
        },
        {
            path: ['store', 'cart'],
            module: 'store/cart/cart.js'
        },
        {
            path: ['store', 'wishlist'],
            module: 'store/wishlist/wishlist.js'
        },
        {
            path: ['store', 'currency'],
            module: 'store/currency/currency.js'
        },
        {
            path: ['store', 'compare'],
            module: 'store/compare/compare.js'
        },
        {
            path: ['store', 'category'],
            module: 'store/category/category.js'
        },
        {
            path: ['store', 'product'],
            module: 'store/product/product.js'
        }
    ],
    templates: {
      AccountAccount: "templates/account/account/account.vue",
      AccountAddress: "templates/account/address/address.vue",
      AccountAddressCreate: "templates/account/addressCreate/addressCreate.vue",
      AccountAddressEdit: "templates/account/addressEdit/addressEdit.vue",
      AccountEdit: "templates/account/edit/edit.vue",
      AccountLogin: "templates/account/login/login.vue",
      AccountPassword: "templates/account/password/password.vue",
      AccountRegister: "templates/account/register/register.vue",
      BlogCategory: "templates/blog/category/category.vue",
      BlogPost: "templates/blog/post/post.vue",
      CommonContact: "templates/common/contact/contact.vue",
      CommonError: "templates/common/error/error.vue",
      CommonPage: "templates/common/page/page.vue",
      CommonSearch: "templates/common/search/search.vue",
      StoreCart: "templates/store/cart/cart.vue",
      StoreCategory: "templates/store/category/category.vue",
      StoreCompare: "templates/store/compare/compare.vue",
      StoreProduct: "templates/store/product/product.vue",
      StoreSpecial: "templates/store/special/special.vue",
      StoreWishlist: "templates/store/wishlist/wishlist.vue"
    },
    extensions: {
      Account: "extensions/account/account/account.vue",
      AccountLinks: "extensions/account/account-links/account-links.vue",
      BlogCategory: "extensions/blog/category/category.vue",
      LatestPost: "extensions/blog/latest-post/latest-post.vue",
      SearchPost: "extensions/blog/search-post/search-post.vue",
      SearchProduct: "extensions/store/search-product/search-product.vue",
      LatestProduct: "extensions/store/latest-product/latest-product.vue",
      SpecialProduct: "extensions/store/special-product/special-product.vue",
      RelatedProduct: "extensions/store/related-product/related-product.vue",
      FeaturedProduct: "extensions/store/featured-product/featured-product.vue",
      Slideshow: "extensions/common/slideshow/slideshow.vue",
      Pages: "extensions/common/pages/pages.vue",
      StoreCategory: "extensions/store/category/category.vue",
      ExtraLinks: "extensions/common/extra-links/extra-links.vue",
      Checkout: "extensions/store/checkout/checkout.vue",
      Menu: "extensions/common/menu/menu.vue",
      Search: "extensions/common/search/search.vue"
    },
    loaders: {
      MCategoryThumb: "/molecules/category-thumb/category-thumb.loader.vue",
      MPostThumb: "/molecules/post-thumb/post-thumb.loader.vue",
      MProductThumb: "/molecules/product-thumb/product-thumb.loader.vue",
      MProductImage: "/molecules/product-image/product-image.loader.vue",
      MRating: "/molecules/rating/rating.loader.vue",
      MReview: "/molecules/review/review.loader.vue",
      OBreadcrumb: "/organisms/breadcrumb/breadcrumb.loader.vue",
      OCategoryGrid: "/organisms/category-grid/category-grid.loader.vue",
      OCategoryInfo: "/organisms/category-info/category-info.loader.vue",
      OCategoryProduct: "/organisms/category-product/category-product.loader.vue",
      OPostGrid: "/organisms/post-grid/post-grid.loader.vue",
      OPostModule: "/organisms/post-module/post-module.loader.vue",
      OProductGrid: "/organisms/product-grid/product-grid.loader.vue",
      OProductModule: "/organisms/product-module/product-module.loader.vue",
      OProductSort: "/organisms/product-sort/product-sort.loader.vue",
      OReviewForm: "/organisms/review-form/review-form.loader.vue",
      OReviewList: "/organisms/review-list/review-list.loader.vue",
      TBlogCategory: "/templates/blog/category/category.loader.vue",
      TBlogPost: "/templates/blog/post/post.loader.vue",
      TStoreProduct: "/templates/store/product/product.loader.vue",
      TStoreCategory: "/templates/store/category/category.loader.vue",
      TStoreSpecial: "/templates/store/special/special.loader.vue"
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