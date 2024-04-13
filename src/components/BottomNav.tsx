import { Basket, ChefHat, Notebook, Wallet } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white drop-shadow border sm:max-w-2xl sm:w-full sm:rounded sm:bottom-4 sm:m-auto sm:inset-0 sm:inset-y-[90%] sm:h-fit">
      <ul className="flex justify-between items-center">
        <NavLink
          to={"/menu"}
          className="flex flex-col items-center h-full w-full border-white border-t-2  p-2"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#ef4444",
                  borderTopColor: "#ef4444",
                }
              : { color: "" }
          }
        >
          <Notebook size={24} />
          <span>Menu</span>
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex flex-col items-center h-full w-full border-white border-t-2 p-2"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#ef4444",
                  borderTopColor: "#ef4444",
                }
              : { color: "" }
          }
        >
          <ChefHat size={24} />
          <span>About</span>
        </NavLink>
        <NavLink
          to={"/pay"}
          className="flex flex-col items-center h-full w-full border-white border-t-2 p-2"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#ef4444",
                  borderTopColor: "#ef4444",
                }
              : { color: "" }
          }
        >
          <Wallet size={24} />
          <span>Pay</span>
        </NavLink>
        <NavLink
          to={"/cart"}
          className="flex flex-col items-center h-full w-full border-white border-t-2 p-2"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#ef4444",
                  borderTopColor: "#ef4444",
                }
              : { color: "" }
          }
        >
          <Basket size={24} />
          <span>Total</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default BottomNav;
