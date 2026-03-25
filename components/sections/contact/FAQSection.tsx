"use client";

import { useState } from "react";
import { Plus } from "@/components/ui/Icons";

const faqs = [
  { question: "What exactly does NerstAgric do?" },
  { question: "Which states do you currently operate in?" },
  { question: "Who are your typical clients?" },
  { question: "Do you help with land acquisition and clearing?" },
  { question: "How do I start a project with NerstAgric?" },
  { question: "How do you ensure the success of a new farm project?" },
  { question: "Do you offer staff training?" },
  { question: 'What is the "Value Chain Optimization" service?' },
  { question: "Can you help me secure funding for my farm?" },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // split into two columns
  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16 md:py-21.25 font-urbanist">
      <div className="text-center mb-14">
        <h2 className="text-[1.8rem] md:text[2rem] leading-8 md:leading-10 font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text[1rem] md:text-[1.125rem] max-w-130 mx-auto leading-5 md:leading-6 font-medium">
          Find answers to common questions about our agricultural consulting
          services and project implementation process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {[left, right].map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            {col.map((faq, i) => {
              const globalIndex = colIndex === 0 ? i * 2 : i * 2 + 1;
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={faq.question}
                  className="border-b border-gray-100 last:border-none text-[#496179]"
                >
                  <button
                    onClick={() => toggle(globalIndex)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-3 py-5 text-left group"
                  >
                    <span
                      className={`text-primary font-bold text-lg leading-none shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={30} />
                    </span>
                    <span className="text-[1.125rem] md:text-[1.25rem] leading-5 md:leading-7 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer — empty for now, add content when available */}
                  {isOpen && (
                    <p className="text-text-muted text-sm leading-relaxed pb-5 pl-7">
                      Answer coming soon.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
