"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Flame,
  Building2,
  Zap,
  Shirt,
  Wheat,
  FlaskConical,
  Boxes,
  Hammer,
} from "lucide-react";


const industries = [
  {
    title: "Steel Mills",
    icon: Factory,
    application: "Furnaces, Ladle & Reheating Furnaces",
  },
  {
    title: "Cement Factories",
    icon: Flame,
    application: "Rotary Kiln & Preheater Systems",
  },
  {
    title: "Glass Factories",
    icon: Building2,
    application: "Glass Melting Furnaces",
  },
  {
    title: "Power Plants",
    icon: Zap,
    application: "Boilers & Incinerators",
  },
  {
    title: "Textile Mills",
    icon: Shirt,
    application: "Steam Boiler Systems",
  },
  {
    title: "Sugar Mills",
    icon: Wheat,
    application: "Industrial Boilers",
  },
  {
    title: "Chemical Plants",
    icon: FlaskConical,
    application: "High Temperature Reactors",
  },
  {
    title: "Ceramic & Tile Factories",
    icon: Boxes,
    application: "Kiln Solutions",
  },
  {
    title: "Foundries",
    icon: Hammer,
    application: "Metal Melting Furnaces",
  },
];


export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white py-14 md:py-18"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Heading */}

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
          className="mx-auto max-w-3xl text-center"
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
            text-brand-black
            "
          >
            <Factory className="h-4 w-4 text-brand-yellow" />
            Industries We Serve
          </div>


          <h2
            className="
            mt-5
            font-heading
            text-3xl
            font-bold
            text-brand-black
            sm:text-4xl
            "
          >
            Trusted Solutions Across
            <span className="block text-brand-yellow">
              Multiple Industries
            </span>
          </h2>


          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-gray-600
            sm:text-base
            "
          >
            HMC Refractory Solution supports multiple industries with
            reliable refractory products and installation solutions for
            high-temperature applications.
          </p>

        </motion.div>





        {/* Industries List */}

        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-x-4
          gap-y-5
          sm:gap-x-8
          sm:gap-y-6
          lg:grid-cols-3
          "
        >

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div

                key={industry.title}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}

                viewport={{
                  once: true,
                }}

                className="
                group
                flex
                items-start
                gap-3
                border-b
                border-gray-200
                pb-4
                transition-all
                duration-300
                hover:border-brand-yellow
                active:border-brand-yellow
                "
              >


                <div
                  className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-yellow/15
                  transition
                  duration-300
                  group-hover:bg-brand-yellow
                  group-active:bg-brand-yellow
                  sm:h-11
                  sm:w-11
                  "
                >

                  <Icon
                    className="
                    h-4
                    w-4
                    text-brand-yellow
                    transition
                    group-hover:text-black
                    group-active:text-black
                    sm:h-5
                    sm:w-5
                    "
                  />

                </div>




                <div>

                  <h3
                    className="
                    text-sm
                    font-semibold
                    text-brand-black
                    sm:text-base
                    "
                  >
                    {industry.title}
                  </h3>


                  <p
                    className="
                    mt-1
                    text-xs
                    leading-5
                    text-gray-600
                    sm:text-sm
                    "
                  >
                    {industry.application}
                  </p>


                </div>


              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );
}