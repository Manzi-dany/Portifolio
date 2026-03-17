"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Target, Lightbulb, CheckCircle, Wrench } from "lucide-react";
import { aboutContent } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Driven by Data, Inspired by Impact
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Combining biotechnology expertise with data science skills to create
            meaningful solutions in public health and beyond.
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">My Story</h3>
            </div>
            <div className="prose prose-slate max-w-none">
              {aboutContent.summary.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-slate-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What I Do & Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="bg-emerald-50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">What I Do</h3>
              </div>
              <div className="space-y-4">
                {aboutContent.whatIDo?.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutContent.tools?.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-6">
                {aboutContent.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-emerald-600 font-medium">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-slate-600 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Certifications</h3>
              </div>
              <div className="space-y-4">
                {aboutContent.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <p className="text-slate-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">My Mission</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">My Philosophy</h3>
              </div>
              <div className="text-slate-700 leading-relaxed space-y-2">
                {aboutContent.philosophy.split("\n\n").slice(1).map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.split("\n").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
