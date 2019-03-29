export * from './state';

export interface SortItem {
  text?: string
  value: string
}

export interface SizeItem {
  text?: string;
  value: number;
}

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

export interface ProductOptionValue {
  id: string;
  name: string
}

export interface ProductOption {
  id: string;
  name: string;
  values: ProductOptionValue[];
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
  options?: ProductOption[];
  reviews?: Review[];
}

export interface Review {
  author: string;
  author_email: string;
  created_at: string
  content: string
  rating: number
}


export interface SelectedOption {
  id: string;
  value: string
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

