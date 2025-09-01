
"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/Logo";

import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactCTA from "@/components/ContactCTA";
import CVEWorkflow from "@/components/CVEWorkflow";
import LaunchButton from "@/components/LaunchButton";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* Hero Section - Minimal */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-4 bg-black relative flex items-center min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
          <AnimatedGridBackground />
          <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 text-white leading-tight tracking-tight" 
              >
                Qasly Labs
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-neutral-300 max-w-3xl mx-auto leading-relaxed px-4 text-center" 
              >
                Find vulnerabilities in Vibe-coded applications
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-8 sm:mt-12 px-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-medium bg-white text-black hover:bg-neutral-100 transition-colors duration-200 rounded-md"
                >
                  <Link href="/contact">
                    Join Waitlist
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Trusted By Section - Minimal */}
        <section className="w-full py-12 sm:py-16 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs sm:text-sm text-neutral-500 mb-6 sm:mb-8 tracking-wide">OUR TOOL HAS ALREADY FOUND VULNERABILITIES IN ALL THESE APPLICATIONS</p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
                {["Acuity", "IBM", "Verily", "Recharge", "UMA", "EthSwarm", "Virtuals", "Wallbit", "Canva"].map((company, i) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className="text-neutral-400 font-medium text-sm sm:text-base tracking-wide hover:text-white transition-colors duration-200"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section - Minimal */}
        <section className="w-full py-16 sm:py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3 sm:mb-4 tracking-tight">
                Security Platform
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto px-4">
                Professional vulnerability detection and monitoring
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "Vulnerability Detection",
                  description: "Automated scanning and identification of security vulnerabilities in your codebase",
                  metric: "10K+ threats detected"
                },
                {
                  title: "Continuous Monitoring",
                  description: "Real-time monitoring with instant notifications for security threats",
                  metric: "< 1min response time"
                }
               
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="pb-6 sm:pb-8 group hover:bg-neutral-900/20 transition-colors duration-300 rounded-lg px-4 -mx-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                      <p className="text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors text-sm sm:text-base">{feature.description}</p>
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wide sm:ml-8 mt-2 sm:mt-0">
                      {feature.metric}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CVE Workflow Animation */}
        <CVEWorkflow />
        
        {/* Blog Preview */}
        <BlogPreviewSection />
        
        {/* Contact CTA */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
