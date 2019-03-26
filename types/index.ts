export * from './state';

export interface MenuItem {
  id?: number
  parent_id: number
  title: string;
  to: string
  icon?: string;
  children?: Array<MenuItem>
}

export interface Category {
  id: number
  name: string
  description: string
  parent_id: number
  image: string
}

export interface CategoryBlog {
  id: number
  name: string
  description: string
  parent_id: number
}

export interface Post {
  id: number
  image: string
  imageLazy: string
  title: string
  description: string
  shortDescription: string
}

export interface ProductAttribute {
  name: string;
  options: string[];
}

export interface ProductVariable {
  minPrice: string;
  maxPrice: string
}

export interface Product {
  id: number;
  image: string;
  imageLazy: string;
  name: string;
  description: string;
  price: string;
  special: string;
  tax: string;
  minimum: number;
  rating: number;
  model: string;
  stock: boolean;
  attributes?: ProductAttribute[];
  products?: Product[];
  variable: ProductVariable;
}

export interface CartProduct {
  key: string
  product: Product,
  quantity: number
  total: string
}

export interface Cart {
  products: CartProduct[]
}

export interface Pagination<T> {
  content: T[]
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  size: number
  totalPages: number
  totalElements: number
}

