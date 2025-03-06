"use client";
import Herosection from "@/components/user-componets/herosection";
import User_navbar from "@/components/user-componets/navbar";
import { useActiveAccount } from "thirdweb/react";

export default function Component() {

  const activeAccount = useActiveAccount();
  return (
    <>
    <User_navbar />
    {activeAccount ? <Herosection /> : "no account connected"}
    
    </>
  );
}

