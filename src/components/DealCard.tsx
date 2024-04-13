function DealCard({
  label,
  code,
  description,
}: {
  label: string;
  code: string;
  description: string;
}) {
  return (
    <div className="pb-10 w-full border bg-white rounded-lg">
      <div className="font-extrabold bg-red-400 text-white text-center p-2 rounded-t-lg">
        {label}
      </div>
      <div className="flex justify-between items-center p-4 space-x-4">
        <div className="p-2  rounded w-full tracking-[0.5rem] font-bold text-2xl text-center">
        {code}
        </div>
        <button className="p-2 rounded bordertext-2xl">Apply</button>
      </div>
      <div className="tracking-wider text-sm font-medium bg-white text-slate-800/50 text-center p-2 rounded-b-lg">
       {description}
      </div>
    </div>
  );
}

export default DealCard;
