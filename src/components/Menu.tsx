import { useQuery } from "@tanstack/react-query";
import MenuItemCard from "./MenuItemCard";
import apiClient from "../axios/apiClient";

function Menu() {
  const getMenu = async () => {
    const result = await apiClient().get("/menu");
    return result;
  };
  const {
    data: menu,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => await getMenu(),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="scroll-smooth h-full no-scrollbar flex flex-col space-y-5 justify-between w-full p-2 pb-24 overflow-y-scroll sm:w-[60%]">
      {Object.keys(menu?.data.result).map((eachCategory: string) => (
        <div
          key={eachCategory}
          className="space-y-5"
          id={eachCategory == "MAIN_COURSES" ? "MAIN COURSES" : eachCategory}
        >
          <div className="font-bold text-slate-700 text-xl">
            {eachCategory == "MAIN_COURSES" ? "MAIN COURSES" : eachCategory}
          </div>
          {menu?.data.result[eachCategory].map((eachItem: MenuItemType) => (
            <MenuItemCard
              key={eachItem.name}
              title={eachItem.name}
              description={eachItem.description}
              price={eachItem.price}
              imageUrl={eachItem.imageUrl}
              diet={eachItem.diet}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

type MenuItemType = {
  name: string;
  description: string;
  price: number;
  diet: "VEG" | "NON_VEG";
  imageUrl: string;
};
