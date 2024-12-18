import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What are meme coins?",
    answer: "Meme coins are cryptocurrencies that were inspired by internet memes or created as jokes. Despite their humorous origins, some have gained significant value and community following."
  },
  {
    question: "Are meme coins a good investment?",
    answer: "Meme coins are highly volatile and risky investments. While some investors have made significant returns, it's important to only invest what you can afford to lose and do thorough research before investing."
  },
  {
    question: "How do I buy meme coins safely?",
    answer: (
      <div>
        <p>To safely buy meme coins:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Use reputable exchanges</li>
          <li>Enable 2FA security</li>
          <li>Research the coin thoroughly</li>
          <li>Start with small amounts</li>
        </ul>
      </div>
    )
  },
  {
    question: "What should I look for in a meme coin?",
    answer: (
      <div>
        <p>Key factors to consider:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Community size and engagement</li>
          <li>Development team transparency</li>
          <li>Trading volume and liquidity</li>
          <li>Token distribution</li>
          <li>Security audits</li>
        </ul>
      </div>
    )
  },
  {
    question: "What are the risks of meme coin investing?",
    answer: (
      <div>
        <p>Major risks include:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>High price volatility</li>
          <li>Potential for scams</li>
          <li>Market manipulation</li>
          <li>Lack of fundamental value</li>
          <li>Regulatory uncertainty</li>
        </ul>
      </div>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-purple-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 prose dark:prose-invert">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};