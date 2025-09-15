import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch(
        "https://Visualize Solution-api.runasp.net/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black bg-gradient-to-br from-black via-gray-900 to-amber-900/20 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-white text-3xl font-semibold fontHeading">
          Get in Touch
        </CardTitle>
        <CardDescription className="text-white text-lg textFont">
          Send us a message and we'll get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="name"
                className="block text-white text-lg font-medium textFont"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-black/50 text-white border border-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="block text-white text-lg font-medium textFont"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-black/50 text-white border border-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="phone"
                className="block text-white text-lg font-medium textFont"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-md bg-black/50 text-white border border-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="message"
                className="block white text-lg font-medium text-white textFont"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md bg-black/50 text-white border border-amber-500/20 focus:outline-none focus:ring-2 min-h-[120px] resize-y"
                required
              ></textarea>
            </div>

            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-md ${
                  submitStatus.success
                    ? "bg-amber-500/20 text-white"
                    : "bg-red-500/20 text-red-200"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 text-lg py-3 rounded-full font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;