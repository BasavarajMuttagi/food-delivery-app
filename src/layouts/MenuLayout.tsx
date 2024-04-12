import BottomNav from "../components/BottomNav";
import Menu from "../components/Menu";
import MenuSideNav from "../components/MenuSideNav";
import NavBar from "../components/NavBar";

function MenuLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
        <MenuSideNav />
      </div>
      <div className="overflow-y-scroll scroll-smooth no-scrollbar sm:flex sm:items-start sm:justify-center">
        <Menu />
      </div>
      <BottomNav />
    </div>
  );
}

export default MenuLayout;
