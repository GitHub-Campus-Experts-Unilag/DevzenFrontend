import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section>
      <header>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about using DevZen, all in one place.</p>
      </header>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is DevZen really free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its 
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What types of tools are available on DevZen?</AccordionTrigger>
          <AccordionContent>
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its 
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is my data secure on DevZen?</AccordionTrigger>
          <AccordionContent>
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its 
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contribute to the platform?</AccordionTrigger>
          <AccordionContent>
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its 
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do I need to create an account to use DevZen?</AccordionTrigger>
          <AccordionContent>
            Yes! DevZen is completely free and open-source, supported by a community of developers who contribute to its 
            continuous improvement. You can access all tools at no cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FAQs;