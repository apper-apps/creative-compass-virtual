import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-coral-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-coral-200 to-coral-300 rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-turquoise-200 to-turquoise-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-primary-600 font-medium shadow-lg">
              <ApperIcon name="Sparkles" size={20} className="mr-2" />
              Welcome to Your Creative Journey
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6"
          >
            Master Your{" "}
            <span className="gradient-text">
              Creative Skills
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover comprehensive guides, tutorials, and resources to elevate your creative practice.
            From illustration and design to photography and crafts, we're here to guide your artistic evolution.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="shadow-2xl">
              <ApperIcon name="BookOpen" size={20} className="mr-2" />
              Explore Our Guides
            </Button>
            <Button variant="secondary" size="lg">
              <ApperIcon name="Play" size={20} className="mr-2" />
              Watch Intro
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: "Palette", label: "Illustration", count: "120+ Guides" },
              { icon: "Layout", label: "Design", count: "95+ Tutorials" },
              { icon: "Camera", label: "Photography", count: "80+ Tips" },
              { icon: "Scissors", label: "Crafts", count: "65+ Projects" }
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-coral-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={item.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600">{item.count}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;