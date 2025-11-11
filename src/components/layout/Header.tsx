"use client"

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher/LocaleSwitcher";
import { Logo } from "@/components/Logo";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <div className="fixed top-0 z-50 w-full border-b border-neutral-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 py-2 text-center border-b border-neutral-200">
        <LocaleSwitcher className="flex justify-center" />
      </div>
      <header>
        <div className="mx-auto container px-4 flex h-14 items-center gap-2 md:gap-4">
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>
          <nav className="flex items-center text-sm">
            <Button variant="ghostLink" asChild>
              <Link href="#">{t("features")}</Link>
            </Button>
            <Button variant="ghostLink" asChild>
              <Link href="#">{t("blog")}</Link>
            </Button>
            <Button variant="ghostLink" asChild>
              <Link href="/pricing">{t("pricing")}</Link>
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <Button asChild>
              <Link href="/login">{t("login")}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">{t("signup")}</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};