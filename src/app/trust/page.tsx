import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source & Trust | SaferDrive AI",
  description: "Trusted by researchers. Open for developers.",
};

const TrustPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Open Source & Trust"
        description="TeraSim is the first AV testing tool featured on the cover of Nature. Built with Mcity and used by leading OEMs."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container text-center space-y-4">
          <Link href="https://github.com/mcity/TeraSim" className="text-primary underline">
            GitHub Repository
          </Link>
          <Link href="https://arxiv.org/abs/2503.03629" className="text-primary underline">
            Read the Paper
          </Link>
          <Link href="http://3.149.40.164:7860/" className="text-primary underline">
            Try the Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default TrustPage;
