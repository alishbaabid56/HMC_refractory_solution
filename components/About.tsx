"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-3 py-1.5 text-xs font-medium text-brand-black">
            <Factory className="h-4 w-4 text-brand-yellow" />
            About HMC
          </div>

          {/* Heading */}
          <h2 className="font-heading text-2xl font-bold text-brand-black sm:text-3xl lg:text-4xl">
            Reliable Refractory
            <span className="block text-brand-yellow">
              Solutions You Can Trust
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            HMC Refractory Solution supplies quality refractory products and
            industrial solutions for high-temperature applications with a focus
            on reliability, performance, and customer satisfaction.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-xl border border-gray-200 p-5 text-center transition hover:border-brand-yellow hover:shadow-md">
            <ShieldCheck className="mx-auto h-8 w-8 text-brand-yellow" />
            <h3 className="mt-3 font-semibold text-brand-black">
              Premium Quality
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Reliable refractory products.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5 text-center transition hover:border-brand-yellow hover:shadow-md">
            <Factory className="mx-auto h-8 w-8 text-brand-yellow" />
            <h3 className="mt-3 font-semibold text-brand-black">
              Industrial Expertise
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Solutions for demanding industries.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5 text-center transition hover:border-brand-yellow hover:shadow-md">
            <Target className="mx-auto h-8 w-8 text-brand-yellow" />
            <h3 className="mt-3 font-semibold text-brand-black">
              Customer Focus
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Professional support and service.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}