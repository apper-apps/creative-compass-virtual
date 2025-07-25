import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center space-x-3 group ${className}`}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-coral-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <ApperIcon name="Compass" size={24} className="text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-turquoise-400 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold gradient-text">
          Creative Compass
        </span>
        <span className="text-xs text-gray-500 -mt-1">Your Creative Guide</span>
      </div>
    </Link>
  );
};

export default Logo;