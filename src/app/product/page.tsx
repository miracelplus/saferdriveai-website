import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";

export const metadata: Metadata = {
  title: "Product | SaferDrive AI",
  description: "Detailed modular architecture and simulation pipeline",
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Product"
        description="Modular, scalable simulation — built to expose real-world risk."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
