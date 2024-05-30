import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import ResearchSection from "@/components/Research/ResearchSection";

export const metadata: Metadata = {
  title: "SaferDrive AI",
  description: "Generative AI powered simulation toolchain for safer Autonomous Vehicles",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionTwo />
      <AboutSectionOne />
      <Features />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <ResearchSection /> */}
      {/* <Contact /> */}
    </>
  );
}
