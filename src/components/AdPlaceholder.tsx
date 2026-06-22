export function AdPlaceholder({ type = 'horizontal' }: { type?: 'horizontal' | 'vertical' | 'rectangle' }) {
  const containerClasses = {
    horizontal: "w-full max-w-3xl h-24 mx-auto my-8",
    vertical: "w-[300px] h-[600px] hidden xl:flex mx-4",
    rectangle: "w-full max-w-sm h-64 mx-auto my-6"
  }[type];

  return (
    <div className={`${containerClasses} bg-slate-100 border border-slate-200 border-dashed rounded-xl flex flex-col items-center justify-center text-slate-400/50 p-4`}>
      <span className="uppercase text-[10px] tracking-widest font-bold mb-1">Advertisement</span>
      <span className="text-sm">Space reserved for AdSense / Premium Banner</span>
    </div>
  );
}
