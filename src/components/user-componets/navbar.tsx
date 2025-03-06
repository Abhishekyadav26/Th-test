"use client";

import { Book, Sunset, Trees, Zap } from "lucide-react";
import { Navbar1 } from "../blocks/shadcnblocks-com-navbar1";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "@/app/client";

const demoData = {
    logo: {
      url: "https://www.shadcnblocks.com",
      src: "https://www.shadcnblocks.com/images/block/block-1.svg",
      alt: "blocks for shadcn/ui",
      title: "Shadcnblocks.com",
    },
    menu: [
      {
        title: "Home",
        url: "https://www.shadcnblocks.com",
      },
      {
        title: "Products",
        url: "#",
        items: [
          {
            title: "Blog",
            description: "The latest industry news, updates, and info",
            icon: <Book className="size-5 shrink-0" />,
            url: "/blog",
          },
          {
            title: "Company",
            description: "Our mission is to innovate and empower the world",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/company",
          },
          {
            title: "Careers",
            description: "Browse job listing and discover our workspace",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/careers",
          },
          {
            title: "Support",
            description:
              "Get in touch with our support team or visit our community forums",
            icon: <Zap className="size-5 shrink-0" />,
            url: "/support",
          },
        ],
      },
      {
        title: "Resources",
        url: "#",
        items: [
          {
            title: "Help Center",
            description: "Get all the answers you need right here",
            icon: <Zap className="size-5 shrink-0" />,
            url: "/help",
          },
          {
            title: "Contact Us",
            description: "We are here to help you with any questions you have",
            icon: <Sunset className="size-5 shrink-0" />,
            url: "/contact",
          },
          {
            title: "Status",
            description: "Check the current status of our services and APIs",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/status",
          },
          {
            title: "Terms of Service",
            description: "Our terms and conditions for using our services",
            icon: <Book className="size-5 shrink-0" />,
            url: "/terms",
          },
        ],
      },
      {
        title: "Pricing",
        url: "/pricing",
      },
      {
        title: "Blog",
        url: "/blog",
      },
    ],
    mobileExtraLinks: [
      { name: "Press", url: "/press" },
      { name: "Contact", url: "/contact" },
      { name: "Imprint", url: "/imprint" },
      { name: "Sitemap", url: "/sitemap" },
    ],
  };

export default function User_navbar() {
    return (
        <div className="flex flex-row justify-between">
      <Navbar1 {...demoData}/>
      <div className="mt-6 mr-6 h-3 ">
      <ConnectButton client={client}
        connectButton={
          {
            label: "Connect Wallet"
          }
        }
        
        theme={lightTheme()}
      />
      </div>
    </div>
    )
}