export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
}

export interface Order {
  id: number;
  email: string;
  name: string;
  address: string;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}
