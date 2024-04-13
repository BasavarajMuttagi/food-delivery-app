import { List } from "@phosphor-icons/react";
import TopNav from "./TopNav";
import { useRef } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const topNavRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <div className="w-full flex justify-between items-center p-2 py-4 border-b bg-white sm:hidden">
        <Link to={"/"}>
          <span className="italic font-courgette capitalize text-3xl text-yellow-400">
            Rasoi
          </span>
        </Link>
        <List size={40} onClick={() => topNavRef.current?.focus()} />
      </div>
      <div
        ref={topNavRef}
        tabIndex={-1}
        className="outline-none fixed w-full z-20 top-0 right-0 translate-x-full duration-300  focus:duration-300 focus:translate-x-0 sm:hidden"
      >
        <TopNav topNavRef={topNavRef} />
      </div>

      <div className="hidden sm:block">
        <TopNav topNavRef={topNavRef} />
      </div>
    </div>
  );
}

export default NavBar;
