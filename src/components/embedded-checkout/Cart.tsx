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
import { useFastSpring } from "@/context/FastSpringContext";


import Link from "next/link";

export const Cart = () => {
  const { callbackData } = useFastSpring();

  return (
    <>
      <Button
        className="!pl-0"
        variant="ghostLink"
        asChild
      >
        <Link href="/pricing"><ArrowLeft /> Go Back</Link>
      </Button>
      <h1 className="text-lg mt-4">Cart Information</h1>
      <div className="flex flex-col">
      </div>
    </>
  );
}