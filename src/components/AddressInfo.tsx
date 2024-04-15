import { MapPinLine } from "@phosphor-icons/react";

function AddressInfo() {
  return (
    <div className="w-full rounded border bg-white p-5">
      <div className="space-y-4">
        <div className="text-lg text-slate-800 font-bold flex justify-between items-center">
          <span>Address Info</span>
          <MapPinLine size={32} weight="fill" className="text-red-400"/>
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Name :</span>
          <span className="text-slate-500 font-medium text-sm">
            {"Basavaraj S Muttagi"}
          </span>
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Address :</span>
          <span className="text-slate-500 font-medium text-sm">
            {"HNo 123, Akash Nagar, Near XYZ School, Bijapur, Karnataka, India"}
          </span>
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Phone :</span>
          <span className="text-slate-500 font-medium text-sm">{"+919999999999"}</span>
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
