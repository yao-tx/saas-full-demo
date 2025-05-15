import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-neutral-300">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-8 lg:flex-row justify-between">
        <div className="flex flex-col gap-5">
          <a href="/" className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM19.2771 1.49659C16.9955 1.81769 14.8229 3.65108 13.1364 6.7174C12.6472 7.60683 12.2058 8.58946 11.8211 9.65044C14.1143 9.07417 16.6334 8.73442 19.2771 8.68187V1.49659ZM10.1308 10.1308C10.6091 8.62958 11.1943 7.2484 11.8696 6.02065C12.7056 4.50059 13.6978 3.18795 14.8157 2.17977C8.73679 3.94523 3.94522 8.73679 2.17977 14.8157C3.18794 13.6978 4.50059 12.7056 6.02065 11.8696C7.2484 11.1943 8.62957 10.6091 10.1308 10.1308ZM9.65039 11.8211C9.07416 14.1143 8.73442 16.6334 8.68187 19.2771H1.49658C1.81769 16.9954 3.65108 14.8228 6.7174 13.1364C7.60683 12.6472 8.58946 12.2058 9.65039 11.8211ZM10.128 19.2771C10.1877 16.392 10.603 13.6834 11.2902 11.2902C13.6834 10.603 16.3921 10.1876 19.2771 10.1279V13.2508C18.2008 16.0062 16.0056 18.2012 13.2501 19.2771H10.128ZM8.68187 20.7229H1.49658C1.81769 23.0046 3.65108 25.1771 6.7174 26.8636C7.60683 27.3528 8.58946 27.7942 9.65039 28.1789C9.07416 25.8857 8.73442 23.3666 8.68187 20.7229ZM11.2902 28.7098C10.603 26.3166 10.1877 23.608 10.128 20.7229H13.2501C16.0056 21.7988 18.2009 23.9938 19.2771 26.7492V29.8721C16.3921 29.8124 13.6834 29.397 11.2902 28.7098ZM10.1308 29.8692C8.62957 29.3909 7.2484 28.8057 6.02065 28.1304C4.50059 27.2944 3.18794 26.3022 2.17977 25.1843C3.94522 31.2632 8.73679 36.0548 14.8157 37.8202C13.6978 36.812 12.7056 35.4994 11.8696 33.9793C11.1943 32.7516 10.6091 31.3704 10.1308 29.8692ZM19.2771 38.5034C16.9955 38.1823 14.8229 36.3489 13.1364 33.2826C12.6472 32.3932 12.2058 31.4105 11.8211 30.3496C14.1143 30.9258 16.6334 31.2656 19.2771 31.3181V38.5034ZM25.1843 37.8202C26.3022 36.812 27.2944 35.4994 28.1305 33.9793C28.8057 32.7516 29.3909 31.3704 29.8692 29.8692C31.3704 29.3909 32.7516 28.8057 33.9794 28.1304C35.4994 27.2944 36.8121 26.3022 37.8202 25.1843C36.0548 31.2632 31.2632 36.0548 25.1843 37.8202ZM28.1789 30.3496C27.7942 31.4105 27.3528 32.3932 26.8636 33.2826C25.1772 36.3489 23.0046 38.1823 20.7229 38.5034V31.3181C23.3666 31.2656 25.8857 30.9258 28.1789 30.3496ZM30.3496 28.1789C31.4105 27.7942 32.3932 27.3528 33.2826 26.8636C36.3489 25.1771 38.1823 23.0046 38.5034 20.7229H31.3181C31.2656 23.3666 30.9258 25.8857 30.3496 28.1789ZM29.8721 20.7229C29.8124 23.608 29.397 26.3166 28.7098 28.7098C26.3166 29.397 23.608 29.8124 20.7229 29.8721V26.7515C21.7988 23.9951 23.9945 21.7991 26.7508 20.7229H29.8721ZM31.3181 19.2771H38.5034C38.1823 16.9954 36.3489 14.8228 33.2826 13.1364C32.3932 12.6472 31.4105 12.2058 30.3496 11.8211C30.9258 14.1143 31.2656 16.6334 31.3181 19.2771ZM28.7098 11.2902C29.397 13.6834 29.8124 16.392 29.8721 19.2771H26.7508C23.9945 18.2009 21.7988 16.0049 20.7229 13.2485V10.1279C23.608 10.1876 26.3166 10.603 28.7098 11.2902ZM29.8692 10.1308C31.3704 10.6091 32.7516 11.1943 33.9794 11.8696C35.4994 12.7056 36.8121 13.6978 37.8202 14.8157C36.0548 8.73679 31.2632 3.94523 25.1843 2.17977C26.3022 3.18795 27.2944 4.50059 28.1305 6.02065C28.8057 7.2484 29.3909 8.62958 29.8692 10.1308ZM20.7229 1.49659C23.0046 1.81769 25.1772 3.65108 26.8636 6.7174C27.3528 7.60684 27.7942 8.58946 28.1789 9.65044C25.8857 9.07417 23.3666 8.73442 20.7229 8.68187V1.49659Z"
                fill="black"
              />
            </svg>
            <span className="font-extrabold text-2xl lg:text-3xl">Acme Corp</span>
          </a>
          <p className="text-muted-foreground max-w-md">{t("description")}</p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{t("features.title")}</h2>
            <div className="flex flex-col">
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.automation")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.collaboration")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.ai-tools")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.no-code")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.scheduler")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("features.advanced")}</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{t("company.title")}</h2>
            <div className="flex flex-col">
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("company.about")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("company.customers")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("company.blog")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("company.careers")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("company.brand")}</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{t("resources.title")}</h2>
            <div className="flex flex-col">
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("resources.terms")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("resources.privacy")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("resources.dpa")}</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground">{t("resources.reports")}</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{t("socials.title")}</h2>
            <div className="flex flex-col">
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground flex gap-2 items-center"><Facebook className="w-4 h-4" /> Facebook</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground flex gap-2 items-center"><Instagram className="w-4 h-4" />Instagram</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground flex gap-2 items-center"><Github className="w-4 h-4" />GitHub</a>
              <a href="#" className="transition-colors hover:text-foreground/75 text-foreground flex gap-2 items-center"><Linkedin className="w-4 h-4" />LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Acme Corp. All rights reserved. </p>
      </div>
    </footer>
  )
}