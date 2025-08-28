import Link from "next/link";

export default function Footer() {
  return (
  <footer className="w-full py-12 px-4 flex flex-col items-center border-t border-neutral-800/50 mt-16 relative z-10" style={{backgroundColor: '#000000'}}>
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-white mb-3">Qasly Labs</h3>
          <p className="text-neutral-400 text-sm max-w-xs text-center md:text-left">
            Professional security research services for modern applications. Find vulnerabilities before they become exploits.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-medium mb-1">Pages</h4>
            <Link href="/" className="text-neutral-400 hover:text-white text-sm">Home</Link>
            <Link href="/blog" className="text-neutral-400 hover:text-white text-sm">Blog</Link>
            <Link href="/contact" className="text-neutral-400 hover:text-white text-sm">Contact</Link>
            <Link href="/tools" className="text-neutral-400 hover:text-white text-sm">Tools</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-medium mb-1">Services</h4>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm">SAST Scanning</Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm">DAST Analysis</Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm">CVE Monitoring</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-medium mb-1">Legal</h4>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-5xl mt-12 pt-6 border-t border-neutral-800/30 flex flex-col md:flex-row justify-between items-center">
        <span className="text-neutral-500 text-sm">© {new Date().getFullYear()} Qasly Labs. All rights reserved.</span>
        <span className="text-neutral-500 text-sm mt-2 md:mt-0">Made with precision by Qasly Labs Team</span>
      </div>
    </footer>
  );
}
