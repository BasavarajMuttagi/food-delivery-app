import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import OrderCard from "./OrderCard";

function Orders() {
  const getAllOrders = async () => {
    const result = await apiClient().get("/order/getAllOrders");
    return result;
  };
  const {
    data: Orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: async () => await getAllOrders(),
  });

  if (isLoading) {
    return (
      <span className="w-full flex justify-center items-center">
        Loading...
      </span>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="space-y-4 pb-14 p-2 w-full sm:w-[60%]">
      <div className="text-sm font-semibold">
        Orders : {Orders?.data.length}
      </div>
      {Orders?.data.map((eachOrder: Order) => {
        return <OrderCard order={eachOrder} key={eachOrder.id} />;
      })}
    </div>
  );
}

export default Orders;

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  dietType: "VEG" | "NON_VEG";
  category: string;
  imageUrl: string;
};

type OrderItem = {
  id: string;
  orderId: string;
  itemId: string;
  quantity: number;
  price: number;
  menuItem: MenuItem;
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
