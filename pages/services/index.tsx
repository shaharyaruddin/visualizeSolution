import ServiceCard from "@/components/cards/ServiceCard";
import PageWrapper from "@/components/PageWrappper";
import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import CountUp from "react-countup";
import {
  UserCheck,
  Clock,
  Users,
  Smile,
  Trophy,
  LayoutTemplate,
  Globe2,
} from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Laptop2,
  Layers3,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";
import React, { useEffect, useRef } from "react";

const index = () => {
  const services = [
    {
      title: "Development",
      slug: "development",
      icon: <Code2 className="w-12 h-12 text-blue-400 mb-4" />,
      description:
        "Custom software and web development tailored to your business needs using modern technologies and agile methodologies.",
      detailedDescription: `Our Development service covers the complete lifecycle—from concept and planning to deployment and maintenance.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Custom software development for web and mobile platforms</li>
      <li>Full-stack development using modern frameworks</li>
      <li>API development and system integrations</li>
      <li>Agile methodology and DevOps practices</li>
      <li>Ongoing maintenance and support</li>
    </ul>
    We deliver scalable and robust digital solutions that drive innovation and efficiency.`,
    },
    {
      title: "Designing",
      slug: "designing",
      icon: <Laptop2 className="w-12 h-12 text-pink-400 mb-4" />,
      description:
        "Creative UI/UX and graphic design that enhances user experience and communicates your brand message visually.",
      detailedDescription: `Our Designing service blends creativity with functionality to deliver stunning and user-centric visual experiences.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>UI/UX design for web and mobile interfaces</li>
      <li>Logo and brand identity creation</li>
      <li>Social media and marketing creatives</li>
      <li>Prototyping, wireframes, and user journey mapping</li>
      <li>Print materials and packaging design</li>
    </ul>
    We ensure that every design element aligns with your business goals and engages your target audience effectively.`,
    },
    {
      title: "CMS (WordPress & Shopify)",
      slug: "cms",
      icon: <LayoutTemplate className="w-12 h-12 text-violet-500 mb-4" />,
      description:
        "Powerful CMS solutions using WordPress and Shopify to help you manage and scale your online presence with ease.",
      detailedDescription: `We build feature-rich websites and eCommerce platforms using popular content management systems.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Custom WordPress website development</li>
      <li>Shopify store setup and theme customization</li>
      <li>Plugin and app integrations</li>
      <li>CMS optimization for performance and SEO</li>
      <li>Training and support for content management</li>
    </ul>
    Our CMS solutions give you control and flexibility to grow your brand online effortlessly.`,
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      icon: <Globe2 className="w-12 h-12 text-orange-400 mb-4" />,
      description:
        "Grow your online presence and reach your target audience through strategic and data-driven digital marketing campaigns.",
      detailedDescription: `Our Digital Marketing services are designed to drive traffic, increase conversions, and grow your brand visibility.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Social media marketing (Facebook, Instagram, LinkedIn)</li>
      <li>Paid advertising (Google Ads, Meta Ads)</li>
      <li>Email marketing and automation</li>
      <li>Content marketing and blog strategy</li>
      <li>Campaign analysis and performance optimization</li>
    </ul>
    We create personalized strategies that deliver measurable results and long-term growth.`,
    },
    {
      title: "SEO (Search Engine Optimization)",
      slug: "seo",
      icon: <Search className="w-12 h-12 text-green-500 mb-4" />,
      description:
        "Enhance your website's visibility, ranking, and organic traffic through proven SEO strategies and techniques.",
      detailedDescription: `Our SEO services are built to improve your website’s search engine ranking and drive qualified traffic.
    <br/><br/>
    <strong>What We Offer:</strong>
    <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
      <li>Technical SEO audits and on-page optimization</li>
      <li>Keyword research and content strategy</li>
      <li>Link building and off-page SEO</li>
      <li>Local SEO for location-based businesses</li>
      <li>Performance tracking and reporting</li>
    </ul>
    We help your website rank higher, attract the right audience, and convert visitors into loyal customers.`,
    },
  ];

  const counters = [
    {
      icon: <Briefcase size={40} className="mx-auto mb-2 text-blue-400" />,
      value: 3,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: <Rocket size={40} className="mx-auto mb-2 text-purple-400" />,
      value: 8,
      suffix: "+",
      label: "Projects Launched",
    },
    {
      icon: <Smile size={40} className="mx-auto mb-2 text-green-400" />,
      value: 70,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];
  return (
    <PageWrapper title="Services">
      <section
        id="services"
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden"
      >
        <FloatingSVGGroup
          elements={[
            {
              icon: <Cpu className="text-blue-400/80" />,
              position: { top: "10%", left: "5%" },
              size: "xl",
              opacity: 0.7,
              delay: 0.5,
            },
            {
              icon: <Code2 className="text-purple-400/80" />,
              position: { bottom: "20%", right: "5%" },
              size: "lg",
              opacity: 0.7,
              delay: 0.9,
            },
            {
              icon: <Layers3 className="text-green-400/80" />,
              position: { bottom: "40%", left: "30%" },
              size: "md",
              opacity: 0.6,
              delay: 1.3,
            },
          ]}
        />

        <div className="text-center px-4 md:px-0 mb-14">
          <h2 className="text-4xl font-bold text-black relative z-[1] font-heading inline-block headingFont">
            Our Services
          </h2>
          <p className="text-black max-w-2xl mx-auto mt-3 text-lg textFont">
            We craft digital experiences that drive results. Explore how our web
            development and graphic designing solutions can help your brand
            grow.
          </p>
          <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-[1]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -10,
          boxShadow: "0 25px 40px rgba(0, 0, 0, 0.2)",
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="w-full p-12 mb-10 overflow-hidden bg-white bg-opacity-70 rounded-2xl border border-gray-200 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-all hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.2)]"
      >
        <div>
          <h2 className="text-4xl font-bold text-black text-center mb-12 headingFont">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              OurTech
            </span>
            ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-black text-center">
            {counters.map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              const count = useMotionValue(0);
              const rounded = useTransform(
                count,
                (latest) => `${Math.floor(latest)}${item.suffix}`
              );

              useEffect(() => {
                if (isInView) {
                  const controls = animate(count, item.value, {
                    duration: 2,
                    ease: "easeOut",
                  });
                  return controls.stop; // cleanup
                }
              }, [isInView]);

              return (
                <div key={index} ref={ref}>
                  {item.icon}
                  <h3 className="text-4xl font-bold">
                    <motion.span className="headingFont">{rounded}</motion.span>
                  </h3>
                  <p className="text-black mt-2 textFont">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default index;
