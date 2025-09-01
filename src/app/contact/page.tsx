"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    
    console.log('Contact form submitting:', formData);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
      
      const data = await res.json();
      console.log('API Response:', data);
      
      if (data.success) {
        setSuccess("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16 w-full">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight">Contact</h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Get in touch with us.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200 text-base sm:text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200 text-base sm:text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200 text-base sm:text-lg"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200 resize-none text-base sm:text-lg"
                    placeholder="Tell us about your security requirements..."
                  />
                </div>

                <div className="pt-6 sm:pt-8">
                  <button
                    type="submit"
                    onClick={() => console.log('Submit button clicked!')}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium hover:bg-neutral-300 transition-colors duration-200 text-base sm:text-lg tracking-wide disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  
                  {success && (
                    <div className="mt-4 py-3 px-4 bg-black border border-black rounded text-white">
                      {success}
                    </div>
                  )}
                  
                  {error && (
                    <div className="mt-4 py-3 px-4 bg-red-900/30 border border-red-800 rounded text-red-400">
                      {error}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}