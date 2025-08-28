import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-br from-neutral-100 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
        Blog
      </h2>
      <div className="flex flex-col gap-6">
        {/* Example blog post, replace with dynamic mdx support later */}
        <article className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-lg font-semibold mb-1 text-neutral-100">How Qasly Labs Combines SAST & DAST for Next-Gen Security</h3>
          <p className="text-neutral-400 text-sm mb-2">Discover how our hybrid engine finds vulnerabilities in real time and keeps your apps safe.</p>
          <Link href="#" className="text-primary underline underline-offset-4 text-sm">Read more</Link>
        </article>
      </div>
    </section>
  );
}
