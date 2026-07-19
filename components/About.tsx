"use client";

import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Target,
  Users,
  Flame,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-2 text-sm font-medium text-gray-800">
              <Factory className="h-4 w-4 text-brand-yellow" />
              About HMC Refractory Solution
            </div>


            <h2 className="font-heading text-4xl font-bold leading-tight text-brand-black sm:text-5xl">

              Delivering Reliable
              <span className="block text-brand-yellow">
                Refractory Solutions
              </span>

            </h2>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              HMC Refractory Solution is dedicated to providing high-quality
              refractory products and industrial solutions designed for
              extreme temperature applications.
            </p>


            <p className="mt-4 text-lg leading-8 text-gray-600">
              We focus on delivering reliable solutions that help industries
              improve operational efficiency, enhance equipment performance,
              and achieve long-lasting results in demanding environments.
            </p>


            <p className="mt-4 text-lg leading-8 text-gray-600">
              With a commitment to quality, technical expertise, and customer
              satisfaction, HMC supports industries where performance and
              durability matter the most.
            </p>


          </motion.div>



          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >

            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">

              <ShieldCheck className="h-10 w-10 text-brand-yellow" />

              <h3 className="mt-5 text-xl font-bold">
                Quality Commitment
              </h3>

              <p className="mt-3 text-gray-600">
                Providing dependable refractory materials with focus on
                quality, performance, and durability.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">

              <Flame className="h-10 w-10 text-brand-yellow" />

              <h3 className="mt-5 text-xl font-bold">
                High Temperature Expertise
              </h3>

              <p className="mt-3 text-gray-600">
                Solutions designed for challenging industrial heat
                applications and extreme operating conditions.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">

              <Target className="h-10 w-10 text-brand-yellow" />

              <h3 className="mt-5 text-xl font-bold">
                Customer Focus
              </h3>

              <p className="mt-3 text-gray-600">
                Understanding client requirements and delivering practical
                industrial solutions.
              </p>

            </div>



            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">

              <Users className="h-10 w-10 text-brand-yellow" />

              <h3 className="mt-5 text-xl font-bold">
                Professional Service
              </h3>

              <p className="mt-3 text-gray-600">
                Supporting industries with reliable communication and
                technical assistance.
              </p>

            </div>


          </motion.div>

        </div>

      </div>
    </section>
  );
}