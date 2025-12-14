const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
            Have questions about TeraSim? We&apos;d love to hear from you.
          </p>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                Howie Sun
              </div>
              <a
                href="mailto:howie@saferdrive.ai"
                className="text-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                howie@saferdrive.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
