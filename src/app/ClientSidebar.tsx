"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "../components/sidebar";
import {
  IconArrowLeft,
  IconSettings,
  IconUserBolt,
  IconFriends,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ClientSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "/dm",
      icon: (
        <IconFriends className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Unreal Engine",
      href: "/server",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Node",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-red-500 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex h-full overflow-hidden bg-gray-100 dark:bg-black">
      <div className={`flex-shrink-0 ${open ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <Link key={idx} href={link.href} passHref>
                    <SidebarLink link={link} />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Trident_For_U",
                  href: "#",
                  icon: (
                    <Image src="https://assets.aceternity.com/manu.png" className="h-7 w-7 flex-shrink-0 rounded-full" width={50} height={50} alt="Avatar"/>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
      <main className=" overflow-hidden flex-grow h-full max-h-full">
        <div className="p-0 overflow-hidden rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 max-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Node
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};