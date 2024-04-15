type CommonItem = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  dietType: "VEG" | "NON_VEG";
};

type MenuItem = CommonItem & {
  id: string;
  category: string;
};

type OrderItem = {
  id: string;
  orderId: string;
  itemId: string;
  quantity: number;
  price: number;
  menuItem: MenuItem;
};

type Discount = {
  originalSubTotal: number;
  subtotal: number;
  couponCode: string;
  saved: number;
  error: string;
};

export type Item = CommonItem & {
  itemId: string;
  quantity: number;
};

export type Order = {
  id: string;
  userId: string;
  total: number;
  subtotal: number;
  tax: number;
  tax_rate: number;
  createdAt: string;
  updatedAt: string;
  _count: {
    OrderItem: number;
  };
  OrderItem: OrderItem[];
};

export type QuoteType = {
  GrandTotal: number;
  subtotal: number;
  tax: number;
  taxRate: number;
  taxType: string;
  isDiscountApplied: boolean;
  discount?: Discount;
  discountError?: boolean;
};
