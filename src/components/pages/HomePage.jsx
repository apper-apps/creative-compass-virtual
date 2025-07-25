import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import FeaturedArticles from "@/components/organisms/FeaturedArticles";
import NewsletterSignup from "@/components/molecules/NewsletterSignup";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedArticles />
      
      {/* Creative Categories Section */}
{/* Simplified version - removed complex creative disciplines section */}
      {/* Newsletter Section */}
<section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default HomePage;