export interface Pricing {
  path: string;
  badgeText?: string;
  type: "web" | "popup" | "embedded" | "embedded-stacked";
  ctaDesc: string;
};