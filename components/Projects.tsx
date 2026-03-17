"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Microscope, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/content";

const categories = ["All", "Data Science", "Biotech & Public Health", "Entrepreneurship"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Data Science") return project.category === "Data Science";
    if (activeCategory === "Biotech & Public Health") return project.category === "Biotech & Public Health";
    if (activeCategory === "Entrepreneurship") return project.category === "Entrepreneurship";
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Science":
        return <Folder className="h-5 w-5" />;
      case "Biotech & Public Health":
        return <Microscope className="h-5 w-5" />;
      case "Entrepreneurship":
        return <Rocket className="h-5 w-5" />;
      default:
        return <Folder className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of my work in data science, biotechnology research, and
            entrepreneurial ventures.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                          {getCategoryIcon(project.category)}
                        </div>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-4">{project.description}</p>

                    {/* Project Details */}
                    <div className="space-y-3 mb-4">
                      {project.problem && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Problem:</span>
                          <p className="text-sm text-slate-600">{project.problem}</p>
                        </div>
                      )}
                      {project.solution && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Solution:</span>
                          <p className="text-sm text-slate-600">{project.solution}</p>
                        </div>
                      )}
                      {project.mission && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Mission:</span>
                          <p className="text-sm text-slate-600">{project.mission}</p>
                        </div>
                      )}
                      {project.impact && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Impact:</span>
                          <p className="text-sm text-slate-600">{project.impact}</p>
                        </div>
                      )}
                      {project.outcomes && (
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Outcomes:</span>
                          <p className="text-sm text-slate-600">{project.outcomes}</p>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-emerald-200 text-emerald-700 bg-emerald-50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All GitHub */}
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
            <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
