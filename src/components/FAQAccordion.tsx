"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: "What is Mahadev Book and how does it work?",
      answer:
        "Mahadev Book is a secure online betting platform offering sports betting, casino games, and fantasy gaming. Users can register, get a Mahadev Book ID, deposit funds, and place bets on various events using a secure and user-friendly interface.",
    },
    {
      question: "How can I get a Mahadev Book ID for online betting?",
      answer:
        "To get a Mahadev Book ID, visit the official website or contact support via WhatsApp. Fill out the registration form, verify your details, and receive your unique ID for betting access.",
    },
    {
      question: "Is Mahadev Book a legal and safe platform?",
      answer:
        "Yes, Mahadev Book uses certified RNG technology, encryption protocols, and operates under strict compliance to offer fair, legal, and secure online betting in India.",
    },
    {
      question: "Can I use Mahadev Book on mobile devices?",
      answer:
        "Absolutely. Mahadev Book offers a fully optimized mobile website and a downloadable app for Android and iOS, allowing you to bet anytime, anywhere.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className="flex flex-col">
            {/* Accordion Header - Pill with black border */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3 border border-black rounded-full bg-[#ffca61] hover:bg-[#ffb93d] text-black font-semibold transition-all duration-200 focus:outline-none text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 text-sm md:text-base font-heading">
                {/* Arrow Icons */}
                {isOpen ? (
                  <span className="text-black font-bold">︾</span>
                ) : (
                  <span className="text-black font-bold">»</span>
                )}
                <span>{faq.question}</span>
              </div>
            </button>

            {/* Accordion Answer Content */}
            {isOpen && (
              <div className="mt-1 mx-2 p-5 border border-black/20 rounded-2xl bg-white/20 text-black text-xs md:text-sm leading-relaxed transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
