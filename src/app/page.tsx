import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProblemGapSolution from "@/components/ProblemGapSolution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaferDrive AI - TeraSim: Generative AI Simulation for Autonomous Vehicles",
  description: "Stress Testing Physical AI with GenAI. Autonomy is coming. But are we testing it right?",
  keywords: "autonomous vehicles, AI simulation, TeraSim, SaferDrive AI, generative AI, AV testing, simulation platform",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProblemGapSolution />
      <Contact />
    </>
  );
}
