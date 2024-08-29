import React from "react";

export const Contact = () => {
  const contactItems = [
    {
      title: "Application Assistance",
      description:
        "If you need help with the application process or have questions about specific programs, reach out to our application support team. We will guide you through each step to ensure a smooth application experience.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Reporting Issues",
      description:
        "To report any issues with our website or services, please provide a detailed description of the problem, and our team will work to resolve it promptly.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Contacting the Manager",
      description:
        "For issues that require managerial attention or if you need to discuss program details directly with the manager, we’ll ensure your message reaches the appropriate person for a swift response.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Feedback and Suggestions",
      description:
        "Share your feedback or suggestions about our programs or website. We value your input and use it to improve our services continuously.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Technical Support",
      description:
        "For technical assistance with navigating our website or using our online tools, we’ll help you resolve any technical issues quickly.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Follow-Up on Queries",
      description:
        "If you’ve already sent an email and need a follow-up or further clarification, our team will ensure that your follow-up request is addressed in a timely manner.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Scheduling a Consultation",
      description:
        "To schedule a one-on-one consultation regarding our training programs or career services, we will arrange a meeting at your convenience to discuss your career goals and how we can help.",
      email: "hitachivista@gmail.com",
    },
    {
      title: "Staying Updated",
      description:
        "To subscribe to our newsletter or for any inquiries related to newsletter content, stay updated with the latest news and updates about our programs and services.",
      email: "hitachivista@gmail.com",
    },
  ];

  return (
    <div className="container p-6 bg-white shadow-lg rounded-lg pt-24 sm:px-12">
   
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
            <a
              href={`mailto:${item.email}`}
              className="text-blue-500 hover:underline"
            >
              {item.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


