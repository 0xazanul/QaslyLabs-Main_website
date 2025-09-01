export default function ContactSection() {
  return (
    <section className="w-full max-w-xl mx-auto py-16 px-4 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-center bg-gradient-to-br from-neutral-100 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
        Contact Us
      </h2>
      <form className="w-full flex flex-col gap-4 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 shadow-sm">
        <input
          type="email"
          placeholder="Your email"
          className="bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your message"
          className="bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-md px-6 py-2 font-semibold hover:bg-primary/90 transition-colors"
        >
          Send
        </button>
      </form>
    </section>
  );
}
