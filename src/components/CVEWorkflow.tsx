"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CVEWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "CVE Published",
      description: "New vulnerability discovered",
      status: "active"
    },
    {
      id: 2,
      title: "Detection",
      description: "Our system identifies the threat",
      status: "pending"
    },
    {
      id: 3,
      title: "Analysis",
      description: "Checking your applications",
      status: "pending"
    },
    {
      id: 4,
      title: "Alert",
      description: "You receive instant notification",
      status: "pending"
    },
    {
      id: 5,
      title: "Patch",
      description: "Apply security updates",
      status: "pending"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-black border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-white mb-4">Security Workflow</h2>
          <p className="text-neutral-400 text-lg">
            From vulnerability discovery to protection
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full h-px bg-neutral-800"></div>
          <motion.div 
            className="absolute top-8 left-0 h-px bg-white"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((currentStep + 1) / steps.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Circle */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 mb-4 ${
                    index <= currentStep 
                      ? 'bg-white border-white' 
                      : 'bg-black border-neutral-600'
                  }`}
                  animate={{
                    scale: index === currentStep ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Step Content */}
                <motion.div 
                  className="text-center max-w-32"
                  animate={{
                    opacity: index <= currentStep ? 1 : 0.5,
                  }}
                >
                  <h3 className={`text-sm font-medium mb-1 ${
                    index <= currentStep ? 'text-white' : 'text-neutral-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs ${
                    index <= currentStep ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Current Step Highlight */}
          <motion.div
            className="mt-8 text-center"
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm">
                {steps[currentStep]?.title}: {steps[currentStep]?.description}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
