import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8 text-black"
    >
      <h3 className="text-2xl font-semibold text-black mb-6 border-b border-amber-500/20 pb-4 font-heading">
        Contact Information
      </h3>
      <motion.div
        className="flex items-start gap-4 group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
          <MapPin className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="text-black mb-1 font-semibold font-heading">Address</p>
          <p className="group-hover:text-black transition-colors font-manrope">
            Birtamod, Koshi Province, Nepal
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start gap-4 group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
          <Phone className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="font-semibold text-black mb-1 font-heading">Phone</p>
          <a
            href="tel:+9779817996672"
            aria-label="Call +977 9817996672"
            className="group-hover:text-black transition-colors font-manrope"
          >
            +977 9817996672
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start gap-4 group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
          <Mail className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="font-semibold text-black mb-1 font-heading">Email</p>
          <a
<<<<<<< HEAD
            href="mailto:admin@koshilabs.com"
            aria-label="Email admin@koshilabs.com"
            className="group-hover:text-black transition-colors font-manrope"
=======
            href="mailto:admin@Visualize Solution.com"
            aria-label="Email admin@Visualize Solution.com"
            className="group-hover:text-black transition-colors textFont"
>>>>>>> b405236b3e159dff77677d2230013ca2ed4e2d91
          >
            contact@visualizesolution.com
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start gap-4 group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
          <Globe className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="font-semibold text-black mb-1 font-heading">Website</p>
          <p className="group-hover:text-black transition-colors font-manrope">
            www.visualizesolution.com
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
