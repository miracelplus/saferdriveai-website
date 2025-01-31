import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TeraSim | Get in Touch with Our Team",
  description: "Contact SaferDrive AI to learn more about TeraSim, schedule a demo, or explore collaboration opportunities.",
};

const ContactPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Get in Touch with Our Team
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 h-6 w-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <a href="mailto:contact@saferdrive.ai" className="text-base text-body-color hover:text-primary">
                        contact@saferdrive.ai
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 h-6 w-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      <a href="https://www.saferdrive.ai" className="text-base text-body-color hover:text-primary">
                        www.saferdrive.ai
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    How We Can Help
                  </h2>
                  <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                    <li>Schedule a personalized demo</li>
                    <li>Discuss collaboration opportunities</li>
                    <li>Learn about enterprise licensing</li>
                    <li>Join our research partnerships</li>
                  </ul>
                </div>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm text-dark dark:text-white">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full border-b border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] dark:text-white dark:focus:border-opacity-50"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm text-dark dark:text-white">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full border-b border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] dark:text-white dark:focus:border-opacity-50"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-dark dark:text-white">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Enter your message"
                      className="w-full border-b border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] dark:text-white dark:focus:border-opacity-50"
                    ></textarea>
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-10 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
