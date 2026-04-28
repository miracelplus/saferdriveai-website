import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SaferDrive AI",
  description: "Get in touch for demos or partnerships",
};

const ContactPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-4xl font-bold leading-normal text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s build the future of
              <span className="block text-slate-600 dark:text-slate-400">
                autonomous safety
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              Whether you&apos;re building AVs, regulating them, or insuring them — we&apos;d love to talk.
            </p>

            {/* Contact Options */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">OEMs & Suppliers</h3>
                <p className="text-base text-slate-600 dark:text-slate-400">Accelerate your AV testing</p>
              </div>
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Regulators</h3>
                <p className="text-base text-slate-600 dark:text-slate-400">Evidence-based safety validation</p>
              </div>
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Insurers</h3>
                <p className="text-base text-slate-600 dark:text-slate-400">Risk assessment and pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                Get in
                <span className="block text-slate-600 dark:text-slate-400">
                  Touch
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Ready to transform your AV testing? Let&apos;s talk about how TeraSim accelerates your path to market.
              </p>

            {/* Team Info */}
            <div className="text-center mt-16 border-t border-slate-200 dark:border-slate-700 pt-16">
              <div className="mx-auto max-w-md">
                <div className="flex justify-center">
                  <a
                    href="http://3.149.40.164:7860/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-600 bg-transparent px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Try Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
