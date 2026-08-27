import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/airdiveData';
import { Search, Calendar, Clock, ArrowRight, ArrowLeft, Tag, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-[#05060b] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AirDive Main Website
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>AIRDIVE RESEARCH & INSIGHTS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              Engineering <span className="text-gradient-cyan">Knowledge Hub</span>
            </h1>
            <p className="text-slate-400 text-base font-light">
              Deep dives into autonomous AI agents, WebGL shaders, cloud infrastructure, and enterprise UX.
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
                className="w-full pl-11 pr-4 py-3 rounded-full bg-slate-950/60 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-all shadow-lg"
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
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
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
              className="glass-card rounded-3xl overflow-hidden mb-16 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 group cursor-pointer"
              onClick={() => setActiveModalPost(featuredPost)}
            >
              <div className="lg:col-span-7 h-72 lg:h-auto relative overflow-hidden bg-slate-900">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono px-3 py-1 rounded-full backdrop-blur-md">
                  FEATURED ARTICLE
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                    <span className="text-cyan-400">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
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
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 border border-white/10"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#05060b]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-[10px] font-mono px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-xs font-light leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/5">
                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="w-full text-left text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between group/btn"
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
