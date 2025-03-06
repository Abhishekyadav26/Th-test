import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";

export const contractAddress = "0xC7B62B60e2782b2035bcfC04e07920ACE2017e4F";


export const contract = getContract({
    client: client,
    chain: defineChain(59141),
    address: contractAddress
});

