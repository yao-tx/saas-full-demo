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
import Link from "next/link";
import { cn } from "@/lib/utils";

import type { Pricing } from "@/types/pricing";

export const PricingCard = ({
  path,
  type,
  ctaDesc,
  displayBadge = false,
  isDark = false,
}: Pricing & {
  displayBadge: boolean;
  isDark: boolean;
}) => {
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
    <Card
      className={cn(
        "relative",
        isDark ? "bg-neutral-800 text-primary-foreground border-neutral-950" : "",
      )}>
      <CardHeader className="gap-0">
        {displayBadge ? (
          <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{t("popular")}</Badge>
        ): (
          null
        )}
        <CardTitle><h2 className="text-2xl font-bold">{t(`${path}.title`)}</h2></CardTitle>
        <CardDescription className={isDark ? "text-muted": "text-muted-foreground"}><p>{t(`${path}.description`)}</p></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center text-4xl font-black py-3">
          {products[path]?.future?.price ? (
            <p>{products[path].future.price}</p>
          ): (
            <Skeleton className="w-36 h-10" />
          )}
          <span className={cn(
            "uppercase text-xs font-normal",
            isDark ? "text-muted": "text-muted-foreground",
          )}
          >{t("monthly")}</span>
        </div>
      </CardContent>
      <CardContent>
      <div className="flex flex-col justify-center items-center pb-5">
        <div className="text-base font-normal">
          <ul>
            {t.rich(`${path}.features`, {
              li: (chunks) => <li className="flex items-center gap-3"><Check className="w-4 h-4" /><span>{chunks}</span></li>,
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </ul>
        </div>
      </div>
      </CardContent>
      <CardFooter className="h-full items-end">
        <div className="flex flex-col w-full gap-2">
          <p className={cn(
            "text-xs",
            isDark ? "text-muted" : "text-muted-foreground",
            )}
          >
            {ctaDesc}
          </p>
          {
            type === "web" ? (
              <Button
                className="w-full hover:cursor-pointer"
                size="xl"
                asChild
              >
                <a href={`${process.env.NEXT_PUBLIC_FASTSPRING_WEB_CHECKOUT_URL}/${path}`}>{t("start")}</a>
              </Button>
            ): type === "popup" ? (
              <Button
                className="w-full hover:cursor-pointer"
                size="xl"
                onClick={() => handleClick(path)}
              >
                {t("start")}
              </Button>
            ) : (
              <Button
                className="w-full hover:cursor-pointer"
                variant={isDark ? "secondary" : "default"}
                size="xl"
                asChild
              >
                <Link href={`/checkout?plan=${path}`}>{t("start")}</Link>
              </Button>
            )
          }
        </div>
      </CardFooter>
    </Card>
  );
}