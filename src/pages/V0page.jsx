"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, BarChart, Zap, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-40 bg-white bg-opacity-80 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="WorkflowPro logo"
                  className="h-8 w-8"
                />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
                variants={fadeIn}
              >
                Streamline Your Workflow
              </motion.h1>
              <motion.p
                className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8"
                variants={fadeIn}
              >
                Automate, optimize, and grow your business with our powerful
                SaaS platform.
              </motion.p>
              <motion.div variants={fadeIn}>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Powerful Features for Your Business
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Everything you need to take your workflow to the next level.
              </p>
            </motion.div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  className="flex flex-col items-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
                    Task Automation
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                    Automate repetitive tasks and free up your team's time for
                    more important work.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
                    Advanced Analytics
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                    Gain insights into your business performance with detailed
                    reports and dashboards.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
                    Seamless Integration
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                    Connect with your favorite tools and services for a unified
                    workflow experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Loved by Businesses Everywhere
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                See what our customers have to say about WorkflowPro.
              </p>
            </motion.div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "WorkflowPro has revolutionized how we manage our projects.
                    It's intuitive, powerful, and has saved us countless hours."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Sarah Johnson"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Sarah Johnson
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        CEO, TechStart Inc.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "The automation features have been a game-changer for our
                    small team. We're now able to compete with much larger
                    companies."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Michael Chen"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Michael Chen
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Founder, GrowFast Solutions
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "WorkflowPro's analytics have given us insights we never had
                    before. It's completely changed how we make decisions."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Emily Rodriguez"
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Emily Rodriguez
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        COO, DataDrive Analytics
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4  sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Choose the plan that's right for your business.
              </p>
            </motion.div>
            <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              <motion.div
                className="relative p-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm flex flex-col"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Starter
                  </h3>
                  <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">
                      $29
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </p>
                  <p className="mt-6 text-gray-500 dark:text-gray-300">
                    Perfect for small teams just getting started.
                  </p>
                  <ul className="mt-6 space-y-6">
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Up to 5 team members
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Basic workflow automation
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Standard analytics
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-purple-700"
                >
                  Get started
                </a>
              </motion.div>
              <motion.div
                className="relative p-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm flex flex-col"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Professional
                  </h3>
                  <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">
                      $99
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </p>
                  <p className="mt-6 text-gray-500 dark:text-gray-300">
                    For growing businesses that need more power.
                  </p>
                  <ul className="mt-6 space-y-6">
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Up to 20 team members
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Advanced workflow automation
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Advanced analytics and reporting
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-purple-700"
                >
                  Get started
                </a>
              </motion.div>
              <motion.div
                className="relative p-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-sm flex flex-col"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Enterprise
                  </h3>
                  <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">
                      Custom
                    </span>
                  </p>
                  <p className="mt-6 text-gray-500 dark:text-gray-300">
                    For large organizations with complex needs.
                  </p>
                  <ul className="mt-6 space-y-6">
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Unlimited team members
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Custom workflow solutions
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
                      <span className="ml-3 text-gray-500 dark:text-gray-300">
                        Dedicated account manager
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-purple-700"
                >
                  Contact sales
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-purple-700 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                variants={fadeIn}
              >
                Ready to Transform Your Workflow?
              </motion.h2>
              <motion.p
                className="mt-4 max-w-2xl mx-auto text-xl text-purple-100"
                variants={fadeIn}
              >
                Join thousands of businesses already using WorkflowPro to
                streamline their operations.
              </motion.p>
              <motion.div
                className="mt-8 flex justify-center"
                variants={fadeIn}
              >
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 md:text-lg"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 WorkflowPro, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <motion.div animate={{ x: 100 }} />
    </div>
  );
}
