"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AMP MCP?",
    answer: "AMP MCP is a secure integration that connects your AMP car wash data to AI assistants like Claude. It uses the Model Context Protocol (MCP) standard to let you ask questions about your business in natural language and get instant, data-driven answers."
  },
  {
    question: "Do I need to be an existing AMP customer?",
    answer: "Yes, AMP MCP is available exclusively to AMP customers. The integration relies on your existing AMP data and authentication. If you are not yet an AMP customer but are interested, please use the Connect with AMP button to learn more."
  },
  {
    question: "How is my data protected?",
    answer: "Your data remains secure within the AMP infrastructure. AMP MCP uses your existing AMP authentication and role-based permissions to control access. Data is never stored by the AI assistants, and all queries are logged for audit purposes."
  },
  {
    question: "What kind of questions can I ask?",
    answer: "You can ask any question related to your car wash operations, including performance metrics, revenue analysis, membership trends, customer engagement, labor data, marketing effectiveness, weather impact, and more. With access to 89 data sources, if it is in your AMP system, you can ask about it."
  },
  {
    question: "Why start with Claude instead of ChatGPT?",
    answer: "Claude by Anthropic offers exceptional analytical capabilities and was the first major AI assistant to support the MCP protocol. We chose to launch with Claude to provide the best possible experience, with ChatGPT and Gemini support planned for future releases."
  },
  {
    question: "How much does AMP MCP cost?",
    answer: "AMP MCP pricing will be shared during the access review process. As an early access program, we are working with customers to establish pricing that reflects the value delivered. Contact us to learn more about pricing options."
  },
  {
    question: "How do I get access?",
    answer: "Click the Request Access button and submit your information. Our team will review your request and follow up with next steps, including verification of your AMP account and setup instructions."
  },
  {
    question: "Can my entire team use AMP MCP?",
    answer: "Yes, team access is controlled through your existing AMP role structure. Each user logs in with their own AMP credentials and sees only the data they are authorized to access based on their role."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-[#EDF2F9]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#003264] mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about AMP MCP.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 bg-white rounded-xl mb-3 px-6">
              <AccordionTrigger className="text-left text-[#003264] font-semibold hover:text-[#0B75E1] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
