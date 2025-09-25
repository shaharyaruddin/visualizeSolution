import React, { useState } from "react";

import { Boxes, Search } from "lucide-react";
import FloatingSVGGroup from "../ui/FloatingSVGGroup";
import { motion } from "framer-motion";
import FaqItem from "../sections/FaqItem";

const FAQ = () => {
  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including software development, consulting, quality assurance, database management, performance optimization, and AI solutions. We specialize in product development, website development, system modernization, performance optimization, and strategic consulting. Our teams are skilled in providing both outsourcing services and complete project delivery.",
    },
    {
      question:
        "What makes  Visualize Solution different from other software companies?",
      answer:
        " Visualize Solution was founded on the principles of trust, quality, and affordability. With over 9 years of experience, our small team of experts delivers high-quality solutions at competitive prices. We're transparent in every step, from client communication to our technical approach. We utilize AI tools where appropriate to enhance efficiency, and we're deeply committed to understanding your unique business needs before proposing solutions.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern technologies including .NET, React, React Native, and various other frameworks and platforms. We choose the best technology stack for each project's specific needs, ensuring scalability, performance, and long-term maintainability. Our expertise spans both front-end and back-end development, cloud infrastructure, and AI/ML implementation.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "We begin by thoroughly understanding your business needs and objectives. Our approach is collaborative and transparent from the start. We develop a comprehensive project plan, establish clear milestones, and maintain regular communication throughout the development process. We believe in agile methodologies that allow for flexibility and iterative improvements based on feedback.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure your software continues to operate smoothly. We're committed to your long-term success and provide various support options to meet your needs, including regular updates, performance monitoring, and technical assistance. Our goal is to build lasting partnerships with our clients.",
    },
    {
      question:
        "Why should I choose  Visualize Solution for my software needs?",
      answer:
        "We offer an unwavering commitment to quality, delivering software that exceeds expectations. Our services are affordable without compromising on excellence. We combine local expertise with global standards, understanding the unique challenges of various markets. Most importantly, we view ourselves as partners, not just service providers, dedicated to your success through every stage of development and beyond.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices for development and quality assurance, including rigorous testing and code reviews. Quality is built into every stage of our development process. We implement continuous integration/continuous deployment pipelines, automated testing, and regular security audits. Our team adheres to established coding standards and documentation practices to ensure maintainable, high-quality code.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models tailored to project needs, including fixed-price projects, time and materials, and retainer-based engagements. We believe in transparent pricing with no hidden costs. During our initial consultation, we'll discuss your requirements in detail and recommend the most appropriate pricing structure for your specific project.",
    },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gray-100 backdrop-blur-md py-24 rounded-b-[4rem] border-b border-white/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <FloatingSVGGroup
          elements={[
            {
              icon: <Boxes className="text-blue-400/90" />,
              position: { top: "20%", right: "10%" },
              size: "xl",
              opacity: 0.8,
              delay: 0.7,
            },
            {
              icon: <Search className="text-purple-400/90" />,
              position: { bottom: "25%", left: "10%" },
              size: "lg",
              opacity: 0.7,
              delay: 0.4,
            },
          ]}
        />

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6 font-heading">
            Frequently{" "}
            <span className="text-[#288dc8]">
              Asked Questions
            </span>
          </h2>

          <p className="text-black max-w-2xl mx-auto text-lg font-manrope">
            Find answers to common questions about our services and process.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
