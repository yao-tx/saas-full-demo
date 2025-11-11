"use client"

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

export const Checkout = ({ plan }: { plan: string;}) => {
  const locale = useLocale();

  useEffect(() => {
    console.log("triggered");
    console.log("double check plan: " + plan);
    window.fastspring?.builder?.reset();
    window.fastspring?.builder?.country(locale === "en" ? "us" : locale);
    window.fastspring?.builder?.language(locale);
    window.fastspring?.builder?.add(plan);
    // window.fastspring?.builder?.secure({
    //   items: [{
    //     product: plan,
    //   }],
    // });
  }, [plan, locale]);

  return (
    <div id="fsc-embedded-checkout-container"></div>
  );
}