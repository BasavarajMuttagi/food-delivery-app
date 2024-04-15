import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import OrderCard from "./OrderCard";
import { Order } from "../common/types";
import OrderSK from "../Skeletons/OrderSK";

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
      <div className="space-y-4 pb-14 p-2 w-full sm:w-[60%]">
        <div className="text-sm font-semibold">Orders :</div>
        <OrderSK />
        <OrderSK />
        <OrderSK />
        <OrderSK />
      </div>
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
