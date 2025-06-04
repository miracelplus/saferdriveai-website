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
      <section className="relative z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-20 dark:opacity-10"></div>
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
              Modular, scalable simulation
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                built to expose real-world risk
              </span>
            </h1>
            
            <p className="mb-12 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold max-w-5xl mx-auto sm:text-3xl md:text-3xl lg:text-4xl">
              TeraSim's modular architecture lets you mix and match components to create the perfect testing pipeline for your autonomous systems.
            </p>

            {/* Key Features */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Modular</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">Mix and match components</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Scalable</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">From single scenarios to massive fleets</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Precise</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">Expose real-world edge cases</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern gradient overlay */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl dark:from-primary-900/20 dark:to-accent-900/20"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-accent-200/20 to-primary-200/20 rounded-full blur-3xl dark:from-accent-900/20 dark:to-primary-900/20"></div>
      </section>
      
      <ProductFlow />
      <ProductModules />
    </>
  );
};

export default ProductPage;
