"use client"

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Rocket } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="relative flex min-h-svh flex-col">
      <main className="flex items-center justify-center flex-col min-h-screen">
        <section>
          <div className="flex flex-col gap-8 items-center container mx-auto px-4 py-24">
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl text-center">
              {t.rich("heading", {
                automation: (chunks) => <span className="text-violet-700 font-black">{chunks}</span>
              })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl text-center">{t("description")}</p>
            <div className="flex gap-5">
            <Button
              size="xl"
              asChild
            >
              <Link href="/pricing"><Rocket /> {t("cta")}</Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              asChild
            >
              <Link href="#">{t("demo")}</Link>
            </Button>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-24 flex items-center justify-center flex-col gap-10">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">{t("testimonials")}</h2>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
