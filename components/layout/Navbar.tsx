"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

const MobileSubmenuItem: React.FC<{ item: NavItem; onClose: () => void }> = ({
  item,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-amber-200/80 hover:text-amber-400 hover:bg-amber-500/10 py-3 px-4 rounded-xl transition-all text-lg font-medium border border-transparent hover:border-amber-500/20"
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1 mt-1"
          >
            {item.children?.map((child, index) => (
              <a
                key={index}
                href={child.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = child.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    const yOffset = -80;
                    const y =
                      targetElement.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "auto" });
                  }
                  onClose();
                }}
                className="flex items-center text-amber-200/80 hover:text-amber-400 hover:bg-amber-500/10 py-2 px-6 rounded-xl transition-all text-base w-full border border-transparent hover:border-amber-500/10"
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          // className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center overflow-y-auto"
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center overflow-y-auto h-screen"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-[95%] max-w-lg bg-black/80 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-6 my-4 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="absolute right-4 top-4">
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-amber-200/80 hover:bg-amber-500/10 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center mb-8 mt-2">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-heading tracking-tighter">
                Koshi<span className="font-light">Labs</span>
              </span>
            </div>

            <nav className="space-y-3">
              {navItems.map((item, index) =>
                item.children ? (
                  <MobileSubmenuItem
                    key={index}
                    item={item}
                    onClose={onClose}
                  />
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        const yOffset = -80;
                        const y =
                          targetElement.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "auto" });
                      }
                      onClose();
                    }}
                    className={cn(
                      "flex items-center w-full justify-center text-amber-200/80 hover:text-amber-400 hover:bg-amber-500/10 py-4 px-4 rounded-xl transition-all text-lg font-medium border border-transparent hover:border-amber-500/20",
                      activeSection === item.href.substring(1)
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        : ""
                    )}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    // { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    checkScroll(); // check immediately on mount
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      {isMobile ? (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-heading"
            >
              Visualize<span className="font-light">Solutions</span>
            </a>
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-200/80 hover:bg-amber-500/10 rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          ref={navRef}
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
            // width: isScrolled ? "100%" : "40%",
            width:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "100%"
                : isScrolled
                ? "100%"
                : "50%",
            borderRadius:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "70px"
                : isScrolled
                ? "0px"
                : "100px",
            top:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "5px"
                : isScrolled
                ? "0px"
                : "9px",
          }}
          transition={{
            width: { duration: 0.6, ease: "easeInOut" },
            y: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.3 },
          }}
          className={cn(
            "z-50 top-3 left-0 right-0 mx-auto fixed bg-gradient-to-r from-white to-gray-100 border border-gray-200",
            isScrolled ? "h-[70px]" : "h-[70px]"
          )}
        >
          <div className="flex gap-10 items-center justify-between px-6 py-3 max-w-7xl mx-auto">
            <motion.span
              className="text-3xl cursor-pointer font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter inline-block relative"
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={() => router.push("/")}
            >
              Visualize<span className="font-light">Solution</span>
              <motion.div
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <div className="flex space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all text-md font-medium textFont",
                    router.pathname === item.href
                      ? "text-black bg-gray-200"
                      : "text-black hover:bg-gray-200"
                  )}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   const section = document.getElementById(item.href.slice(1));
                  //   section?.scrollIntoView({ behavior: "smooth" });
                  // }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}

      {/* Mobile Slide Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection=""
      />
    </>
  );
};

export default Navbar;
