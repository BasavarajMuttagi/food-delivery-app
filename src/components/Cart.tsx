import OrderSummary from "./OrderSummary";
import useFoodStore from "../../store";
import MenuItemCard from "./MenuItemCard";

function Cart() {
  const { itemsArray } = useFoodStore();
  const sortedItems = itemsArray.slice().sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return (
    <div className="space-y-4 p-2 w-full sm:w-[60%]">
      {sortedItems.map((eachItem) => (
        <MenuItemCard
          key={eachItem.itemId}
          description={eachItem.description}
          diet={eachItem.diet}
          imageUrl={eachItem.imageUrl}
          itemId={eachItem.itemId}
          price={eachItem.price}
          title={eachItem.title}
        />
      ))}

      <div className="border-b"></div>
      <OrderSummary />
      <div className="border-b"></div>
    </div>
  );
}

export default Cart;
