import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { twMerge } from "tailwind-merge";

function OrderSummarySK({ error }: { error?: string }) {
  return (
    <div
      className={twMerge(
        "space-y-6 w-full border p-5 rounded",
        error ? "border-red-500" : ""
      )}
    >
      <div className="text-xs text-slate-800 font-bold">{error}</div>
      <div className="text-lg text-slate-800 font-bold">Order Summary</div>
      <div className="flex justify-between items-center space-x-5">
        <div className="text-slate-500 font-medium w-full">
          <Skeleton className="w-full" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-slate-500 font-medium w-full">
          <Skeleton className="w-full" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-slate-500 font-semibold w-full">
          <Skeleton className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default OrderSummarySK;
