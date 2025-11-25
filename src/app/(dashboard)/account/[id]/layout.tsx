import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AccountSidebar } from "@/components/dashboard/AccountSidebar";
import { Header } from "@/components/dashboard/Header";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Dashboard | Acme Corp",
  description: "Manage your account and subscriptions through the user dashboard.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
          className="bg-sidebar"
        >
          <AccountSidebar />
          <div className="p-3 w-full relative">
            <SidebarInset  className="bg-background h-full rounded-xl shadow-sm">
              <Header />
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
