// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Factory, Phone } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
//       {/* Background Image */}
//       <Image
//         src="/images/hero.jpg"
//         alt="HMC Refractory Solution"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           {/* Badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
//             <Factory className="h-4 w-4 text-brand-yellow" />
//             Industrial Refractory Solutions
//           </div>

//           {/* Heading */}
//           <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
//             Advanced Refractory Solutions

//             <span className="mt-2 block text-brand-yellow">
//               For High-Temperature Industries
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
//             HMC Refractory Solution delivers premium refractory products and
//             industrial services that improve durability, efficiency, and
//             performance in high-temperature environments.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
//             >
//               Get Consultation
//               <ArrowRight className="h-5 w-5" />
//             </Link>

//             <a
//               href="tel:+923001234567"
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-yellow hover:bg-white/20"
//             >
//               <Phone className="h-5 w-5" />
//               Call Now
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




//option 2 


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Factory,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Hero() {
     const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-2 text-sm font-medium text-brand-black">
              <Factory className="h-4 w-4 text-brand-yellow" />
              Industrial Refractory Solutions
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-6xl">
              Reliable Refractory
              <span className="block text-brand-yellow">
                Solutions for Every Industry
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              HMC Refractory Solution provides premium refractory products,
              installation services, and industrial solutions designed for
              steel, cement, glass, foundry, and high-temperature industries.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 font-semibold text-black transition hover:bg-yellow-500"
              >
                Get Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>

           <a
  href={`tel:+${phoneNumber}`}
  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-brand-yellow hover:text-brand-yellow"
>
  <Phone className="h-5 w-5" />
  Call Now
</a>
            </div>

            {/* Features */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-brand-yellow" />
                <div>
                  <h3 className="font-semibold text-brand-black">
                    Quality
                  </h3>
                  <p className="text-sm text-gray-500">
                    Premium Products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Factory className="h-7 w-7 text-brand-yellow" />
                <div>
                  <h3 className="font-semibold text-brand-black">
                    Experience
                  </h3>
                  <p className="text-sm text-gray-500">
                    Industry Expertise
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-brand-yellow" />
                <div>
                  <h3 className="font-semibold text-brand-black">
                    Trusted
                  </h3>
                  <p className="text-sm text-gray-500">
                    Reliable Support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="HMC Refractory Solution"
                width={700}
                height={650}
                priority
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-gray-500">Serving Industries</p>
              <h3 className="mt-1 text-3xl font-bold text-brand-yellow">
                10+
              </h3>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-6 top-10 rounded-2xl bg-brand-yellow p-5 shadow-xl">
              <h3 className="text-2xl font-bold text-black">100%</h3>
              <p className="text-sm text-black">
                Quality Commitment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}