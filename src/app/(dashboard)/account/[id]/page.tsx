import type { Account } from "@/lib/types";
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

  const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

  console.log(userData);

  const test = await fetch(`${process.env.FASTSPRING_API_URL}/subscriptions/${userData.subscriptions[0]}`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());

  console.log(test);

  const zzz = await fetch(`${process.env.FASTSPRING_API_URL}/accounts/${id}/authenticate`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());

  console.log(zzz?.accounts?.[0].url);

  return (
    <div className="m-4 md:grids-col-2 grid **:data-[slot=card]:shadow-none md:gap-4 lg:grid-cols-10 xl:grid-cols-11">
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <AccountInformationCard contact={userData.contact} />
            <EmbeddedPaymentMangementComponentCard
              accountManagementPortalLink={zzz?.accounts?.[0].url}
              subscriptionID={test.id}
            />
          </div>
          <div className="flex flex-col gap-4">
            <UserProfileCard userData={userData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <TransactionsCard charges={userData.charges} />
      </div>
    </div>
  );
}