import React, { useState } from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import Link from "next/link";

// Define the service interface
interface ServiceProps {
  title: string;
  icon: React.ReactElement;
  description: string;
  detailedDescription: string;
  slug: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  hideBtn?: Boolean;
}

// Enhanced service card with hover effects and improved modal
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        className="bg-black cursor-pointer bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl relative group "
      >
        {/* Enhanced header with hover effect */}
        <Link href={`/services/${service.slug}`}>
          <div className="mb-4 relative">
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.2, rotate: 5 }}
              className="absolute right-0 top-0"
            >
              {React.cloneElement(service.icon, {
                className: "w-20 h-20 text-current",
              })}
            </motion.div>

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block mb-3 text-white"
              >
                {React.cloneElement(service.icon, { className: "w-12 h-12" })}
              </motion.div>

              <h3 className="text-xl font-medium text-white mb-1 font-heading">
                {service.title}
              </h3>
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3"
                whileHover={{ width: "40%", transition: { duration: 0.3 } }}
              />
              <p className="text-gray-300 mb-5 font-manrope">
                {service.description}
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default ServiceCard;
