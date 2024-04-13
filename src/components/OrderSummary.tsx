function OrderSummary() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <div className="text-slate-600 font-medium">Sub total</div>
        <div className="text-slate-500 font-medium">₹ 100</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-slate-600 font-medium">Tax</div>
        <div className="text-slate-500 font-medium">₹ 18</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-slate-700 font-bold">Total</div>
        <div className="text-slate-500 font-semibold">₹ 118</div>
      </div>
    </div>
  );
}

export default OrderSummary;
