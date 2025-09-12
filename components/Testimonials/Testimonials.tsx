import React from "react";


import { motion } from "framer-motion";
import FloatingSVGGroup from "../ui/FloatingSVGGroup";
import { Gem, Users } from "lucide-react";


const Testimonials = () => {

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const testimonials = [
  {
    name: "John Smith",
    company: "Acme Corp",
    quote:
      "Their team delivered our project on time and within budget.  Highly recommended!  Their communication was excellent.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&style=circle&backgroundColor=ffaabb",
  },
  {
    name: "Jane Doe",
    company: "Beta Inc",
    quote:
      "We've been working with them for years and they consistently exceed our expectations.  A true partner in our success.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe&style=circle&backgroundColor=aabbff",
  },
  {
    name: "David Lee",
    company: "Gamma Co",
    quote:
      "Their expertise in AI helped us transform our business.  A game-changer for our operations.  We're seeing significant ROI.",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidLee&style=circle&backgroundColor=bbffaa",
  },
];


const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

    return(
 <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-0">
          <FloatingSVGGroup
            elements={[
              {
                icon: <Users className="text-purple-400/80" />,
                position: { top: "10%", right: "5%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.3,
              },
              {
                icon: <Gem className="text-blue-400/80" />,
                position: { bottom: "15%", left: "8%" },
                size: "md",
                opacity: 0.7,
                delay: 0.5,
              },
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 relative z-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6 headingFont">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>

            <p className="text-black max-w-2xl mx-auto text-lg textFont">
              Hear from businesses that have trusted us with their projects.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-0">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative overflow-hidden bg-black bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-md"></div>
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white headingFont">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 textFont">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed textFont">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}

     

export default Testimonials;
