"use client"

import { createContext, useContext } from "react";

import type { Account } from "@/lib/types";

export const AccountDataContext = createContext<Account | null>(null);

export const useAccountData = () => {
  const ctx = useContext(AccountDataContext);

  if (ctx === null) {
    throw new Error("useAccountData must be inside AccountDataContext.Provider!");
  }

  return ctx;
}