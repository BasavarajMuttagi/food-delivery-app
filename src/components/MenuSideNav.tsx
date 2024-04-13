import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
function MenuSideNav() {
  const location = useLocation();
  return (
    <ul
      className={twMerge(
        "no-scrollbar text-xs font-medium text-slate-500  shrink-0 flex items-baseline space-x-4 py-2 px-1 overflow-x-scroll sm:justify-center",
        location.pathname === "/menu" ? "" : "hidden"
      )}
    >
      <a href="#APPETIZERS" className="shrink-0">
        {" "}
        <li className="border p-2 rounded bg-white">{`APPETIZERS`}</li>
      </a>
      <a className="shrink-0" href="#MAIN COURSES">
        <li className="border p-2 rounded bg-white">{`MAIN COURSES`}</li>
      </a>
      <a className="shrink-0" href="#BREADS">
        <li className="border p-2 rounded bg-white">{`BREADS`}</li>
      </a>
      <a className="shrink-0" href="#RICE">
        <li className="border p-2 rounded bg-white">{`RICE`}</li>
      </a>
      <a className="shrink-0" href="#ACCOMPANIMENTS">
        <li className="border p-2 rounded bg-white">{`ACCOMPANIMENTS`}</li>
      </a>
      <a className="shrink-0" href="#DESSERTS">
        <li className="border p-2 rounded bg-white">{`DESSERTS`}</li>
      </a>
      <a className="shrink-0" href="#BEVERAGES">
        <li className="border p-2 rounded bg-white">{`BEVERAGES`}</li>
      </a>
    </ul>
  );
}

export default MenuSideNav;
