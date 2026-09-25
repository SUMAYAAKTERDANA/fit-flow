"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SortDropdown from "../shared/SortDropdown";
import { IFitLog } from "@/app/types/fitlog";

type SortOption = "duration" | "calories" | "rating";

const Library = () => {
  const [workouts, setWorkouts] = useState<IFitLog[]>([]);
const [sortBy, setSortBy] = useState<SortOption>("duration");
const [loading, setLoading] = useState(true);
 
  //  fetch
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
      const data = await res.json();
      setWorkouts(data);
      setLoading(false);
    };
    fetchWorkouts();
  }, []);
   const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // Sort logic
  // useEffect(() => {
  //   if (!workouts.length) return;

  //   const sorted = [...workouts].sort((a, b) => {
  //     if (sortBy === "duration") return a.duration - b.duration;
  //     if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
  //     if (sortBy === "rating") return b.rating - a.rating;
  //     return 0;
  //   });
    
  // }, [workouts, sortBy]);

  return (
    <section className="container mx-auto px-5 py-16 bg-black text-white">
      
      {/* Heading + Sort Dropdown */}
      <div className="mb-10 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">THE LIBRARY</h2>
          <p className="mt-2 text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SortDropdown onSortChange={setSortBy} />
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-gray-500">Loading workouts…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedWorkouts.map((workout: IFitLog) => (
            <Link
              key={workout.id}
              href={`/library/${workout.id}`}
              className="group rounded-2xl overflow-hidden border border-gray-800 bg-[#111] hover:shadow-xl transition duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {workout.muscleGroups.map((muscle: string) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-lime-400 text-black px-3 py-1 text-xs font-bold"
                    >
                      {muscle.toUpperCase()}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold uppercase">{workout.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{workout.equipment}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                  <span>⏱️ {workout.duration} min</span>
                  <span>🔥 {workout.caloriesBurned} kcal</span>
                  <span>⭐ {workout.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Library;