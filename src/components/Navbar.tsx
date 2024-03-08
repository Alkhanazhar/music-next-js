"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl md:mx-auto border shadow-[#ffffff13] shadow-lg border-[#ffffff05] rounded-full bg-opacity-55 z-[10000] backdrop-blur-lg capitalize text-sm md:text-xl mx-12",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="all courses">
          <div className="flex flex-col space-y-6 text-sm font-bold">
            <HoveredLink href="/courses">all-courses</HoveredLink>

            <HoveredLink href="/">Music theory</HoveredLink>

            <HoveredLink href="/">Basic Scaling Practice</HoveredLink>

            <HoveredLink href="/">Keyboard and guitar courses</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
