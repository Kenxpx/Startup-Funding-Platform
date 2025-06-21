"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFaq() {
  const faqs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer:
        "Yes, we offer a 7-day free trial for our Pro plan. You can try all the premium features without any commitment. We'll send you a reminder before your trial ends, and you won't be charged if you cancel before the trial period is over.",
    },
    {
      question: "How does the team plan work?",
      answer:
        "The team plan includes 5 team members by default. You can add additional members for $15 per user per month. Team members can collaborate in shared workspaces, and administrators can manage permissions and access levels.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For enterprise plans, we also offer invoice-based payments with net-30 terms.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your paid features until the end of your current billing cycle.",
    },
    {
      question: "Do you offer discounts for academic institutions?",
      answer:
        "Yes, we offer special pricing for academic institutions, non-profits, and educational organizations. Please contact our sales team for more information about our academic discount program.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16"
    >
      <h2 className="mb-6 text-center text-2xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
