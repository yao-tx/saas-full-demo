type PaymentMethodValues = "card" | "paypal" | "applepay" |  "googlepay" | "wire" | "amazon" | "ideal" | "sepa" | "ach" | "pix" | "alipay";

interface CustomTag {
  [key: string]: string;
};

interface AuthenticatePayload {
  account: string; // FastSpring Account ID
  timestamp: number; // Current epoch timestamp in millisecond
};

interface SessionObject {
  products: {
    path: string;
    quantity: number;
  }[];
  coupon?: string;
  reset?: boolean;
  paymentContact?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    company?: string;
  };
  recipient?: {
    email?: string;
    firstName?: string;
    lastName?: string;
  };
  checkout?: string | boolean;
  clean?: boolean;
  paymentMethod?: PaymentMethodValues;
  hideOtherPaymentMethods?: boolean;
  invoiceDueDate?: string;
  language?: string;
  country?: string;
  tags?: CustomTag;
};

interface Item {
  product: string;
  quantity?: number;
  pricing?: {
    price?: {
      [currencyCode: string]: number;
    },
    trial?: number;
    interval?: "adhoc" | "day" | "week" | "month" | "year";
    intervalLength?: number;
    intervalCount?: number | null;
    quantityBehavior?: "allow" | "lock" | "hide";
    quantityDefault?: number;
  };
  display?: {
    [languageCode: string]: string;
  };
  description?: {
    summary?: {
      [languageCode: string]: string;
    };
    action?: {
      [languageCode: string]: string;
    };
    full?: {
      [languageCode: string]: string;
    };
  },
  image?: string;
  selected?: boolean;
  removable?: boolean;
  sku?: string;
  attributes?: {
    [key: string]: string;
  };
};

interface BaseSecurePayload {
  address?: {
    addressLine1?: string;
    addressLine2?: string;
    city: string;
    region?: string;
    postalCode?: string;
    phoneNumber?: string;
    country?: string;
  };
  account?: string;
  taxId?: string;
  paymentMethod?: PaymentMethodValues;
  hideOtherPaymentMethods?: boolean;
  items: Item[];
  tags: CustomTag;
};

interface Contact {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  region?: string;
  postalCode?: string;
  phoneNumber?: string;
  country?: string;
};

type AccountCustomKey = string;

interface SecurePayloadWithAccountCustomKey extends BaseSecurePayload {
  contact: Contact;
  accountCustomKey: AccountCustomKey;
};

interface SecurePayloadWithoutAccountCustomKey extends BaseSecurePayload {
  contact?: Contact;
};

interface RecognizePayload extends Contact {
  taxId?: string | null;
};

interface RecognizeRecipientPayload {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: {
    addressLine1?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  memo?: string;
}

declare global {
  interface Window {
    onFSPopupClosed: (orderReference: OrderReference) => void;
    fastSpringCallBack: (data: FastSpringData) => void;
    fastspring?: {
      builder?: {
        add: (productPath: string) => void;
        authenticate: (payload: AuthenticatePayload) => void; // For test environment
        authenticate: (encryptedPayload: string, secureKey: string) => void; // For live environment
        clean: () => void;
        checkout: () => void;
        country: (countryCode: string) => void;
        language: (languageCode: string) => void;
        payment: (paymentMethod: PaymentMethodValues) => void;
        postalCode: (postalCode: string | number) => void;
        promo: (promoCode: string) => void;
        reset: () => void;
        push: (sessionObject: SessionObject) => void;
        recognize: (payload: RecognizePayload) => void;
        recognizeRecipients: (payload: RecognizeRecipientPayload) => void;
        remove: (productPath: string) => void;
        reset: () => void;
        secure: (payload: SecurePayloadWithAccountCustomKey | SecurePayloadWithoutCustomKey) => void; // For test environment
        secure: (encryptedPayload: string, secureKey: string) => void; // For live environment
        tag: (tags: CustomTag) => void;
        taxId: (taxId: string) => void;
        update: (productPath: string, quantity: number) => void;
        viewCart: () => void;
      };
      // For Embedded Payment Management Component: https://developer.fastspring.com/docs/embedded-payment-management
      epml?: {
        init: (accountPortalLink: string) => void;
        paymentManagementComponent: (subscriptionID: string, isoLanguage?: string) => void;
      }
    };
  }
};

export {};