"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
} from "lucide-react";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];


const services = [
  "Boiler Refractory Solutions",
  "Furnace Lining",
  "Castable Installation",
  "Industrial Insulation",
];


export default function Footer() {

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;


  return (

    <footer className="bg-gray-50 text-brand-black">


      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">


        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">



          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-brand-yellow/20
                "
              >

                <Factory className="h-5 w-5 text-brand-yellow"/>

              </div>


              <div>

                <h3 className="font-heading text-lg font-bold">
                  HMC
                </h3>

                <p className="text-xs text-gray-500">
                  Refractory Solution
                </p>

              </div>


            </div>



            <p
              className="
              mt-5
              text-sm
              leading-7
              text-gray-600
              "
            >
              Providing reliable refractory products and
              installation solutions for boilers, furnaces,
              kilns, and high-temperature industries.
            </p>


          </div>






          {/* Quick Links */}

          <div>

            <h3 className="mb-5 font-semibold text-brand-black">
              Quick Links
            </h3>


            <ul className="space-y-3">

              {quickLinks.map((item)=>(

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="
                    text-sm
                    text-gray-600
                    transition
                    hover:text-brand-yellow
                    "
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>






          {/* Services */}

          <div>

            <h3 className="mb-5 font-semibold text-brand-black">
              Services
            </h3>


            <ul className="space-y-3">

              {services.map((service)=>(

                <li
                  key={service}
                  className="text-sm text-gray-600"
                >
                  {service}
                </li>

              ))}

            </ul>

          </div>







          {/* Contact */}

          <div>

            <h3 className="mb-5 font-semibold text-brand-black">
              Contact
            </h3>


            <div className="space-y-4">


              <a
                href={`tel:${phoneNumber}`}
                className="
                flex
                items-center
                gap-3
                text-sm
                text-gray-600
                transition
                hover:text-brand-yellow
                "
              >

                <Phone className="h-4 w-4 text-brand-yellow"/>

                Call Us

              </a>





              <a
                href="mailto:info@hmcrefractory.com"
                className="
                flex
                items-center
                gap-3
                text-sm
                text-gray-600
                transition
                hover:text-brand-yellow
                "
              >

                <Mail className="h-4 w-4 text-brand-yellow"/>

                Email Us

              </a>





              <div
                className="
                flex
                items-center
                gap-3
                text-sm
                text-gray-600
                "
              >

                <MapPin className="h-4 w-4 text-brand-yellow"/>

                Karachi, Pakistan

              </div>


            </div>


          </div>



        </div>


      </div>





      {/* Bottom */}

      <div className="border-t border-gray-200">


        <div
          className="
          mx-auto
          max-w-7xl
          px-6
          py-5
          text-center
          text-sm
          text-gray-500
          lg:px-8
          "
        >

          © {new Date().getFullYear()} HMC Refractory Solution.
          All Rights Reserved.

        </div>


      </div>



    </footer>

  );

}