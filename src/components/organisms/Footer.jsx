import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/molecules/Logo";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const categories = [
    { name: "Illustration", href: "/blog?category=illustration" },
    { name: "Design", href: "/blog?category=design" },
    { name: "Photography", href: "/blog?category=photography" },
    { name: "Crafts", href: "/blog?category=crafts" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclosure", href: "/disclosure" },
    { name: "Terms of Use", href: "/terms" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-6">
              Your trusted companion for creative learning. Discover, learn, and master the art of creativity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <ApperIcon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Creative Compass. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with <ApperIcon name="Heart" size={16} className="inline text-coral-500" /> for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;