"use client"

import type { AccountCharge } from "@/lib/types";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Ellipsis } from "lucide-react";

export function TransactionsCard({ charges }: { charges: AccountCharge[]}) {
  const handleCopy = async (valueToCopy: string) => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      toast("Copied to clipboard!")
    } catch (err) {
      console.error("Something went wrong copying to clipboard!", err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Payment Transactions</CardTitle>
        <CardDescription>Manage your payments and retrieve receipts.</CardDescription>
        <CardAction>
          <Button
            variant="secondary"
            size="sm"
          >
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>Date</TableHead>
                <TableHead>Order Reference</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {charges.slice(0, 5).map((charge) => (
              <TableRow key={charge.orderReference}>
                <TableCell>{new Date(charge.timestamp).toLocaleDateString("en-GB")}</TableCell>
                <TableCell className="text-xs font-medium">{charge.orderReference}</TableCell>
                <TableCell>
                  <span className="text-xs font-medium">{charge.currency}</span>
                  &nbsp;
                  <span className="font-bold">{charge.total}</span>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    className="font-medium"
                    variant={charge.status === "successful" ? "secondary" : "destructive"}
                  >
                    {charge.status === "successful" ? "Paid" : "Failed"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger><Ellipsis className="text-muted-foreground w-4 h-4" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Invoice</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleCopy(charge.orderReference)}>
                          Copy Order Reference
                      </DropdownMenuItem>
                      <DropdownMenuItem>Get Help</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-3">
        <span className="text-sm uppercase">{`Displaying 1 to 5 of ${charges.length}`}</span>
        <div className="flex gap-2">
          <Button disabled variant="outline">Prev</Button>
          <Button disabled variant="outline">Next</Button>
        </div>
      </CardFooter>
    </Card>
  );
}