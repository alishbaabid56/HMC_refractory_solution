"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Factory,
  Settings,
  Thermometer,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Fire Tube Boiler",
    icon: Flame,
    points: [
      "Burner Front Area",
      "Furnace Door",
      "Refractory Lining",
    ],
  },
  {
    title: "Water Tube Boiler",
    icon: Factory,
    points: [
      "Burner Area",
      "Furnace Walls",
      "Expansion Joints with Ceramic Wool",
    ],
  },
  {
    title: "Package Boiler",
    icon: Settings,
    points: [
      "Burner Throat",
      "Front & Rear Door Lining",
    ],
  },
  {
    title: "Hot Oil Heater",
    icon: Thermometer,
    points: [
      "Combustion Chamber",
      "Fire Bricks Installation",
      "Castable Refractory Solutions",
    ],
  },
  {
    title: "Waste Heat Boiler",
    icon: Wrench,
    points: [
      "High Temperature Gas Passage",
      "Refractory Lining",
    ],
  },
];


export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50  py-14 md:py-18"
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
            Our Services
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
            Industrial Refractory
            <span className="block text-brand-yellow">
              Installation Solutions
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
            Professional refractory installation solutions for boilers,
            heaters, and high-temperature industrial equipment with
            reliable performance and durability.
          </p>

        </motion.div>





        {/* Services Cards */}

        <div
          className="
          mt-10
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >

          {services.map((service,index)=>{

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}

                initial={{
                  opacity:0,
                  y:25,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                transition={{
                  duration:0.45,
                  delay:index * 0.08,
                }}

                viewport={{
                  once:true,
                }}

                className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-yellow
                hover:shadow-lg
                active:-translate-y-1
                "
              >


                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-brand-yellow/15
                  "
                >

                  <Icon
                    className="
                    h-6
                    w-6
                    text-brand-yellow
                    "
                  />

                </div>



                <h3
                  className="
                  mt-4
                  font-semibold
                  text-brand-black
                  "
                >
                  {service.title}
                </h3>



                <ul
                  className="
                  mt-3
                  space-y-2
                  "
                >

                  {service.points.map((point)=>(

                    <li
                      key={point}
                      className="
                      flex
                      items-start
                      gap-2
                      text-sm
                      text-gray-600
                      "
                    >

                      <span
                        className="
                        mt-2
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-brand-yellow
                        "
                      />

                      {point}

                    </li>

                  ))}

                </ul>


              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );
}