import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/airdiveData';
import { Search, Calendar, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostModal from '../components/BlogPostModal';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalPost, setActiveModalPost] = useState(null);

  const categories = useMemo(() => {
    const cats = ['All'];
    BLOG_POSTS.forEach((post) => {
      if (!cats.includes(post.category)) {
        cats.push(post.category);
      }
    });
    return cats;
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 hover:text-sky-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AirDive Main Website
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>AIRDIVE RESEARCH & INSIGHTS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              Engineering <span className="text-gradient-corporate">Knowledge Hub</span>
            </h1>
            <p className="text-slate-600 text-base font-normal">
              Technical publications on cloud architecture, AI workflows, enterprise software, and mobile development.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white font-semibold shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Featured Article Card */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="corporate-card rounded-3xl overflow-hidden mb-16 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 group cursor-pointer shadow-sm"
              onClick={() => setActiveModalPost(featuredPost)}
            >
              <div className="lg:col-span-7 h-72 lg:h-auto relative overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow-sm">
                  FEATURED ARTICLE
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-4">
                    <span className="text-sky-700 font-semibold">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-sm font-normal leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 group-hover:text-sky-900">
                  Read Full Featured Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="corporate-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 border border-slate-200 text-slate-800 text-[10px] font-mono px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-normal leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="w-full text-left text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center justify-between group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500 font-mono text-sm">
              No articles found matching "{searchQuery}".
            </div>
          )}

        </div>
      </main>

      <Footer />

      {/* Article Detail Modal */}
      <BlogPostModal post={activeModalPost} onClose={() => setActiveModalPost(null)} />
    </div>
  );
}
