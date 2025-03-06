"use client";

import { contract } from "@/app/contract";
import { ConnectButton, useActiveAccount, useSendTransaction } from "thirdweb/react";
import { Button } from "../ui/button";
import { prepareContractCall, sendTransaction } from "thirdweb";

export default function Herosection() {
  const { mutate: sendTransaction } = useSendTransaction();

  const Account = useActiveAccount();
  let voterAddress = Account?.address;

  function endvoting() {
    const transaction = prepareContractCall({
      contract,
      method: "function endVoting()",
      params: [],
    });
    sendTransaction(transaction);
  }

   function startvoting() {
    const transaction = prepareContractCall({
        contract,
        method: "function startVoting()",
        params: [],
      });
      sendTransaction(transaction);
    }

   function registerVoter() {
    if (!voterAddress) return;
    const transaction = prepareContractCall({
        contract,
        method:
          "function registerVoter(address voterAddress)",
        params: [voterAddress],
      });
      sendTransaction(transaction);
    }

  

  return (
    <>
    <div className="flex justify-center items-center h-screen ">
    <Button onClick={startvoting}>startvoting</Button>
    </div>
      <div className="flex justify-center items-center h-screen ">
        <Button onClick={endvoting}>endvoting</Button>
      </div>
      
      <div className="flex justify-center items-center h-screen ">
        <Button onClick={registerVoter}>registerVoter</Button>
      </div>
    </>
  );
}
