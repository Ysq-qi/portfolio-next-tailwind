"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/overlay/accordion";
import { CheckboxItem } from "@/components/ui/form/checkbox-item";

const paymentOptions = ["信用卡", "信用卡分期", "超商付款"];
interface PaymentOptionsProps {
  selected: string[];
  onChange: (newSelected: string[]) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  selected,
  onChange,
}) => {
  const handleCheckboxChange = (option: string, isChecked: boolean) => {
    let newSelected = [...selected];

    if (isChecked) {
      newSelected.push(option);
    } else {
      newSelected = newSelected.filter((item) => item !== option);
    }

    onChange(newSelected);
  };

  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={["payment-options"]}>
      <AccordionItem value="payment-options">
        <AccordionTrigger>付款方式</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pt-2">
            {paymentOptions.map((option, index) => {
              const checked = selected.includes(option);
              return (
                <li key={option}>
                  <CheckboxItem
                    id={`payment-option-${index}`}
                    label={option}
                    checked={checked}
                    onCheckedChange={(isChecked) =>
                      handleCheckboxChange(option, Boolean(isChecked))
                    }
                  />
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentOptions;
