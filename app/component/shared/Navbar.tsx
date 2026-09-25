"use client";

import { usePlan } from "@/app/PlanContext";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const { plan, saved } = usePlan();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="font-bold tracking-wider">FITLOG</span>
          </div>
        </Link>

        {/* Center Links */}
        <div className="hidden gap-6 text-sm text-gray-400 md:flex">
          <Link href="/" className="transition hover:text-white">
            Workouts
          </Link>

          <Link href="/my-plan" className="transition hover:text-white">
            My Plan
          </Link>
        </div>

        {/* Right: Counters */}
        <div className="flex items-center gap-4 text-xs">
          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-gray-500">Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-gray-500">Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-bold text-black">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;