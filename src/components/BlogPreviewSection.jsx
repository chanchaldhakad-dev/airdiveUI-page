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
    <section id="blog" className="relative py-28 bg-[#0a0b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>INSIGHTS & ARTICLES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Latest Articles From <span className="text-gradient-sky">AirDive Blog</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-sky-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="natural-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a0b10]/90 border border-white/10 text-slate-300 text-[10px] font-mono px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">
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
                  className="w-full text-left text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center justify-between group/btn"
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
