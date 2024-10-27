import React from "react";

import { ArrowRight, CheckCircle, BarChart, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <img
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="WorkflowPro logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-lg font-bold">WorkflowPro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your Workflows, Amplify Your Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline operations, boost productivity, and grow your
                    small business with our intelligent automation platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="inline-flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button variant="outline">Book a Demo</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="WorkflowPro Dashboard"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Smart Task Management</h3>
                <p className="text-muted-foreground">
                  Automatically assign and track tasks across your team for
                  seamless collaboration.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Insightful Analytics</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights with real-time data visualization and
                  custom reports.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Create custom workflows that automate repetitive tasks and
                  save hours every week.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-xl italic">
                  "WorkflowPro has transformed how we manage our projects. It's
                  intuitive, powerful, and has saved us countless hours."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Sarah Johnson"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-xl italic">
                  "The automation features have been a game-changer for our
                  small team. We're now able to compete with much larger
                  companies."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Michael Chen"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Founder, GrowFast Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Supercharge Your Business?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of small businesses already using WorkflowPro to
                automate their operations and boost productivity.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-background text-primary hover:bg-background/90">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  variant="outline"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 WorkflowPro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
