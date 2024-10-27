import React from 'react'
import { ArrowRight, CheckCircle, BarChart, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex items-center justify-center">
          <img
            src="/img/img6.png"
            width={32}
            height={32}
            alt="WorkflowPro logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-lg font-bold">WorkflowPro</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#cta"
          >
            Get Started
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your Workflows, Amplify Your Business
                  </h1>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    Streamline operations, boost productivity, and grow your
                    small business with our intelligent automation platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                    href="#"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                    href="#"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/img/img5.jfif"
                  width={600}
                  height={400}
                  alt="WorkflowPro Dashboard"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Smart Task Management</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Automatically assign and track tasks across your team for
                  seamless collaboration.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <BarChart className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Insightful Analytics</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Gain valuable insights with real-time data visualization and
                  custom reports.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Zap className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Automated Workflows</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Create custom workflows that automate repetitive tasks and
                  save hours every week.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <p className="text-xl italic">
                  "WorkflowPro has transformed how we manage our projects. It's
                  intuitive, powerful, and has saved us countless hours."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/img/img7.jfif"
                    width={40}
                    height={40}
                    alt="Sarah Johnson"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                <p className="text-xl italic">
                  "The automation features have been a game-changer for our
                  small team. We're now able to compete with much larger
                  companies."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/img/img7.jfif"
                    width={40}
                    height={40}
                    alt="Michael Chen"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Founder, GrowFast Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Supercharge Your Business?
              </h2>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-700">
                Join thousands of small businesses already using WorkflowPro to
                automate their operations and boost productivity.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-50 px-8 text-sm font-medium text-zinc-900 shadow transition-colors hover:bg-zinc-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-900/90 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  className="inline-flex text-black h-10 items-center justify-center rounded-md border border-zinc-200 bg-orange-600 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-300 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © 2024 WorkflowPro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Home