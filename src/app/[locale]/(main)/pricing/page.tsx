import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PricingCards } from "@/components/PricingCards";
import { FastSpringProvider } from "@/context/FastSpringContext";

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
                <PricingCards />
              </div>
            </section>
          </main>
        </div>
    </FastSpringProvider>
  );
}
