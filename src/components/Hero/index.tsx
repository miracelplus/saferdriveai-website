import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[900px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  Autonomy is Coming. But Are We Testing It Right?
                </h1>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl lg:text-2xl">
                  TeraSim uncovers unknown unsafe scenarios using generative simulation grounded in real-world data.
                </p>
                
                {/* Hero Visual Placeholder - describing the crash scenario */}
                <div className="mx-auto mb-8 max-w-[600px] rounded-lg bg-gradient-to-r from-red-50 to-yellow-50 p-6 dark:from-red-900/20 dark:to-yellow-900/20">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-4xl">🚗</div>
                    <div className="text-2xl">💥</div>
                    <div className="text-4xl">🚦</div>
                  </div>
                  <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
                    "This scenario never existed in your training data."
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="http://3.149.40.164:7860/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    🚀 Try Live Demo
                  </Link>
                  <Link
                    href="/product"
                    className="inline-block rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    🔍 Explore the Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
