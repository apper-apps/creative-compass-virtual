import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const DisclosurePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="FileText" size={32} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-lg text-gray-600">
              Transparency in our recommendations and partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-coral-50 border-l-4 border-coral-400 p-6 rounded-r-xl mb-8">
              <h3 className="text-xl font-display font-bold text-coral-800 mb-2">
                Important Notice
              </h3>
              <p className="text-coral-700 mb-0">
                Creative Compass may contain affiliate links to educational platforms and 
                creative resources. We believe in full transparency about our partnerships 
                and how they may benefit both you and our mission to provide quality 
                creative education.
              </p>
            </div>

            <h2>What Are Affiliate Links?</h2>
            <p>
              Affiliate links are special URLs that contain a unique identifier linking back 
              to Creative Compass. When you click on these links and make a purchase or sign 
              up for a service, we may receive a small commission at no additional cost to you.
            </p>

            <h2>Our Commitment to You</h2>
            <p>
              We want to be completely transparent about our affiliate relationships and 
              assure you that they never influence our editorial decisions or recommendations:
            </p>
            <ul>
              <li>
                <strong>Honest Recommendations:</strong> We only recommend products, courses, 
                and services that we genuinely believe will benefit creative learners.
              </li>
              <li>
                <strong>No Influence on Content:</strong> Our educational content, reviews, 
                and tutorials are created independently and are not influenced by potential 
                affiliate commissions.
              </li>
              <li>
                <strong>Quality First:</strong> We prioritize the quality and value of 
                educational resources over potential financial gain.
              </li>
              <li>
                <strong>Clear Identification:</strong> We clearly identify when content 
                contains affiliate links or is sponsored.
              </li>
            </ul>

            <h2>Types of Affiliate Partnerships</h2>
            <p>
              Creative Compass may participate in affiliate programs with various educational 
              platforms and creative resource providers, including but not limited to:
            </p>
            <ul>
              <li>Online learning platforms specializing in creative skills</li>
              <li>Art supply and creative tool retailers</li>
              <li>Software companies offering creative applications</li>
              <li>Book publishers focusing on creative and design topics</li>
              <li>Photography and design resource platforms</li>
            </ul>

            <h2>How Affiliate Commissions Support Our Mission</h2>
            <p>
              The small commissions we earn from affiliate partnerships help us:
            </p>
            <ul>
              <li>Maintain and improve our website and educational content</li>
              <li>Research and test new creative tools and platforms</li>
              <li>Create comprehensive tutorials and guides</li>
              <li>Provide free educational resources to the creative community</li>
              <li>Support our team of educators and content creators</li>
            </ul>

            <h2>Your Purchase Experience</h2>
            <p>
              When you use our affiliate links:
            </p>
            <ul>
              <li>You pay the same price as you would through any other link</li>
              <li>You may sometimes receive special discounts or bonuses available through our partnerships</li>
              <li>Your purchase helps support free creative education content</li>
              <li>You contribute to our ability to continue providing valuable resources</li>
            </ul>

            <h2>Product Reviews and Recommendations</h2>
            <p>
              Our reviews and recommendations are based on:
            </p>
            <ul>
              <li>Personal experience and testing when possible</li>
              <li>Research into user feedback and community reviews</li>
              <li>Educational value and relevance to creative learning</li>
              <li>Quality of instruction and learning outcomes</li>
              <li>Value for money and accessibility</li>
            </ul>

            <h2>Sponsored Content Policy</h2>
            <p>
              In addition to affiliate partnerships, we may occasionally create sponsored 
              content. All sponsored content will be clearly labeled as such and will:
            </p>
            <ul>
              <li>Be relevant to our audience of creative learners</li>
              <li>Maintain our editorial standards and quality</li>
              <li>Provide genuine value to our readers</li>
              <li>Be clearly identified as sponsored or paid content</li>
            </ul>

            <h2>Questions and Feedback</h2>
            <p>
              We welcome your questions and feedback about our affiliate relationships and 
              disclosure practices. If you have any concerns or would like more information 
              about a specific recommendation, please don't hesitate to contact us.
            </p>

            <div className="bg-primary-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-display font-bold text-primary-800 mb-3">
                Our Promise to You
              </h3>
              <p className="text-primary-700 mb-0">
                We are committed to maintaining your trust through transparency, honesty, 
                and a genuine dedication to supporting your creative growth. Our 
                recommendations will always prioritize your learning experience and 
                creative development above all else.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              <strong>Last Updated:</strong> December 2024<br/>
              <strong>Contact:</strong> disclosure@creativecompass.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DisclosurePage;