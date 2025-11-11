"use client"

import { useSearchParams, notFound } from "next/navigation";

import { useTranslations } from "next-intl";
import { FastSpringProvider } from "@/context/FastSpringContext";
import { Checkout } from "@/components/embedded-checkout/Checkout";
import { Cart } from "@/components/embedded-checkout/Cart";

export default function Pricing() {
  const t = useTranslations("pricing");

  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  if (!plan) {
    return notFound();
  }

  return (
    <FastSpringProvider storefront="embedded">
      <div className="w-full bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full max-w-2/3 mx-auto">
          <div className="pt-12 text-left">
            <Cart />
          </div>
          <div className="relative lg:before:content-[' '] lg:before:fixed lg:before:top-0 lg:before:right-0 lg:before:h-full lg:before:w-1/2 lg:before:bg-white">
            <Checkout plan={plan} />
          </div>
        </div>
      </div>
    </FastSpringProvider>
  );
}
