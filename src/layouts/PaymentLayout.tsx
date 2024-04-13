import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";
import PaymentGrid from "../components/PaymentGrid";

function PaymentLayout() {
  return (
    <div className="h-screen w-full  flex flex-col  overflow-x-hidden relative bg-neutral-50">
      <div>
        <NavBar />
      </div>
      <div className="pb-10 h-full overflow-y-scroll no-scrollbar sm:flex sm:items-start sm:justify-center">
        <PaymentGrid />
      </div>
      <BottomNav />
    </div>
  );
}

export default PaymentLayout;
