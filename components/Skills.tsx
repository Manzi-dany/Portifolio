"use client";

import { motion } from "framer-motion";
import { Code, Microscope, Users, BarChart3 } from "lucide-react";
import { skills } from "@/data/content";

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

function SkillBar({ name, level, category, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-slate-700">{name}</span>
        <span className="text-sm text-slate-500">{category}</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A blend of technical data science skills, biotechnology expertise,
            and professional competencies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Technical Skills</h3>
                <p className="text-sm text-slate-500">Programming & Analytics</p>
              </div>
            </div>
            <div>
              {skills.technical.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Biotech Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Microscope className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Biotech & Healthcare</h3>
                <p className="text-sm text-slate-500">Laboratory & Public Health</p>
              </div>
            </div>
            <div>
              {skills.biotech.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Professional Skills</h3>
                <p className="text-sm text-slate-500">Soft Skills & Competencies</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-slate-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full">
            <BarChart3 className="h-5 w-5 text-emerald-600" />
            <span className="text-slate-700">
              Proficient in Python, SQL, R, Power BI, Tableau, and Excel
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
