"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, contactInfo } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations,
            or just having a conversation about data science and biotechnology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 mb-8">
              Feel free to reach out through any of these channels. I typically
              respond within 24-48 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-slate-900 font-medium hover:text-emerald-600 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="text-slate-900 font-medium">
                      {contactInfo.address}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Send className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Availability</p>
                    <p className="text-slate-900 font-medium">
                      {contactInfo.availability}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-slate-600 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg text-blue-700 hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-100 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-slate-600 mb-6">
                  Whether you&apos;re looking for a data analyst, biotech researcher,
                  or someone who bridges both worlds, I&apos;d love to hear from you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-slate-700">
                      <span className="font-semibold">Data Analysis Projects:</span>{" "}
                      Public health analytics, healthcare dashboards, predictive modeling
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-slate-700">
                      <span className="font-semibold">Biotech Research:</span>{" "}
                      Laboratory data analysis, research collaboration, innovation projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-slate-700">
                      <span className="font-semibold">Consulting:</span>{" "}
                      Data strategy, analytics implementation, training & mentorship
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href={`mailto:${contactInfo.email}`}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Me an Email
                    </Button>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-6 text-lg"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                </div>

                {/* Download CV Note */}
                <div className="mt-8 pt-6 border-t border-emerald-200">
                  <p className="text-sm text-slate-600 text-center">
                    Looking for my full CV?{" "}
                    <a
                      href={`mailto:${contactInfo.email}?subject=CV Request`}
                      className="text-emerald-600 hover:underline font-medium"
                    >
                      Request it via email
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
