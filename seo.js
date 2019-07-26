import * as seo from 'vuefront/lib/seo'
export default {
  '/': { component: 'HomePage' },
  '/account': {
    generate: false,
    component: 'Account'
  },
  '/account/address': {
    generate: false,
    component: 'AccountAddress'
  },
  '/account/address/:id/edit': {
    generate: false,
    component: 'AccountEditAddressPage'
  },
  '/account/address/create': {
    generate: false,
    component: 'AccountCreateAddressPage'
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
    component: 'Wishlist'
  },
  '/blog/category/:id': {
    seo: seo.CategoryBlogSeo,
    component: 'BlogCategory'
  },
  '/blog/post/:id': {
    component: 'BlogPost',
    seo: seo.PostSeo
  },
  '/contact': { component: 'ContactPage' },
  '/page/:id': {
    component: 'PagePage',
    seo: seo.PageSeo
  },
  '/search': { component: 'SearchPage' },
  '/search/:slug': {
    component: 'SearchPage'
  },
  '/store/cart': {
    generate: false,
    component: 'Cart'
  },
  '/store/checkout': {
    generate: false,
    component: 'Checkout'
  },
  '/store/category/:id': {
    seo: seo.CategorySeo,
    component: 'Category'
  },
  '/store/compare': {
    generate: false,
    component: 'Compare'
  },
  '/store/product/:id': {
    component: 'Product',
    seo: seo.ProductSeo
  },
  '/store/special': {
    components: 'Special'
  }
}
