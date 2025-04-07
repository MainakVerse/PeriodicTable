"use client";
import React, { useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { AiFillGithub } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { PiMoonStarsBold } from "react-icons/pi";
import { LiaAtomSolid } from "react-icons/lia";
import { TbLayoutList } from "react-icons/tb";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      className={`w-full flex justify-between items-center pt-3 pb-2 px-5 text-xl ${
        theme === "dark" ? "text-text_primary" : "text-text_secondary"
      } bg-opacity-60 backdrop-blur-require`}
    >
      {/* Wrapped Icon with Animated Pointer */}
      <div className="relative inline-block">
        {/* Tooltip with wiggle animation */}
        <div className="absolute -top-2 left-3/4 -translate-x-1/2 animate-wiggle z-10">
          <div className="bg-white text-black text-sm px-3 py-1 rounded shadow-lg border border-gray-300">
            Home
          </div>
          
        </div>

        <Link className="text-2xl" href="/">
          <LiaAtomSolid />
        </Link>
      </div>

      <div className="flex justify-end items-center">
        <Link href="/property">
          <TbLayoutList className="mr-5" />
        </Link>
        <Link
          href="https://github.com/MainakVerse/PeriodicTable"
          target="_blank"
          className="mr-5"
        >
          <AiFillGithub className="text-2xl" />
        </Link>
        {theme === "dark" ? (
          <button
            onClick={() => {
              localStorage.setItem("theme", "light");
              setTheme("light");
            }}
          >
            <FiSun className="cursor-pointer" />
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("theme", "dark");
              setTheme("dark");
            }}
          >
            <PiMoonStarsBold className="cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
