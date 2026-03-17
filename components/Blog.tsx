"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts as defaultBlogPosts } from "@/data/content";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts from localStorage or use defaults
    const savedPosts = localStorage.getItem("blog_posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(defaultBlogPosts);
    }

    // Listen for storage changes (when admin updates posts)
    const handleStorageChange = () => {
      const updatedPosts = localStorage.getItem("blog_posts");
      if (updatedPosts) {
        setPosts(JSON.parse(updatedPosts));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Blog & Reflections
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Thoughts on career development, data science, biotechnology, and
            navigating the modern professional landscape.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {Math.ceil(post.content.length / 1000)} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-emerald-200 text-emerald-700 bg-emerald-50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={`#blog-${post.id}`}
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Full Blog Posts */}
        <div className="mt-20 space-y-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              id={`blog-${post.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {Math.ceil(post.content.length / 1000)} min read
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {post.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 bg-emerald-50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="prose prose-slate max-w-none">
                {post.content.split("\n\n").map((paragraph, pIndex) => {
                  if (paragraph.startsWith("• ")) {
                    // List items
                    return (
                      <ul key={pIndex} className="list-disc list-inside mb-4 text-slate-600">
                        {paragraph.split("\n").map((item, iIndex) => (
                          <li key={iIndex} className="mb-1">
                            {item.replace("• ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    // Numbered list
                    return (
                      <div key={pIndex} className="mb-4">
                        {paragraph.split("\n").map((item, iIndex) => (
                          <p key={iIndex} className="text-slate-600 mb-2">
                            {item}
                          </p>
                        ))}
                      </div>
                    );
                  } else if (paragraph.includes(":")) {
                    // Section headers
                    const [title, ...content] = paragraph.split("\n");
                    return (
                      <div key={pIndex} className="mb-4">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                          {title}
                        </h4>
                        {content.map((line, cIndex) => (
                          <p key={cIndex} className="text-slate-600 mb-2">
                            {line}
                          </p>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <p key={pIndex} className="text-slate-600 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
