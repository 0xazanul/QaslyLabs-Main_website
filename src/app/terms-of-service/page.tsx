import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-20 px-4 text-white min-h-[70vh]">
        <Link href="/" className="inline-block mb-8 text-sm text-neutral-400 hover:text-white transition underline">&larr; Go back</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Terms of Service</h1>
        <p className="mb-8 text-neutral-300 text-lg leading-relaxed">These Terms of Service govern your use of the Qasly Labs platform. By accessing or using our services, you agree to these terms. Please read them carefully.</p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">1. Use of Service</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>You must comply with all applicable laws and regulations</li>
            <li>Do not misuse, disrupt, or attempt to gain unauthorized access to our platform</li>
            <li>Do not use our services for illegal or harmful activities</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">2. Accounts & Security</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>Provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">3. Intellectual Property</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>All content, trademarks, and software on the platform are the property of Qasly Labs or its licensors</li>
            <li>You may not copy, modify, or distribute any part of our platform without permission</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">4. Limitation of Liability</h2>
          <ul className="list-disc ml-6 text-neutral-300 text-base space-y-1">
            <li>Qasly Labs is not liable for indirect, incidental, or consequential damages</li>
            <li>Service is provided "as is" without warranties of any kind</li>
          </ul>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">5. Changes to Terms</h2>
          <p className="text-neutral-300 text-base">We may update these Terms of Service from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
        </div>
        <p className="mt-8 text-neutral-400 text-base">If you have questions or need more information, contact us at <a href="mailto:support@qaslylabs.xyz" className="underline hover:text-white">support@qaslylabs.xyz</a>.</p>
      </div>
      <Footer />
    </>
  );
}
