import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | SaferDrive AI",
  description: "Stress Testing Physical AI with GenAI",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Simulation Toolchain Powered by Generative AI"
        description=""
      />
      <AboutSectionTwo />
      <AboutSectionOne />

    </>
  );
};

export default AboutPage;
