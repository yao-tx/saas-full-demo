"use client"

import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function EmbeddedPaymentMangementComponentCard({
  accountManagementPortalLink,
  subscriptionID,
}: {
  accountManagementPortalLink: string;
  subscriptionID: string;
}) {
  function triggerEPM() {
    window?.fastspring?.epml?.init(accountManagementPortalLink);
    window?.fastspring?.epml?.paymentManagementComponent(subscriptionID, 'en');
  }

  return (
    <>
      <Script
        id="fsc-epml"
        src="https://epml.onfastspring.com/epml/epml.min.js"
        data-payment-component-id="payment-demo"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Saved Payment Methods</CardTitle>
          <CardDescription>View and update your saved payment methods.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Button onClick={() => triggerEPM()}>Trigger</Button>
        </CardContent>
      </Card>
    </>
  );
}