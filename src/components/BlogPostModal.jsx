import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPostModal({ post, onClose }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#05060b]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#090b11] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Article Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
              <span className="bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 bg-slate-900 border border-white/5">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Body */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={idx} className="font-display text-xl font-bold text-white mt-6 mb-2">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              return <p key={idx}>{paragraph.trim()}</p>;
            })}
          </div>

          {/* Footer Close CTA */}
          <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
