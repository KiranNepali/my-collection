"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuLink = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="top-0 left-0 z-50 flex justify-center items-center border-b border-zinc-100 w-full h-[3.5rem]">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* logo  */}
        <Link href="/" className="font-black uppercase text-[1.3vw]">
          K
        </Link>
        {/* ham  */}
        <div
          onClick={handleMenuLink}
          className="relative "
        >
          <Icon
            icon="solar:hamburger-menu-bold"
            className="w-7 h-7 cursor-pointer hover:scale-95 duration-300 text-zinc-700"
          />
          <MenuLink isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

const MenuLink = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 right-0 mt-[2.5rem] w-[15vw] h-[40vh] bg-white border rounded-md border-zinc-200 z-10"
        >
          {/* Add your menu items here */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
