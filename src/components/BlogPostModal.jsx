import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPostModal({ post, onClose }) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Article Header */}
          <div className="mb-6 pt-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-sky-700 mb-3">
              <span className="bg-sky-50 border border-sky-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-44 sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-slate-100 border border-slate-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Body */}
          <div className="prose max-w-none text-slate-700 text-xs sm:text-base leading-relaxed space-y-4 font-normal">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={idx} className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-2">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              return <p key={idx}>{paragraph.trim()}</p>;
            })}
          </div>

          {/* Footer Close CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Publications
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
