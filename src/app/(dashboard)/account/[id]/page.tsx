import type { Account } from "@/types/fs-callback";
import { notFound } from "next/navigation";
import { AccountInformationCard } from "@/components/dashboard/examples/AccountInformationCard";
import { TransactionsCard } from "@/components/dashboard/examples/TransactionsCard";
import { UserProfileCard } from "@/components/dashboard/examples/UserProfileCard";
import { EmbeddedPaymentMangementComponentCard } from "@/components/dashboard/examples/EmbeddedPaymentManagementComponentCard";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function AccountPage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const credentials = btoa(`${process.env.FASTSPRING_API_USERNAME}:${process.env.FASTSPRING_API_PASSWORD}`);

  const userData: Account = await fetch(`${process.env.FASTSPRING_API_URL}/accounts/${id}`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());

  if (userData.result !== "success") {
    notFound();
  }

  const subscriptionData = await fetch(`${process.env.FASTSPRING_API_URL}/subscriptions/${userData.subscriptions[0]}`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());

  const authenticatedAccountData = await fetch(`${process.env.FASTSPRING_API_URL}/accounts/${id}/authenticate`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());

  return (
    <div className="m-4 md:grid-col-2 grid **:data-[slot=card]:shadow-none gap-4 lg:grid-cols-10 xl:grid-cols-11">
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4 min-w-0">
            <AccountInformationCard contact={userData.contact} />
            <EmbeddedPaymentMangementComponentCard
              accountManagementPortalLink={authenticatedAccountData?.accounts?.[0].url}
              subscriptionID={subscriptionData.id}
            />
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            <UserProfileCard userData={userData} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-full flex flex-col gap-4 lg:col-span-6 xl:col-span-5 min-w-0">
        <TransactionsCard charges={userData.charges} />
      </div>
    </div>
  );
}