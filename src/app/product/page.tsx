import { Metadata } from "next";
import ProductFlow from "@/components/Product/ProductFlow";
import ProductModules from "@/components/Product/ProductModules";

export const metadata: Metadata = {
  title: "Product - TeraSim | SaferDrive AI",
  description: "Modular, scalable simulation — built to expose real-world risk. Detailed TeraSim architecture and simulation pipeline.",
  keywords: "TeraSim, simulation pipeline, modular architecture, AV testing, generative AI simulation",
};

const ProductPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
              Modular, scalable simulation
              <span className="block text-slate-600 dark:text-slate-400">
                built to expose real-world risk
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              TeraSim&apos;s modular architecture lets you mix and match components to create the perfect testing pipeline for your autonomous systems.
            </p>

            {/* Key Features */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Modular</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Mix and match components</p>
              </div>
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Scalable</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">From single scenarios to massive fleets</p>
              </div>
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Precise</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Expose real-world edge cases</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ProductFlow />
      <ProductModules />
    </>
  );
};

export default ProductPage;
