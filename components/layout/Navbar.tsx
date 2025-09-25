"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Our Services",
      href: "/services",
      children: [
        { label: "Web Development", href: "/services/development" },
        { label: "UI/UX Design and Development", href: "/services/designing" },
        {
          label: "CMS (WordPress & Shopify)",
          href: "/services/cms-wordpress-shopify",
        },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "SEO (Search Engine Optimization)", href: "/services/seo" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/assets/main-logo.png"
              alt="Logo"
              className="h-16 w-40 sm:h-20 sm:w-48 md:h-18 md:w-56 object-cover"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) =>
              item.children ? (
                <div key={i} className="relative group">
                  {/* Parent Link */}
                  <a
                    href={item.href}
                    className="flex items-center text-gray-800 hover:text-[#288dc8] font-manrope text-[17px]"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </a>

                  {/* Dropdown */}
                  <div
                    className="absolute left-0 top-full hidden group-hover:block 
               bg-white shadow-md rounded-md w-[280px] z-50"
                  >
                    {item.children.map((child, j) => (
                      <a
                        key={j}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap font-manrope text-[15px]"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={i}
                  href={item.href}
                  className="text-gray-800 hover:text-[#288dc8] font-manrope text-[17px]"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          {navItems.map((item, i) =>
            item.children ? (
              <div key={i}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full flex justify-between items-center py-2 text-gray-800 font-manrope"
                >
                  {item.label}
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child, j) => (
                      <a
                        key={j}
                        href={child.href}
                        className="block py-1 text-gray-600 hover:text-green-600"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={i}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-green-600 font-manrope"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="/book"
            className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Book a Meeting
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
