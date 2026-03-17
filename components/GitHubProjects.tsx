"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const languageColors: Record<string, string> = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  R: "bg-blue-400",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Jupyter: "bg-orange-400",
  "Jupyter Notebook": "bg-orange-400",
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError("Could not load GitHub repositories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-slate-500">{error}</p>
            <a
              href="https://github.com/Manzi-dany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline mt-2 inline-block"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-medium mb-4">
            <Github className="h-4 w-4 inline mr-2" />
            Live from GitHub
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            My GitHub Repositories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Automatically synced with my GitHub profile. These repositories showcase
            my ongoing work in data science, biotechnology, and software development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-slate-200">
            <span className="text-2xl font-bold text-slate-900">{repos.length}</span>
            <span className="text-slate-500 ml-2">Repositories</span>
          </div>
          <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-slate-200">
            <span className="text-2xl font-bold text-slate-900">
              {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
            </span>
            <span className="text-slate-500 ml-2">Total Stars</span>
          </div>
          <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-slate-200">
            <span className="text-2xl font-bold text-slate-900">
              {new Set(repos.map((r) => r.language).filter(Boolean)).size}
            </span>
            <span className="text-slate-500 ml-2">Languages</span>
          </div>
        </motion.div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                        <Code2 className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                    {repo.description || "No description available"}
                  </p>

                  {/* Language & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              languageColors[repo.language] || "bg-slate-400"
                            }`}
                          />
                          <span className="text-sm text-slate-600">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs border-slate-200 text-slate-600"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs border-slate-200 text-slate-400">
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-400">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Manzi-dany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white">
              <Github className="h-4 w-4 mr-2" />
              View All Repositories on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
