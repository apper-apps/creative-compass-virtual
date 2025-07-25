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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Explore Creative <span className="gradient-text">Disciplines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional arts to digital creativity, discover resources tailored to your interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Palette",
                title: "Digital Illustration",
                description: "Master digital drawing, character design, and illustration techniques",
                color: "from-primary-500 to-primary-600"
              },
              {
                icon: "Layout",
                title: "Graphic Design",
                description: "Learn typography, branding, and visual communication principles",
                color: "from-coral-500 to-coral-600"
              },
              {
                icon: "Camera",
                title: "Photography",
                description: "Develop your eye for composition, lighting, and storytelling",
                color: "from-turquoise-500 to-turquoise-600"
              },
              {
                icon: "Scissors",
                title: "Arts & Crafts",
                description: "Explore hands-on creativity with traditional and modern techniques",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "Video",
                title: "Animation",
                description: "Bring your ideas to life with motion graphics and animation",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "Megaphone",
                title: "Creative Marketing",
                description: "Build your creative business and reach your audience effectively",
                color: "from-orange-500 to-orange-600"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={category.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium">
                  <span className="mr-2">Learn More</span>
                  <ApperIcon name="ArrowRight" size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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