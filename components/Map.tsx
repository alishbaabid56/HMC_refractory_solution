"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function Map() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-2 text-sm font-medium text-brand-black">
            <MapPin className="h-4 w-4 text-brand-yellow" />
            Our Location
          </div>

          <h2 className="mt-5 font-heading text-3xl font-bold text-brand-black sm:text-4xl">
            Visit
            <span className="block text-brand-yellow">
              HMC Refractory Solution
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Easily locate our office and visit us for professional
            refractory products and industrial solutions.
          </p>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-lg"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7043910923517!2d66.99363457434143!3d24.90806297789823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb31561a8d1df0b%3A0xb966e2e603520643!2zSmFtaWEgQmlub3JpYSBBYWxhbWlhIHwg2KzYp9mF2LnbgSDYqNmG2YjYsduM24Eg2LnYp9mE2YXbjNuB!5e0!3m2!1sen!2s!4v1784556804193!5m2!1sen!2s"
    className="h-[280px] w-full md:h-[380px]"
    loading="lazy"
    style={{ border: 0 }}
    referrerPolicy="strict-origin-when-cross-origin"
  />
</motion.div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.google.com/?q=Jamia+Binoria+Aalamia+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 font-semibold text-black transition hover:bg-yellow-500"
          >
            <MapPin className="h-5 w-5" />
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}