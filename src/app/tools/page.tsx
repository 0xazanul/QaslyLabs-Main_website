import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const tools = [
  {
    id: 'subchain',
    name: 'SubChain',
    short: 'Advanced web reconnaissance platform for bug bounty hunters.',
    description:
      'Subdomain enumeration, technology detection, port scanning and AI security analysis — fast, local-first and production ready.',
    href: 'https://github.com/0xazanul/SubChain_Main'
  }
  
];

export default function Tools() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-12 sm:py-20 w-full">
        <div className="w-full max-w-4xl mx-auto">
          <header className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">Open source tools</h1>
            <p className="text-neutral-400 mt-3 px-4">Free, useful tools for bug bounty hunters and security researchers.</p>
          </header>

          <nav className="flex justify-center gap-6 mb-6 sm:mb-8 text-sm">
            <Link href="#subchain" className="text-neutral-400 hover:text-white transition-colors">SubChain</Link>
          </nav>

          <section id="all" className="space-y-8 sm:space-y-10">
            {tools.map((t, idx) => (
              <article key={t.id} id={t.id} className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-0 ${idx !== tools.length - 1 ? 'pb-6 sm:pb-8' : ''}`}>
                <div className="lg:flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-9 h-9 rounded-sm bg-neutral-800 flex items-center justify-center text-white font-semibold flex-shrink-0">{t.name.charAt(0)}</div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium text-white">{t.name}</h3>
                      <p className="text-neutral-400 mt-1 text-sm">{t.short}</p>
                    </div>
                  </div>
                  <p className="text-neutral-400 max-w-2xl leading-relaxed text-sm pl-13 lg:pl-0">{t.description}</p>
                </div>

                <div className="lg:w-44 lg:flex lg:items-center lg:justify-end">
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto lg:w-auto px-4 py-2 border border-neutral-800 text-white rounded-md text-sm font-medium hover:bg-neutral-900 transition-colors text-center"
                    >
                      View on GitHub
                    </a>
                </div>
              </article>
            ))}
          </section>

          <footer className="mt-10 sm:mt-12 text-center text-neutral-500">
            <p className="text-sm px-4">Want a tool added? Open an issue or PR on our GitHub — contributions welcome.</p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
}
