"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section className="bg-brand-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}

          className="
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-r
          from-brand-black
          via-zinc-900
          to-brand-black
          px-8
          py-12
          text-center
          shadow-2xl
          lg:px-16
          "
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-brand-yellow/15
            px-4
            py-2
            text-sm
            font-medium
            text-brand-yellow
            "
          >
            <PhoneCall className="h-4 w-4" />
            Ready to Start?
          </div>





          <h2
            className="
            mt-6
            font-heading
            text-3xl
            font-bold
            text-white
            sm:text-5xl
            "
          >

            Need Reliable

            <span className="block text-brand-yellow">
              Refractory Solutions?
            </span>

          </h2>





          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-gray-300
            sm:text-base
            "
          >

            Whether you need refractory products, boiler lining,
            furnace installation, or maintenance services,
            our team is ready to support your industrial projects.

          </p>






          <div
            className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
            "
          >



            {/* Contact Button */}

            <Link
              href="#contact"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-brand-yellow
              px-7
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-yellow-500
              "
            >

              Get Consultation

              <ArrowRight className="h-4 w-4" />

            </Link>






            {/* Call Button */}

            <Link
              href={`tel:${phoneNumber}`}
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              px-7
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-brand-yellow
              hover:bg-brand-yellow
              hover:text-black
              "
            >

              <PhoneCall className="h-4 w-4" />

              Call Now

            </Link>



          </div>



        </motion.div>


      </div>
    </section>
  );
}