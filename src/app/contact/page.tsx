import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SaferDrive AI",
  description: "Get in touch for demos or partnerships",
};

const ContactPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-20 dark:opacity-10"></div>
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-5xl font-bold leading-normal text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
              Let&apos;s build the future of
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                autonomous safety
              </span>
            </h1>
            
            <p className="mb-12 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold max-w-5xl mx-auto sm:text-3xl md:text-3xl lg:text-4xl">
              Whether you&apos;re building AVs, regulating them, or insuring them — we&apos;d love to talk.
            </p>

            {/* Contact Options */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">OEMs & Suppliers</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">Accelerate your AV testing</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Regulators</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">Evidence-based safety validation</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Insurers</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">Risk assessment and pricing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern gradient overlay */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl dark:from-primary-900/20 dark:to-accent-900/20"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-accent-200/20 to-primary-200/20 rounded-full blur-3xl dark:from-accent-900/20 dark:to-primary-900/20"></div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Contact Form */}
              <div>
                <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                  Get in 
                  <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold">
                  Ready to transform your AV testing? Let&apos;s discuss how TeraSim can accelerate your path to market.
                </p>
                
                <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 text-lg font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      required 
                      className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 text-lg font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="company" 
                      placeholder="Company" 
                      className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 text-lg font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" 
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message" 
                      placeholder="Tell us about your AV testing challenges..." 
                      required 
                      rows={6}
                      className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 text-lg font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full rounded-xl bg-primary-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Team Info */}
              <div className="text-center lg:text-left">
                <div className="mb-8 mx-auto lg:mx-0 max-w-md">
                  <div className="relative mb-6">
                    <div className="mx-auto w-48 h-48 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 border-4 border-white dark:border-slate-800 shadow-card overflow-hidden">
                      <Image 
                        src="/images/howie_figure.png" 
                        alt="Howie" 
                        width={200} 
                        height={200} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  <h3 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-50">
                    Howie Sun
                  </h3>
                  <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-2xl text-slate-600 dark:text-slate-300 font-medium mb-6">
                    Researcher passionate about safer autonomy. PhD in autonomous systems from University of Michigan.
                  </p>
                  
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <Link
                      href="http://3.149.40.164:7860/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border-2 border-primary-600 bg-transparent px-6 py-3 text-lg font-semibold text-primary-600 dark:text-primary-400 transition-all duration-300 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                    >
                      <span className="mr-2">🚀</span>
                      Try Demo
                    </Link>
                  </div>
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
