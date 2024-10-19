import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/faq-accordion";

const FAQs = () => {
  return (
    <section
      id="faqs"
      className="max-w-[872px] mx-auto"
    >
      <header className="text-center">
        <h2 className="text-gray-10 font-bold text-[3.5rem]">Frequently Asked Questions</h2>
        <p className="text-gray-30 text-[1.375rem] mb-24">Everything you need to know about using DevZen, all in one place.</p>
      </header>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="faq-1"
          className="border-2 border-black-70 rounded-xl my-4 px-5"
        >
          <AccordionTrigger className="text-[1.75rem] font-semibold text-black-10 hover:no-underline">Is DevZen really free to use?</AccordionTrigger>
          <AccordionContent className="text-black-30 font-medium text-[1.375rem] leading-7">
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="faq-2"
          className="border-2 border-black-70 rounded-xl my-4 px-5"
        >
          <AccordionTrigger className="text-[1.75rem] font-semibold text-black-10 hover:no-underline">What types of tools are available on DevZen?</AccordionTrigger>
          <AccordionContent className="text-black-30 font-medium text-[1.375rem] leading-7">
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="faq-3"
          className="border-2 border-black-70 rounded-xl my-4 px-5"
        >
          <AccordionTrigger className="text-[1.75rem] font-semibold text-black-10 hover:no-underline">Is my data secure on DevZen?</AccordionTrigger>
          <AccordionContent className="text-black-30 font-medium text-[1.375rem] leading-7">
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="faq-4"
          className="border-2 border-black-70 rounded-xl my-4 px-5"
        >
          <AccordionTrigger className="text-[1.75rem] font-semibold text-black-10 hover:no-underline">How can I contribute to the platform?</AccordionTrigger>
          <AccordionContent className="text-black-30 font-medium text-[1.375rem] leading-7">
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="faq-5"
          className="border-2 border-black-70 rounded-xl my-4 px-5"
        >
          <AccordionTrigger className="text-[1.75rem] font-semibold text-black-10 hover:no-underline">Do I need to create an account to use DevZen?</AccordionTrigger>
          <AccordionContent className="text-black-30 font-medium text-[1.375rem] leading-7">
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FAQs;