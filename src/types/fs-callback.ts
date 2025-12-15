// Processed data returned from data-data-callback
export interface ProductData {
  autoRenew: boolean | null;
  bundle: boolean;
  description: {
    summary: string | null;
    full: string | null;
  };
  discountPercentValue: number;
  discountTotal: string;
  discountTotalValue: number;
  display: string;
  future: {
    discountPercentValue: number;
    discountTotal: string;
    discountTotalValue: number;
    intervalLength: number;
    intervalUnit: string;
    price: string;
    priceTotal: string;
    priceTotalValue: number;
    priceValue: number;
    total: string;
    totalValue: number;
    unitDiscountValue: number;
    unitPrice: string;
    unitPriceValue: number;
  };
  path: string;
  pid: string;
  price: string;
  priceTotal: string;
  priceTotalValue: number;
  priceValue: number;
  priceValueWithoutTax: number;
  priceValueWithoutTaxAndDiscounts: number;
  priceWithoutTax: string;
  priceWithoutTaxAndDiscounts: string;
  pricing: {
    quantity: "allow" | "hide" | "lock";
  };
  product: string;
  productFormat: "digital" | "digital-and-physical" | "physical" | null;
  quantity: number;
  quantityEditable: boolean;
  quotable: boolean;
  removable: boolean;
  selectableAdditions: boolean;
  selectableReplacements: boolean;
  selectables: boolean;
  selected: boolean;
  subscription: {
    active: boolean;
    allowReactivation: boolean;
    cancelled: boolean;
    completed: boolean;
    currency: string;
    instructions: {
      chargeableSubTotalValue: number;
      current: boolean;
      discountPercent: string;
      discountPercentValue: number;
      discountTotal: string;
      discountTotalValue: number;
      intervalLength: number;
      intervalUnit: string;
      periodStartDate: string;
      periodStartDateValue: number;
      preTaxSubTotalValue: number;
      price: string;
      priceTotal: string;
      priceTotalValue: number;
      priceValue: number;
      productPath: string;
      regularPeriodTaxValue: number;
      total: string;
      totalValue: number;
      trialType: "PAID" | "FREE_WITH_PAYMENT" | "FREE_WITHOUT_PAYMENT" | null;
      type: "trial" | "regular";
      unitDiscount: string;
      unitDiscountValue: number;
      unitPrice: string;
      unitPriceValue: number;
    }[];
    intervalLength: number;
    intervalUnit: string;
    nextChargeCurrency: string;
    nextChargeDate: string;
    nextChargeDateValue: number;
    nextChargeTotal: string;
    nextChargeTotalValue: number;
    remainingReactivationDays: number;
    repeatingInstructions: boolean;
    subscriptionSetToDisableNextPeriod: boolean;
  } | null;
  total: string;
  totalValue: number;
  unitDiscountValue: number;
  unitPrice: string;
  unitPriceValue: number;
  variation: string;
};

export interface CallbackData {
  allCrossSells: [];
  availablePaymentMethods: [];
  country: string;
  coupons: [];
  creationTime: number;
  currency: string;
  discountTotal: string;
  discountTotalPercent: string;
  discountTotalPercentValue: number;
  discountTotalValue: number;
  fields: {
    fieldName: string;
    required: boolean;
    provided: boolean;
  }[];
  firstUpsellConfigurationDisplay: string;
  gift: boolean;
  groups: {
    driver?: string;
    driverType: string; // usually returns "storefront" string
    items: ProductData[];
    required: boolean;
    selectableAdditions: boolean;
    selectableReplacements: boolean;
    selectables: boolean;
    selections: boolean;
    type?: "add";
  }[];
  includesPhysicalGoods: boolean;
  language: string;
  messages: [];
  modifiedSubscriptionDefaultQuantity: number;
  modifiedSubscriptionId: string;
  modifiedSubscriptionJson: string;
  originalTotal: string;
  originalTotalValue: number;
  payments: [];
  selections: boolean;
  shippingCost: string;
  shippingCostValue: number;
  siteLevelFeatureFlags: {
    "pix.updated.iof.verbiage": "true" | "false";
    "updated.iof.verbiage": "true" | "false";
  };
  storeTaxPriceMode: "NET_PRICING" | "GROSS_PRICING";
  subtotal: string;
  subtotalValue: number;
  tax: string;
  taxExempt: boolean;
  taxExemptionAllowed: boolean;
  taxExemptionIdApplied: boolean;
  taxPriceType: "added" | "included";
  taxRate: string;
  taxType: string;
  taxValue: number;
  total: string;
  totalValue: number;
  totalWithTax: string;
  totalWithTaxValue: number;
};

export interface Account {
  id: string;
  account: string;
  action: string;
  contact: AccountContact,
  language: string;
  country: string;
  url: string;
  orders: string[];
  subscriptions: string[];
  charges: AccountCharge[];
  subscribed: boolean;
  result: "success" | "error";
};

export interface AccountContact {
  first: string;
  last: string;
  email: string;
  company: string | null;
  phone: string | null;
  subscribed: boolean;
};

export interface AccountCharge {
  currency: string;
  total: number;
  payoutCurrency: string;
  totalInPayoutCurrency: number;
  status: "successful" | "failed";
  order: string;
  orderReference: string;
  subscription: string;
  timestamp: number;
  timestampValue: number;
  timestampInSeconds: number;
  timestampDisplay: string;
  timestampDisplayISO8601: string;
};