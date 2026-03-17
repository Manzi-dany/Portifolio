"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { personalInfo } from "@/data/content";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/30"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-emerald-600">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl text-slate-600 mb-6 font-light"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-slate-500 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I build data-driven solutions that improve healthcare systems and advance 
              biotechnology through analytics, machine learning, and intelligent systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={() => handleScroll("#projects")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => handleScroll("#contact")}
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 blur-2xl opacity-20 scale-110" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Manzi Dany"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Open to Work</p>
                    <p className="text-sm text-slate-500">Available for opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center text-slate-400 hover:text-emerald-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
