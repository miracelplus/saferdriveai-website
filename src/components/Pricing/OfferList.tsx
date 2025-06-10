const checkIcon = (
  <svg width="12" height="9" viewBox="0 0 12 9" className="fill-current text-slate-600">
    <path d="M10.28.28a.75.75 0 00-1.06 0L4.25 5.25l-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l5.5-5.5A.75.75 0 0010.28.28z" />
  </svg>
);

const crossIcon = (
  <svg width="10" height="10" viewBox="0 0 10 10" className="fill-current text-slate-400">
    <path d="M8.95.05a.75.75 0 00-1.06 0L5 2.94 2.11.05A.75.75 0 001.05 1.11L3.94 4 1.05 6.89a.75.75 0 001.06 1.06L5 5.06l2.89 2.89a.75.75 0 001.06-1.06L6.06 4l2.89-2.89A.75.75 0 008.95.05z" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="mr-3 flex h-[16px] w-[16px] items-center justify-center">
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p className="m-0 text-base font-medium text-slate-700 dark:text-slate-300">{text}</p>
    </div>
  );
};

export default OfferList;
