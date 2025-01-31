import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Howie Sun",
    title: "CEO & Co-founder",
    image: "/images/team/howie.jpg",
    description: "Expert in autonomous vehicle simulation and safety validation",
    linkedin: "https://www.linkedin.com/in/haoweis/",
  },
  {
    name: "Prof. Henry Liu",
    title: "Co-founder & Scientific Advisor",
    image: "/images/team/henry.jpg",
    description: "Leading researcher in transportation systems and AV safety",
    linkedin: "https://www.linkedin.com/in/henry-liu-3612701/",
  }
];

const Team = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Meet Our Team
            </h2>
            <p className="text-base text-body-color md:text-lg">
              Experts in autonomous vehicle safety and simulation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]"
              data-wow-delay={`.${index + 1}s`}
            >
              <div className="flex items-center gap-8">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-base text-body-color">
                    {member.title}
                  </p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              <p className="mt-6 text-base text-body-color">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-body-color">
            Backed by leading researchers and industry experts in autonomous vehicle technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team; 