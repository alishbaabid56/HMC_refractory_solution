"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const products = [
  {
    name: "Rock Wool",
    description:
      "High-performance insulation material designed for thermal resistance and industrial applications.",
    image: "/images/products/rock.jpeg",
  },
  {
    name: "Ceramic Blanket",
    description:
      "Lightweight high-temperature insulation solution for demanding heat environments.",
    image: "/images/products/ceramic.jpeg",
  },
  {
    name: "Glass Wool",
    description:
      "Efficient thermal insulation material offering durability and energy performance.",
    image: "/images/products/glass.jpeg",
  },
  {
    name: "Fire Bricks",
    description:
      "Reliable refractory bricks built for high-temperature industrial furnace applications.",
    image: "/images/products/bricks.jpeg",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-slate-50 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Refractory Insulation
            <span className="block text-brand-yellow">
              Materials
            </span>
          </h2>


          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Quality insulation and refractory materials designed for
            high-temperature industrial applications.
          </p>

        </motion.div>


        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {products.map((product, index) => (

            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Image */}
              <div className="relative h-32 sm:h-44">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

              </div>


              {/* Content */}
              <div className="p-4">

                <h3 className="text-base font-bold text-brand-black sm:text-lg">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm">
                  {product.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}