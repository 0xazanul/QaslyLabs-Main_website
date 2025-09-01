import React, { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto py-16 px-4 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-center bg-gradient-to-br from-neutral-100 via-neutral-400 to-neutral-700 bg-clip-text text-transparent">
        Contact Us
      </h2>
      <form
        className="w-full flex flex-col gap-4 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          className="bg-neutral-950 border border-neutral-800 rounded px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-md px-6 py-2 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {success && <div className="text-green-400 text-sm mt-2">{success}</div>}
        {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
      </form>
    </section>
  );
}
