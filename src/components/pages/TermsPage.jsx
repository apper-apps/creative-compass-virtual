import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const TermsPage = () => {
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
            <div className="w-16 h-16 bg-gradient-to-br from-turquoise-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Scale" size={32} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Terms of Use
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Creative Compass website ("Website"), you accept 
              and agree to be bound by the terms and provision of this Terms of Use 
              agreement. If you do not agree to abide by the terms of this agreement, 
              you are not authorized to use or access this Website.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Creative Compass is an educational platform that provides articles, tutorials, 
              guides, and resources related to creative skills including but not limited to:
            </p>
            <ul>
              <li>Digital illustration and traditional art techniques</li>
              <li>Graphic design principles and practices</li>
              <li>Photography skills and composition</li>
              <li>Arts and crafts projects and tutorials</li>
              <li>Creative business and marketing guidance</li>
              <li>Animation and motion graphics resources</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>As a user of this Website, you agree to:</p>
            <ul>
              <li>Use the Website only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the Website in any way that violates applicable laws or regulations</li>
              <li>Respect intellectual property rights of all content providers</li>
              <li>Not attempt to gain unauthorized access to any part of the Website</li>
              <li>Not distribute malicious software or engage in harmful activities</li>
              <li>Provide accurate information when submitting forms or creating accounts</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              The content on this Website, including but not limited to text, graphics, 
              images, logos, icons, software, and other materials, is the property of 
              Creative Compass or its content suppliers and is protected by copyright, 
              trademark, and other intellectual property laws.
            </p>

            <h3>Permitted Use</h3>
            <p>You may:</p>
            <ul>
              <li>View and read content for personal, non-commercial use</li>
              <li>Share links to our articles on social media with proper attribution</li>
              <li>Print articles for personal reference</li>
              <li>Use our content for educational purposes with proper citation</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or republish content without written permission</li>
              <li>Use content for commercial purposes without authorization</li>
              <li>Modify, adapt, or create derivative works from our content</li>
              <li>Remove copyright notices or other proprietary markings</li>
            </ul>

            <h2>5. User-Generated Content</h2>
            <p>
              If you submit comments, feedback, or other content to our Website, you grant 
              Creative Compass a non-exclusive, royalty-free, perpetual, and worldwide 
              license to use, reproduce, modify, and distribute such content for the 
              purposes of operating and improving our services.
            </p>

            <h2>6. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which 
              also governs your use of the Website, to understand our practices regarding 
              the collection and use of your personal information.
            </p>

            <h2>7. Disclaimers and Limitations of Liability</h2>
            <p>
              The information on this Website is provided on an "as is" basis. Creative 
              Compass makes no representations or warranties of any kind, express or 
              implied, regarding the accuracy, completeness, or reliability of the content.
            </p>

            <h3>Educational Nature</h3>
            <p>
              Our content is provided for educational and informational purposes only. 
              While we strive for accuracy, we cannot guarantee that all information is 
              complete, current, or error-free.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              Creative Compass shall not be liable for any direct, indirect, incidental, 
              special, or consequential damages resulting from the use or inability to 
              use this Website or its content.
            </p>

            <h2>8. External Links</h2>
            <p>
              This Website may contain links to third-party websites. These links are 
              provided for convenience only, and Creative Compass does not endorse or 
              assume responsibility for the content, privacy policies, or practices of 
              these external sites.
            </p>

            <h2>9. Affiliate Relationships</h2>
            <p>
              Creative Compass may participate in affiliate programs and earn commissions 
              from qualifying purchases made through links on our Website. Please refer 
              to our Affiliate Disclosure for detailed information about these relationships.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our Website, without 
              prior notice or liability, for any reason, including breach of these Terms 
              of Use.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              Creative Compass reserves the right to modify these Terms of Use at any time. 
              Changes will be effective immediately upon posting on the Website. Your 
              continued use of the Website after changes are posted constitutes acceptance 
              of the modified terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the 
              laws of the United States and the State of California, without regard to 
              conflict of law principles.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <ul>
              <li>Email: legal@creativecompass.com</li>
              <li>Contact Form: <a href="/contact">Contact Us</a></li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 mb-0">
                We're committed to maintaining a positive and educational environment 
                for all users. If you have questions about these terms or need 
                clarification on any point, please don't hesitate to reach out.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;