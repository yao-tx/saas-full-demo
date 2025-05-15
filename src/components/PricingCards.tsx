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

const pricings: string[] = [
  "starter-subscription", "professional-subscription", "enterprise-subscription", "custom"
]

export const PricingCards = () => {
  const { products } = useFastSpring();
  const locale = useLocale();
  const t = useTranslations("pricing.pricingCards");

  const handleClick = (productPath: string) => {
    window.fastspring?.builder?.reset();
    const fsCountryCode = locale === "en" ? "us" : locale;
    window.fastspring?.builder?.country(fsCountryCode);
    window.fastspring?.builder?.add(productPath);
    window.fastspring?.builder?.checkout();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 text-center">
      {pricings.map((key, index) => (
        key === "custom" ? (
          <Card key={index} className="relative bg-primary text-primary-foreground">
            <CardHeader className="gap-0">
              <CardTitle className="text-2xl font-bold">{t(`${key}.title`)}</CardTitle>
              <CardDescription className="text-muted">{t(`${key}.description`)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-center text-4xl font-black py-3">
                {t("talk")}
              </div>
            </CardContent>
            <CardFooter className="h-full items-end">
              <Button className="w-full" size="xl" variant="secondary">{t("contact")}</Button>
            </CardFooter>
          </Card>
        ): (
          <Card key={index} className="relative">
            <CardHeader className="gap-0">
              {key === "professional-subscription" ? (
                <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{t("popular")}</Badge>
              ): (
                null
              )}
              <CardTitle>
                <h2 className="text-2xl font-bold">{t(`${key}.title`)}</h2>
              </CardTitle>
              <CardDescription><p>{t(`${key}.description`)}</p></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-center text-4xl font-black py-3">
                {products[key]?.future?.price ? (
                  <p>{products[key].future.price}</p>
                ): (
                  <Skeleton className="w-36 h-10" />
                )}
                <span className="uppercase text-muted-foreground text-xs font-normal">{t("monthly")}</span>
              </div>
            </CardContent>
            <CardFooter className="h-full items-end">
              <Button
                className="w-full hover:cursor-pointer"
                size="xl"
                onClick={() => handleClick(key)}
              >
                {t("start")}
              </Button>
            </CardFooter>
          </Card>
        )
      ))}
    </div>
  );
}