"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { ProductData, CallbackData } from "@/lib/types";

interface FastSpringContextType {
  products: { [key: string]: ProductData };
  setProducts: React.Dispatch<React.SetStateAction<{ [key: string]: ProductData }>>;
  callbackData: CallbackData | undefined;
  setCallbackData: React.Dispatch<React.SetStateAction<CallbackData | undefined>>;
};

const FastSpringContext = createContext<FastSpringContextType | undefined>(undefined);

export const useFastSpring = () => {
  const context = useContext(FastSpringContext);

  if (!context) {
    throw new Error("useFastSpring must be used within FastSpringContext");
  }

  return context;
};

export const FastSpringProvider = ({
  children,
  storefront,
}: {
  children: ReactNode;
  storefront: "popup" | "embedded";
}) => {
  const pathname = usePathname();
  const [products, setProducts] = useState<{ [key: string]: ProductData }>({});
  const [callbackData, setCallbackData] = useState<CallbackData | undefined>(undefined);

  const contextValue = {
    products,
    setProducts,
    callbackData,
    setCallbackData,
  };

  const removeFSPopup = () => {
    const overlay = document.getElementById("fastspring-overlay");
    const container = document.getElementById("fastspring-popup-container");
    const canvas = document.getElementById("fscCanvas");
    const iframes = document.querySelectorAll("iframe[src*='onfastspring.com']");

    overlay?.remove();
    container?.remove();
    canvas?.remove();
    iframes.forEach(iframe => iframe.remove());

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };

  const unmountScript = () => {
    const script = document.getElementById("fsc-api");
    script?.remove();
  };

  useEffect(() => {
    window.onFSPopupClosed = (orderReference: any) => {
      if (orderReference?.id) {
        window.location.replace("success?orderId=" + orderReference.id);
      }
    };

    window.fastSpringCallBack = (fsData: any) => {
      setCallbackData(fsData);

      if (fsData?.groups) {
        const newProducts = fsData.groups
          .filter((group: any) => Array.isArray(group.items))
          .flatMap((group: any) => group.items)
          .reduce((acc: Record<string, any>, item: any) => {
            if (item.path) {
              acc[item.path] = item;
            }

            return acc;
          }, {});

        setProducts(newProducts);
      }
    };

    return () => {
      removeFSPopup();
      unmountScript();
    };
  }, [pathname]);


  return (
    <>
      <Script
        id="fsc-api"
        src={process.env.NEXT_PUBLIC_FASTSPRING_JS_URL}
        strategy="lazyOnload"
        data-storefront={storefront === "popup" ? process.env.NEXT_PUBLIC_FASTSPRING_POPUP_CHECKOUT : process.env.NEXT_PUBLIC_FASTSPRING_EMBEDDED_CHECKOUT}
        data-data-callback="fastSpringCallBack"
        data-popup-webhook-received="onFSPopupClosed"
        data-access-key={process.env.NEXT_PUBLIC_FASTSPRING_DATA_ACCESS_KEY}
        // data-continuous="true"
      />
      <FastSpringContext.Provider value={contextValue}>
        {children}
      </FastSpringContext.Provider>
    </>
  );
};