import { twMerge } from "tailwind-merge";

type dealProps = {
  label: string;
  code: string;
  description: string;
  isActive: boolean;
};

function DealCard({ label, code, description, isActive }: dealProps) {
  return (
    <div className="pb-10 w-full border bg-white rounded-lg">
      <div
        className={twMerge(
          "font-extrabold bg-red-400 text-white text-center p-2 rounded-t-lg",
          isActive ? "" : "bg-slate-400"
        )}
      >
        {label}
      </div>
      <div className="flex justify-between items-center p-4 space-x-4">
        <div className="p-2  rounded w-full tracking-[0.5rem] font-bold text-2xl text-center">
          {code}
        </div>
        <button
          disabled={!isActive}
          className={twMerge(
            "p-2 rounded bordertext-2xl",
            isActive ? "" : "cursor-not-allowed"
          )}
        >
          Apply
        </button>
      </div>
      <div className="tracking-wider text-sm font-medium bg-white text-slate-800/50 text-center p-2 rounded-b-lg">
        {description}
      </div>
    </div>
  );
}

export default DealCard;
