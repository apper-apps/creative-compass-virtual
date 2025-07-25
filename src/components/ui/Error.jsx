import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Something went wrong while loading content.", 
  onRetry,
  showRetry = true 
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-gradient-to-br from-coral-100 to-coral-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="AlertTriangle" size={40} className="text-coral-600" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {message}
        </p>
        
        {showRetry && onRetry && (
          <div className="space-y-4">
            <Button onClick={onRetry} className="w-full sm:w-auto">
              <ApperIcon name="RefreshCw" size={20} className="mr-2" />
              Try Again
            </Button>
            <p className="text-sm text-gray-500">
              If the problem persists, please contact our support team.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;