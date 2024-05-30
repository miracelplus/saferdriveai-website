import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | SaferDrive AI",
  description: "Generative AI powered simulation toolchain for safer Autonomous Vehicles",
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
