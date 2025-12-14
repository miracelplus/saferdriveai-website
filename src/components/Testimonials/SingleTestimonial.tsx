import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="rounded-lg bg-white p-8 shadow-card duration-300 hover:shadow-card-hover dark:bg-slate-800 lg:px-5 xl:px-8">
        <p className="mb-8 border-b border-slate-200 pb-8 text-base leading-relaxed text-slate-600 dark:border-slate-700 dark:text-slate-300">
          &ldquo;{content}&rdquo;
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-slate-100 lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-base text-slate-500 dark:text-slate-400">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
