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
    <section id="blog" className="relative py-28 bg-[#eaeded] border-b border-[#d5d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#007185] uppercase mb-3 block">
              AIRDIVE PUBLICATIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f1111]">
              Engineering Insights & <span className="text-[#007185]">Articles</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="btn-amazon-secondary px-6 py-3 text-xs flex items-center gap-2"
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
              className="amazon-card rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#131921] text-[#febd69] text-[10px] font-mono px-2.5 py-1 rounded font-bold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#565959] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#007185]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f1111] mb-3 group-hover:text-[#007185] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-[#565959] text-xs font-normal leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Action Read More */}
              <div className="px-6 pb-6 pt-2 border-t border-[#eaeded]">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left text-xs font-semibold text-[#007185] hover:text-[#c7511f] flex items-center justify-between group/btn"
                >
                  <span>Read Full Article</span>
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
