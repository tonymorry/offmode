
export enum ColorVariant {
  PINK = 'Pink',
  BLACK = 'Black',
  WHITE = 'White',
  RED = 'Red',
  GREEN = 'Green',
  BLUE = 'Blue'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  colors: {
    name: ColorVariant;
    hex: string;
    image: string;
  }[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  avatar: string;
}
