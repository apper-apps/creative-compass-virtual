import articlesData from "@/services/mockData/articles.json";

export const articleService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...articlesData];
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const article = articlesData.find(item => item.Id === parseInt(id));
    if (!article) {
      throw new Error("Article not found");
    }
    return { ...article };
  },

  async getBySlug(slug) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const article = articlesData.find(item => item.slug === slug);
    if (!article) {
      throw new Error("Article not found");
    }
    return { ...article };
  },

  async getFeatured(limit = 6) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return articlesData
      .filter(article => article.featured)
      .slice(0, limit)
      .map(article => ({ ...article }));
  },

  async getByCategory(category, limit = null) {
    await new Promise(resolve => setTimeout(resolve, 300));
    let filtered = articlesData.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    return filtered.map(article => ({ ...article }));
  },

  async getRelated(articleId, limit = 3) {
    await new Promise(resolve => setTimeout(resolve, 250));
    const currentArticle = articlesData.find(item => item.Id === parseInt(articleId));
    if (!currentArticle) return [];
    
    return articlesData
      .filter(article => 
        article.Id !== parseInt(articleId) && 
        article.category === currentArticle.category
      )
      .slice(0, limit)
      .map(article => ({ ...article }));
  },

  async search(query) {
    await new Promise(resolve => setTimeout(resolve, 400));
    const lowercaseQuery = query.toLowerCase();
    return articlesData
      .filter(article => 
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.category.toLowerCase().includes(lowercaseQuery)
      )
      .map(article => ({ ...article }));
  }
};