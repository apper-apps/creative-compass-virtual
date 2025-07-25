import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email Us",
      details: "hello@creativecompass.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      details: "Available 9 AM - 6 PM EST",
      description: "Get instant help with our support team"
    },
    {
      icon: "MapPin",
      title: "Office",
      details: "San Francisco, CA",
      description: "Proudly serving creators worldwide"
    }
  ];

  const faqs = [
    {
      question: "What types of creative skills do you cover?",
      answer: "We cover a wide range of creative disciplines including digital illustration, graphic design, photography, traditional arts, crafts, animation, and creative marketing."
    },
    {
      question: "Are your tutorials suitable for beginners?",
      answer: "Absolutely! Our content is designed for all skill levels, from complete beginners to advanced practitioners. Each guide clearly indicates the recommended skill level."
    },
    {
      question: "How often do you publish new content?",
      answer: "We publish new articles and tutorials weekly, with featured content and in-depth guides released bi-weekly."
    },
    {
      question: "Can I suggest topics for future articles?",
      answer: "Yes! We love hearing from our community. Use the contact form below to suggest topics you'd like us to cover."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question, suggestion, or just want to say hello? 
              We'd love to hear from you and help with your creative journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={info.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have questions about our content, suggestions for new topics, 
                or need help with your creative projects, we're here to help.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-display font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-coral-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join Our Creative Community
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with fellow creators, share your work, and get inspired daily.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { name: "Discord", icon: "MessageSquare" },
                { name: "Instagram", icon: "Instagram" },
                { name: "Twitter", icon: "Twitter" },
                { name: "YouTube", icon: "Youtube" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <ApperIcon name={social.icon} size={24} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;