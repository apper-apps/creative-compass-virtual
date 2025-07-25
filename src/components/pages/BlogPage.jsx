import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArticleCard from "@/components/molecules/ArticleCard";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { articleService } from "@/services/api/articleService";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Articles", variant: "neutral" },
    { id: "illustration", name: "Illustration", variant: "primary" },
    { id: "design", name: "Design", variant: "secondary" },
    { id: "photography", name: "Photography", variant: "accent" },
    { id: "crafts", name: "Crafts", variant: "neutral" }
  ];

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await articleService.getAll();
      setArticles(data);
    } catch (err) {
      setError("Failed to load articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === selectedCategory);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadArticles} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Creative <span className="gradient-text">Learning Hub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover comprehensive guides, tutorials, and insights to enhance your creative journey.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category.id ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  <Badge 
                    variant={selectedCategory === category.id ? "primary" : category.variant}
                    className="cursor-pointer"
                  >
                    {category.name}
                  </Badge>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <Empty 
              message={`No articles found ${selectedCategory !== "all" ? `in ${selectedCategory}` : ""}`}
              actionText="View All Articles"
              onAction={() => setSelectedCategory("all")}
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.Id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ArticleCard article={article} />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Button size="lg" variant="secondary">
                  <ApperIcon name="RefreshCw" size={20} className="mr-2" />
                  Load More Articles
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;