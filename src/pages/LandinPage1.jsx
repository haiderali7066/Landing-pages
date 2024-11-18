"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart, Zap, Menu, X } from "lucide-react";

export default function FuturisticDarkLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-50 bg-gray-800 border-b border-cyan-500/20">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-cyan-400">WorkflowPro</div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#features"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Pricing
              </a>
            </div>
            <button className="hidden md:block bg-cyan-500 text-gray-900 px-6 py-2 rounded-full hover:bg-cyan-400 transition duration-300">
              Get Started
            </button>
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <a
                href="#features"
                className="block py-2 text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block py-2 text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                Pricing
              </a>
              <button className="mt-4 w-full bg-cyan-500 text-gray-900 px-6 py-2 rounded-full hover:bg-cyan-400 transition duration-300">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className="relative h-screen flex items-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ opacity, scale }}
          >
          

            <video
              autoPlay
              loop
              muted
              className="object-cover w-full h-full opacity-30"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-3xl"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
                The Future of Workflow
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Revolutionize your business with AI-powered automation and
                cutting-edge analytics.
              </p>
              <button className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 transition duration-300">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-cyan-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Futuristic Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-cyan-500/20 rounded-full p-6 inline-block mb-4">
                  <CheckCircle className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  AI-Powered Automation
                </h3>
                <p className="text-gray-400">
                  Harness the power of artificial intelligence to automate
                  complex tasks and workflows.
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-cyan-500/20 rounded-full p-6 inline-block mb-4">
                  <BarChart className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Predictive Analytics
                </h3>
                <p className="text-gray-400">
                  Leverage machine learning to forecast trends and make
                  data-driven decisions.
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-cyan-500/20 rounded-full p-6 inline-block mb-4">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Quantum Integration
                </h3>
                <p className="text-gray-400">
                  Experience lightning-fast integrations with our
                  quantum-inspired architecture.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-cyan-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Testimonials from the Future
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gray-800 p-8 rounded-lg border border-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6">
                  "WorkflowPro's AI capabilities have propelled our productivity
                  into the next era. It's like having a team of future
                  scientists at our fingertips."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Dr. Sarah Quantum"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-cyan-300">
                      Dr. Sarah Quantum
                    </h4>
                    <p className="text-gray-400">CEO, NeuroTech Industries</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-800 p-8 rounded-lg border border-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-6">
                  "The predictive analytics have given us insights that feel
                  like glimpses into the future. We're now always steps ahead of
                  market trends."
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Zara Nanotech"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-cyan-300">
                      Zara Nanotech
                    </h4>
                    <p className="text-gray-400">
                      Founder, Quantum Leap Solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-cyan-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Futuristic Pricing Plans
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-900 p-8 rounded-lg border border-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Time Traveler
                </h3>
                <p className="text-4xl font-bold mb-6 text-white">
                  $99
                  <span className="text-xl font-normal text-gray-400">/mo</span>
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">Basic AI automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">Standard analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">5 team members</span>
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-gray-900 py-2 rounded-full hover:bg-cyan-400 transition duration-300">
                  Start Your Journey
                </button>
              </motion.div>
              <motion.div
                className="bg-cyan-500 p-8 rounded-lg transform scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Quantum Leaper
                </h3>
                <p className="text-4xl font-bold mb-6 text-gray-900">
                  $299
                  <span className="text-xl font-normal text-gray-700">/mo</span>
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                    <span className="text-gray-900">
                      Advanced AI automation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                    <span className="text-gray-900">Predictive analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-900 mr-2" />
                    <span className="text-gray-900">
                      Unlimited team members
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-cyan-400 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                  Quantum Leap Now
                </button>
              </motion.div>
              <motion.div
                className="bg-gray-900 p-8 rounded-lg border border-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Galactic Pioneer
                </h3>
                <p className="text-4xl font-bold mb-6 text-white">Custom</p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">Quantum integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">Custom AI solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">
                      Dedicated future consultant
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-gray-900 py-2 rounded-full hover:bg-cyan-400 transition duration-300">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">
                Ready to Revolutionize Your Workflow?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join the ranks of future-forward businesses already using
                WorkflowPro to redefine productivity.
              </p>
              <button className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 transition duration-300">
                Begin Your Future Now
                <ArrowRight className="inline-block ml-2" />
              </button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-cyan-500/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 to-gray-900"></div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-12 border-t border-cyan-500/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cyan-500/20 text-center">
            <p>&copy; 2024 WorkflowPro. Pioneering the future of work.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
