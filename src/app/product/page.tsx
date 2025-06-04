import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductFlow from "@/components/Product/ProductFlow";
import ProductModules from "@/components/Product/ProductModules";

export const metadata: Metadata = {
  title: "Product - TeraSim | SaferDrive AI",
  description: "Modular, scalable simulation — built to expose real-world risk. Detailed TeraSim architecture and simulation pipeline.",
  keywords: "TeraSim, simulation pipeline, modular architecture, AV testing, generative AI simulation",
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="TeraSim Product"
        description="Modular, Scalable Simulation — Built to Expose Real-World Risk"
      />
      <ProductFlow />
      <ProductModules />
    </>
  );
};

export default ProductPage;
