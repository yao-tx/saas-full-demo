"use client"

import type { AccountContact } from "@/types/fs-callback";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AccountInformationCard({ contact }: { contact: AccountContact}) {
  const [firstName, setFirstName] = useState(contact.first);
  const [lastName, setLastName] = useState(contact.last);
  const [email, setEmail] = useState(contact.email);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Account Information</CardTitle>
        <CardDescription>Manage and update your personal particulars.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}