import ActionButtons from "@/app/component/shared/ActionButtons";
import { IFitLog } from "@/app/types/fitlog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getWorkout = async (id: string) => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await res.json();

  return data.find(
    (item: IFitLog) => item.id.toString() === id
  );
};

const DetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;

  const workout = await getWorkout(resolvedParams.id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Workout Not Found!
        </h1>

        <Link
          href="/library"
          className="text-lime-400 hover:underline"
        >
          ← Back to Library
        </Link>
      </div>
    );
  }

  const specs = {
    EQUIPMENT: workout.equipment || "Barbell, Bench",
    DIFFICULTY: workout.difficulty || "Intermediate",
    SETS: workout.sets || 4,
    REPS: workout.reps || "6-8",
    DURATION: `${workout.duration} min`,
    CALORIES: `${workout.caloriesBurned} kcal`,
    RATING: workout.rating || "4.8",
  };

  const instructions = workout.instructions || [
    "Lie on the bench with eyes under the bar and feet planted.",
    "Unrack with locked elbows and lower the bar to mid-chest.",
    "Press up in a slight arc until elbows lock without bouncing.",
    "Keep shoulder blades pinched and a natural arch in the back.",
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-16">

      <div className="container mx-auto px-5 max-w-7xl">

        {/* LEFT + RIGHT = 50% + 50% */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          
          <div className="w-full">

            {/* <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">

              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
              />

            </div> */}
            <div className="relative w-full min-h-137.5 lg:min-h-200 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
  <Image
    src={workout.image}
    alt={workout.name}
    fill
    priority
    className="object-cover"
  />
</div>

          </div>


         
          <div className="w-full">

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">

              {workout.muscleGroups?.map(
                (muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-lime-400 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                  >
                    {muscle}
                  </span>
                )
              )}

            </div>


            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-tight">
              {workout.name}
            </h1>


            <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
              {workout.description ||
                "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
            </p>


            {/* Workout Specs */}
            <div className="mt-7 border border-gray-800 rounded-xl overflow-hidden bg-[#111111]">

              {Object.entries(specs).map(
                ([label, value], idx, arr) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center px-5 py-4 ${
                      idx !== arr.length - 1
                        ? "border-b border-gray-800"
                        : ""
                    }`}
                  >

                    <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      {label}
                    </span>

                    <span className="text-sm font-medium text-white">
                      {value}
                    </span>

                  </div>
                )
              )}

            </div>


            {/* Instructions */}
            <div className="mt-8">

              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
                Instructions
              </h3>

              <ol className="space-y-3 text-sm text-gray-400 list-decimal list-inside marker:text-lime-400">

                {instructions.map(
                  (step: string, i: number) => (
                    <li
                      key={i}
                      className="pl-1 leading-relaxed"
                    >
                      {step}
                    </li>
                  )
                )}

              </ol>

            </div>


            {/* Action Buttons */}
            <div className="mt-8">
              <ActionButtons workout={workout} />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DetailPage;