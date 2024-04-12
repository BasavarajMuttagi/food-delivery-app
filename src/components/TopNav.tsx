import {
  Basket,
  Heart,
  SealPercent,
  SquaresFour,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { RefObject } from "react";
function TopNav({ topNavRef }: { topNavRef: RefObject<HTMLDivElement> }) {
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
        <li className="flex items-center space-x-3">
          <SquaresFour size={24} weight="fill" className="text-purple-400" />
          <span className="text-slate-600">Menu</span>
        </li>
        <li className="flex items-center space-x-3">
          <SealPercent size={24} weight="fill" className="text-yellow-400" />
          <span className="text-slate-600">Deals</span>
        </li>
        <li className="flex items-center space-x-3">
          <Heart size={24} weight="fill" className="text-red-400" />
          <span className="text-slate-600">Favorite</span>
        </li>
      </ul>
      <ul className="h-full flex flex-col space-y-14 sm:flex-row sm:space-y-0 sm:justify-between sm:items-baseline sm:space-x-7">
        <li className="flex items-center space-x-3">
          <Basket size={24} weight="fill" className="text-green-400" />
          <span className="text-slate-600">Cart</span>
        </li>
        <li className="flex items-center space-x-3">
          <UserCircle size={24} weight="fill" />
          <span className="text-slate-600">Sign In</span>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
