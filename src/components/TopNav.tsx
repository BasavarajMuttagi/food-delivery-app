import {
  Basket,
  Heart,
  SealPercent,
  SquaresFour,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { RefObject } from "react";
import { Link, NavLink } from "react-router-dom";
import Badge from "./Badge";
import useFoodStore, { Item } from "../../store";
function TopNav({ topNavRef }: { topNavRef: RefObject<HTMLDivElement> }) {
  const { itemsArray } = useFoodStore();
  const getTotalNumberOfItems = (data: Item[]) => {
    if (data.length == 0) {
      return 0;
    }
    let counter = 0;
    data.forEach((eachItem) => {
      counter = counter + eachItem.quantity;
    });

    return counter;
  };

  return (
    <nav className="p-10  h-screen text-xl font-bold flex flex-col space-y-5 bg-white w-full sm:space-y-0 sm:flex-row sm:justify-between sm:items-center sm:p-4 sm:text-base sm:h-fit sm:border-b">
      <div className="w-full flex justify-end sm:hidden">
        <X
          size={32}
          onClick={() => topNavRef.current?.blur()}
          className="cursor-pointer"
        />
      </div>
      <ul className="h-full flex flex-col space-y-14 sm:space-y-0 sm:flex-row sm:justify-between sm:items-baseline sm:space-x-7">
        <Link to={"/"}>
          {" "}
          <li className=" hidden sm:flex items-center space-x-3 mr-10">
            <span className="italic font-courgette capitalize text-3xl text-yellow-400">
              Rasoi
            </span>
          </li>
        </Link>
        <li className="flex items-center space-x-3">
          <SquaresFour size={24} weight="fill" className="text-purple-400" />
          <span className="text-slate-600">
            {" "}
            <NavLink
              to={"/menu"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#ef4444",
                    }
                  : { color: "" }
              }
            >
              Menu
            </NavLink>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <SealPercent size={24} weight="fill" className="text-yellow-400" />
          <span className="text-slate-600">
            {" "}
            <NavLink
              to={"/deals"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#ef4444",
                    }
                  : { color: "" }
              }
            >
              Deals
            </NavLink>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <Heart size={24} weight="fill" className="text-red-400" />
          <span className="text-slate-600">
            {" "}
            <NavLink
              to={"/orders"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#ef4444",
                    }
                  : { color: "" }
              }
            >
              Orders
            </NavLink>
          </span>
        </li>
      </ul>
      <ul className="h-full flex flex-col space-y-14 sm:flex-row sm:space-y-0 sm:justify-between sm:items-baseline sm:space-x-7">
        <li className="flex items-center space-x-3">
          <div className="relative">
            <Basket size={24} weight="fill" className="text-green-400" />
            {getTotalNumberOfItems(itemsArray) > 0 ? (
              <div className="absolute -top-5 left-3">
                <Badge count={getTotalNumberOfItems(itemsArray)} />
              </div>
            ) : (
              ""
            )}
          </div>
          <span className="text-slate-600">
            <NavLink
              to={"/cart"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#ef4444",
                    }
                  : { color: "" }
              }
            >
              Cart
            </NavLink>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <UserCircle size={24} weight="fill" />
          <span className="text-slate-600">
            <NavLink
              to={"/signin"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#ef4444",
                    }
                  : { color: "" }
              }
            >
              Sign In
            </NavLink>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
