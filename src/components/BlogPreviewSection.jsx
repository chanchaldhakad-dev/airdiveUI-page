import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/airdiveData';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import BlogPostModal from './BlogPostModal';

export default function BlogPreviewSection() {
  const [selectedPost, setSelectedPost] = useState(null);
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="relative py-28 bg-[#05060b] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>INSIGHTS & ARTICLES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Latest From <span className="text-gradient-cyan">AirDive Blog</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-cyan-400 hover:text-white bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-200"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 border border-white/10"
            >
              <div>
                {/* Image */}
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

                {/* Content */}
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

              {/* Action Read More */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between group/btn"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
