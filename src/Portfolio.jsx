import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10 font-sans">
      <motion.header 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Harshit Pal</h1>
        <p className="text-lg text-gray-300 mb-4">Full Stack Developer | MERN Stack </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-transform transform hover:scale-110"><Github /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform transform hover:scale-110"><Linkedin /></a>
          <a href="mailto:your.email@example.com" className="hover:text-pink-400 transition-transform transform hover:scale-110"><Mail /></a>
        </div>
      </motion.header>

      <motion.section 
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">E-Commerce Chatbot</h3>
                <p className="text-gray-400 text-sm mt-2">Built with MERN stack. Integrates chatbot to assist users.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">Task Manager</h3>
                <p className="text-gray-400 text-sm mt-2">A full-stack task manager app using Node, MongoDB and React.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-400 leading-relaxed">I'm a passionate developer currently exploring full stack development using the MERN stack. I love building web apps, contributing to open source, and learning new tools and frameworks.</p>
      </motion.section>

      <motion.section 
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript", "Git", "Next.js"].map((skill, i) => (
            <motion.div
              key={skill}
              className="bg-gray-800 p-3 rounded-lg hover:shadow-md hover:shadow-cyan-500/20 transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <p className="text-white font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer 
        className="mt-24 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © 2025 Harshit Pal. All rights reserved.
      </motion.footer>
    </div>
  );
}
