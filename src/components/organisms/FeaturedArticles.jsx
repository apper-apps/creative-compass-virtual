import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArticleCard from "@/components/molecules/ArticleCard";
import Button from "@/components/atoms/Button";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { articleService } from "@/services/api/articleService";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await articleService.getFeatured();
      setArticles(data);
    } catch (err) {
      setError("Failed to load featured articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadArticles} />;
  if (articles.length === 0) return <Empty message="No featured articles available" />;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into our most popular guides and tutorials, carefully crafted to help you master creative skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.Id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ArticleCard 
                article={article} 
                featured={index === 0}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" variant="secondary">
            <ApperIcon name="BookOpen" size={20} className="mr-2" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;