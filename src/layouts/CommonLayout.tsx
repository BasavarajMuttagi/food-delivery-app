import { ReactNode } from "react";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";
import MenuSideNav from "../components/MenuSideNav";

function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
        <MenuSideNav />
      </div>
      <div className="pb-24 pt-10 overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}

export default CommonLayout;
