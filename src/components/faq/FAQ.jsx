import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Gadget Heaven?",
      answer: "Gadget Heaven is an online platform where users can browse, buy, and explore the latest gadgets, electronics, and accessories. We provide detailed product descriptions, reviews, and ratings to help customers make informed decisions."
    },
    {
      question: "How do I make a purchase?",
      answer: "Simply browse through our catalog, select the product you wish to purchase, and add it to your cart. Once you're ready to checkout, follow the on-screen instructions to enter your shipping details and complete the payment process."
    },
    {
      question: "Is there a membership program?",
      answer: "Yes! We offer a membership program where users can earn points for every purchase and redeem them for discounts on future purchases. Stay tuned for special offers and exclusive deals for members."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, PayPal, and other secure payment methods. You can choose your preferred payment method at checkout."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is confirmed, you will receive an email with tracking details. You can also log into your account to view the status of your orders."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on your location."
    },
    {
      question: "Can I return a product?",
      answer: "We have a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, as long as the item is in its original condition."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@gadgetheaven.com or through our live chat feature available on our website."
    },
    {
      question: "Are your products genuine and warranty-covered?",
      answer: "Yes, all products sold on Gadget Heaven are 100% genuine and come with the manufacturer's warranty. You can find detailed warranty information on each product page."
    },
    {
      question: "How can I stay updated on new products and offers?",
      answer: "Sign up for our newsletter to receive the latest updates, new arrivals, and special promotions directly in your inbox."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-md">
            <button
              className="w-full text-left px-4 py-3 text-xl font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-md"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50 rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
