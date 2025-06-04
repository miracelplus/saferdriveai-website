import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import ProblemGapSolution from "@/components/ProblemGapSolution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaferDrive AI - TeraSim: Generative AI Simulation for Autonomous Vehicles",
  description: "TeraSim uncovers unknown unsafe scenarios using generative simulation grounded in real-world data. Autonomy is coming. But are we testing it right?",
  keywords: "autonomous vehicles, AI simulation, TeraSim, SaferDrive AI, generative AI, AV testing, simulation platform",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProblemGapSolution />
    </>
  );
}
