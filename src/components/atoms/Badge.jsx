import React from "react";
import { cn } from "@/utils/cn";

const Badge = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 border border-primary-300",
    secondary: "bg-gradient-to-r from-coral-100 to-coral-200 text-coral-800 border border-coral-300",
    accent: "bg-gradient-to-r from-turquoise-100 to-turquoise-200 text-turquoise-800 border border-turquoise-300",
    neutral: "bg-gray-100 text-gray-800 border border-gray-300"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;