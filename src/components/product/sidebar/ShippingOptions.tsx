"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/overlay/accordion";
import { CheckboxItem } from "@/components/ui/form/checkbox-item";

const shippingOptions = ["宅配", "超商取貨", "商店門市自取"];
interface ShippingOptionsProps {
  selected: string[];
  onChange: (newSelected: string[]) => void;
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({
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
    <Accordion type="multiple" className="space-y-2" defaultValue={["shipping-options"]}>
      <AccordionItem value="shipping-options">
        <AccordionTrigger>運送方式</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 pt-2">
            {shippingOptions.map((option, index) => {
              const checked = selected.includes(option);
              return (
                <li key={option}>
                  <CheckboxItem
                    id={`shipping-option-${index}`}
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

export default ShippingOptions;
