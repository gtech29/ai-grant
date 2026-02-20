"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold">
          <Image src="/Picture1.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2">
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Student Flow */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2">
                <Link href="/student-flow">Student Flow</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Faculty Flow */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2">
                <Link href="/faculty-flow">Faculty Flow</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
