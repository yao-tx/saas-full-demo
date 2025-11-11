import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

import { SelectItem } from "@/components/ui/select";

export const LocaleSwitcher = ({
  className,
}: {
  className?: string;
}) => {
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")}
      className={className}
    >
      {routing.locales.map((curr) => (
        <SelectItem key={curr} value={curr}>
          {t("locale", { locale: curr })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  )
}