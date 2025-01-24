"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/overlay/accordion";
import { CheckboxItem } from "@/components/ui/form/checkbox-item";

const shippingOptions = ["宅配", "超商取貨", "商店門市自取"];

const ShippingOptions: React.FC = () => {
  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={["shipping-options"]}>
      <AccordionItem value="shipping-options">
        <AccordionTrigger>運送方式</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pt-2">
            {shippingOptions.map((option, index) => (
              <li key={option}>
                <CheckboxItem id={`shipping-option-${index}`} label={option} />
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ShippingOptions;
