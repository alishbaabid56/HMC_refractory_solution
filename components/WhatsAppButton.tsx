"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const message =
    "Hello HMC Refractory Solution, I need a consultation.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500
        text-white shadow-xl
        transition hover:scale-110
        hover:bg-green-600
      "
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}