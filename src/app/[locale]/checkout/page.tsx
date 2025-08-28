import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PricingCards } from "@/components/PricingCards";
import { FastSpringProvider } from "@/context/FastSpringContext";

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <FastSpringProvider storefront="embedded">
      <div className="grid grid-cols-2 min-h-screen w-full">
        <div className="bg-neutral-50 flex justify-end">
          <div className="max-w-1/2">test</div>
        </div>
        <div>checkout portion</div>
      </div>
    </FastSpringProvider>
  );
}
