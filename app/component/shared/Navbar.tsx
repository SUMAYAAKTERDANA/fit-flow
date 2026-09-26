"use client";

import { useState } from "react";
import { usePlan } from "@/app/PlanContext";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const { plan, saved } = usePlan();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">

      <div className="container mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />

          <span className="font-bold tracking-wider">
            FITLOG
          </span>
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="transition hover:text-white"
          >
            My Plan
          </Link>

        </div>


        {/* Right: Counters */}
        <div className="hidden md:flex items-center gap-4 text-xs">

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-gray-500">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
              {plan.length}
            </span>
          </Link>


          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-gray-500">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-bold text-black">
              {saved.length}
            </span>
          </Link>

        </div>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black px-5 py-5">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              My Plan
            </Link>


            {/* Mobile Counters */}
            <div className="flex items-center gap-5 border-t border-gray-800 pt-4">

              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="text-gray-500">
                  Plan
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                  {plan.length}
                </span>
              </Link>


              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="text-gray-500">
                  Saved
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                  {saved.length}
                </span>
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;