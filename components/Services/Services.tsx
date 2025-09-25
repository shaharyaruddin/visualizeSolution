import React, { useState } from "react";
import { motion } from "framer-motion";
import FloatingSVGGroup from "../ui/FloatingSVGGroup";
import {
  Code2,
  Cpu,
  Globe2,
  Laptop2,
  Layers3,
  LayoutTemplate,
  Search,
} from "lucide-react";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

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
      slug: "cms-wordpress-shopify",
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

  return (
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

      <h2 className="text-4xl font-bold text-center text-black mb-16 relative z-[1] font-heading">
        Our
        <span className="text-[#288dc8]"> Services</span>
        <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-[1]">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} hideBtn={false} />
        ))}
      </div>
    </section>
  );
};
export default Services;
