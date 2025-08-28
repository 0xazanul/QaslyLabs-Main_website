import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-20 px-4 text-white min-h-[70vh]">
        <Link href="/" className="inline-block mb-8 text-sm text-neutral-400 hover:text-white transition underline">&larr; Go back</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Privacy Policy</h1>
        <p className="mb-8 text-neutral-300 text-lg leading-relaxed">At Qasly Labs, your privacy and data security are our top priorities. This Privacy Policy details how we collect, use, and protect your information when you use our platform and services.</p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li><span className="font-semibold text-white">Personal Information:</span> Name, email address, company, and other details you provide when signing up or contacting us.</li>
            <li><span className="font-semibold text-white">Usage Data:</span> Analytics about how you use our platform, including pages visited, features used, and device/browser information.</li>
            <li><span className="font-semibold text-white">Cookies:</span> We use cookies and similar technologies to enhance your experience and analyze usage.</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>To provide, maintain, and improve our services</li>
            <li>To communicate with you about updates, security alerts, and support</li>
            <li>To personalize your experience and deliver relevant content</li>
            <li>To ensure the security and integrity of our platform</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">3. Data Security</h2>
          <p className="text-neutral-300 text-base">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. Access to your information is restricted to authorized personnel only.</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">4. Your Rights & Choices</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
            <li>Contact us for any privacy-related concerns</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">5. Changes to This Policy</h2>
          <p className="text-neutral-300 text-base">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.</p>
        </div>
        <p className="mt-8 text-neutral-400 text-base">If you have questions or need more information, contact us at <a href="mailto:support@qaslylabs.xyz" className="underline hover:text-white">support@qaslylabs.xyz</a>.</p>
      </div>
      <Footer />
    </>
  );
}
