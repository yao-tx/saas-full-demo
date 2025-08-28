"use client"

import { useLocale, useTranslations } from "next-intl";
import { useFastSpring } from "@/context/FastSpringContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Check } from "lucide-react";

interface Pricing {
  "path": string;
  "type": "web" | "popup" | "embedded";
  "ctaDesc": string;
};

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
];

export const PricingCards = () => {
  const { products } = useFastSpring();
  const locale = useLocale();
  const t = useTranslations("pricing.pricingCards");

  const handleClick = (productPath: string) => {
    window.fastspring?.builder?.reset();
    window.fastspring?.builder?.country(locale === "en" ? "us" : locale);
    window.fastspring?.builder?.language(locale);
    window.fastspring?.builder?.secure({
      items: [{
        product: productPath,
      }],
    });
    window.fastspring?.builder?.checkout();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10 text-center">
      {pricings.map((pricing: Pricing, index: number) => (
        <Card key={index} className="relative">
          <CardHeader className="gap-0">
            {pricing.path === "professional-subscription" ? (
              <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{t("popular")}</Badge>
            ): (
              null
            )}
            <CardTitle>
              <h2 className="text-2xl font-bold">{t(`${pricing.path}.title`)}</h2>
            </CardTitle>
            <CardDescription><p>{t(`${pricing.path}.description`)}</p></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center text-4xl font-black py-3">
              {products[pricing.path]?.future?.price ? (
                <p>{products[pricing.path].future.price}</p>
              ): (
                <Skeleton className="w-36 h-10" />
              )}
              <span className="uppercase text-muted-foreground text-xs font-normal">{t("monthly")}</span>
            </div>
          </CardContent>
          <CardContent>
          <div className="flex flex-col justify-center items-center pb-5">
            <div className="text-base font-normal">
              <ul>
                {t.rich(`${pricing.path}.features`, {
                  li: (chunks) => <li className="flex items-center gap-3"><Check className="w-4 h-4" /><span>{chunks}</span></li>,
                  bold: (chunks) => <span className="font-bold">{chunks}</span>,
                })}
              </ul>
            </div>
          </div>
          </CardContent>
          <CardFooter className="h-full items-end">
            <div className="flex flex-col w-full gap-2">
              <p className="text-xs text-muted-foreground">{pricing.ctaDesc}</p>
              {
                pricing.type === "web" ? (
                  <Button
                    className="w-full hover:cursor-pointer"
                    size="xl"
                    asChild
                  >
                    <a href={`${process.env.NEXT_PUBLIC_FASTSPRING_WEB_CHECKOUT_URL}/${pricing.path}`}>{t("start")}</a>
                  </Button>
                ): pricing.type === "popup" ? (
                  <Button
                    className="w-full hover:cursor-pointer"
                    size="xl"
                    onClick={() => handleClick(pricing.path)}
                  >
                    {t("start")}
                  </Button>
                ) : (
                  <Button
                    className="w-full hover:cursor-pointer"
                    size="xl"
                    onClick={() => handleClick(pricing.path)}
                  >
                    {t("start")}
                  </Button>
                )
              }
            </div>
          </CardFooter>
        </Card>
      ))}
      <Card className="relative bg-neutral-800 text-primary-foreground border-neutral-950">
        <CardHeader className="gap-0">
          <CardTitle className="text-2xl font-bold">{t("custom.title")}</CardTitle>
          <CardDescription className="text-muted">{t("custom.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center pb-5">
            <div className="flex flex-col justify-center items-center text-4xl font-black py-3">
              {t("talk")}
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div className="text-base font-normal">
            <ul>
              {t.rich("custom.features", {
                li: (chunks) => <li className="flex items-center gap-3"><Check className="w-4 h-4" /><span>{chunks}</span></li>,
                bold: (chunks) => <span className="font-bold">{chunks}</span>,
              })}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="h-full items-end">
          <Button className="w-full" size="xl" variant="secondary">{t("contact")}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}