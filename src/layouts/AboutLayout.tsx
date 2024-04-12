import About from "../components/About";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

function MenuLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
      </div>
      <div className="h-full overflow-y-scroll no-scrollbar sm:flex sm:items-start sm:justify-center">
        <About />
      </div>
      <BottomNav />
    </div>
  );
}

export default MenuLayout;
