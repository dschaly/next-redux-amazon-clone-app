export interface IProductProps {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
}

export interface IStoreProduct {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quantity: number;
}

export interface IStateProps {
  productData: [];
  favoriteData: [];
  userInfo: null | string;
  next: any;
}
