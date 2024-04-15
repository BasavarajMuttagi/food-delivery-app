type paymentProps = {
  imageUrl: string;
  brandname: string;
  upiId: string;
};

function PaymentUpiCard({ imageUrl, brandname, upiId }: paymentProps) {
  return (
    <div className="border aspect-square w-30 bg-neutral-200/60 rounded flex flex-col items-center justify-center space-y-2 sm:w-48">
      <img src={imageUrl} />
      <div className="text-lg font-semibold text-slate-700">{brandname}</div>
      <div className="text-sm font-medium text-slate-500">{upiId}</div>
    </div>
  );
}

export default PaymentUpiCard;
