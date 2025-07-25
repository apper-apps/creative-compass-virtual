import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Loading creative content..." }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-coral-500 rounded-2xl flex items-center justify-center mx-auto">
            <ApperIcon name="Loader2" size={32} className="text-white animate-spin" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-turquoise-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-gray-600 font-medium">{message}</p>
        
        {/* Skeleton Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
              <div className="bg-gray-200 h-40 rounded-xl mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-4"></div>
              <div className="bg-gray-200 h-3 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;