"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";


const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];


const productLinks = [
  {
    label: "Insulation Products",
    href: "#products",
  },
  {
    label: "Castables & Cement",
    href: "#castables",
  },
];


export default function Navbar() {
const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (

    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">


        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/images/logo.jpeg"
            alt="HMC Refractory Solution"
            width={50}
            height={50}
            priority
          />


          <div className="hidden sm:block">

            <h2 className="font-heading text-lg font-bold text-brand-black">
              HMC
            </h2>

            <p className="text-xs text-brand-gray">
              Refractory Solution
            </p>

          </div>


        </Link>





        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">


          {/* Home */}

          <Link
            href="/"
            className="
            text-sm
            font-medium
            text-gray-700
            transition
            hover:text-brand-yellow
            "
          >
            Home
          </Link>



          {/* About */}

          <Link
            href="#about"
            className="
            text-sm
            font-medium
            text-gray-700
            transition
            hover:text-brand-yellow
            "
          >
            About
          </Link>





          {/* Products Dropdown */}

          <div className="group relative">


            <button
              type="button"
              className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-gray-700
              transition
              hover:text-brand-yellow
              "
            >

              Products

              <ChevronDown
                className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:rotate-180
                "
              />

            </button>





            <div
              className="
              invisible
              absolute
              left-1/2
              top-8
              w-60
              -translate-x-1/2
              rounded-xl
              border
              border-gray-100
              bg-white
              p-2
              opacity-0
              shadow-xl
              transition-all
              duration-300
              group-hover:visible
              group-hover:opacity-100
              "
            >


              {productLinks.map((item)=>(

                <Link
                  key={item.label}
                  href={item.href}
                  className="
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  hover:bg-yellow-50
                  hover:text-brand-yellow
                  "
                >

                  {item.label}

                </Link>

              ))}


            </div>


          </div>





          {/* Remaining Links */}

          {navLinks.map((item)=>(

            <Link
              key={item.label}
              href={item.href}
              className="
              text-sm
              font-medium
              text-gray-700
              transition
              hover:text-brand-yellow
              "
            >

              {item.label}

            </Link>

          ))}



        </nav>





        {/* Desktop CTA */}
<div className="hidden lg:block">

  <a
    href={`tel:${phoneNumber}`}
    className="
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-brand-yellow
    px-6
    py-2
    font-semibold
    text-black
    transition-all
    duration-300
    hover:bg-yellow-500
    "
  >
    Call Now
  </a>

</div>






        {/* Mobile Menu */}

        <div className="lg:hidden">


          <Sheet>


            <SheetTrigger
              className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              transition
              hover:bg-gray-100
              "
            >

              <Menu className="h-6 w-6"/>

            </SheetTrigger>





            <SheetContent
              side="right"
              className="w-[300px] p-0"
            >


              <div className="flex h-full flex-col">



                {/* Mobile Logo */}

                <div className="border-b px-6 py-6">


                  <div className="flex items-center gap-3">


                    <Image
                      src="/images/logo.jpeg"
                      alt="HMC"
                      width={42}
                      height={42}
                    />


                    <div>

                      <h2 className="font-heading text-lg font-bold">
                        HMC
                      </h2>

                      <p className="text-xs text-muted-foreground">
                        Refractory Solution
                      </p>

                    </div>


                  </div>


                </div>







                {/* Mobile Links */}
 <nav className="flex flex-1 flex-col items-start px-8 py-6">

  {/* Home + About */}
  {[
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
  ].map((item) => (
    <SheetClose key={item.label}>
      <Link
        href={item.href}
        className="
        block
        w-full
        border-b
        py-4
        text-left
        text-base
        font-semibold
        text-gray-700
        hover:text-brand-yellow
        "
      >
        {item.label}
      </Link>
    </SheetClose>
  ))}



  {/* Mobile Products */}
  <div className="w-full border-b">

    <p
      className="
      py-4
      text-base
      font-semibold
      text-gray-700
      "
    >
      Products
    </p>


    <div className="ml-4">

      {productLinks.map((item) => (

        <SheetClose key={item.label}>

          <Link
            href={item.href}
            className="
            block
            py-3
            text-sm
            text-gray-500
            hover:text-brand-yellow
            "
          >
            {item.label}
          </Link>

        </SheetClose>

      ))}

    </div>

  </div>




  {/* Services Industries Contact */}
  {[
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ].map((item) => (

    <SheetClose key={item.label}>

      <Link
        href={item.href}
        className="
        block
        w-full
        border-b
        py-4
        text-left
        text-base
        font-semibold
        text-gray-700
        hover:text-brand-yellow
        "
      >
        {item.label}
      </Link>

    </SheetClose>

  ))}


</nav>




                {/* Mobile Button */}
<div className="border-t p-6">

  <a
    href={`tel:${phoneNumber}`}
    className="
    flex
    w-full
    items-center
    justify-center
    rounded-full
    bg-brand-yellow
    py-3
    font-semibold
    text-black
    transition-all
    duration-300
    hover:bg-yellow-500
    "
  >
    Call Now
  </a>

</div>



              </div>


            </SheetContent>


          </Sheet>


        </div>



      </div>


    </header>

  );

}