import { Metadata } from "next";
import ResearchSection from "@/components/Research/ResearchSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Research | SaferDrive AI",
  description: "Explore our research on AI-centric simulation tools for AV safety.",
};

const ResearchPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Research"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <ResearchSection />
      {/* 添加其他研究相关的组件 */}
    </>
  );
};

export default ResearchPage;