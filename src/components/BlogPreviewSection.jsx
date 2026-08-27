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
    <section id="blog" className="relative py-28 bg-[#f3f4f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#0078d4] uppercase mb-3 block">
              AIRDIVE PUBLICATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Engineering Insights & <span className="text-[#0078d4]">Articles</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-bold text-slate-700 hover:text-[#0078d4] bg-white border border-slate-300 transition-all shadow-xs"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
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
              whileHover={{ y: -4 }}
              className="fluent-card rounded-xl overflow-hidden flex flex-col justify-between group border border-slate-200"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0078d4] text-white text-[10px] font-mono px-3 py-1 rounded font-bold shadow-xs">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#0078d4]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0078d4] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs font-normal leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Action Read More */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left text-xs font-bold text-[#0078d4] hover:text-[#005a9e] flex items-center justify-between group/btn"
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
