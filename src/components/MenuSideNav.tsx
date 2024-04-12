import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
function MenuSideNav() {
  const location = useLocation();
  return (
    <ul
      className={twMerge(
        "no-scrollbar text-xs font-medium text-slate-500  shrink-0 flex items-baseline space-x-4 py-2 px-1 overflow-x-scroll sm:justify-center",
        location.pathname === "/" ? "" : "hidden"
      )}
    >
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#PERI PERI CHICKEN">{`PERI PERI CHICKEN`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#VALUE SNACKERS">{`VALUE SNACKERS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#CHICKEN BUCKETS">{`CHICKEN BUCKETS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#BIRYANI BUCKETS">{`BIRYANI BUCKETS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#BOX MEALS">{`BOX MEALS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#BURGERS">{`BURGERS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#SNACKS">{`SNACKS`}</a>
      </li>
      <li className="shrink-0 border p-2 rounded bg-white">
        <a href="#BEVERAGES">{`BEVERAGES`}</a>
      </li>
    </ul>
  );
}

export default MenuSideNav;
