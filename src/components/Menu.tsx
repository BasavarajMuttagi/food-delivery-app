import MenuItemCard from "./MenuItemCard";

function Menu() {
  return (
    <div className="scroll-smooth h-full no-scrollbar flex flex-col space-y-5 justify-between w-full p-2  overflow-y-scroll sm:w-[60%]">
      <div className="space-y-5" id="PERI PERI CHICKEN">
        <div className="font-bold text-slate-700 text-xl">
          PERI PERI CHICKEN
        </div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="VALUE SNACKERS">
        <div className="font-bold text-slate-700 text-xl">VALUE SNACKERS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="CHICKEN BUCKETS">
        <div className="font-bold text-slate-700 text-xl">CHICKEN BUCKETS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="BIRYANI BUCKETS">
        <div className="font-bold text-slate-700 text-xl">BIRYANI BUCKETS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="BOX MEALS">
        <div className="font-bold text-slate-700 text-xl">BOX MEALS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="BURGERS">
        <div className="font-bold text-slate-700 text-xl">BURGERS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5" id="SNACKS">
        <div className="font-bold text-slate-700 text-xl">SNACKS</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
      <div className="space-y-5 pb-24" id="BEVERAGES">
        <div className="font-bold text-slate-700 text-xl">BEVERAGES</div>
        {[1, 2, 3, 4, 5].map((eachItem) => (
          <MenuItemCard
            key={eachItem}
            title={"Tea"}
            description={
              "A perfect blend of loose leaf Ceylon tea, creamy milk, and natural, caramel-y sweetness."
            }
            price={25}
            imageUrl={
              "https://yenu.menu/demo/images/itemImage/apple-juice.webp"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
