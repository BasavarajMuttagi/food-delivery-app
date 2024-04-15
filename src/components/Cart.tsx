import OrderSummary from "./OrderSummary";
import useFoodStore from "../../store";
import MenuItemCard from "./MenuItemCard";

function Cart() {
  const { itemsArray } = useFoodStore();
  const sortedItems = itemsArray.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
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

      <div className="border-b"></div>
      <OrderSummary />
    </div>
  );
}

export default Cart;
