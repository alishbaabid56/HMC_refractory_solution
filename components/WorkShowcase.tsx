"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const images = [
  "/images/work/work1.jpeg",
  "/images/work/work2.jpeg",
  "/images/work/work3.jpeg",
  "/images/work/work4.jpeg",
  "/images/work/work5.jpeg",
];


export default function WorkShowcase() {

  const [active, setActive] = useState(0);



  const nextImage = () => {

    setActive((prev)=>
      (prev + 1) % images.length
    );

  };



  const previousImage = () => {

    setActive((prev)=>
      prev === 0 ? images.length - 1 : prev - 1
    );

  };



  return (

    <section className="bg-white py-12 md:py-16">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div
          className="
          grid
          items-center
          gap-10
          lg:grid-cols-2
          "
        >



          {/* Content */}

          <motion.div
            initial={{
              opacity:0,
              x:-30
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            viewport={{
              once:true
            }}
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
              "
            >

              <Factory className="h-4 w-4 text-brand-yellow"/>

              Our Work

            </div>



            <h2
              className="
              mt-5
              text-3xl
              font-bold
              text-brand-black
              sm:text-4xl
              "
            >

              Industrial Projects &
              <span className="block text-brand-yellow">
                Refractory Installation
              </span>

            </h2>



            <p
              className="
              mt-4
              max-w-lg
              text-sm
              leading-7
              text-gray-600
              sm:text-base
              "
            >

              Explore our completed refractory projects
              including boiler lining, furnace work,
              and high-temperature industrial solutions.

            </p>


          </motion.div>








          {/* Image Slider */}


          <motion.div

            initial={{
              opacity:0,
              x:30
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            className="
            relative
            h-[260px]
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            shadow-lg
            sm:h-[320px]
            "

          >


            <AnimatePresence mode="wait">


              <motion.div

                key={active}

                initial={{
                  opacity:0
                }}

                animate={{
                  opacity:1
                }}

                exit={{
                  opacity:0
                }}

                transition={{
                  duration:0.5
                }}

                className="absolute inset-0"

              >

                <Image
                  src={images[active]}
                  alt="HMC Refractory Work"
                  fill
                  className="object-cover"
                />

              </motion.div>


            </AnimatePresence>






            {/* Left Button */}

            <button
              onClick={previousImage}
              className="
              absolute
              left-4
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-md
              transition
              hover:bg-brand-yellow
              "
            >

              <ChevronLeft className="h-5 w-5"/>

            </button>






            {/* Right Button */}

            <button
              onClick={nextImage}
              className="
              absolute
              right-4
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-md
              transition
              hover:bg-brand-yellow
              "
            >

              <ChevronRight className="h-5 w-5"/>

            </button>







            {/* Dots */}

            <div
              className="
              absolute
              bottom-4
              left-1/2
              flex
              -translate-x-1/2
              gap-2
              "
            >

              {images.map((_,index)=>(

                <button

                  key={index}

                  onClick={() => setActive(index)}

                  className={`
                  h-2
                  rounded-full
                  transition-all
                  ${
                    active === index
                    ? "w-6 bg-brand-yellow"
                    : "w-2 bg-white"
                  }
                  `}

                />

              ))}


            </div>



          </motion.div>



        </div>


      </div>


    </section>

  );

}