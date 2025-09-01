"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LaunchAnimation from "./LaunchAnimation";

export default function LaunchButton() {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleLaunch = () => {
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    // Launch the platform
    window.open("http://localhost:3001/", "_blank");
  };

  return (
    <>
      <Button
        onClick={handleLaunch}
        size="lg"
        className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base font-medium bg-white text-black hover:bg-neutral-100 transition-colors duration-200 rounded-md border-none"
      >
        Launch Platform
      </Button>
      
      <LaunchAnimation 
        isVisible={showAnimation} 
        onComplete={handleAnimationComplete} 
      />
    </>
  );
}
