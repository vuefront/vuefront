export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AccountAddress = {
  __typename?: 'AccountAddress';
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  company: Maybe<Scalars['String']>;
  country: Maybe<Country>;
  countryId: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  zipcode: Maybe<Scalars['String']>;
  zone: Maybe<Zone>;
  zoneId: Maybe<Scalars['String']>;
};

export type AccountAddressInput = {
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  company: Maybe<Scalars['String']>;
  countryId: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  zipcode: Maybe<Scalars['String']>;
  zoneId: Maybe<Scalars['String']>;
};

export type AddressField = {
  __typename?: 'AddressField';
  defaultValue: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  required: Maybe<Scalars['Boolean']>;
  type: Maybe<Scalars['String']>;
  values: Maybe<Array<Maybe<FieldValue>>>;
};

export type Cart = {
  __typename?: 'Cart';
  products: Maybe<Array<Maybe<CartProduct>>>;
  total: Maybe<Scalars['String']>;
};

export type CartOption = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type CartProduct = {
  __typename?: 'CartProduct';
  key: Maybe<Scalars['String']>;
  option: Maybe<Array<Maybe<CartProductOption>>>;
  product: Maybe<Product>;
  quantity: Maybe<Scalars['Int']>;
  total: Maybe<Scalars['String']>;
};

