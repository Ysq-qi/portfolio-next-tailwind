"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/overlay/accordion";

interface PaymentAndShippingProps {
  paymentMethods?: string[];
  shippingMethods?: string[];
}

export default function PaymentAndShipping({
  paymentMethods = [],
  shippingMethods = [],
}: PaymentAndShippingProps) {
  const hasPaymentMethods = paymentMethods.length > 0;
  const hasShippingMethods = shippingMethods.length > 0;

  return (
    <Accordion type="multiple" className="space-y-2" defaultValue={[]}>
      <AccordionItem value="payment">
        <AccordionTrigger>
          付款方式📌📌🚚
          {!hasPaymentMethods && (
            <span className="block text-[14px] text-gray-500">超商滿NT$1,000免運</span>
          )}
        </AccordionTrigger>

        <AccordionContent>
          {hasPaymentMethods ? <PaymentMethods methods={paymentMethods} /> : <DefaultPaymentMethods />}
          <hr className="my-4" />
          {hasShippingMethods ? <ShippingMethods methods={shippingMethods} /> : <DefaultShippingMethods />}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function PaymentMethods({ methods }: { methods: string[] }) {
  return (
    <div>
      <h3 className="text-base font-bold mb-2">付款方式</h3>
      <ul className="space-y-1 text-sm text-gray-700">
        {methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
}

function ShippingMethods({ methods }: { methods: string[] }) {
  return (
    <div>
      <h3 className="text-base font-bold mb-2">運送方式</h3>
      <ul className="space-y-1 text-sm text-gray-700">
        {methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
}

function DefaultPaymentMethods() {
  return (
    <div className="text-sm text-gray-700 space-y-3">
      <div>
        <h3 className="text-base font-bold">信用卡一次付款</h3>
        <p className="text-red-500 font-semibold inline-block px-2 py-1 rounded">
          限量登錄 XX卡滿3000送200刷卡金
        </p>
      </div>

      <div>
        <h3 className="text-base font-bold">信用卡分期付款</h3>
        <p className="text-red-500 font-semibold inline-block px-2 py-1 rounded">
          限量登錄 XX卡滿2000送100 / XX卡滿3000送200
        </p>
        <p>
          信用卡 3 期 0 利率，每期 <span className="text-red-500">NT$XXX</span> (17 家銀行可用)
        </p>
      </div>

      <div>
        <h3 className="text-base font-bold">超商取貨付款</h3>
        <p>大家 / 7-12 超商取貨付款可用 📦</p>
      </div>

      <div>
        <h3 className="text-base font-bold">行動支付</h3>
        <p className="text-red-500 font-semibold inline-block px-2 py-1 rounded">
          3% 無上限 綁定XX卡付款筆筆 3% XX幣無上限 (即時回饋)
        </p>
        <ul className="list-disc pl-5">
          <li>街口支付</li>
          <li>LINE Pay</li>
          <li>Apple Pay</li>
        </ul>
      </div>
    </div>
  );
}

function DefaultShippingMethods() {
  return (
    <div className="text-sm">
      <h3 className="text-base font-bold">運送方式</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>大家取貨付款，每筆 NT$65，滿 NT$1,000 免運費</li>
        <li>7-12 取貨付款，每筆 NT$65，滿 NT$1,000 免運費</li>
        <li>宅配，每筆 NT$150，滿 NT$2,000 免運費</li>
        <li>自創作品門市自取，免運費</li>
      </ul>
    </div>
  );
}
