export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Cart = {
  __typename?: "Cart";
  products?: Maybe<Array<Maybe<CartProduct>>>;
  total?: Maybe<Scalars["String"]>;
};

export type CartOption = {
  id?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type CartProductOption = {
  __typename?: "CartProductOption";
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type CartProduct = {
  __typename?: "CartProduct";
  key?: Maybe<Scalars["String"]>;
  product?: Maybe<Product>;
  option?: Maybe<Array<Maybe<CartProductOption>>>;
  quantity?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["String"]>;
};

export type Category = {
  __typename?: "Category";
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  parent_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Category>>>;
  keyword?: Maybe<Scalars["String"]>;
  meta?: Maybe<Meta>;
};

export type CategoryUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type CategoryCategoriesArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type CategoryBlog = {
  __typename?: "categoryBlog";
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  parent_id?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  keyword?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<CategoryBlog>>>;
  meta?: Maybe<Meta>;
};

export type CategoryBlogUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type CategoryBlogCategoriesArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type CategoryBlogResult = {
  __typename?: "categoryBlogResult";
  content?: Maybe<Array<Maybe<CategoryBlog>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type CategoryResult = {
  __typename?: "CategoryResult";
  content?: Maybe<Array<Maybe<Category>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type Currency = {
  __typename?: "Currency";
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  symbol_left?: Maybe<Scalars["String"]>;
  symbol_right?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
};

export type Customer = {
  __typename?: "Customer";
  id?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type CustomerInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type Language = {
  __typename?: "Language";
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
};

export type LoggedResult = {
  __typename?: "LoggedResult";
  status?: Maybe<Scalars["Boolean"]>;
  customer?: Maybe<Customer>;
};

export type LogoutResult = {
  __typename?: "LogoutResult";
  status?: Maybe<Scalars["Boolean"]>;
};

export type OptionValue = {
  __typename?: "OptionValue";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Page = {
  __typename?: "Page";
  id?: Maybe<Scalars["ID"]>;
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  keyword?: Maybe<Scalars["String"]>;
  meta?: Maybe<Meta>;
  sort_order?: Maybe<Scalars["Int"]>;
};

export type PageUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type PageResult = {
  __typename?: "PageResult";
  content?: Maybe<Array<Maybe<Page>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type PostReviewResult = {
  __typename?: "postReviewResult";
  content?: Maybe<Array<Maybe<PostReview>>>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type Post = {
  __typename?: "Post";
  id?: Maybe<Scalars["ID"]>;
  /** @deprecated Changed to name! */
  title?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  keyword?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Float"]>;
  reviews?: Maybe<PostReviewResult>;
  categories?: Maybe<Array<Maybe<CategoryBlog>>>;
  datePublished?: Maybe<Scalars["String"]>;
  next?: Maybe<Post>;
  prev?: Maybe<Post>;
  meta?: Maybe<Meta>;
  url?: Maybe<Scalars["String"]>;
};

export type PostUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type PostResult = {
  __typename?: "PostResult";
  content?: Maybe<Array<Maybe<Post>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type PostReview = {
  __typename?: "postReview";
  author?: Maybe<Scalars["String"]>;
  author_email?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Float"]>;
};

export type Country = {
  __typename?: "Country";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Zone = {
  __typename?: "Zone";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  countryId?: Maybe<Scalars["String"]>;
};

export type ExtraField = {
  __typename?: "ExtraField";
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type Product = {
  __typename?: "Product";
  extra?: Maybe<Array<Maybe<ExtraField>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  imageBig?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  model?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  manufacturerId?: Maybe<Scalars["String"]>;
  manufacturer?: Maybe<Manufacturer>;
  special?: Maybe<Scalars["String"]>;
  tax?: Maybe<Scalars["String"]>;
  minimum?: Maybe<Scalars["Int"]>;
  stock?: Maybe<Scalars["Boolean"]>;
  rating?: Maybe<Scalars["Float"]>;
  attributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  reviews?: Maybe<Array<Maybe<ProductReview>>>;
  options?: Maybe<Array<Maybe<ProductOption>>>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  keyword?: Maybe<Scalars["String"]>;
  meta?: Maybe<Meta>;
  url?: Maybe<Scalars["String"]>;
};

export type ProductProductsArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type ProductImagesArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type ProductUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type ProductAttribute = {
  __typename?: "productAttribute";
  name?: Maybe<Scalars["String"]>;
  options?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type ProductImage = {
  __typename?: "productImage";
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  imageBig?: Maybe<Scalars["String"]>;
};

export type ProductOption = {
  __typename?: "ProductOption";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  values?: Maybe<Array<Maybe<OptionValue>>>;
};

export type ProductResult = {
  __typename?: "ProductResult";
  content?: Maybe<Array<Maybe<Product>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type CountriesResult = {
  __typename?: "CountriesResult";
  content?: Maybe<Array<Maybe<Country>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type ZonesResult = {
  __typename?: "ZonesResult";
  content?: Maybe<Array<Maybe<Zone>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type Manufacturer = {
  __typename?: "Manufacturer";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  imageBig?: Maybe<Scalars["String"]>;
  sort_order?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ManufacturerUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type ManufacturerResult = {
  __typename?: "ManufacturerResult";
  content?: Maybe<Array<Maybe<Manufacturer>>>;
  first?: Maybe<Scalars["Boolean"]>;
  last?: Maybe<Scalars["Boolean"]>;
  number?: Maybe<Scalars["Int"]>;
  numberOfElements?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
  totalElements?: Maybe<Scalars["Int"]>;
};

export type ProductReview = {
  __typename?: "ProductReview";
  author?: Maybe<Scalars["String"]>;
  author_email?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Float"]>;
};

export type ContactResult = {
  __typename?: "ContactResult";
  status?: Maybe<Scalars["Boolean"]>;
};

export type Location = {
  __typename?: "Location";
  image?: Maybe<Scalars["String"]>;
  imageLazy?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  geocode?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
  fax?: Maybe<Scalars["String"]>;
  open?: Maybe<Scalars["String"]>;
  comment?: Maybe<Scalars["String"]>;
};

export type Contact = {
  __typename?: "Contact";
  locations?: Maybe<Array<Maybe<Location>>>;
  store?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  geocode?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
  fax?: Maybe<Scalars["String"]>;
  open?: Maybe<Scalars["String"]>;
  comment?: Maybe<Scalars["String"]>;
};

export type AccountAddress = {
  __typename?: "AccountAddress";
  id?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  zoneId?: Maybe<Scalars["String"]>;
  zone?: Maybe<Zone>;
  countryId?: Maybe<Scalars["String"]>;
  country?: Maybe<Country>;
  city?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

export type AccountAddressInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  address1?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  countryId?: Maybe<Scalars["String"]>;
  zoneId?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

export type FileResult = {
  __typename?: "FileResult";
  code?: Maybe<Scalars["String"]>;
};

export type CheckoutLinkResult = {
  __typename?: "CheckoutLinkResult";
  link?: Maybe<Scalars["String"]>;
};

export type Meta = {
  __typename?: "Meta";
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keyword?: Maybe<Scalars["String"]>;
};

export type HomeResult = {
  __typename?: "HomeResult";
  meta?: Maybe<Meta>;
};

export type LoginResult = {
  __typename?: "LoginResult";
  token?: Maybe<Scalars["String"]>;
  customer?: Maybe<Customer>;
};

export type FieldValue = {
  __typename?: "FieldValue";
  text?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type AddressField = {
  __typename?: "AddressField";
  type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  label?: Maybe<Scalars["String"]>;
  defaultValue?: Maybe<Scalars["String"]>;
  required?: Maybe<Scalars["Boolean"]>;
  values?: Maybe<Array<Maybe<FieldValue>>>;
};

export type ShippingMethod = {
  __typename?: "ShippingMethod";
  id?: Maybe<Scalars["String"]>;
  codename?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  id?: Maybe<Scalars["String"]>;
  codename?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type InputField = {
  name?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type CreateOrderResult = {
  __typename?: "CreateOrderResult";
  success?: Maybe<Scalars["String"]>;
};

export type UpdateOrderResult = {
  __typename?: "UpdateOrderResult";
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  totals?: Maybe<Array<Maybe<Total>>>;
};

export type ConfirmOrderResult = {
  __typename?: "ConfirmOrderResult";
  order?: Maybe<Order>;
  url?: Maybe<Scalars["String"]>;
  callback?: Maybe<Scalars["String"]>;
};

export type Order = {
  __typename?: "Order";
  id?: Maybe<Scalars["String"]>;
};

export type PaymentAddressResult = {
  __typename?: "PaymentAddressResult";
  fields?: Maybe<Array<Maybe<AddressField>>>;
  agree?: Maybe<Scalars["String"]>;
};

export type Total = {
  __typename?: "Total";
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
};

export type SearchUrlResult = {
  __typename?: "SearchUrlResult";
  url?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  paymentAddress?: Maybe<PaymentAddressResult>;
  shippingAddress?: Maybe<Array<Maybe<AddressField>>>;
  totals?: Maybe<Array<Maybe<Total>>>;
  home?: Maybe<HomeResult>;
  zone?: Maybe<Zone>;
  zonesList?: Maybe<ZonesResult>;
  country?: Maybe<Country>;
  countriesList?: Maybe<CountriesResult>;
  categoryBlog?: Maybe<CategoryBlog>;
  categoriesBlogList?: Maybe<CategoryBlogResult>;
  post?: Maybe<Post>;
  postsList?: Maybe<PostResult>;
  cart?: Maybe<Cart>;
  category?: Maybe<Category>;
  categoriesList?: Maybe<CategoryResult>;
  compare?: Maybe<Array<Maybe<Product>>>;
  currency?: Maybe<Array<Maybe<Currency>>>;
  language?: Maybe<Array<Maybe<Language>>>;
  page?: Maybe<Page>;
  pagesList?: Maybe<PageResult>;
  productsList?: Maybe<ProductResult>;
  product?: Maybe<Product>;
  wishlist?: Maybe<Array<Maybe<Product>>>;
  contact?: Maybe<Contact>;
  accountCheckLogged?: Maybe<LoggedResult>;
  accountAddressList?: Maybe<Array<Maybe<AccountAddress>>>;
  accountAddress?: Maybe<AccountAddress>;
  checkoutLink?: Maybe<CheckoutLinkResult>;
  searchUrl?: Maybe<SearchUrlResult>;
  manufacturerList?: Maybe<ManufacturerResult>;
  manufacturer?: Maybe<Manufacturer>;
  authProxy?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeZoneArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeZonesListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
  country_id?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeCountryArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootQueryTypeCountriesListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeCategoryBlogArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeCategoriesBlogListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  filter?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypePostArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypePostsListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  filter?: Maybe<Scalars["String"]>;
  search?: Maybe<Scalars["String"]>;
  category_id?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeCategoryArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeCategoriesListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  filter?: Maybe<Scalars["String"]>;
  search?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  top?: Maybe<Scalars["Boolean"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypePageArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypePagesListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeProductsListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  filter?: Maybe<Scalars["String"]>;
  special?: Maybe<Scalars["Boolean"]>;
  search?: Maybe<Scalars["String"]>;
  ids?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  category_id?: Maybe<Scalars["String"]>;
  manufacturer_id?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeProductArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeAccountAddressArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeSearchUrlArgs = {
  url?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeManufacturerListArgs = {
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeManufacturerArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootQueryTypeAuthProxyArgs = {
  app?: Maybe<Scalars["String"]>;
};

export type RootMutationType = {
  __typename?: "RootMutationType";
  uploadFile?: Maybe<FileResult>;
  accountLogin?: Maybe<LoginResult>;
  accountLogout?: Maybe<LogoutResult>;
  accountRegister?: Maybe<Customer>;
  accountEdit?: Maybe<Customer>;
  accountEditPassword?: Maybe<Customer>;
  accountAddAddress?: Maybe<AccountAddress>;
  accountEditAddress?: Maybe<AccountAddress>;
  accountRemoveAddress?: Maybe<Array<Maybe<AccountAddress>>>;
  addBlogPostReview?: Maybe<Post>;
  addToCart?: Maybe<Cart>;
  updateCart?: Maybe<Cart>;
  removeCart?: Maybe<Cart>;
  clearCart?: Maybe<Cart>;
  addToCompare?: Maybe<Array<Maybe<Product>>>;
  removeCompare?: Maybe<Array<Maybe<Product>>>;
  editCurrency?: Maybe<Array<Maybe<Currency>>>;
  editLanguage?: Maybe<Array<Maybe<Language>>>;
  addReview?: Maybe<Product>;
  addToWishlist?: Maybe<Array<Maybe<Product>>>;
  removeWishlist?: Maybe<Array<Maybe<Product>>>;
  contactSend?: Maybe<ContactResult>;
  createOrder?: Maybe<CreateOrderResult>;
  updateOrder?: Maybe<UpdateOrderResult>;
  confirmOrder?: Maybe<ConfirmOrderResult>;
};

export type RootMutationTypeUploadFileArgs = {
  file?: Maybe<Scalars["Upload"]>;
};

export type RootMutationTypeAccountLoginArgs = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAccountRegisterArgs = {
  customer?: Maybe<CustomerInput>;
};

export type RootMutationTypeAccountEditArgs = {
  customer?: Maybe<CustomerInput>;
};

export type RootMutationTypeAccountEditPasswordArgs = {
  password?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAccountAddAddressArgs = {
  address?: Maybe<AccountAddressInput>;
};

export type RootMutationTypeAccountEditAddressArgs = {
  id?: Maybe<Scalars["String"]>;
  address?: Maybe<AccountAddressInput>;
};

export type RootMutationTypeAccountRemoveAddressArgs = {
  id?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
};

export type RootMutationTypeAddBlogPostReviewArgs = {
  id?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Float"]>;
  author?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAddToCartArgs = {
  id?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  options?: Maybe<Array<Maybe<CartOption>>>;
};

export type RootMutationTypeUpdateCartArgs = {
  key?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type RootMutationTypeRemoveCartArgs = {
  key?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAddToCompareArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootMutationTypeRemoveCompareArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeEditCurrencyArgs = {
  code?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeEditLanguageArgs = {
  code?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAddReviewArgs = {
  id?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["Float"]>;
  author?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeAddToWishlistArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type RootMutationTypeRemoveWishlistArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeContactSendArgs = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeUpdateOrderArgs = {
  paymentAddress?: Maybe<Array<Maybe<InputField>>>;
  paymentAddressId?: Maybe<Scalars["String"]>;
  shippingAddress?: Maybe<Array<Maybe<InputField>>>;
  shippingAddressId?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<Scalars["String"]>;
  shippingMethod?: Maybe<Scalars["String"]>;
};

export type RootMutationTypeConfirmOrderArgs = {
  withPayment?: Maybe<Scalars["Boolean"]>;
};
