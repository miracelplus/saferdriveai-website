import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SaferDrive AI",
  description: "Get in touch for demos or partnerships",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Work with us"
        description="Whether you're building AVs, regulating them, or insuring them — we’d love to talk."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container grid gap-8 md:grid-cols-2">
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full rounded border px-4 py-2" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full rounded border px-4 py-2" />
            <textarea name="message" placeholder="Your Message" required className="w-full rounded border px-4 py-2" rows={5}></textarea>
            <button type="submit" className="rounded bg-primary px-6 py-3 text-white">Send</button>
          </form>
          <div className="flex flex-col items-center text-center">
            <Image src="/images/testimonials/author-01.png" alt="Howie" width={150} height={150} className="mb-4 rounded-full" />
            <p className="font-semibold">Howie, Founder</p>
            <p>Researcher passionate about safer autonomy.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
