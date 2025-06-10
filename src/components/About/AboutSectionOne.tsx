import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="12" height="9" viewBox="0 0 12 9" className="fill-current text-slate-600">
    <path d="M10.28.28a.75.75 0 00-1.06 0L4.25 5.25l-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l5.5-5.5A.75.75 0 0010.28.28z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base font-medium text-slate-700 dark:text-slate-300">
      <span className="mr-3 flex h-[20px] w-[20px] items-center justify-center">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="AI-powered Analytics Tools"
                paragraph="Intelligent identification and viable solution generation of high-value safety-critical events, accelerating the AV development cycle."
                mb="44px"
              />

            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/analytics.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                src="/images/about/analytics.svg"
                alt="TeraSim"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
