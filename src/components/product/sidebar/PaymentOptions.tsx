"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/overlay/accordion";
import { CheckboxItem } from "@/components/ui/form/checkbox-item";

const paymentOptions = ["信用卡", "信用卡分期", "超商付款"];

const PaymentOptions: React.FC = () => {
  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={["payment-options"]}>
      <AccordionItem value="payment-options">
        <AccordionTrigger>付款方式</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pt-2">
            {paymentOptions.map((option, index) => (
              <li key={option}>
                <CheckboxItem id={`payment-option-${index}`} label={option} />
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentOptions;
