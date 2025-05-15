declare global {
  interface Window {
    onFSPopupClosed: (orderReference: OrderReference) => void;
    fastSpringCallBack: (data: FastSpringData) => void;
    fastspring?: {
      builder?: {
        add: (path: string) => void;
        reset: () => void;
        clean: () => void;
        checkout: () => void;
        country: (countryCode: string) => void;
        push: (data: {
          products: { path: string; quantity: number }[];
        }) => void;
      };
    };
  }
}

export {};