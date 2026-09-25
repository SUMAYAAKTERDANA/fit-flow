"use client";

import { useState } from "react";

type SortOption = "duration" | "calories" | "rating";

const SortDropdown = ({
  onSortChange,
}: {
  onSortChange: (option: SortOption) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>("duration");

  const options: { value: SortOption; label: string }[] = [
    { value: "duration", label: "Duration" },
    { value: "calories", label: "Calories" },
    { value: "rating", label: "Rating" },
  ];

  const handleSelect = (value: SortOption) => {
    setSelected(value);
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
      >
        <span className="text-gray-500">Sort By:</span>
        <span className="font-semibold capitalize">{selected}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#111] border border-gray-800 rounded-lg overflow-hidden z-20 shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-4 py-2.5 text-sm transition ${
                selected === opt.value
                  ? "bg-lime-400 text-black font-semibold"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;