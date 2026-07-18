"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`faq-item${openIdx === i ? " open" : ""}`}
          itemScope
          itemType="https://schema.org/Question"
        >
          <button
            className="faq-question"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
            id={`faq-q-${i}`}
          >
            <span itemProp="name">{faq.q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div
            className="faq-answer"
            itemScope
            itemType="https://schema.org/Answer"
            role="region"
            aria-labelledby={`faq-q-${i}`}
          >
            <span itemProp="text">{faq.a}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
