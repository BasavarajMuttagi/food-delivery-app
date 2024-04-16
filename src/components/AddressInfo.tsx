import { MapPinLine } from "@phosphor-icons/react";
import apiClient from "../axios/apiClient";
import { useQuery } from "@tanstack/react-query";
import { AddressInfo as Info } from "../common/types";
import AddressInfoSK from "../Skeletons/AddressInfoSK";
import { InvoiceContext } from "../layouts/OrderDetailsLayout";
import { useContext } from "react";

function AddressInfo() {
  const data = useContext(InvoiceContext);
  const setValue = data[1];
  const getUser = async () => {
    setValue(true);
    const result = await apiClient()
      .get("/auth/getuser")
      .finally(() => {
        setValue(false);
      });
    return result.data.result;
  };

  const {
    isLoading,
    isError,
    data: userInfo,
  } = useQuery<Info>({
    queryKey: ["user"],
    queryFn: async () => await getUser(),
  });

  if (isLoading) {
    return <AddressInfoSK />;
  }

  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <div className="w-full rounded border bg-white p-5">
      <div className="space-y-4">
        <div className="text-lg text-slate-800 font-bold flex justify-between items-center">
          <span>Address Info</span>
          <MapPinLine size={32} weight="fill" className="text-red-400" />
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Name :</span>
          <span className="text-slate-500 font-medium text-sm tracking-wider">
            {userInfo?.fullname}
          </span>
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Address :</span>
          <span className="text-slate-500 font-medium text-sm tracking-wider">
            {`${userInfo?.address}, ${userInfo?.city}, ${userInfo?.state}, ${userInfo?.country}`}
          </span>
        </div>
        <div className="space-x-2">
          <span className="text-slate-700 font-semibold">Phone :</span>
          <span className="text-slate-500 font-medium text-sm tracking-wider">
            {userInfo?.phone}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
