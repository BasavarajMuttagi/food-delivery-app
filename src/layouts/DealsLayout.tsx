import BottomNav from "../components/BottomNav";
import Deals from "../components/Deals";
import MenuSideNav from "../components/MenuSideNav";
import NavBar from "../components/NavBar";

function DealsLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
        <MenuSideNav />
      </div>
      <div className="pb-24 pt-10 overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        <Deals />
      </div>
      <BottomNav />
    </div>
  );
}

export default DealsLayout;
