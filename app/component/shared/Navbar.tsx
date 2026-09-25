"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090a0d]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src={logo} 
            alt="FITLOG Logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto object-contain" 
          />
          <h1 className="text-xl font-extrabold tracking-wide text-white">
            FITLOG
          </h1>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden items-center gap-2 md:flex">

          <a
            href="#workouts"
            className="rounded-full bg-[#1a2909] px-5 py-2.5 text-sm font-semibold text-[#b8ff00]"
          >
            Workouts
          </a>

          <a
            href="#plan"
            className="px-5 py-2.5 text-sm text-gray-400 transition hover:text-white"
          >
            My Plan
          </a>

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-6 md:flex">

          <button className="text-sm text-gray-400 hover:text-white">
            Plan
            <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#b8ff00] text-xs font-bold text-black">
              0
            </span>
          </button>

          <button className="text-sm text-gray-400 hover:text-white">
            Saved
            <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-300">
              0
            </span>
          </button>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0d0f12] md:hidden">

          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">

            <div className="flex flex-col gap-2">

              {/* Workouts */}
              <a
                href="#workouts"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[#1a2909] px-4 py-3 text-sm font-semibold text-[#b8ff00]"
              >
                Workouts
              </a>

              {/* My Plan */}
              <a
                href="#plan"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white"
              >
                My Plan
              </a>

              <div className="my-2 border-t border-white/10" />

              {/* Plan */}
              <button className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-gray-400 hover:bg-white/5 hover:text-white">
                <span>Plan</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b8ff00] text-xs font-bold text-black">
                  0
                  
                </span>
              </button>

              {/* Saved */}
              <button className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm text-gray-400 hover:bg-white/5 hover:text-white">
                <span>Saved</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs">
                  0
                </span>
              </button>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;