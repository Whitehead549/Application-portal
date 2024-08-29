import React, { useState } from 'react';

const Frequentqes = () => {
  const faqs = [
    {
      question: "What is the primary goal of your training program?",
      answer: "Our training program aims to empower individuals by providing tailored training that bridges the gap between skill development and employment. We focus on equipping our trainees with the skills they need to thrive in their chosen careers."
    },
    {
      question: "How does your program ensure job placement for trainees?",
      answer: "We offer guaranteed job placements as part of our program. Our approach involves personalized training and strong partnerships with employers to facilitate successful career transitions for our trainees."
    },
    {
      question: "What kind of training do you provide?",
      answer: "Our training is customized to meet the specific needs of each individual and the demands of the job market. We offer a range of programs designed to develop both technical and soft skills relevant to various career paths."
    },
    {
      question: "Who can benefit from your training program?",
      answer: "Our program is designed for individuals looking to enhance their skills and secure employment in their chosen field. Whether you’re a recent graduate, a career changer, or someone seeking professional development, our training is tailored to meet your needs."
    },
    {
      question: "How do I join the training program?",
      answer: "To join, you can apply through our website or contact our admissions team directly. We will guide you through the application process and help you select the training program that best fits your career goals."
    },
    {
      question: "What support is available during the training?",
      answer: "We provide ongoing support throughout the training program, including mentorship, career counseling, and access to resources that help you succeed. Our goal is to ensure you are fully prepared for your future career."
    },
    {
      question: "Are there any prerequisites for joining the program?",
      answer: "Prerequisites vary depending on the specific training program you choose. Generally, we look for a commitment to learning and a desire to advance your career. Specific requirements will be outlined during the application process."
    },
    {
      question: "What industries or job roles do you cover?",
      answer: "Our training programs cover a wide range of industries and job roles. We tailor our offerings based on current market demands and the interests of our trainees. For detailed information on available programs, please refer to our website or contact us directly."
    },
    {
      question: "Is there any cost associated with the training program?",
      answer: "Program costs vary depending on the training you choose. We offer various payment options and financial assistance to ensure our programs are accessible. Detailed information about costs and financial support is available upon request."
    },
    {
      question: "How can I get more information or speak with someone about the program?",
      answer: "For more information or to speak with a representative, please visit our website’s contact page or call our office. We’re here to answer your questions and assist you in starting your journey towards career success."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 pt-16">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3
              className="text-xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </h3>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequentqes;
