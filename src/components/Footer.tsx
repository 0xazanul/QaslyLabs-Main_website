import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800/40 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <Logo size={32} showText={true} textSize="xl" />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Find Vulnerabilities in your applications with Qasly Labs.
              </p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h4 className="text-white font-medium text-sm mb-4 tracking-wide">Platform</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Home
                </Link>
                <Link href="/tools" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Security Tools
                </Link>
                <Link href="/blog" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Research Blog
                </Link>
                <Link href="/contact" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-sm mb-4 tracking-wide">Services</h4>
              <div className="space-y-3">
                <span className="block text-neutral-400 text-sm">SAST Scanning</span>
                <span className="block text-neutral-400 text-sm">DAST Analysis</span>
                <span className="block text-neutral-400 text-sm">CVE Monitoring</span>
                <span className="block text-neutral-400 text-sm">Security Audit</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-sm mb-4 tracking-wide">Legal</h4>
              <div className="space-y-3">
                <Link href="/privacy-policy" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Qasly Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-neutral-500 text-xs tracking-wide">
                Built for Security Professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
