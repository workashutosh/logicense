import React, { useEffect, useState } from "react";

const TechBlogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch articles from Dev.to API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?tag=tech");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.filter(article => article.cover_image)); // Filter out articles without cover images
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Handle card click to open the article in a new tab
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 pt-8 text-gray-800">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleCardClick(article.url)}
          >
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
              <div className="flex items-center text-gray-500 text-xs">
                <span className="mr-2">By {article.user.name}</span>
                <span>{new Date(article.published_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBlogs;