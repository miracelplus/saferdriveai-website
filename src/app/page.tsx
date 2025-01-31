import { Metadata } from "next";
import Hero from "@/components/Hero";
import ScrollUp from "@/components/Common/ScrollUp";
import Standards from "@/components/Standards";
import Integration from "@/components/Integration";
import TrustedBy from "@/components/TrustedBy";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "TeraSim | Open-Source Simulation for Safer Autonomous Driving",
  description: "TeraSim is an open-source simulation platform for autonomous vehicle testing, offering high-fidelity environment generation and comprehensive safety validation tools.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Standards />
      <Integration />
      <TrustedBy />
      <Team />
    </>
  );
}
