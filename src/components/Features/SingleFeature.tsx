import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
