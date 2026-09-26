"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "../PlanContext";


const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentList = activeTab === "plan" ? plan : saved;

 
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((acc, w) => acc + (w.duration || 0), 0);
  const totalCalories = plan.reduce((acc, w) => acc + (w.caloriesBurned || 0), 0);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <div className="container mx-auto px-5 max-w-6xl">
        
      
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">My Plan</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Exercises</p>
            <p className="text-3xl font-bold text-lime-400 mt-1">{totalExercises}</p>
          </div>
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Minutes</p>
            <p className="text-3xl font-bold mt-1">{totalMinutes}</p>
          </div>
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Calories</p>
            <p className="text-3xl font-bold mt-1">{totalCalories}</p>
          </div>
        </div>

       
        <div className="mt-10 flex gap-2 bg-[#111] p-1 rounded-lg w-fit border border-gray-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
              activeTab === "plan"
                ? "bg-lime-400 text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
          {"Today's Plan "}({plan.length})
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-lime-400 text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

      
        <div className="mt-8 space-y-4">
          {currentList.length === 0 ? (
            <div className="bg-[#111] border border-gray-800 rounded-xl p-12 text-center">
              <h3 className="text-2xl font-bold uppercase mb-2">Nothing here yet</h3>
              <p className="text-gray-500 text-sm mb-6">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-lime-300 transition inline-block"
              >
                Go to workouts
              </Link>
            </div>
          ) : 
          currentList.map((workout) => (  (
              <div
                key={workout.id}
                className="bg-[#111] border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4"
              >
            
                <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-bold uppercase">{workout.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{workout.equipment}</p>

                  <div className="flex gap-4 mt-3 text-xs text-gray-400">
                    <span>⏱️ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                  </div>
                </div>

               
                <div className="flex gap-2 shrink-0">
                  <Link
                    href={`/library/${workout.id}`}
                    className="border border-gray-700 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="border border-red-900 text-red-400 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-red-950 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default MyPlanPage;