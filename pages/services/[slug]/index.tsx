
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { servicesContent } from "@/utils/service";
import PageWrapper from "@/components/PageWrappper";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const selected = servicesContent.find((s) => s.slug === slug);
      setService(selected);
    }
  }, [slug]);

  if (!service) return null;

  return (
    <PageWrapper title={service.title}>
      <div className="space-y-24 px-4 md:px-20 py-14 mt-12">
        {service.sections.map((section: any, idx: number) => {
          if (section.type === "intro") {
            return (
              <motion.section
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 headingFont">
                  {section.heading}
                </h1>
                {section.paragraphs.map((p: string, i: number) => (
                  <p
                    key={i}
                    className="text-lg text-gray-600 leading-8 mb-3 textFont"
                  >
                    {p}
                  </p>
                ))}
              </motion.section>
            );
          }

          if (section.type === "text-image") {
            return (
              <motion.section
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-10"
              >
                <motion.div
                  variants={fadeInUp}
                  className="md:w-1/2 space-y-6"
                >
                  <h2 className="text-3xl font-semibold text-gray-800 headingFont">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="text-gray-600 leading-7 textFont">
                      {p}
                    </p>
                  ))}
                </motion.div>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={section.image}
                  alt={section.alt}
                  className="md:w-1/2 rounded-2xl shadow-2xl"
                />
              </motion.section>
            );
          }

          if (section.type === "image-text") {
            return (
              <motion.section
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.3 }}
                className="flex flex-col-reverse md:flex-row items-center gap-10"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={section.image}
                  alt={section.alt}
                  className="md:w-1/2 rounded-2xl shadow-2xl"
                />
                <motion.div
                  variants={fadeInUp}
                  className="md:w-1/2 space-y-6"
                >
                  <h2 className="text-3xl font-semibold text-gray-800 headingFont">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="text-gray-600 leading-7 textFont">
                      {p}
                    </p>
                  ))}
                </motion.div>
              </motion.section>
            );
          }

          if (section.type === "text") {
            return (
              <motion.section
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                <h2 className="text-3xl font-semibold text-gray-800 headingFont">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-lg text-gray-600 leading-8 textFont">
                    {p}
                  </p>
                ))}
              </motion.section>
            );
          }

          return null;
        })}
      </div>
    </PageWrapper>
  );
};

export default ServiceDetail;
