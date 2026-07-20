"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const castables = [
  {
    name: "Refractory Cement",
    image: "/images/products/refractorycement.jpeg",
    specs: [
      "Type: CA50 • CA70 • CA80",
      "Al₂O₃: 50–82%",
      "Setting Time: 30–240 min",
    ],
  },
  {
    name: "H.M.C Refractory",
    image: "/images/products/hmcrefractory.jpeg",
    specs: [
      "Al₂O₃: 46–60%",
      "Fe₂O₃: 0.7–1.0%",
      "1300–1500°C",
    ],
  },
  {
    name: "Insulating Castable",
    image: "/images/products/insulating.jpeg",
    specs: [
      "Density: 0.8–1.3 g/cm³",
      "1200–1300°C",
      "Strength: 2–20 MPa",
    ],
  },
  {
    name: "High Alumina Castable",
    image: "/images/products/almunia.jpeg",
    specs: [
      "Al₂O₃: 42–85%",
      "≥1640°C",
      "Density: 2.15–6.5 g/cm³",
    ],
  },
  {
    name: "A600",
    image: "/images/products/a600.jpeg",
    specs: [
      "Premium Grade",
      "Imported from China",
      "Industrial Applications",
    ],
  },
];

export default function Castables() {
  return (
    <section
      id="castables"
      className="bg-gray-50 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-2 text-sm font-medium text-brand-black">
            <Flame className="h-4 w-4 text-brand-yellow" />
            Our Products
          </div>

          <h2 className="font-heading text-3xl font-bold text-brand-black sm:text-4xl">
            Castables &
            <span className="block text-brand-yellow">
              Refractory Cement
            </span>
          </h2>

          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            High-performance refractory castables and cement engineered
            for furnaces, kilns, and high-temperature industrial applications.
          </p>
        </motion.div>


        {/* Products Grid */}
        {/* <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"> */}
<div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {castables.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}

              className={`
                overflow-hidden rounded-2xl border border-gray-200 
                bg-white shadow-sm transition-all duration-300
                hover:-translate-y-1 
                hover:border-brand-yellow 
                hover:shadow-lg
                active:-translate-y-1

${
  index === 4
    ? "col-span-2 lg:col-span-1 lg:col-start-3 lg:-translate-x-1/2"
    : ""
}
              `}
            >

              {/* Image */}
              <div className="relative h-36 bg-gray-50 md:h-52">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-3"
                />
              </div>


              {/* Content */}
              <div className="p-4">

                <h3 className="text-sm font-bold text-brand-black md:text-lg">
                  {item.name}
                </h3>

                <ul className="mt-3 space-y-2 text-xs text-gray-600 md:text-sm">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                      <span>
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}