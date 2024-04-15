import OrderSummary from "./OrderSummary";
import useFoodStore from "../../store";
import MenuItemCard from "./MenuItemCard";
import { Basket } from "@phosphor-icons/react";

function Cart() {
  const { itemsArray } = useFoodStore();
  const sortedItems = itemsArray.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  if (itemsArray.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center space-y-20 pb-36 p-2 w-full sm:w-[60%]">
        <div className="flex space-x-4 items-center">
          <Basket
            size={40}
            weight="fill"
            className="text-green-400 hover:animate-spin duration-300"
          />{" "}
          <span>Cart is empty</span>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-20 pb-36 p-2 w-full sm:w-[60%]">
      <div className="space-y-4">
        {sortedItems.map((eachItem) => (
          <MenuItemCard
            key={eachItem.itemId}
            description={eachItem.description}
            dietType={eachItem.dietType}
            imageUrl={eachItem.imageUrl}
            itemId={eachItem.itemId}
            price={eachItem.price}
            name={eachItem.name}
          />
        ))}
      </div>

      {itemsArray.length > 0 && <div className="border-b"></div>}
      {itemsArray.length > 0 && <OrderSummary />}
    </div>
  );
}

export default Cart;
