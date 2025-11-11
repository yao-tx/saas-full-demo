"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";


import Link from "next/link";

export const Cart = () => {
  return (
    <>
      <Button
        variant="ghostLink"
        asChild
      >
        <Link href="/pricing"><ArrowLeft /> Go Back</Link>
      </Button>
    </>
  );
}