export type CartProductOption = {
  __typename?: 'CartProductOption';
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  categories: Maybe<Array<Maybe<Category>>>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  keyword: Maybe<Scalars['String']>;
  meta: Maybe<Meta>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type CategoryCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type CategoryUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type CategoryResult = {
  __typename?: 'CategoryResult';
  content: Maybe<Array<Maybe<Category>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type CheckoutLinkResult = {
  __typename?: 'CheckoutLinkResult';
  link: Maybe<Scalars['String']>;
};

export type ConfirmOrderResult = {
  __typename?: 'ConfirmOrderResult';
  callback: Maybe<Scalars['String']>;
  order: Maybe<Order>;
  url: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  address: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  fax: Maybe<Scalars['String']>;
  geocode: Maybe<Scalars['String']>;
  locations: Maybe<Array<Maybe<Location>>>;
  open: Maybe<Scalars['String']>;
  store: Maybe<Scalars['String']>;
  telephone: Maybe<Scalars['String']>;
};

export type ContactResult = {
  __typename?: 'ContactResult';
  status: Maybe<Scalars['Boolean']>;
};

export type CountriesResult = {
  __typename?: 'CountriesResult';
  content: Maybe<Array<Maybe<Country>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type CreateOrderResult = {
  __typename?: 'CreateOrderResult';
  success: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  active: Maybe<Scalars['Boolean']>;
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  symbol_left: Maybe<Scalars['String']>;
  symbol_right: Maybe<Scalars['String']>;
  /** @deprecated Changed to name! */
  title: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};

export type ExtraField = {
  __typename?: 'ExtraField';
  name: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type FieldValue = {
  __typename?: 'FieldValue';
  text: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type FileResult = {
  __typename?: 'FileResult';
  code: Maybe<Scalars['String']>;
};

export type HomeResult = {
  __typename?: 'HomeResult';
  meta: Maybe<Meta>;
};

export type InputField = {
  name: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  active: Maybe<Scalars['Boolean']>;
  code: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  address: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  fax: Maybe<Scalars['String']>;
  geocode: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  open: Maybe<Scalars['String']>;
  telephone: Maybe<Scalars['String']>;
};

export type LoggedResult = {
  __typename?: 'LoggedResult';
  customer: Maybe<Customer>;
  status: Maybe<Scalars['Boolean']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  customer: Maybe<Customer>;
  token: Maybe<Scalars['String']>;
};

export type LogoutResult = {
  __typename?: 'LogoutResult';
  status: Maybe<Scalars['Boolean']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  imageBig: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  sort_order: Maybe<Scalars['Int']>;
  url: Maybe<Scalars['String']>;
};


export type ManufacturerUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type ManufacturerResult = {
  __typename?: 'ManufacturerResult';
  content: Maybe<Array<Maybe<Manufacturer>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type Meta = {
  __typename?: 'Meta';
  description: Maybe<Scalars['String']>;
  keyword: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type OptionValue = {
  __typename?: 'OptionValue';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  keyword: Maybe<Scalars['String']>;
  meta: Maybe<Meta>;
  name: Maybe<Scalars['String']>;
  sort_order: Maybe<Scalars['Int']>;
  /** @deprecated Changed to name! */
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type PageUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type PageResult = {
  __typename?: 'PageResult';
  content: Maybe<Array<Maybe<Page>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type PaymentAddressResult = {
  __typename?: 'PaymentAddressResult';
  agree: Maybe<Scalars['String']>;
  fields: Maybe<Array<Maybe<AddressField>>>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  codename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  categories: Maybe<Array<Maybe<CategoryBlog>>>;
  datePublished: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  keyword: Maybe<Scalars['String']>;
  meta: Maybe<Meta>;
  name: Maybe<Scalars['String']>;
  next: Maybe<Post>;
  prev: Maybe<Post>;
  rating: Maybe<Scalars['Float']>;
  reviews: Maybe<PostReviewResult>;
  shortDescription: Maybe<Scalars['String']>;
  /** @deprecated Changed to name! */
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type PostUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type PostResult = {
  __typename?: 'PostResult';
  content: Maybe<Array<Maybe<Post>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  attributes: Maybe<Array<Maybe<ProductAttribute>>>;
  description: Maybe<Scalars['String']>;
  extra: Maybe<Array<Maybe<ExtraField>>>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Scalars['String']>;
  imageBig: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  images: Maybe<Array<Maybe<ProductImage>>>;
  keyword: Maybe<Scalars['String']>;
  manufacturer: Maybe<Manufacturer>;
  manufacturerId: Maybe<Scalars['String']>;
  meta: Maybe<Meta>;
  minimum: Maybe<Scalars['Int']>;
  model: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  options: Maybe<Array<Maybe<ProductOption>>>;
  price: Maybe<Scalars['String']>;
  products: Maybe<Array<Maybe<Product>>>;
  rating: Maybe<Scalars['Float']>;
  reviews: Maybe<Array<Maybe<ProductReview>>>;
  shortDescription: Maybe<Scalars['String']>;
  special: Maybe<Scalars['String']>;
  stock: Maybe<Scalars['Boolean']>;
  tax: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type ProductImagesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type ProductProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type ProductUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  values: Maybe<Array<Maybe<OptionValue>>>;
};

export type ProductResult = {
  __typename?: 'ProductResult';
  content: Maybe<Array<Maybe<Product>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type ProductReview = {
  __typename?: 'ProductReview';
  author: Maybe<Scalars['String']>;
  author_email: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Float']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  accountAddAddress: Maybe<AccountAddress>;
  accountEdit: Maybe<Customer>;
  accountEditAddress: Maybe<AccountAddress>;
  accountEditPassword: Maybe<Customer>;
  accountLogin: Maybe<LoginResult>;
  accountLogout: Maybe<LogoutResult>;
  accountRegister: Maybe<Customer>;
  accountRemoveAddress: Maybe<Array<Maybe<AccountAddress>>>;
  addBlogPostReview: Maybe<Post>;
  addReview: Maybe<Product>;
  addToCart: Maybe<Cart>;
  addToCompare: Maybe<Array<Maybe<Product>>>;
  addToWishlist: Maybe<Array<Maybe<Product>>>;
  clearCart: Maybe<Cart>;
  confirmOrder: Maybe<ConfirmOrderResult>;
  contactSend: Maybe<ContactResult>;
  createOrder: Maybe<CreateOrderResult>;
  editCurrency: Maybe<Array<Maybe<Currency>>>;
  editLanguage: Maybe<Array<Maybe<Language>>>;
  removeCart: Maybe<Cart>;
  removeCompare: Maybe<Array<Maybe<Product>>>;
  removeWishlist: Maybe<Array<Maybe<Product>>>;
  updateCart: Maybe<Cart>;
  updateOrder: Maybe<UpdateOrderResult>;
  uploadFile: Maybe<FileResult>;
};


export type RootMutationTypeAccountAddAddressArgs = {
  address: Maybe<AccountAddressInput>;
};


export type RootMutationTypeAccountEditArgs = {
  customer: Maybe<CustomerInput>;
};


export type RootMutationTypeAccountEditAddressArgs = {
  address: Maybe<AccountAddressInput>;
  id: Maybe<Scalars['String']>;
};


export type RootMutationTypeAccountEditPasswordArgs = {
  password: Maybe<Scalars['String']>;
};


export type RootMutationTypeAccountLoginArgs = {
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};


export type RootMutationTypeAccountRegisterArgs = {
  customer: Maybe<CustomerInput>;
};


export type RootMutationTypeAccountRemoveAddressArgs = {
  id: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type RootMutationTypeAddBlogPostReviewArgs = {
  author: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Float']>;
};


export type RootMutationTypeAddReviewArgs = {
  author: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Float']>;
};


export type RootMutationTypeAddToCartArgs = {
  id: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<CartOption>>>;
  quantity?: Maybe<Scalars['Int']>;
};


export type RootMutationTypeAddToCompareArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootMutationTypeAddToWishlistArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootMutationTypeConfirmOrderArgs = {
  withPayment?: Maybe<Scalars['Boolean']>;
};


export type RootMutationTypeContactSendArgs = {
  email: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};


export type RootMutationTypeEditCurrencyArgs = {
  code: Maybe<Scalars['String']>;
};


export type RootMutationTypeEditLanguageArgs = {
  code: Maybe<Scalars['String']>;
};


export type RootMutationTypeRemoveCartArgs = {
  key: Maybe<Scalars['String']>;
};


export type RootMutationTypeRemoveCompareArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootMutationTypeRemoveWishlistArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootMutationTypeUpdateCartArgs = {
  key: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};


export type RootMutationTypeUpdateOrderArgs = {
  paymentAddress: Maybe<Array<Maybe<InputField>>>;
  paymentAddressId: Maybe<Scalars['String']>;
  paymentMethod: Maybe<Scalars['String']>;
  shippingAddress: Maybe<Array<Maybe<InputField>>>;
  shippingAddressId: Maybe<Scalars['String']>;
  shippingMethod: Maybe<Scalars['String']>;
};


export type RootMutationTypeUploadFileArgs = {
  file: Maybe<Scalars['Upload']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  accountAddress: Maybe<AccountAddress>;
  accountAddressList: Maybe<Array<Maybe<AccountAddress>>>;
  accountCheckLogged: Maybe<LoggedResult>;
  authProxy: Maybe<Scalars['String']>;
  cart: Maybe<Cart>;
  categoriesBlogList: Maybe<CategoryBlogResult>;
  categoriesList: Maybe<CategoryResult>;
  category: Maybe<Category>;
  categoryBlog: Maybe<CategoryBlog>;
  checkoutLink: Maybe<CheckoutLinkResult>;
  compare: Maybe<Array<Maybe<Product>>>;
  contact: Maybe<Contact>;
  countriesList: Maybe<CountriesResult>;
  country: Maybe<Country>;
  currency: Maybe<Array<Maybe<Currency>>>;
  home: Maybe<HomeResult>;
  language: Maybe<Array<Maybe<Language>>>;
  manufacturer: Maybe<Manufacturer>;
  manufacturerList: Maybe<ManufacturerResult>;
  page: Maybe<Page>;
  pagesList: Maybe<PageResult>;
  paymentAddress: Maybe<PaymentAddressResult>;
  paymentMethods: Maybe<Array<Maybe<PaymentMethod>>>;
  post: Maybe<Post>;
  postsList: Maybe<PostResult>;
  product: Maybe<Product>;
  productsList: Maybe<ProductResult>;
  searchUrl: Maybe<SearchUrlResult>;
  shippingAddress: Maybe<Array<Maybe<AddressField>>>;
  shippingMethods: Maybe<Array<Maybe<ShippingMethod>>>;
  totals: Maybe<Array<Maybe<Total>>>;
  wishlist: Maybe<Array<Maybe<Product>>>;
  zone: Maybe<Zone>;
  zonesList: Maybe<ZonesResult>;
};


export type RootQueryTypeAccountAddressArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypeAuthProxyArgs = {
  app: Maybe<Scalars['String']>;
};


export type RootQueryTypeCategoriesBlogListArgs = {
  filter: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type RootQueryTypeCategoriesListArgs = {
  filter: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Boolean']>;
};


export type RootQueryTypeCategoryArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypeCategoryBlogArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypeCountriesListArgs = {
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type RootQueryTypeCountryArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypeManufacturerArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypeManufacturerListArgs = {
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type RootQueryTypePageArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypePagesListArgs = {
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type RootQueryTypePostArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypePostsListArgs = {
  category_id?: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type RootQueryTypeProductArgs = {
  id: Maybe<Scalars['String']>;
};


export type RootQueryTypeProductsListArgs = {
  category_id?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  manufacturer_id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  special?: Maybe<Scalars['Boolean']>;
};


export type RootQueryTypeSearchUrlArgs = {
  url: Maybe<Scalars['String']>;
};


export type RootQueryTypeZoneArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypeZonesListArgs = {
  country_id: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};

export type SearchUrlResult = {
  __typename?: 'SearchUrlResult';
  id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  codename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Total = {
  __typename?: 'Total';
  text: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type UpdateOrderResult = {
  __typename?: 'UpdateOrderResult';
  paymentMethods: Maybe<Array<Maybe<PaymentMethod>>>;
  shippingMethods: Maybe<Array<Maybe<ShippingMethod>>>;
  totals: Maybe<Array<Maybe<Total>>>;
};

export type Zone = {
  __typename?: 'Zone';
  countryId: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type ZonesResult = {
  __typename?: 'ZonesResult';
  content: Maybe<Array<Maybe<Zone>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type CategoryBlog = {
  __typename?: 'categoryBlog';
  categories: Maybe<Array<Maybe<CategoryBlog>>>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
  keyword: Maybe<Scalars['String']>;
  meta: Maybe<Meta>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type CategoryBlogCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type CategoryBlogUrlArgs = {
  url: Maybe<Scalars['String']>;
};

export type CategoryBlogResult = {
  __typename?: 'categoryBlogResult';
  content: Maybe<Array<Maybe<CategoryBlog>>>;
  first: Maybe<Scalars['Boolean']>;
  last: Maybe<Scalars['Boolean']>;
  number: Maybe<Scalars['Int']>;
  numberOfElements: Maybe<Scalars['Int']>;
  size: Maybe<Scalars['Int']>;
  totalElements: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type PostReview = {
  __typename?: 'postReview';
  author: Maybe<Scalars['String']>;
  author_email: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Float']>;
};

export type PostReviewResult = {
  __typename?: 'postReviewResult';
  content: Maybe<Array<Maybe<PostReview>>>;
  totalElements: Maybe<Scalars['Int']>;
};

export type ProductAttribute = {
  __typename?: 'productAttribute';
  name: Maybe<Scalars['String']>;
  options: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductImage = {
  __typename?: 'productImage';
  image: Maybe<Scalars['String']>;
  imageBig: Maybe<Scalars['String']>;
  imageLazy: Maybe<Scalars['String']>;
};
