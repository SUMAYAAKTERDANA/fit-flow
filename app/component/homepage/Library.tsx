import { IFitLog } from "@/app/types/fitlog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="container mx-auto px-5 py-16 bg-black text-black ">

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white ">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {workouts.map((workout: IFitLog ) => (
          <Link
            key={workout.id}
            href={`/library/${workout.id}`}
            className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">

              {/* Category */}
              <div className="flex flex-wrap gap-2 mb-3">
                {workout.muscleGroups.map(
                  (muscle: string) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold"
                    >
                      {muscle.toUpperCase()}
                    </span>
                  )
                )}
              </div>

              {/* Workout Name */}
              <h3 className="text-lg font-bold uppercase">
                {workout.name}
              </h3>

              {/* Equipment */}
              <p className="mt-2 text-sm text-gray-500">
                {workout.equipment}
              </p>

              {/* Stats */}
              <div className="mt-5 flex items-center justify-between text-sm text-gray-600">

                <span>
                  ⏱️ {workout.duration} min
                </span>

                <span>
                  🔥 {workout.caloriesBurned} kcal
                </span>

                <span>
                  ⭐ {workout.rating}
                </span>

              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Library;