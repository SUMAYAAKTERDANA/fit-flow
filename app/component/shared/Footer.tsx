import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] py-6 mt-auto">
      <div className="container mx-auto px-5 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Logo */}
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
          <span className="font-bold tracking-wider text-sm text-white">FITLOG</span>
        </Link>

        {/* Right: Copyright */}
        <p className="text-xs text-gray-600 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;