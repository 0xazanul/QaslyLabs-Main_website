"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Code Scanning",
    description: "Our engine analyzes your source code for security vulnerabilities.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Vulnerability Detection",
    description: "We identify security issues and categorize them by severity.",
    icon: "⚠️"
  },
  {
    id: 3,
    title: "Risk Assessment",
    description: "Each vulnerability is assessed for its potential impact on your systems.",
    icon: "⚖️"
  },
  {
    id: 4,
    title: "Remediation Guidance",
    description: "Detailed instructions on how to fix each security issue.",
    icon: "🛠️"
  }
];

export default function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Our Security Workflow
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            How we find and remediate vulnerabilities in your applications
          </p>
        </div>
        
        <div className="relative">
          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 relative mb-12 md:mb-0">
                <motion.div
                  className={`flex flex-col items-center text-center relative z-10 p-4 mx-4 ${
                    index === activeStep 
                      ? "scale-110 transition-transform duration-300" 
                      : "opacity-60"
                  }`}
                >
                  <div className={`w-16 h-16 flex items-center justify-center text-2xl rounded-full mb-4 border-2 transition-colors duration-300 ${
                    index === activeStep 
                      ? "border-white bg-black text-white" 
                      : "border-neutral-700 bg-neutral-900 text-neutral-400"
                  }`}>
                    <span>{step.icon}</span>
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    index === activeStep ? "text-white" : "text-neutral-400"
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm transition-colors duration-300 ${
                    index === activeStep ? "text-neutral-300" : "text-neutral-500"
                  }`}>
                    {step.description}
                  </p>
                </motion.div>
                
                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-neutral-800">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={index < activeStep ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 h-full bg-white"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeStep ? "bg-white" : "bg-neutral-700"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
