import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src="/images/about/deployment.png" alt="Map" width={50} height={50} />,
    title: "HD Map & 3D Scene Generation",
    paragraph: "Generate simulation-ready HD maps from OSM or proprietary sources.",
  },
  {
    id: 2,
    icon: <Image src="/images/about/speedometer.png" alt="Traffic" width={50} height={50} />,
    title: "Traffic Flow & Incident Simulation",
    paragraph: "Simulate mixed traffic flows and dynamic environments like congestion, closures, and weather.",
  },
  {
    id: 3,
    icon: <Image src="/images/about/shield.png" alt="Accident" width={50} height={50} />,
    title: "Accident & Adversity Generation",
    paragraph: "Design rare, complex, and legally sensitive crash scenarios using a natural language prompt.",
  },
  {
    id: 4,
    icon: <Image src="/images/about/speedometer.png" alt="Sensor" width={50} height={50} />,
    title: "Photorealistic Sensor Simulation",
    paragraph: "Generate camera/LiDAR outputs with configurable FOV, distortion, and placements.",
  },
  {
    id: 5,
    icon: <Image src="/images/about/deployment.png" alt="Behavior" width={50} height={50} />,
    title: "Behavioral Adversity & Integration",
    paragraph: "Inject rare events into naturalistic driving using APIs for closed-loop testing.",
  },
];

export default featuresData;
