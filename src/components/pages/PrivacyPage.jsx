import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const PrivacyPage = () => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Shield" size={32} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 2024
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
            <h2>1. Information We Collect</h2>
            <p>
              At Creative Compass, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, and safeguard your data when you visit our website.
            </p>

            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name and email address (when you subscribe to our newsletter)</li>
              <li>Contact information (when you use our contact form)</li>
              <li>Usage data and analytics information</li>
              <li>Cookie and tracking data for website optimization</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and improve our educational content and services</li>
              <li>To send you newsletters and updates about creative learning resources</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third 
              parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>With trusted service providers who assist in operating our website</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with affiliate partnerships (with proper disclosure)</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. These measures include:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure server infrastructure and regular security updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security audits and monitoring</li>
            </ul>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your 
              browsing experience. These technologies help us:
            </p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Provide personalized content recommendations</li>
              <li>Improve website functionality and performance</li>
            </ul>

            <h2>6. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, email marketing, and other 
              operational purposes. These services may collect information about your use 
              of our website. We encourage you to review the privacy policies of these 
              third-party services.
            </p>

            <h2>7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Unsubscribe from our newsletters at any time</li>
              <li>Opt-out of certain data collection and processing activities</li>
              <li>Request information about how your data is being used</li>
            </ul>

            <h2>8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not 
              knowingly collect personal information from children under 13. If you believe 
              we have collected such information, please contact us immediately.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or legal requirements. We will notify you of any material changes by 
              posting the updated policy on our website with a new effective date.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul>
              <li>Email: privacy@creativecompass.com</li>
              <li>Contact Form: <a href="/contact">Contact Us</a></li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Questions About Your Privacy?
              </h3>
              <p className="text-gray-600 mb-0">
                We're committed to transparency and protecting your privacy. If you have any 
                questions or concerns about how we handle your data, please don't hesitate 
                to reach out to us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;