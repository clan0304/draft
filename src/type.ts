type ProductType = {
  id?: string;
  title: string;
  price: number;
  img: string;
  desc?: string;
  category?: string;
  isPopular?: boolean;
};

type CartItemType = {
  id?: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
};

type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
