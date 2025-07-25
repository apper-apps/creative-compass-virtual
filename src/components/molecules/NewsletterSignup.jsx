import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Welcome aboard! Check your email for confirmation.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-500 to-coral-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold mb-2">
          Stay Creative
        </h3>
        <p className="text-primary-100">
          Get weekly inspiration and the latest creative tutorials delivered to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 border-white/20 bg-white/10 text-white placeholder-white/70 focus:border-white focus:ring-white/20"
          required
        />
        <Button
          type="submit"
          variant="secondary"
          disabled={loading}
          className="whitespace-nowrap"
        >
          {loading ? (
            <ApperIcon name="Loader2" size={20} className="animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;