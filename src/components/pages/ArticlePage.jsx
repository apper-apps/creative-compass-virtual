import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import { articleService } from "@/services/api/articleService";

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadArticle = async () => {
    try {
      setLoading(true);
      setError("");
      const articleData = await articleService.getBySlug(slug);
      const relatedData = await articleService.getRelated(articleData.Id, 3);
      setArticle(articleData);
      setRelatedArticles(relatedData);
    } catch (err) {
      setError("Article not found or failed to load.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticle();
  }, [slug]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadArticle} />;
  if (!article) return <Error message="Article not found" />;

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-coral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ApperIcon name="ArrowLeft" size={20} className="mr-2" />
                Back to Blog
              </Link>
            </div>

            <div className="mb-6">
              <Badge variant="primary">{article.category}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div className="flex items-center text-gray-600 space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <ApperIcon name="Calendar" size={18} />
                <span>{format(new Date(article.publishDate), "MMMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Clock" size={18} />
                <span>{article.readingTime} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Eye" size={18} />
                <span>2.1k views</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Found this helpful?
            </h3>
            <p className="text-gray-600 mb-6">
              Share this article with fellow creatives and help spread the knowledge!
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary">
                <ApperIcon name="Twitter" size={20} className="mr-2" />
                Share on Twitter
              </Button>
              <Button variant="secondary">
                <ApperIcon name="Facebook" size={20} className="mr-2" />
                Share on Facebook
              </Button>
              <Button variant="secondary">
                <ApperIcon name="Link" size={20} className="mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.Id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${relatedArticle.slug}`}
                    className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <img
                      src={relatedArticle.featuredImage}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-gray-900 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {relatedArticle.excerpt.substring(0, 100)}...
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;