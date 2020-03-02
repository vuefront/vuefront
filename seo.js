export default {
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