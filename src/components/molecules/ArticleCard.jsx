import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";

const ArticleCard = ({ article, featured = false }) => {
  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <Link to={`/blog/${article.slug}`} className="block">
        <div className="relative overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={article.featuredImage}
            alt={article.title}
            className={`w-full object-cover ${featured ? "h-64 md:h-80" : "h-48"}`}
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary">
              {article.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <div className="flex items-center space-x-1">
              <ApperIcon name="Calendar" size={16} />
              <span>{format(new Date(article.publishDate), "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ApperIcon name="Clock" size={16} />
              <span>{article.readingTime} min read</span>
            </div>
          </div>
          
          <h3 className={`font-display font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2 ${
            featured ? "text-2xl" : "text-xl"
          }`}>
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
              <span className="mr-2">Read More</span>
              <ApperIcon name="ArrowRight" size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <ApperIcon name="Heart" size={16} />
              <ApperIcon name="Share2" size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;