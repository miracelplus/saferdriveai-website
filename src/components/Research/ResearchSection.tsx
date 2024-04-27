import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";




const ResearchSection = () => {
  const ResearchItem = ({ title, description, link }) => (
    <div className="mb-8">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-body-color">{description}</p>
      <Link href={link} className="text-primary hover:underline">
        Learn More
      </Link>
    </div>
  );

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Our Research"
          paragraph="Research is the bedrock of our innovation as we build the next generation of self-driving technology."
          center
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ResearchItem
            title="Research Topic 1"
            description="Brief description of research topic 1."
            link="/research/topic1"
          />
          <ResearchItem
            title="Research Topic 2"
            description="Brief description of research topic 2."
            link="/research/topic2"
          />
          <ResearchItem
            title="Research Topic 3"
            description="Brief description of research topic 3."
            link="/research/topic3"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;