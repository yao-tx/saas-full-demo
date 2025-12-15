import type { Account } from "@/types/fs-callback";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function UserProfileCard({ userData }: { userData: Account}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
        <CardDescription>Manage your user profile.</CardDescription>
        <CardAction>
          <Badge className="uppercase py-1 px-3 tracking-wider">
            {userData.subscribed ? "Active" : "Inactive"}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-1 flex-col gap-2">
          <p><span className="font-bold">Full Name: </span>{`${userData.contact.first} ${userData.contact.last}`}</p>
          <p><span className="font-bold">Email: </span>{userData.contact.email}</p>
          <p><span className="font-bold">Country: </span>{userData.country}</p>
        </div>
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline">Update Profile</Button>
      </CardFooter>
    </Card>
  );
}