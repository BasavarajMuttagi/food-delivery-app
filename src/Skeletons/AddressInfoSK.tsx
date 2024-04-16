import { MapPinLine } from "@phosphor-icons/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function AddressInfoSK() {
  return (
    <div className="w-full rounded border bg-white p-5">
      <div className="space-y-4">
        <div className="text-lg text-slate-800 font-bold flex justify-between items-center">
          <span>Address Info</span>
          <MapPinLine size={32} weight="fill" className="text-red-400" />
        </div>
        <div className="space-x-2 flex">
          <span className="text-slate-700 font-semibold text-nowrap">
            Name :
          </span>
          <span className="text-slate-500 font-medium text-sm tracking-wider w-full">
            <Skeleton className="w-full" />
          </span>
        </div>
        <div className="space-x-2 flex">
          <span className="text-slate-700 font-semibold text-nowrap">
            Address :
          </span>
          <span className="text-slate-500 font-medium text-sm tracking-wider w-full">
            <Skeleton className="w-full" />
          </span>
        </div>
        <div className="space-x-2 flex">
          <span className="text-slate-700 font-semibold text-nowrap">
            Phone :
          </span>
          <span className="text-slate-500 font-medium text-sm tracking-wider w-full">
            <Skeleton className="w-full" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddressInfoSK;
