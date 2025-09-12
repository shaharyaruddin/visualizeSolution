import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Laptop2 } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";
import PageWrapper from "@/components/PageWrappper";

const Contact = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <PageWrapper title="Contact | KoshiLabs">
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <FloatingSVGGroup
            elements={[
              {
                icon: <Briefcase className="text-amber-400/80" />,
                position: { top: "15%", right: "10%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.5,
              },
              {
                icon: <Laptop2 className="text-amber-500/80" />,
                position: { bottom: "10%", left: "5%" },
                size: "md",
                opacity: 0.7,
                delay: 0.7,
              },
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 headingFont">
              Let's<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Work Together</span>
            </h2>
            <p className="text-black max-w-2xl mx-auto text-lg mb-10 textFont">
              Ready to start your next project? Reach out to us to discuss your
              needs and how we can help bring your vision to life.
            </p>
            <div className="h-2 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <ContactInfo />
            </div>
            <div className="w-full max-w-md mx-auto md:mx-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;