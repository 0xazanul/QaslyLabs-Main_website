"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Virtuals.io",
    logo: "/companies/virtuals.png",
    url: "https://virtuals.io"
  },
  {
    name: "Wallbit",
    logo: "/companies/wallbit.png",
    url: "https://wallbit.io"
  },
  {
    name: "UMA Protocol",
    logo: "/companies/uma.png",
    url: "https://umaproject.org"
  },
  {
    name: "Ethswarm",
    logo: "/companies/ethswarm.png",
    url: "https://ethswarm.org"
  },
  {
    name: "AcuityMD",
    logo: "/companies/acuity.png",
    url: "https://www.acuitymd.com"
  },
  {
    name: "Recharge",
    logo: "/companies/recharge.png",
    url: "https://getrecharge.com"
  },
  {
    name: "Verily",
    logo: "/companies/verily.png",
    url: "https://verily.com"
  },
  {
    name: "IBM",
    logo: "/companies/ibm.png",
    url: "https://ibm.com"
  }
];

export default function FloatingCompaniesBar() {
  // Triple the companies for seamless infinite scrolling
  const infiniteCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="w-full py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Companies Secured
          </span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-neutral-400 text-lg"
        >
          Trusted by leading organizations worldwide
        </motion.p>
      </div>

      {/* Single scrolling row - Left to Right */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [-100, -2400]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 items-center whitespace-nowrap"
          >
            {infiniteCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
                onClick={() => window.open(company.url, '_blank')}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-52 h-24 bg-white/95 backdrop-blur-sm border border-neutral-300/50 rounded-2xl flex items-center justify-center hover:border-blue-500/50 hover:bg-white hover:shadow-2xl transition-all duration-500 shadow-lg group-hover:shadow-blue-500/20 overflow-hidden group">
                  {/* Company Logo */}
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={160}
                      height={50}
                      className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Subtle glow border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Enhanced gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
