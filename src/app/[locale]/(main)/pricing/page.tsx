import { useTranslations } from "next-intl";
import { PricingCard } from "@/components/pricing/PricingCard";
import { FastSpringProvider } from "@/context/FastSpringContext";

import type { Pricing } from "@/types/pricing";

const pricings: Pricing[] = [
  {
    "path": "starter-subscription",
    "type": "web",
    "ctaDesc": "Web Checkout",
  },
  {
    "path": "professional-subscription",
    "type": "popup",
    "ctaDesc": "Popup Checkout",
  },
  {
    "path": "enterprise-subscription",
    "type": "embedded",
    "ctaDesc": "Embedded Checkout",
  },
  {
    "path": "ultimate-subscription",
    "type": "embedded-stacked",
    "ctaDesc": "Embedded Checkout - Stacked View",
  },
];

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <FastSpringProvider storefront="popup">
      <div className="relative flex min-h-svh flex-col">
        <main className="flex flex-1 flex-col">
          <section>
            <div className="container mx-auto px-4 py-32 flex flex-col gap-8">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center max-w-3xl mx-auto">
                {t.rich("heading", {
                  automation: (chunks) => <span className="text-violet-700 font-black">{chunks}</span>
                })}
              </h1>
              <div>
                <p className="text-center text-lg mb-2">{t("description")}</p>
                <p className="text-center text-sm text-muted-foreground">{t("pricing")}</p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10 text-center">
                {pricings.map((pricing: Pricing, index: number) => (
                  <PricingCard
                    key={index}
                    path={pricing.path}
                    type={pricing.type}
                    ctaDesc={pricing.ctaDesc}
                    displayBadge={pricing.path === "professional-subscription"}
                    isDark={pricing.path === "ultimate-subscription"}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </FastSpringProvider>
  );
}
