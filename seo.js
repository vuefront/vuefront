import * as seo from 'vuefront/lib/seo'
export default {
  '/': { component: 'Home' },
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
    component: 'AccountEditAddress'
  },
  '/account/address/create': {
    generate: false,
    component: 'AccountCreateAddress'
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
  '/contact': { component: 'Contact' },
  '/page/:id': {
    component: 'Page',
    seo: seo.PageSeo
  },
  '/search': { component: 'Search' },
  '/search/:slug': {
    component: 'Search'
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
    component: 'Special'
  }
}
