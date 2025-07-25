import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  message = "No content available at the moment.", 
  actionText = "Explore More",
  onAction,
  icon = "BookOpen"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-turquoise-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={icon} size={40} className="text-primary-600" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
          Nothing to see here yet
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {message}
        </p>
        
        {onAction && (
          <Button onClick={onAction} className="w-full sm:w-auto">
            <ApperIcon name="Compass" size={20} className="mr-2" />
            {actionText}
          </Button>
        )}
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Check back soon for new creative content and tutorials!</p>
        </div>
      </div>
    </div>
  );
};

export default Empty;