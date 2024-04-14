function Badge({ count }: { count: number }) {
  return (
    <div className="rounded-full bg-red-500  h-7 w-7 text-white text-center border-2 border-red-600 text-xs flex justify-center items-center">
      <span>{count}</span>
    </div>
  );
}

export default Badge;
