"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Script from "next/script";

interface FastSpringContextType {
  products: any[];
  data: any;
  setProducts: (products: any[]) => void;
  setData: (data: any) => void;
}

const FastSpringContext = createContext<FastSpringContextType | undefined>(undefined);

export const useFastSpring = () => {
  const context = useContext(FastSpringContext);
  if (!context) {
    throw new Error("useFastSpring must be used within FastSpringContext");
  }
  return context;
};

export const FastSpringProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.onFSPopupClosed = (orderReference: any) => {
      if (orderReference?.id) {
        window.location.replace("success?orderId=" + orderReference.id);
      }
    };

    window.fastSpringCallBack = (fsData: any) => {
      setData(fsData);
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
  }, []);

  return (
    <>
      <Script
        id="fsc-api"
        src="https://sbl.onfastspring.com/sbl/1.0.4/fastspring-builder.min.js"
        strategy="lazyOnload"
        data-storefront="yaodemos.test.onfastspring.com/popup-yaodemos"
        data-data-callback="fastSpringCallBack"
        data-popup-webhook-received="onFSPopupClosed"
        data-continuous="true"
      />
      <FastSpringContext.Provider value={{ products, data, setProducts, setData }}>
        {children}
      </FastSpringContext.Provider>
    </>
  );
};