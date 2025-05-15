"use client"

import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export const LocaleSwitcherSelect = ({
  children,
  defaultValue,
  label
}: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
    });

    const fsCountryCode = nextLocale === "en" ? "us" : nextLocale;
    window.fastspring?.builder?.country(fsCountryCode);
  }

  return (
    <Select
      defaultValue={defaultValue}
      disabled={isPending}
      onValueChange={(value: string) => onSelectChange(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  );
}