"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="w-full py-20 px-4 bg-black border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-medium mb-4 text-white">
          Get Started
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          Contact our team to discuss your security requirements
        </p>
        <Link href="/contact">
          <Button 
            size="lg"
            className="px-6 py-3 text-base font-medium bg-white text-black hover:bg-neutral-100 transition-colors duration-200 rounded-md"
          >
            Contact Sales
          </Button>
        </Link>
      </div>
    </section>
  );
}
